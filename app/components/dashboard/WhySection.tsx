import WhyCard from "./WhyCard";
import { getAssetPath } from "../../helpers/assetHelper";

export default function WhySection() {
  return (
    <section className="why container" id="about">
      <h2 className="why__title">Why Join Halal Fit-Sis?</h2>
      <p className="why__lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation.
      </p>

      <div className="why__grid">
        <WhyCard
          image={getAssetPath("/card-expert.png")}
          alt="Certified female trainer holding a tablet"
          title="Expert Guidance"
          text="Guidance from certified female trainers"
          variant="mint"
        />
        <WhyCard
          image={getAssetPath("/card-flexible.png")}
          alt="Woman doing a home workout with light weights"
          title="Flexible & Halal"
          text="Workouts tailored to your lifestyle"
          variant="lavender"
        />
        <WhyCard
          image={getAssetPath("/card-community.png")}
          alt="Three smiling Muslim women together"
          title="Inspiring Community"
          text="Join a motivating sisterhood"
          variant="peach"
        />
      </div>
    </section>
  );
}