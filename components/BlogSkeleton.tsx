'use client';

import { motion } from 'framer-motion';

/**
 * Loading skeleton for individual blog cards
 */
export function BlogCardSkeleton() {
  return (
    <motion.div
      className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Image placeholder */}
      <div className="relative h-56 bg-gradient-to-r from-gray-100 to-gray-200" />

      {/* Content placeholder */}
      <div className="p-6 space-y-4">
        {/* Date/Author line */}
        <div className="h-3 bg-gray-200 rounded w-32" />

        {/* Category badge */}
        <div className="h-6 bg-gray-100 rounded-full w-24" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-2/3" />
        </div>

        {/* Read more link */}
        <div className="h-4 bg-gray-100 rounded w-24" />
      </div>
    </motion.div>
  );
}

/**
 * Grid of skeleton loaders
 */
export function BlogGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Error state component
 */
export function BlogsErrorState({
  error,
  onRetry,
}: {
  error: Error;
  onRetry: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto text-center py-12"
    >
      <div className="mb-4 text-red-500">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4v2m0 4v2M7.08 6.47A9 9 0 1019.02 19.5M9 9h.01M15 9h.01"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Unable to load blogs
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        {error.message || 'Something went wrong. Please try again.'}
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Try Again
      </button>
    </motion.div>
  );
}

/**
 * Empty state component
 */
export function BlogsEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto text-center py-12"
    >
      <div className="mb-4 text-gray-400">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No blogs found
      </h3>
      <p className="text-gray-600 text-sm">
        Check back soon for new articles and insights.
      </p>
    </motion.div>
  );
}
