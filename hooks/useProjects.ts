'use client';

import { useEffect, useState } from 'react';
import { Project, ProjectsResponse } from '@/lib/wordpress/types';
import { getProjects } from '@/lib/wordpress/queries';

interface UseProjectsOptions {
  page?: number;
  perPage?: number;
  skipCache?: boolean;
}

interface UseProjectsReturn {
  projects: Project[];
  pagination: {
    page: number;
    pages: number;
    total: number;
    perPage: number;
  };
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useProjects({
  page = 1,
  perPage = 6,
  skipCache = false,
}: UseProjectsOptions = {}): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState({
    page,
    pages: 1,
    total: 0,
    perPage,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      // Clear current data during fetch to ensure skeleton shows
      setProjects([]);
      
      const startTime = Date.now();
      const response: ProjectsResponse = await getProjects(page, perPage);
      
      // Ensure local cache hits don't skip the loading state entirely for better UX
      const elapsedTime = Date.now() - startTime;
      const minLoadingTime = 400; // ms
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      setProjects(response.projects);
      setPagination(response.pagination);
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Failed to fetch projects');
      setError(error);
      console.error('Projects fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [page, perPage, skipCache]);

  return {
    projects,
    pagination,
    loading,
    error,
    refetch: fetchProjects,
  };
}
