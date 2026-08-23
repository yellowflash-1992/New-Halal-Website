// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
// Make sure you import the source data array or a getter function to extract all slugs
import {
  getBlogPostBySlug,
  getRelatedPosts,
  ALL_BLOG_POSTS,
} from "../../data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Tell Next.js exactly what pages to pre-render statically at build time
export async function generateStaticParams() {
  // Maps through your full blog array to feed all slugs to Next.js
  return ALL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Main Server Component wrapper
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Passes the pre-fetched data down directly to your client code
  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
