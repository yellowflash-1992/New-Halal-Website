"use client";

import { useState, useMemo } from "react";
import Navigation from "../components/dashboard/Navigation";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import BlogHero from "../components/blog/BlogHero";
import BlogCard from "../components/blog/BlogCard";
import FeaturedBlogCard from "../components/blog/FeaturedBlogCard";
import CommunityFooter from "../components/programs/CommunityFooter";
import MobileFootbar from "../components/programs/MobileFootbar";
import { ALL_BLOG_POSTS, BlogCategory } from "../data/blogData";
import { useDarkMode } from "../helpers/useDarkMode";

export default function BlogPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter blog posts by category and search query
  const filteredPosts = useMemo(() => {
    return ALL_BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost =
    filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />
      <main className={darkMode ? "dark-mode blog-page" : "blog-page"}>
        <BlogHero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <section className="blog-content-section container">
          {/* Featured Post Card */}
          {featuredPost && !searchQuery && selectedCategory === "All" && (
            <FeaturedBlogCard post={featuredPost} />
          )}

          {/* Grid Section */}
          <div className="blog-grid-header">
            <h2 className="blog-grid-header__title">
              {selectedCategory === "All"
                ? "Latest Articles & Guides"
                : `${selectedCategory} Articles`}
            </h2>
            <span className="blog-grid-header__count">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No articles found</h3>
              <p>
                We couldn't find any articles matching "{searchQuery}". Try
                searching for another keyword or choose a different category.
              </p>
              <button
                className="btn btn--pill"
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {(searchQuery || selectedCategory !== "All"
                ? filteredPosts
                : gridPosts
              ).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>

        {/* Community Section */}
        <CommunityFooter />

        {/* Desktop Footer */}
        <div className="blog-desktop-footer">
          <Footer />
        </div>
      </main>

      {/* Mobile Footbar */}
      <MobileFootbar />
    </>
  );
}
