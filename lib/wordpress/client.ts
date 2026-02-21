import { WordPressPost, WordPressError, PaginationMeta } from './types';

/**
 * Custom error class for WordPress API errors
 */
export class WordPressAPIError extends Error {
  constructor(
    message: string,
    public endpoint: string,
    public statusCode?: number,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'WordPressAPIError';
  }
}

/**
 * WordPress API Response with pagination metadata
 */
export interface WordPressResponse<T> {
  data: T[];
  pagination?: PaginationMeta;
}

/**
 * WordPress REST API Client
 * Handles all communication with WordPress, including caching and error handling
 */
class WordPressClient {
  private baseUrl: string;
  private readonly cache = new Map<string, { data: any; timestamp: number }>();
  private readonly defaultCacheTTL = 3600000; // 1 hour in milliseconds

  constructor() {
    const wpUrl = process.env.NEXT_PUBLIC_WP_API_URL;
    if (!wpUrl) {
      console.warn(
        'NEXT_PUBLIC_WP_API_URL is not set. WordPress integration will not work.'
      );
    }
    this.baseUrl = wpUrl || '';
  }

  /**
   * Main fetch method with caching and error handling
   */
  async fetch<T>(
    endpoint: string,
    options: {
      includeEmbedded?: boolean;
      perPage?: number;
      page?: number;
      slug?: string;
      categories?: number[];
      orderBy?: 'date' | 'title';
      order?: 'asc' | 'desc';
      search?: string;
      post?: number;
      exclude?: number[];
      before?: string;
      after?: string;
      status?: string;
      cacheTTL?: number;
      skipCache?: boolean;
    } = {}
  ): Promise<T[]> {
    if (!this.baseUrl) {
      throw new WordPressAPIError(
        'WordPress API URL not configured',
        endpoint
      );
    }

    const cacheKey = this.getCacheKey(endpoint, options);

    // Check cache first (unless skipped)
    if (!options.skipCache) {
      const cached = this.cache.get(cacheKey);
      if (cached && this.isCacheValid(cached.timestamp, options.cacheTTL)) {
        return cached.data as T[];
      }
    }

    try {
      const url = new URL(`${this.baseUrl}${endpoint}`);

      // Build query parameters
      this.buildQueryParams(url, options);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Next.js ISR - revalidate every hour by default
        next: { revalidate: options.cacheTTL ? options.cacheTTL / 1000 : 3600 },
      });

      if (!response.ok) {
        throw new WordPressAPIError(
          `WordPress API returned ${response.status}`,
          endpoint,
          response.status
        );
      }

      const data = await response.json();

      // Store in cache
      this.cache.set(cacheKey, {
        data: Array.isArray(data) ? data : [data],
        timestamp: Date.now(),
      });

