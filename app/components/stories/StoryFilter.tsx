"use client";

import { STORY_CATEGORIES } from "../../data/storiesData";
import { StoryCategory } from "../../types/stories";

interface StoryFilterProps {
  selectedCategory: StoryCategory;
  onSelectCategory: (category: StoryCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function StoryFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: StoryFilterProps) {
  return (
    <div className="stories-filter-section">
      <div className="stories-search-box">
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
          placeholder="Search stories by sister name, goal, location or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search stories"
        />
        {searchQuery && (
          <button
            type="button"
            className="clear-btn"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div
        className="stories-categories"
        role="tablist"
        aria-label="Filter stories by category"
      >
        {STORY_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`story-category-pill${isActive ? " is-active" : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
