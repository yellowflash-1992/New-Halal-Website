"use client";

import Link from "next/link";
import { BlogPost } from "../../types/blog";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact";
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const theme = post.gradientTheme || "mint";

  return (
    <article className={`blog-card blog-card--${theme} blog-card--${variant}`}>
      <div className="blog-card__header">
        <span className="blog-card__category">{post.category}</span>
        <span className="blog-card__read-time">{post.readTime}</span>
      </div>

      <div className="blog-card__body">
        <h3 className="blog-card__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
      </div>

      <div className="blog-card__footer">
        <div className="blog-card__meta">
          <span className="blog-card__author">{post.author.name}</span>
          <span className="blog-card__date">{post.date}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="blog-card__link"
          aria-label={`Read ${post.title}`}
        >
          <span>Read More</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