      return Array.isArray(data) ? data : [data];
    } catch (error) {
      console.error(`[WordPress API] Error fetching ${endpoint}:`, error);

      if (error instanceof WordPressAPIError) {
        throw error;
      }

      throw new WordPressAPIError(
        `Failed to fetch from ${endpoint}`,
        endpoint,
        undefined,
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Fetch with pagination metadata included
   * Returns both data and pagination information
   */
  async fetchWithPagination<T>(
    endpoint: string,
    options: {
      includeEmbedded?: boolean;
      perPage?: number;
      page?: number;
      slug?: string;
      categories?: number[];
      orderBy?: 'date' | 'title';
      order?: 'asc' | 'desc';
      search?: string;
      post?: number;
      exclude?: number[];
      before?: string;
      after?: string;
      status?: string;
      cacheTTL?: number;
      skipCache?: boolean;
    } = {}
  ): Promise<WordPressResponse<T>> {
    if (!this.baseUrl) {
      throw new WordPressAPIError(
        'WordPress API URL not configured',
        endpoint
      );
    }

    const cacheKey = this.getCacheKey(endpoint, options);

    // Check cache first (unless skipped)
    if (!options.skipCache) {
      const cached = this.cache.get(cacheKey);
      if (cached && this.isCacheValid(cached.timestamp, options.cacheTTL)) {
        return cached.data as WordPressResponse<T>;
      }
    }

    try {
      const url = new URL(`${this.baseUrl}${endpoint}`);

      // Build query parameters
      this.buildQueryParams(url, options);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Next.js ISR - revalidate every hour by default
        next: { revalidate: options.cacheTTL ? options.cacheTTL / 1000 : 3600 },
      });

      if (!response.ok) {
        throw new WordPressAPIError(
          `WordPress API returned ${response.status}`,
          endpoint,
          response.status
        );
      }

      const data = await response.json();

      // Extract pagination info from response headers
      const pagination: PaginationMeta = {
        total: parseInt(response.headers.get('X-WP-Total') || '0', 10),
        pages: parseInt(response.headers.get('X-WP-TotalPages') || '1', 10),
        page: options.page || 1,
        perPage: options.perPage || 10,
      };

      const result: WordPressResponse<T> = {
        data: Array.isArray(data) ? data : [data],
        pagination,
      };

      // Store in cache
      this.cache.set(cacheKey, {
        data: result,
        timestamp: Date.now(),
      });

      return result;
    } catch (error) {
      console.error(`[WordPress API] Error fetching ${endpoint}:`, error);

      if (error instanceof WordPressAPIError) {
        throw error;
      }

      throw new WordPressAPIError(
        `Failed to fetch from ${endpoint}`,
        endpoint,
        undefined,
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Fetch a single post/item by ID
   */
  async fetchById<T>(endpoint: string, id: number): Promise<T> {
    const data = await this.fetch<T>(`${endpoint}/${id}`, {
      includeEmbedded: true,
    });
    return data[0];
  }

  /**
   * Build query parameters for WordPress API
   */
  private buildQueryParams(
    url: URL,
    options: {
      includeEmbedded?: boolean;
      perPage?: number;
      page?: number;
      slug?: string;
      categories?: number[];
      orderBy?: string;
      order?: string;
      search?: string;
      post?: number;
      exclude?: number[];
      before?: string;
      after?: string;
      status?: string;
    }
  ): void {
    if (options.includeEmbedded) {
      url.searchParams.append('_embed', '1');
    }

    if (options.perPage) {
      url.searchParams.append('per_page', options.perPage.toString());
    }

    if (options.page) {
      url.searchParams.append('page', options.page.toString());
    }

    if (options.slug) {
      url.searchParams.append('slug', options.slug);
    }

    if (options.categories && options.categories.length > 0) {
      url.searchParams.append('categories', options.categories.join(','));
    }

    if (options.orderBy) {
      url.searchParams.append('orderby', options.orderBy);
    }

    if (options.order) {
      url.searchParams.append('order', options.order);
    }

    if (options.search) {
      url.searchParams.append('search', options.search);
    }

    if (options.post) {
      url.searchParams.append('post', options.post.toString());
    }

    if (options.exclude && options.exclude.length > 0) {
      url.searchParams.append('exclude', options.exclude.join(','));
    }

    if (options.before) {
      url.searchParams.append('before', options.before);
    }

    if (options.after) {
      url.searchParams.append('after', options.after);
    }

    if (options.status) {
      url.searchParams.append('status', options.status);
    }
  }

  /**
   * Generate cache key from endpoint and options
   */
  private getCacheKey(
    endpoint: string,
    options: Record<string, any>
  ): string {
    const optionsStr = JSON.stringify(
      Object.keys(options)
        .sort()
        .reduce((acc, key) => {
          if (options[key] === undefined || options[key] === null) return acc;
          acc[key] = options[key];
          return acc;
        }, {} as Record<string, any>)
    );
    return `${endpoint}:${optionsStr}`;
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(timestamp: number, cacheTTL?: number): boolean {
    const ttl = cacheTTL ?? this.defaultCacheTTL;
    return Date.now() - timestamp < ttl;
  }

  /**
   * Clear cache (useful for manual invalidation)
   */
  clearCache(endpoint?: string): void {
    if (endpoint) {
      Array.from(this.cache.keys())
        .filter((key) => key.startsWith(endpoint))
        .forEach((key) => this.cache.delete(key));
    } else {
      this.cache.clear();
    }
  }

  /**
   * Get cache stats (for debugging)
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys()),
    };
  }
}

// Export singleton instance
export const wpClient = new WordPressClient();
