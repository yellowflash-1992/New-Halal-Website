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
        <h1 className="programs-hero__logo">Halal Fit Kitchen 🍽️</h1>
        <p className="programs-hero__tagline">
          Where nourishment meets intention — helping Muslim women nourish
          their bodies and souls.
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