export default function ProgramsHero() {
  const scrollToMealPlans = () => {
    const target = document.getElementById("meal-plans");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="programs-hero">
      <div className="container programs-hero__container">
        <h1 className="programs-hero__logo">HalalFitSis 🌙</h1>
        <p className="programs-hero__tagline">
          Helping Muslim women nourish their bodies and souls.
        </p>
        <button
          className="btn btn--primary programs-hero__cta"
          onClick={scrollToMealPlans}
        >
          View Meal Plans
        </button>
      </div>
    </section>
  );
}