import { getAssetPath } from "../../helpers/assetHelper";

interface HeroProps {
  onCelebrate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Hero({ onCelebrate }: HeroProps) {
  return (
    <section className="hero">
      <img
        src={getAssetPath("/hero.png")}
        alt="A smiling Muslim woman in a hijab tying her running shoe"
        className="hero__photo"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <img
            src={getAssetPath("/logo.png")}
            alt=""
            className="hero__emblem"
            aria-hidden="true"
          />
          <p className="hero__brand">Halal Fit-Sis</p>
          <h1 className="hero__title">
            Empowering Muslim Women
            <br />
            Through Fitness
          </h1>
          <p className="hero__sub">
            Get fit, healthy, and strong in a supportive sisterhood.
          </p>
          <div className="hero__cta-group">
            <button
              className="btn btn--primary"
              type="button"
              onClick={onCelebrate}
            >
              Join the Community
            </button>
            <button
              type="button"
              className="hero__quick-search-btn"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-hfs-search"));
              }}
              aria-label="Search workouts, recipes, stories, and guides"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search workouts & recipes...</span>
              <kbd className="hero__quick-search-kbd">/</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
