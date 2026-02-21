'use client';

import { useState, useEffect } from 'react';
import { getBlogs } from '@/lib/wordpress/queries';
import { BlogPost, PaginationMeta } from '@/lib/wordpress/types';

interface UseBlogsOptions {
  page?: number;
  perPage?: number;
  skipCache?: boolean;
}

interface UseBlogsResult {
  blogs: BlogPost[];
  loading: boolean;
  error: Error | null;
  pagination?: PaginationMeta;
  refetch: () => void;
}

/**
 * Custom hook for fetching blogs with loading and error states
 */
export function useBlogs(options: UseBlogsOptions = {}): UseBlogsResult {
  const { page = 1, perPage = 9, skipCache = false } = options;
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      // Clear current data during fetch to ensure skeleton shows
      setBlogs([]);
      
      const startTime = Date.now();
      const response = await getBlogs(page, perPage, skipCache);
      
      // Ensure local cache hits don't skip the loading state entirely for better UX
      const elapsedTime = Date.now() - startTime;
      const minLoadingTime = 400; // ms
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      setBlogs(response.blogs);
      setPagination(response.pagination);
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error('Failed to fetch blogs');
      setError(error);
      console.error('useBlogs error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, perPage, skipCache]);

  return {
    blogs,
    pagination,
    loading,
    error,
    refetch: fetchBlogs,
  };
}
