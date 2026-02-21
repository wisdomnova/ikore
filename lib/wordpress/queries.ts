/**
 * WordPress Content Queries
 * Fetches and transforms data from WordPress REST API
 */

import { wpClient, WordPressAPIError, WordPressResponse } from './client';
import {
  WordPressPost,
  BlogPost,
  BlogsResponse,
  Project,
  ProjectsResponse,
  Innovation,
  InnovationsResponse,
  Service,
  TeamMember,
  PaginationMeta,
  Tag,
  PreviousNextPost,
  BlogComment,
} from './types';
import {
  stripHtml,
  htmlDecode,
  formatDate,
  getImageUrl,
  getAuthorName,
  getCategoryName,
  extractSlug,
} from './utils';

/**
 * ============================================
 * BLOGS / POSTS QUERIES
 * ============================================
 */

/**
 * Fetch blog posts from WordPress with pagination
 * @param page - Page number for pagination
 * @param perPage - Number of posts per page
 * @returns Object with blogs array and pagination metadata
 */
export async function getBlogs(
  page: number = 1,
  perPage: number = 9,
  skipCache: boolean = false
): Promise<BlogsResponse> {
  try {
    const response = await wpClient.fetchWithPagination<WordPressPost>(
      '/posts',
      {
        includeEmbedded: true,
        page,
        perPage,
        orderBy: 'date',
        order: 'desc',
        skipCache,
      }
    );

    return {
      blogs: response.data.map((post) => transformBlogPost(post)),
      pagination: response.pagination || {
        page,
        pages: 1,
        total: 0,
        perPage,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw error;
  }
}

/**
 * Fetch a single blog post by ID
 * @param id - Post ID
 * @returns Transformed blog post with full content
 */
export async function getBlogById(id: number): Promise<BlogPost> {
  try {
    const post = await wpClient.fetch<WordPressPost>(`/posts/${id}`, {
      includeEmbedded: true,
    });

    const blogPost = transformBlogPost(post[0]);
    // Include full content for single post view
    blogPost.content = stripHtml(post[0].content.rendered);
    return blogPost;
  } catch (error) {
    console.error(`Failed to fetch blog with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Fetch a single blog post by slug
 * @param slug - Post slug (URL-friendly name or full URL)
 * @returns Transformed blog post with full content
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  try {
    // Ensure slug is extracted properly (handles both bare slug and full URL)
    const cleanSlug = extractSlug(slug);

    const posts = await wpClient.fetch<WordPressPost>('/posts', {
      includeEmbedded: true,
      slug: cleanSlug,
      perPage: 1,
    });

    if (posts.length === 0) {
      throw new Error(`Blog post with slug "${cleanSlug}" not found`);
    }

    const post = posts[0];
    const blogPost = transformBlogPost(post);
    
    // Include full HTML content for single post view (preserves formatting)
    blogPost.content = post.content.rendered;
    
    // Fetch additional data
    blogPost.tags = await getPostTags(post.id);
    blogPost.commentCount = post._links?.replies?.[0]?.count || 0;
    
    // Fetch adjacent posts for navigation
    const adjacentPosts = await getAdjacentPosts(post.id, post.date);
    blogPost.previousPost = adjacentPosts.previousPost;
    blogPost.nextPost = adjacentPosts.nextPost;
    
    // Fetch recent posts (excluding current post)
    blogPost.recentPosts = await getRecentPosts(5, post.id);
    
    return blogPost;
  } catch (error) {
    console.error(`Failed to fetch blog with slug "${slug}":`, error);
    throw error;
  }
}

/**
 * Search blogs by keyword
 * @param keyword - Search term
 * @returns Array of matching blog posts
 */
export async function searchBlogs(keyword: string): Promise<BlogPost[]> {
  try {
    const posts = await wpClient.fetch<WordPressPost>('/posts', {
      includeEmbedded: true,
      search: keyword,
      perPage: 20,
    });

    return posts.map((post) => transformBlogPost(post));
  } catch (error) {
    console.error(`Failed to search blogs for "${keyword}":`, error);
    throw error;
  }
}

/**
 * Transform WordPress post to app BlogPost
 */
function transformBlogPost(post: WordPressPost): BlogPost {
  return {
    id: post.id,
    title: htmlDecode(post.title.rendered),
    slug: extractSlug(post.slug),
    date: post.date,
    formattedDate: formatDate(post.date),
    author: getAuthorName(post._embedded?.author?.[0]),
    category: getCategoryName(post._embedded?.['wp:term']?.[0]),
    excerpt: stripHtml(post.excerpt.rendered),
    image: getImageUrl(post._embedded?.['wp:featuredmedia']?.[0]),
    link: post.link,
  };
}

/**
 * Fetch tags for a specific post
 * @param postId - Post ID
 * @returns Array of tags
 */
async function getPostTags(postId: number): Promise<Tag[]> {
  try {
    const tags = await wpClient.fetch<any>('/tags', {
      post: postId,
      perPage: 100,
    });

    return tags.map((tag: any) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      link: tag.link,
    }));
  } catch (error) {
    console.error(`Failed to fetch tags for post ${postId}:`, error);
    return [];
  }
}

/**
 * Fetch comments for a specific post
 * @param postId - Post ID
 * @returns Array of comments
 */
async function getPostComments(postId: number): Promise<BlogComment[]> {
  try {
    const comments = await wpClient.fetch<any>('/comments', {
      post: postId,
      perPage: 50,
      status: 'approve', // Only approved comments
    });

    return comments.map((comment: any) => ({
      id: comment.id,
      author: comment.author_name,
      date: comment.date,
      formattedDate: formatDate(comment.date),
      content: comment.content.rendered,
      approved: comment.status === 'approve',
    }));
  } catch (error) {
    console.error(`Failed to fetch comments for post ${postId}:`, error);
    return [];
  }
}

/**
 * Fetch previous and next posts for navigation
 * @param postId - Current post ID
 * @param postDate - Current post date
 * @returns Object with previous and next posts
 */
async function getAdjacentPosts(
  postId: number,
  postDate: string
): Promise<{
  previousPost?: PreviousNextPost;
  nextPost?: PreviousNextPost;
}> {
  try {
    const postDateObj = new Date(postDate);

    // Fetch posts before current date (previous/older posts)
    const prevPosts = await wpClient.fetch<WordPressPost>('/posts', {
      before: postDateObj.toISOString(),
      orderBy: 'date',
      order: 'desc',
      perPage: 1,
      exclude: [postId],
    });

    // Fetch posts after current date (next/newer posts)
    const nextPosts = await wpClient.fetch<WordPressPost>('/posts', {
      after: postDateObj.toISOString(),
      orderBy: 'date',
      order: 'asc',
      perPage: 1,
      exclude: [postId],
    });

    return {
      previousPost: prevPosts.length > 0 ? {
        id: prevPosts[0].id,
        title: htmlDecode(prevPosts[0].title.rendered),
        slug: extractSlug(prevPosts[0].slug),
        link: prevPosts[0].link,
      } : undefined,
      nextPost: nextPosts.length > 0 ? {
        id: nextPosts[0].id,
        title: htmlDecode(nextPosts[0].title.rendered),
        slug: extractSlug(nextPosts[0].slug),
        link: nextPosts[0].link,
      } : undefined,
    };
  } catch (error) {
    console.error(`Failed to fetch adjacent posts for post ${postId}:`, error);
    return {};
  }
}

/**
 * Fetch recent posts for sidebar/related content
 * @param limit - Number of recent posts to fetch
 * @param excludePostId - Post ID to exclude from results
 * @returns Array of recent blog posts
 */
async function getRecentPosts(
  limit: number = 5,
  excludePostId?: number
): Promise<BlogPost[]> {
  try {
    const posts = await wpClient.fetch<WordPressPost>('/posts', {
      includeEmbedded: true,
      perPage: limit,
      orderBy: 'date',
      order: 'desc',
      exclude: excludePostId ? [excludePostId] : undefined,
    });

    return posts.map((post) => transformBlogPost(post));
  } catch (error) {
    console.error('Failed to fetch recent posts:', error);
    return [];
  }
}

/**
 * ============================================
 * PROJECTS QUERIES
 * ============================================
 * Note: Projects are stored as 'portfolio' custom post type in WordPress
 * Endpoint: /portfolio
 */

export async function getProjects(
  page: number = 1,
  perPage: number = 6
): Promise<ProjectsResponse> {
  try {
    const response = await wpClient.fetchWithPagination<WordPressPost>(
      '/portfolio',
      {
        includeEmbedded: true,
        page,
        perPage,
        orderBy: 'date',
        order: 'desc',
      }
    );

    return {
      projects: response.data.map((post) => transformProject(post)),
      pagination: response.pagination || {
        page,
        pages: 1,
        total: 0,
        perPage,
      },
    };
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
}

export async function getProjectById(id: number): Promise<Project> {
  try {
    const posts = await wpClient.fetch<WordPressPost>(`/portfolio/${id}`, {
      includeEmbedded: true,
    });
    return transformProject(posts[0]);
  } catch (error) {
    console.error(`Failed to fetch project with ID ${id}:`, error);
    throw error;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project & { tags?: Tag[]; relatedProjects?: Project[] }> {
  try {
    const cleanSlug = extractSlug(slug);

    const posts = await wpClient.fetch<WordPressPost>('/portfolio', {
      includeEmbedded: true,
      slug: cleanSlug,
      perPage: 1,
    });

    if (posts.length === 0) {
      throw new Error(`Project with slug "${cleanSlug}" not found`);
    }

    const post = posts[0];
    const project = transformProject(post);

    // Fetch tags and related projects
    const tags = await getPostTags(post.id);
    const relatedProjects = await getRelatedProjects(post.id, 3);

    return {
      ...project,
      tags,
      relatedProjects,
    };
  } catch (error) {
    console.error(`Failed to fetch project with slug "${slug}":`, error);
    throw error;
  }
}

function transformProject(post: WordPressPost): Project {
  return {
    id: post.id,
    name: htmlDecode(post.title.rendered),
    slug: extractSlug(post.slug),
    category: getCategoryName(post._embedded?.['wp:term']?.[0]),
    description: stripHtml(post.excerpt.rendered),
    fullDescription: stripHtml(post.content.rendered),
    image: getImageUrl(post._embedded?.['wp:featuredmedia']?.[0]),
    link: post.link,
  };
}

async function getRelatedProjects(
  projectId: number,
  limit: number = 3
): Promise<Project[]> {
  try {
    const projects = await wpClient.fetch<WordPressPost>('/portfolio', {
      includeEmbedded: true,
      perPage: limit,
      orderBy: 'date',
      order: 'desc',
      exclude: [projectId],
    });

    return projects.map((post) => transformProject(post));
  } catch (error) {
    console.error('Failed to fetch related projects:', error);
    return [];
  }
}

/**
 * ============================================
 * INNOVATIONS QUERIES
 * ============================================
 * Note: Configure the custom post type slug in WordPress
 * Typically: /innovations or /innovation-posts
 */

export async function getInnovations(
  page: number = 1,
  perPage: number = 6
): Promise<InnovationsResponse> {
  try {
    const response = await wpClient.fetchWithPagination<WordPressPost>(
      '/innovations',
      {
        includeEmbedded: true,
        page,
        perPage,
        orderBy: 'date',
        order: 'desc',
      }
    );

    return {
      innovations: response.data.map((post) => transformInnovation(post)),
      pagination: response.pagination || {
        page,
        pages: 1,
        total: 0,
        perPage,
      },
    };
  } catch (error) {
    console.error('Failed to fetch innovations:', error);
    if (error instanceof WordPressAPIError) {
      console.warn(
        'Innovations endpoint not configured. Configure custom post type in WordPress.'
      );
    }
    throw error;
  }
}

export async function getInnovationById(id: number): Promise<Innovation> {
  try {
    const post = await wpClient.fetch<WordPressPost>(`/innovations/${id}`, {
      includeEmbedded: true,
    });
    const innovation = transformInnovation(post[0]);
    innovation.fullDescription = stripHtml(post[0].content.rendered);
    return innovation;
  } catch (error) {
    console.error(`Failed to fetch innovation with ID ${id}:`, error);
    throw error;
  }
}

function transformInnovation(post: WordPressPost): Innovation {
  return {
    id: post.id,
    title: htmlDecode(post.title.rendered),
    category: getCategoryName(post._embedded?.['wp:term']?.[0]),
    description: stripHtml(post.excerpt.rendered),
    image: getImageUrl(post._embedded?.['wp:featuredmedia']?.[0]),
    link: post.link,
  };
}

/**
 * ============================================
 * SERVICES QUERIES
 * ============================================
 * Note: Configure the custom post type slug in WordPress
 * Typically: /services or /service-posts
 */

export async function getServices(): Promise<Service[]> {
  try {
    const posts = await wpClient.fetch<WordPressPost>('/services', {
      includeEmbedded: true,
      perPage: 100, // Services are usually fewer
    });

    return posts.map((post) => ({
      id: post.id,
      title: htmlDecode(post.title.rendered),
      description: stripHtml(post.excerpt.rendered),
      link: post.link,
    }));
  } catch (error) {
    console.error('Failed to fetch services:', error);
    if (error instanceof WordPressAPIError) {
      console.warn(
        'Services endpoint not configured. Configure custom post type in WordPress.'
      );
    }
    throw error;
  }
}

/**
 * ============================================
 * TEAM QUERIES
 * ============================================
 * Note: Configure the custom post type slug in WordPress
 * Typically: /team or /team-members
 */

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const posts = await wpClient.fetch<WordPressPost>('/team', {
      includeEmbedded: true,
      perPage: 100,
      orderBy: 'title',
      order: 'asc',
    });

    return posts.map((post) => ({
      id: post.id,
      name: htmlDecode(post.title.rendered),
      title: getCategoryName(post._embedded?.['wp:term']?.[0]), // Using category as job title
      description: stripHtml(post.excerpt.rendered),
      image: getImageUrl(post._embedded?.['wp:featuredmedia']?.[0]),
    }));
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    if (error instanceof WordPressAPIError) {
      console.warn(
        'Team endpoint not configured. Configure custom post type in WordPress.'
      );
    }
    throw error;
  }
}

export async function getTeamMemberById(id: number): Promise<TeamMember> {
  try {
    const post = await wpClient.fetch<WordPressPost>(`/team/${id}`, {
      includeEmbedded: true,
    });
    return {
      id: post[0].id,
      name: htmlDecode(post[0].title.rendered),
      title: getCategoryName(post[0]._embedded?.['wp:term']?.[0]),
      description: stripHtml(post[0].content.rendered),
      image: getImageUrl(post[0]._embedded?.['wp:featuredmedia']?.[0]),
    };
  } catch (error) {
    console.error(`Failed to fetch team member with ID ${id}:`, error);
    throw error;
  }
}
