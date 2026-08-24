import { COMMUNITY_STATS } from "../../data/storiesData";

export default function StoriesHero() {
  return (
    <section className="stories-hero">
      <div className="container stories-hero__container">
        <span className="stories-hero__badge">
          <span>🌸</span> Real Muslim Sisters • Real Transformations{" "}
          <span>✨</span>
        </span>
        <h1 className="stories-hero__title">
          Inspiring Journeys of{" "}
          <span className="stories-hero__title-gradient">
            Faith, Fitness &amp; Strength
          </span>
        </h1>
        <p className="stories-hero__subtitle">
          Read how sisters across the globe are balancing Sunnah nutrition,
          modest workouts, and busy lives to achieve holistic physical and
          spiritual vitality.
        </p>

        {/* Stats Grid */}
        <div className="stories-stats-grid">
          {COMMUNITY_STATS.map((stat, idx) => (
            <div key={idx} className="stories-stat-card">
              <span className="stories-stat-card__icon">{stat.icon}</span>
              <div className="stories-stat-card__value">{stat.value}</div>
              <div className="stories-stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
