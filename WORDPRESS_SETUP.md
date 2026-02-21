# WordPress Integration Setup Guide

This guide walks you through setting up the WordPress REST API integration for the Ikore website.

## Overview

The blogs page (and future content pages) now fetch data from WordPress via the REST API instead of using hardcoded data. The integration includes:

- ✅ **Type-safe API client** (`lib/wordpress/client.ts`)
- ✅ **Data transformation layer** (`lib/wordpress/queries.ts`)
- ✅ **Custom React hooks** (`hooks/useBlogs.ts`)
- ✅ **Loading & error states** (`components/BlogSkeleton.tsx`)
- ✅ **Automatic caching** (1 hour by default)
- ✅ **Fallback data** for production stability

## Step 1: Setup Your WordPress Installation

### A. If you DON'T have WordPress yet:

**Option 1A: Managed WordPress Hosting**
- Go to [WordPress.com](https://wordpress.com), [Bluehost](https://bluehost.com), or [SiteGround](https://siteground.com)
- Create a new WordPress site
- Note the domain (e.g., `https://ikore-cms.com`)

**Option 1B: Self-Hosted WordPress**
- Install WordPress on your server (use [Locals](https://localwp.com), Docker, or server CLI)
- Install WordPress locally for development

### B. If you ALREADY have WordPress:

Great! Just make sure the REST API is enabled (enabled by default in WordPress 4.7+).

---

## Step 2: Install Required WordPress Plugins

To make content management easier, install these plugins:

### Essential:
1. **WordPress REST API Custom Post Types**
   - Allows creating custom post types like "Projects", "Innovations", "Services", "Team"
   - Plugin: [CPT UI](https://wordpress.org/plugins/custom-post-type-ui/)

2. **ACF (Advanced Custom Fields)** - Optional but recommended
   - Extends content fields with custom metadata
   - Plugin: [Advanced Custom Fields PRO](https://www.advancedcustomfields.com/)

### Installing Plugins:
1. Log into WordPress admin panel: `https://your-domain.com/wp-admin`
2. Go to Plugins → Add New
3. Search for "CPT UI"
4. Install & Activate

---

## Step 3: Create Custom Post Types in WordPress

### Create "Projects" Post Type:

1. In WordPress admin, go to **CPT UI** → **Post Types** → **Add New**
2. Fill in:
   - **Post Type Name:** `projects`
   - **Plural Label:** `Projects`
   - **Singular Label:** `Project`
3. Under **Supports**, check:
   - ☑ Title
   - ☑ Editor (for description)
   - ☑ Thumbnail (for featured image)
   - ☑ Categories
4. Click **Add Post Type**

### Repeat for:
- `innovations` (custom post type for innovations)
- `services` (custom post type for services)
- `team` (custom post type for team members)

### Default Posts:
- `posts` (already exists - used for blogs)

---

## Step 4: Configure Next.js Environment Variables

1. Create a `.env.local` file in your project root:

```bash
# Copy from .env.example and fill in your WordPress URL
cp .env.example .env.local
```

2. Edit `.env.local` and add your WordPress API URL:

```bash
# WordPress REST API endpoint
# Format: https://your-domain.com/wp-json/wp/v2
NEXT_PUBLIC_WP_API_URL=https://ikore-cms.com/wp-json/wp/v2

# For local development:
# NEXT_PUBLIC_WP_API_URL=http://localhost:8000/wp-json/wp/v2
```

3. **Do NOT commit `.env.local` to Git** - it's added to `.gitignore`

---

## Step 5: Add Content to WordPress

### Adding a Blog Post:

1. Go to **Posts** → **Add New**
2. Fill in:
   - **Title:** Your blog title
   - **Content:** Full blog content (HTML is converted automatically)
   - **Featured Image:** Add a post image
   - **Categories:** Add a category (e.g., "Agency", "News")
3. Click **Publish**

### Adding a Project:

1. Go to **Projects** → **Add New** (custom post type)
2. Fill in:
   - **Title:** Project name
   - **Excerpt:** Short description (shows on card)
   - **Content:** Full project details
   - **Featured Image:** Project image
   - **Categories:** Project category (e.g., "Value Chain")
   - **Location:** Use [ACF](https://www.advancedcustomfields.com/) if added
3. Click **Publish**

### Format Guidelines:

- **Excerpts** show on cards - keep them concise (100-150 chars)
- **Featured Images** should be 600x400px minimum
- **Categories** organize content for filtering
- **Content** can include HTML, which is automatically stripped for excerpts

---

## Step 6: Test the Integration

### Development:
```bash
npm run dev
```

Visit `http://localhost:3000/blogs` and you should see:
1. Loading spinners while fetching
2. Blog posts from WordPress
3. Navigation and pagination

### Debug Tips:

**Check API is working:**
```bash
curl "https://your-domain.com/wp-json/wp/v2/posts?_embed=1"
```

**Check cache stats** (add to browser console):
```javascript
import { wpClient } from '@/lib/wordpress/client';
console.log(wpClient.getCacheStats());
```

---

## Step 7: Configure CORS (if needed)

If you get CORS errors, add this to WordPress `functions.php`:

```php
add_filter('rest_pre_option_blog_public', '__return_true');

// Only if you need CORS
add_action('rest_api_init', function () {
    remove_filter('rest_pre_dispatch', 'rest_handle_options_request', 10);
}, 15);
```

Or install the [Enable CORS](https://wordpress.org/plugins/enable-cors/) plugin.

---

## File Structure

```
lib/wordpress/
├── types.ts           # TypeScript interfaces
├── client.ts          # API client with caching
├── queries.ts         # Data transformation functions
└── utils.ts           # Helper utilities

hooks/
├── useBlogs.ts        # Hook for blogs
└── (useProjects, useServices, useTeam coming soon)

components/
└── BlogSkeleton.tsx   # Loading/error states
```

---

## Fallback Strategy

If the WordPress API is down or misconfigured:

1. ✅ App still works with **fallback data** (hardcoded in each page)
2. ✅ Loading states show spinner while fetching
3. ✅ Error states show message + retry button
4. ✅ **No blank pages** or broken functionality

---

## Next Steps

### For Projects, Innovations, Services, Team:

Similar setup is ready in `lib/wordpress/queries.ts`:
- `getProjects()` - fetches from `/projects` endpoint
- `getInnovations()` - fetches from `/innovations` endpoint
- `getServices()` - fetches from `/services` endpoint
- `getTeamMembers()` - fetches from `/team` endpoint

Update their respective pages when ready:
1. Create custom post types in WordPress
2. Import the query functions
3. Create custom hooks (like `useBlogs`)
4. Update React components to use the hooks

---

## Troubleshooting

### "Failed to fetch from /posts"
- Check `NEXT_PUBLIC_WP_API_URL` is set correctly
- Verify WordPress REST API is enabled
- Check CORS is not blocking requests

### "400 Bad Request"
- Custom post type endpoint might be wrong
- Use `curl` to test: `curl "https://your-domain.com/wp-json/wp/v2/projects"`

### "Network Error"
- WordPress might be offline
- Check firewall/security settings
- Verify domain/SSL certificate

### Empty Category/Author
- Featured image not set when creating post
- Author not assigned to post
- Category not selected

---

## Production Checklist

- [ ] WordPress installed on production domain
- [ ] `.env.local` added with production WordPress URL
- [ ] HTTPS enabled on WordPress domain
- [ ] REST API enabled in WordPress
- [ ] Sample content added (at least 3 blog posts)
- [ ] Featured images for all posts
- [ ] Cache TTL checked (1 hour default is good)
- [ ] Error handling tested
- [ ] Fallback data verified

---

## Questions or Issues?

Check:
1. WordPress debug logs: `/wp-content/debug.log`
2. Browser console for API errors
3. Network tab in DevTools to see API calls
4. WordPress REST API docs: https://developer.wordpress.org/rest-api/

