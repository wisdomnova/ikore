# WordPress Integration - Developer Guide

## Quick Start

### Using the Blogs Hook

```tsx
'use client';

import { useBlogs } from '@/hooks/useBlogs';
import { BlogGridSkeleton, BlogsErrorState } from '@/components/BlogSkeleton';

export default function MyComponent() {
  const { blogs, loading, error, refetch } = useBlogs({
    page: 1,
    perPage: 9,
  });

  if (loading) return <BlogGridSkeleton />;
  if (error) return <BlogsErrorState error={error} onRetry={refetch} />;

  return blogs.map(blog => (
    <div key={blog.id}>
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <a href={blog.link}>Read More</a>
    </div>
  ));
}
```

---

## Creating a New Integration (e.g., Projects)

### Step 1: Create the Custom Hook

File: `hooks/useProjects.ts`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { getProjects } from '@/lib/wordpress/queries';
import { Project } from '@/lib/wordpress/types';

interface UseProjectsOptions {
  page?: number;
  perPage?: number;
}

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useProjects(options: UseProjectsOptions = {}): UseProjectsResult {
  const { page = 1, perPage = 6 } = options;
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects(page, perPage);
      setProjects(data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch');
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [page, perPage]);

  return { projects, loading, error, refetch: fetchProjects };
}
```

### Step 2: Update Your Page Component

```tsx
'use client';

