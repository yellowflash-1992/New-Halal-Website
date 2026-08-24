export default function HalalFitKitchen() {
  const categories = [
    {
      icon: "🍚",
      title: "Rice Meals",
      desc: "Wholesome jollof, fried rice & grain bowls made lighter — full flavour, balanced portions.",
    },
    {
      icon: "🍲",
      title: "Swallow & Soup",
      desc: "Egusi, okra, pepper soup and more, paired with healthier swallow options you'll love.",
    },
    {
      icon: "🥗",
      title: "Light Meals",
      desc: "Quick salads, grilled proteins and simple plates for busy days when you want to eat clean.",
    },
    {
      icon: "🥤",
      title: "Smoothies / Drinks",
      desc: "Refreshing date smoothies, zobo without the sugar spike, and nourishing halal drinks.",
    },
  ];

  return (
    <section className="programs-section" id="halal-fit-kitchen">
      <div className="container">
        <div className="kitchen-intro">
          <span className="stories-hero__badge">
            <span>🍽️</span> Welcome to our kitchen <span>✨</span>
          </span>
          <h2 className="programs-section__title kitchen-title">
            Halal Fit Kitchen 🍽️
          </h2>
          <p className="kitchen-intro__text">
            Welcome to our kitchen, where nourishment meets intention.
          </p>
          <p className="kitchen-intro__text">
            Here, you&rsquo;ll find simple, balanced, and realistic meal ideas
            designed to help you stay energized and consistent in your wellness
            journey. From everyday Nigerian meals to light and refreshing
            options, everything here is created with both your health and your
            lifestyle in mind.
          </p>
          <p className="kitchen-intro__quote">
            &ldquo;Halal Fit Kitchen&rdquo; &mdash; because eating well is not
            just about food, it&rsquo;s about how you care for your body.
          </p>
        </div>

        <div className="kitchen-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className={`kitchen-card kitchen-card--${idx}`}>
              <span className="kitchen-card__icon">{cat.icon}</span>
              <h3 className="kitchen-card__title">{cat.title}</h3>
              <p className="kitchen-card__desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
