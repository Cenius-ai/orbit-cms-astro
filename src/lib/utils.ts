import { getCollection } from "astro:content";

export function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-");
}

export interface TaxonomyItem {
  name: string;
  slug: string;
  count: number;
}

/**
 * Build taxonomy (category/tag) data from all posts.
 */
export function buildTaxonomy(
  posts: { data: { categories?: string[]; tags?: string[] } }[],
  field: "categories" | "tags",
): TaxonomyItem[] {
  const map = new Map<string, number>();

  for (const post of posts) {
    const items = post.data[field] ?? [];
    for (const item of items) {
      const key = item.trim();
      if (!key) continue;
      map.set(key, (map.get(key) ?? 0) + 1);
    }
  }

  return Array.from(map.entries())
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get all published posts sorted by date descending.
 */
export async function getPublishedPosts() {
  const posts = await getCollection("posts");
  return posts
    .filter((p) => !p.data.date || p.data.date <= new Date())
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
