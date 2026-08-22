"use client";

import { BLOG_CATEGORIES, BlogCategory } from "../../data/blogData";

interface BlogHeroProps {
  selectedCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function BlogHero({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogHeroProps) {
  return (
    <section className="blog-hero">
      <div className="container blog-hero__container">
        <span className="blog-hero__badge">Sisterhood Wellness Hub 🌸</span>
        <h1 className="blog-hero__title">
          Halal Fitness &amp; Nutrition Journal
        </h1>
        <p className="blog-hero__subtitle">
          Empowering guides, Sunnah nutrition, modest workouts, and Ramadan
          wellness tips tailored for Muslim women.
        </p>

        {/* Search Box */}
        <div className="blog-hero__search-wrapper">
          <svg
            className="search-icon"
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search articles on workouts, Sunnah diet, Ramadan fasting..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="blog-hero__search-input"
            aria-label="Search blog articles"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div
          className="blog-hero__categories"
          role="tablist"
          aria-label="Filter blog by category"
        >
          {BLOG_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`blog-category-pill${isActive ? " is-active" : ""}`}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
