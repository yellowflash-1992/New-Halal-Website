"use client";

import { useState } from "react";
import { SuccessStory } from "../../types/stories";

interface StoryCardProps {
  story: SuccessStory;
}

export default function StoryCard({ story }: StoryCardProps) {
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
    <article className={`story-card story-card--${story.gradientTheme}`}>
      <div>
        <div className="story-card__top">
          <span className="story-card__category">{story.category}</span>
          <span className="story-card__duration">⏱️ {story.duration}</span>
        </div>

        <h3 className="story-card__headline">{story.headline}</h3>
        <p className="story-card__quote">"{story.quote}"</p>

        <ul
          className="story-wins-list"
          aria-label="Key transformation milestones"
        >
          {story.keyWins.map((win, idx) => (
            <li key={idx} className="story-wins-item">
              <span className="story-win-check">✓</span>
              <span>{win}</span>
            </li>
          ))}
        </ul>

        <div className="story-habits-row">
          <div className="story-habit-tag">
            <span>🥗</span>
            <span>
              <strong>Favorite Meal:</strong> {story.favoriteMeal}
            </span>
          </div>
          <div className="story-habit-tag">
            <span>✨</span>
            <span>
              <strong>Winning Habit:</strong> {story.favoriteHabit}
            </span>
          </div>
        </div>
      </div>

      <div className="story-card__footer">
        <div className="story-sister-profile">
          <div className="story-sister-avatar" aria-hidden="true">
            🌸
          </div>
          <div className="story-sister-info">
            <h4 className="sister-name">{story.name}</h4>
            <p className="sister-meta">
              {story.location} • {story.role}
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`inspire-button${hasInspired ? " is-inspired" : ""}`}
          onClick={handleInspire}
          aria-label={`Inspire reaction. Currently ${inspires} sisters inspired.`}
        >
          <span>{hasInspired ? "❤️ Inspired" : "🤍 Inspire"}</span>
          <span>({inspires})</span>
        </button>
      </div>
    </article>
  );
}
