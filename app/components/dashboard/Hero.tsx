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
          <button
            className="btn btn--primary"
            type="button"
            onClick={onCelebrate}
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
}