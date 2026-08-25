export default function ProgramsHero() {
  const scrollToKitchen = () => {
    const target = document.getElementById("halal-fit-kitchen");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="programs-hero">
      <div className="container programs-hero__container">
        <span className="stories-hero__badge" style={{ marginBottom: "16px" }}>
          <span>🍽️</span> Wholesome Sunnah &amp; Nigerian Nourishment <span>✨</span>
        </span>
        <h1 className="programs-hero__logo">Halal Fit Kitchen 🍽️</h1>
        <p className="programs-hero__tagline">
          Where nourishment meets intention — simple, balanced meal ideas and
          prophetic nutrition designed to energize your body and soul.
        </p>
        <button
          className="btn btn--primary programs-hero__cta"
          onClick={scrollToKitchen}
        >
          Explore Recipes &amp; Categories ↓
        </button>
      </div>
    </section>
  );
}