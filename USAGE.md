# Usage

## Browsing the Site

Once the development server is running (`npm run dev`), open your browser to the displayed URL (usually `http://localhost:4321`).

### Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage – latest posts, category/tag sidebar |
| `/about` | About the blog, its philosophy, and technology |
| `/categories` | All categories with post counts |
| `/categories/:slug` | Posts filtered by a specific category (e.g. `/categories/javascript`) |
| `/tags` | All tags with post counts |
| `/tags/:slug` | Posts filtered by a specific tag (e.g. `/tags/rust`) |
| `/posts/:slug` | Individual post (e.g. `/posts/why-typescript`) |

### Theme Toggle

Click the theme toggle button in the header to switch between light and dark mode. The preference respects your operating system setting by default.

## Writing Content

Blog posts are Markdown files located in `src/content/posts/`. Each file must include frontmatter metadata.

### Example Frontmatter

```markdown
---
title: "My New Post"
date: 2025-04-01
excerpt: "A short summary for preview cards."
author: "Author Name"
categories:
  - JavaScript
  - TypeScript
tags:
  - tutorial
  - web-development
image: "/my-post-cover.jpg"
draft: false
---

Your content here...
```

- `title` – post heading
- `date` – publication date (`YYYY-MM-DD`)
- `excerpt` – shown on cards and SEO
- `author` – displayed author name
- `categories` – array of category names
- `tags` – array of tag strings
- `image` – optional cover image path
- `draft` – set to `true` to hide from production builds

After adding a new `.md` file, restart the dev server to see the changes.

## Customisation

- **Site metadata** (title, description, etc.) is in `src/layouts/BaseLayout.astro` and individual pages.
- **Styling** is done with Tailwind utility classes and CSS custom properties defined in `src/styles/global.css`.
- **Layout components** are in `src/components/` – you can edit `Header.astro`, `Footer.astro`, etc.