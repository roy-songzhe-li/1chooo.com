import { getBlogPosts } from "@/lib/db/v1/post";
import { getPortfolioPosts } from "@/lib/db/v1/portfolio";

/**
 * This function returns an array of objects with the URL and last modified date
 * @see https://github.com/leerob/site/blob/1129b6d81937cef493edb060f87e6f2ac9f335ed/app/sitemap.ts
 * @returns [{ url: string, lastModified: string }]
 */
export default async function sitemap() {
  const posts = await getBlogPosts();
  const portfolios = await getPortfolioPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://herai.com.au/post/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  const portfolioPosts = portfolios.map((post) => ({
    url: `https://herai.com.au/portfolio/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  const routes = ["", "/post", "/portfolio", "/resume", "/gallery", "/contact"];
  const routeEntries = routes.map((route) => ({
    url: `https://herai.com.au${route}`,
    lastModified: new Date(),
  }));

  return [...routeEntries, ...blogPosts, ...portfolioPosts];
}
