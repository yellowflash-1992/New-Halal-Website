import WhyCard from "./WhyCard";
import { getAssetPath } from "../../helpers/assetHelper";

export default function WhySection() {
  return (
    <section className="why container" id="about">
      <h2 className="why__title">Why Join Halal Fit-Sis?</h2>
      <p className="why__lead">
        Halal Fit-Sis is more than just a wellness brand. It is a safe and
        supportive space for Muslim women who want to take care of their health
        while staying connected to their deen. Here, we focus on balance,
        discipline, and consistency. You do not need extreme diets or
        unrealistic routines. Instead, you learn how to build a healthy
        lifestyle that fits your daily life and helps you grow physically,
        mentally, and spiritually.
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