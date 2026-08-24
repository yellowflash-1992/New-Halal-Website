"use client";

import Link from "next/link";
import StoryCard from "../stories/StoryCard";
import { SUCCESS_STORIES } from "../../data/storiesData";

export default function StoriesPreview() {
  // Show the top 2 featured stories on the home page
  const featuredStories = SUCCESS_STORIES.slice(0, 2);

  return (
    <section
      className="stories-preview-section container"
      id="stories"
      aria-label="Sister Success Stories"
    >
      <div className="stories-preview-header">
        <span className="stories-hero__badge">
          <span>🌸</span> Real Results • Real Sisters <span>✨</span>
        </span>
        <h2 className="stories-preview-title">
          Inspiring Sister{" "}
          <span className="stories-hero__title-gradient">Transformations</span>
        </h2>
        <p className="stories-preview-subtitle">
          Discover how sisters are reclaiming energy, balancing Sunnah
          nutrition, and reaching their fitness goals at home.
        </p>
      </div>

      <div className="stories-grid">
        {featuredStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      <div className="stories-preview-cta">
        <Link href="/stories" className="btn btn--primary stories-preview-btn">
          View All Sister Stories ({SUCCESS_STORIES.length + 4}+) →
        </Link>
      </div>
    </section>
  );
}
