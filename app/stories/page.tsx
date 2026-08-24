"use client";

import { useState, useMemo } from "react";
import Navigation from "../components/dashboard/Navigation";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import CommunityFooter from "../components/programs/CommunityFooter";
import MobileFootbar from "../components/programs/MobileFootbar";
import StoriesHero from "../components/stories/StoriesHero";
import StoryFilter from "../components/stories/StoryFilter";
import StorySpotlight from "../components/stories/StorySpotlight";
import StoryCard from "../components/stories/StoryCard";
import StoryCTA from "../components/stories/StoryCTA";
import { ALL_SUCCESS_STORIES } from "../data/storiesData";
import { StoryCategory } from "../types/stories";
import { useDarkMode } from "../helpers/useDarkMode";

export default function StoriesPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [selectedCategory, setSelectedCategory] =
    useState<StoryCategory>("All");
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

  // Filter stories by category & search query
  const filteredStories = useMemo(() => {
    return ALL_SUCCESS_STORIES.filter((story) => {
      const matchesCategory =
        selectedCategory === "All" || story.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        story.name.toLowerCase().includes(query) ||
        story.location.toLowerCase().includes(query) ||
        story.headline.toLowerCase().includes(query) ||
        story.quote.toLowerCase().includes(query) ||
        story.keyWins.some((w) => w.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const spotlightStory =
    filteredStories.find((s) => s.featured) || filteredStories[0];
  const gridStories = filteredStories.filter(
    (s) => s.id !== spotlightStory?.id,
  );

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />
      <main className={darkMode ? "dark-mode stories-page" : "stories-page"}>
        <StoriesHero />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <StoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Featured Spotlight Card */}
          {spotlightStory && !searchQuery && selectedCategory === "All" && (
            <StorySpotlight story={spotlightStory} />
          )}

          {/* Stories Grid / Empty State */}
          {filteredStories.length === 0 ? (
            <div className="blog-empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No stories found</h3>
              <p>
                We couldn't find any sister transformations matching "
                {searchQuery}". Try another keyword or select a different
                category.
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
            <div className="stories-grid">
              {(searchQuery || selectedCategory !== "All"
                ? filteredStories
                : gridStories
              ).map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}

          <StoryCTA />
        </div>

        <CommunityFooter />
        <div className="blog-desktop-footer">
          <Footer />
        </div>
      </main>
      <MobileFootbar />
    </>
  );
}
