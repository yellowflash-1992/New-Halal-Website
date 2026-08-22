"use client";

import Link from "next/link";
import { BlogPost } from "../../types/blog";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const theme = post.gradientTheme || "peach";

  return (
    <div className={`blog-featured blog-featured--${theme}`}>
      <div className="blog-featured__content">
        <div className="blog-featured__badge-row">
          <span className="blog-featured__badge">✨ Featured Article</span>
          <span className="blog-featured__category">{post.category}</span>
          <span className="blog-featured__time">{post.readTime}</span>
        </div>

        <h2 className="blog-featured__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="blog-featured__excerpt">{post.excerpt}</p>

        <div className="blog-featured__footer">
          <div className="blog-featured__author">
            <span className="author-name">{post.author.name}</span>
            <span className="author-role">{post.author.role}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="btn btn--primary blog-featured__btn"
          >
            Read Full Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