import { useProjects } from '@/hooks/useProjects';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { projects, loading, error, refetch } = useProjects({
    page: currentPage,
    perPage: 6,
  });

  if (loading) return <ProjectGridSkeleton />;
  if (error) return <ProjectsErrorState error={error} onRetry={refetch} />;

  return (
    <div>
      {/* Render your projects */}
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

---

## API Reference

### Query Functions

#### `getBlogs(page?, perPage?)`
Fetch blog posts from WordPress

```ts
import { getBlogs } from '@/lib/wordpress/queries';

const blogs = await getBlogs(1, 9); // page 1, 9 per page
```

#### `getBlogById(id)`
Fetch single blog with full content

```ts
import { getBlogById } from '@/lib/wordpress/queries';

const blog = await getBlogById(42);
console.log(blog.content); // Full HTML content
```

#### `searchBlogs(keyword)`
Search blogs by keyword

```ts
import { searchBlogs } from '@/lib/wordpress/queries';

const results = await searchBlogs('nutrition');
```

#### `getProjects(page?, perPage?)`
Fetch projects (requires custom post type setup)

```ts
import { getProjects } from '@/lib/wordpress/queries';

const projects = await getProjects(1, 6);
```

#### `getInnovations(page?, perPage?)`
Fetch innovations (requires custom post type setup)

```ts
import { getInnovations } from '@/lib/wordpress/queries';

const innovations = await getInnovations(1, 6);
```

#### `getServices()`
Fetch services (requires custom post type setup)

```ts
import { getServices } from '@/lib/wordpress/queries';

const services = await getServices();
```

#### `getTeamMembers()`
Fetch team members (requires custom post type setup)

```ts
import { getTeamMembers } from '@/lib/wordpress/queries';

const team = await getTeamMembers();
```

---

### Utility Functions

#### `stripHtml(html)`
Remove HTML tags from string

```ts
import { stripHtml } from '@/lib/wordpress/utils';

const text = stripHtml('<p>Hello <strong>World</strong></p>');
// Output: "Hello World"
```

#### `htmlDecode(html)`
Decode HTML entities

```ts
import { htmlDecode } from '@/lib/wordpress/utils';

const text = htmlDecode('&quot;Hello&quot;');
// Output: '"Hello"'
```

#### `formatDate(dateString, format?)`
Format date to readable string

```ts
import { formatDate } from '@/lib/wordpress/utils';

const long = formatDate('2025-12-17');
// Output: "December 17, 2025"

const short = formatDate('2025-12-17', 'short');
// Output: "Dec 17, 2025"
```

#### `truncateText(text, length?)`
Truncate text with ellipsis

```ts
import { truncateText } from '@/lib/wordpress/utils';

const text = truncateText('Very long text...', 10);
// Output: "Very long..."
```

#### `getImageUrl(media?)`
Extract image URL from WordPress media object

```ts
import { getImageUrl } from '@/lib/wordpress/utils';

const url = getImageUrl(post._embedded?.['wp:featuredmedia']?.[0]);
// Output: "https://example.com/image.jpg"
```

---

## Caching Strategy

The API client includes automatic caching:

- **Default TTL:** 1 hour (3600 seconds)
- **Storage:** In-memory (resets on server restart)
- **ISR:** Next.js automatic revalidation every hour

### Custom Cache TTL:

```ts
const blogs = await wpClient.fetch('/posts', {
  perPage: 9,
  cacheTTL: 1800000, // 30 minutes
});
```

### Skip Cache:

```ts
const blogs = await getBlogs(1, 9, true); // skipCache=true
```

### Clear Cache:

```ts
import { wpClient } from '@/lib/wordpress/client';

wpClient.clearCache('/posts'); // Clear posts cache
wpClient.clearCache(); // Clear all caches
```

---

## Error Handling

### Try-Catch Pattern:

```ts
import { WordPressAPIError } from '@/lib/wordpress/client';

try {
  const blogs = await getBlogs();
} catch (error) {
  if (error instanceof WordPressAPIError) {
    console.error(`API Error: ${error.message}`);
    console.error(`Endpoint: ${error.endpoint}`);
    console.error(`Status: ${error.statusCode}`);
  }
}
```

### In React:

```tsx
const { blogs, error, refetch } = useBlogs();

if (error) {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={refetch}>Try Again</button>
    </div>
  );
}
```

---

## Data Types

### BlogPost
```tsx
interface BlogPost {
  id: number;
  title: string;
  date: string;                    // ISO date: "2025-12-17"
  formattedDate: string;           // "December 17, 2025"
  author: string;                  // "John Doe"
  category: string;                // "Agency"
  excerpt: string;                 // Without HTML tags
  content?: string;                // Full content (when fetching single post)
  image?: string;                  // Featured image URL
  link: string;                    // Direct link to post
}
```

### Project
```tsx
interface Project {
  id: number;
  name: string;
  category: string;
  description: string;             // Excerpt, no HTML
  location?: string;
  image?: string;
  link: string;
}
```

### Innovation
```tsx
interface Innovation {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;        // Full content
  image?: string;
  link: string;
}
```

---

## Component Patterns

### Loading State:

```tsx
import { BlogGridSkeleton } from '@/components/BlogSkeleton';

{loading && <BlogGridSkeleton count={9} />}
```

### Error State:

```tsx
import { BlogsErrorState } from '@/components/BlogSkeleton';

{error && <BlogsErrorState error={error} onRetry={refetch} />}
```

### Empty State:

```tsx
import { BlogsEmptyState } from '@/components/BlogSkeleton';

{!loading && !error && blogs.length === 0 && <BlogsEmptyState />}
```

---

## Best Practices

### 1. Use Custom Hooks
Always wrap data fetching in custom hooks for reusability and testability.

### 2. Show Loading States
Use skeleton loaders instead of spinners for better UX.

### 3. Provide Fallback Data
Keep fallback/static data for production stability.

### 4. Cache Strategically
Use longer TTLs for static content (services), shorter for dynamic (blogs).

### 5. Error Recovery
Always provide a "Retry" button for failed requests.

### 6. Type Safety
Leverage TypeScript interfaces for compile-time error checking.

### 7. Monitor Performance
Log errors and monitor API response times.

```ts
console.time('fetch-blogs');
const blogs = await getBlogs();
console.timeEnd('fetch-blogs');
```

---

## Environment Variables

Create `.env.local`:

```bash
# WordPress REST API endpoint (required)
NEXT_PUBLIC_WP_API_URL=https://your-wordpress.com/wp-json/wp/v2

# Optional: Debug logging
DEBUG_WP_API=true
```

---

## Testing

### Manual Testing:

```bash
# Test if WordPress API is accessible
curl "https://your-domain.com/wp-json/wp/v2/posts?_embed=1" | jq .

# Test projects endpoint
curl "https://your-domain.com/wp-json/wp/v2/projects?_embed=1" | jq .
```

### Unit Test Example:

```ts
import { getBlogs } from '@/lib/wordpress/queries';

describe('getBlogs', () => {
  it('should fetch blogs from WordPress', async () => {
    const blogs = await getBlogs(1, 9);
    expect(blogs).toHaveLength(9);
    expect(blogs[0]).toHaveProperty('title');
    expect(blogs[0]).toHaveProperty('author');
  });
});
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **API returns 404** | Check custom post type slug matches API endpoint |
| **CORS errors** | Install Enable CORS plugin on WordPress |
| **Empty categories** | Make sure categories are assigned to posts |
| **Missing images** | Set featured images in WordPress editor |
| **Slow loading** | Reduce `perPage` count or increase `cacheTTL` |

---

## Resources

- WordPress REST API: https://developer.wordpress.org/rest-api/
- Custom Post Types: https://developer.wordpress.org/plugins/post-types/
- Next.js Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching
- TypeScript Handbook: https://www.typescriptlang.org/docs/

