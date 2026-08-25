export default function ProgramsPageHero() {
  const scrollToPlans = () => {
    const target = document.getElementById("meal-plans");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="programs-hero"> 
      <div className="container programs-hero__container">
        <span className="stories-hero__badge" style={{ marginBottom: "16px" }}>
          <span>💪</span> Tailored Muslimah Fitness <span>✨</span>
        </span>
        <h1 className="programs-hero__logo">Workout &amp; Meal Programs</h1>
        <p className="programs-hero__tagline">
          Sustainable, Sunnah-centered workout routines, nutrition protocols,
          and lifestyle coaching tailored for every stage of your life.
        </p>
        <button
          className="btn btn--primary programs-hero__cta"
          onClick={scrollToPlans}
        >
          Explore All Programs ↓
        </button>
      </div>
    </section>
  );
}
