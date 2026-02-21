/**
 * WordPress REST API Response Types
 * These match the raw API responses from WordPress
 */

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, any>;
  categories: number[];
  tags: number[];
  _links: Record<string, any>;
  _embedded?: {
    author?: WordPressAuthor[];
    'wp:featuredmedia'?: WordPressMedia[];
    'wp:term'?: WordPressTerm[][];
  };
}

export interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: Record<string, any>;
    image_meta: Record<string, any>;
  };
  post: number;
  source_url: string;
  _links: Record<string, any>;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
  _links: Record<string, any>;
}

export interface WordPressTerm {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  _links: Record<string, any>;
}

/**
 * Transformed Data Types
 * These are the cleaned, app-ready formats we use in components
 */

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  formattedDate: string;
  author: string;
  category: string;
  excerpt: string;
  content?: string;
  image?: string;
  link: string;
  tags?: Tag[];
  previousPost?: PreviousNextPost;
  nextPost?: PreviousNextPost;
  commentCount?: number;
  recentPosts?: BlogPost[];
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  link: string;
}

export interface PreviousNextPost {
  id: number;
  title: string;
  slug: string;
  link: string;
}

export interface BlogComment {
  id: number;
  author: string;
  date: string;
  formattedDate: string;
  content: string;
  approved: boolean;
}

export interface Project {
  id: number;
  name: string;
  slug?: string;
  category: string;
  description: string;
  fullDescription?: string;
  image?: string;
  link: string;
}

export interface Innovation {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image?: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image?: string;
}

/**
 * Query Response Types
 * These are returned from query functions and include pagination data
 */

export interface BlogsResponse {
  blogs: BlogPost[];
  pagination: PaginationMeta;
}

export interface ProjectsResponse {
  projects: Project[];
  pagination: PaginationMeta;
}

export interface InnovationsResponse {
  innovations: Innovation[];
  pagination: PaginationMeta;
}

/**
 * API Response Types
 */

export interface PaginationMeta {
  page: number;
  pages: number;
  total: number;
  perPage: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: PaginationMeta;
  };
  error?: string;
}

export interface WordPressError {
  code: string;
  message: string;
  data?: {
    status: number;
  };
}
