/**
 * Utility functions for data transformation
 */

/**
 * Strip HTML tags from a string
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/gi, (match) => {
      const entities: Record<string, string> = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
      };
      return entities[match] || match;
    });
}

/**
 * Decode HTML entities
 */
export function htmlDecode(html: string): string {
  if (!html) return '';
  const textarea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  if (textarea) {
    textarea.innerHTML = html;
    return textarea.value;
  }
  // Fallback for SSR
  return stripHtml(html);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string, format: 'long' | 'short' = 'long'): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }

    if (format === 'short') {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Get featured image URL from WordPress media
 */
export function getImageUrl(media?: { source_url?: string; guid?: { rendered?: string } }): string | undefined {
  if (!media) return undefined;
  return media.source_url || media.guid?.rendered;
}

/**
 * Get author name from WordPress author data
 */
export function getAuthorName(author?: { name?: string }): string {
  return author?.name || 'Unknown Author';
}

/**
 * Get category name from WordPress term data
 */
export function getCategoryName(categories?: { name?: string }[]): string {
  return categories?.[0]?.name || 'Uncategorized';
}

/**
 * Extract slug from WordPress URL or slug string
 * Handles both:
 * - Full URL: "https://example.com/post-slug-here/"
 * - Slug: "post-slug-here"
 */
export function extractSlug(slugOrUrl: string): string {
  if (!slugOrUrl) return '';

  // If it's a full URL, extract the slug
  if (slugOrUrl.startsWith('http')) {
    try {
      const url = new URL(slugOrUrl);
      // Remove trailing slash and split by /
      const path = url.pathname.replace(/\/$/, '');
      const parts = path.split('/');
      // Return last non-empty part
      return parts[parts.length - 1] || '';
    } catch {
      return '';
    }
  }

  // If it's already a slug, just return it
  return slugOrUrl.replace(/\/$/, '');
}

