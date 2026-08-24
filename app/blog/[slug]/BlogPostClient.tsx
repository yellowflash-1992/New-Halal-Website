// app/blog/[slug]/BlogPostClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/dashboard/Navigation";
import DecorativeLeaves from "../../components/dashboard/DecorativeLeaves";
import Footer from "../../components/dashboard/Footer";
import BlogCard from "../../components/blog/BlogCard";
import CommunityFooter from "../../components/programs/CommunityFooter";
import MobileFootbar from "../../components/programs/MobileFootbar";
import { useDarkMode } from "../../helpers/useDarkMode";

// Define a strict TypeScript type for your post data structure
interface PostData {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string };
  content: string[];
  tags: string[];
}

interface BlogPostClientProps {
  post: PostData;
  relatedPosts: any[];
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const [darkMode, setDarkMode] = useDarkMode();

  function celebrate(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    const original = btn.textContent;
    btn.textContent = "Welcome, sister! \u2764";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1600);
  }

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />
      <main
        className={darkMode ? "dark-mode blog-post-page" : "blog-post-page"}
      >
        <article className="blog-article container">
          <div className="blog-article__back-nav">
            <Link href="/blog" className="blog-back-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              <span>Back to all articles</span>
            </Link>
          </div>

          <header className="blog-article__header">
            <div className="blog-article__meta-top">
              <span className="blog-card__category">{post.category}</span>
              <span className="blog-article__date">{post.date}</span>
              <span className="blog-article__time">{post.readTime}</span>
            </div>
            <h1 className="blog-article__title">{post.title}</h1>
            <p className="blog-article__lead">{post.excerpt}</p>
            <div className="blog-article__author-row">
              <div className="author-avatar-placeholder" />
              <div>
                <p className="author-name">{post.author.name}</p>
                <p className="author-role">{post.author.role}</p>
              </div>
            </div>
          </header>

          <div className="blog-article__body">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="blog-article__tags">
            <span className="tags-label">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag-badge">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-author-box">
            <div className="blog-author-box__avatar" />
            <div className="blog-author-box__details">
              <h4>Written by {post.author.name}</h4>
              <p>
                Passionate about guiding sisters toward sustainable wellness,
                Sunnah nutrition, and mindful fitness.
              </p>
              <a
                href="https://whatsapp.com/channel/0029Vb6fg6x0bIdnO0Je3T2Z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn programs-about-box__whatsapp"
              >
                Join Sisterhood Group
              </a>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="blog-related-section">
              <h3 className="blog-related-section__title">Related Articles</h3>
              <div className="blog-grid blog-grid--related">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          )}
        </article>

        <CommunityFooter />
        <div className="blog-desktop-footer">
          <Footer />
        </div>
      </main>
      <MobileFootbar />
    </>
  );
}
