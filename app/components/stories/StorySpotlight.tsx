"use client";

import { useState } from "react";
import { SuccessStory } from "../../types/stories";

interface StorySpotlightProps {
  story: SuccessStory;
}

export default function StorySpotlight({ story }: StorySpotlightProps) {
  const [inspires, setInspires] = useState(story.initialInspires);
  const [hasInspired, setHasInspired] = useState(false);

  const handleInspire = () => {
    if (!hasInspired) {
      setInspires((prev) => prev + 1);
      setHasInspired(true);
    } else {
      setInspires((prev) => prev - 1);
      setHasInspired(false);
    }
  };

  return (
    <section className="story-spotlight">
      <div className="story-spotlight__header">
        <div className="story-spotlight__badge-group">
          <span className="spotlight-badge">⭐ Featured Transformation</span>
          <span className="spotlight-category">{story.category}</span>
          <span className="spotlight-duration">
            ⏱️ {story.duration} Journey
          </span>
        </div>
      </div>

      <h2 className="story-spotlight__headline">{story.headline}</h2>
      <blockquote className="story-spotlight__quote">
        "{story.quote}"
      </blockquote>

      {/* Metrics Row */}
      <div className="story-spotlight__metrics">
        {story.metrics.map((m, idx) => (
          <div key={idx} className="metric-chip">
            <span className="metric-chip__value">{m.value}</span>
            <span className="metric-chip__label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="story-spotlight__footer">
        <div className="story-sister-profile">
          <div className="story-sister-avatar" aria-hidden="true">
            👑
          </div>
          <div className="story-sister-info">
            <h3 className="sister-name">{story.name}</h3>
            <p className="sister-meta">
              {story.location} • {story.role}
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`inspire-button${hasInspired ? " is-inspired" : ""}`}
          onClick={handleInspire}
        >
          <span>{hasInspired ? "❤️ Inspired" : "🤍 Inspire Sister"}</span>
          <span>({inspires})</span>
        </button>
      </div>
    </section>
  );
}
