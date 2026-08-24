export default function FeaturedMeals() {
  const meals = [
    {
      title: "Suhoor Power Bowl",
      tag: "⚡ High Energy Fasting",
      time: "10 mins prep",
      desc: "Rolled oats, soaked chia seeds, Ajwa dates, Greek yogurt & raw organic honey for steady all-day stamina.",
      icon: "🥣",
      nutrients: "18g Protein • 12g Fiber • 380 kcal",
      gradient: "mint",
    },
    {
      title: "Grilled Herb Fish & Jollof Quinoa",
      tag: "🐟 Lean Protein & Omega-3",
      time: "25 mins",
      desc: "Fresh seasoned tilapia fillet with fragrant bell pepper jollof quinoa and steamed leafy greens.",
      icon: "🥗",
      nutrients: "36g Protein • Low GI Carbs • 440 kcal",
      gradient: "sky",
    },
    {
      title: "Prophetic Sunnah Talbina",
      tag: "🌸 Gut Health & Comfort",
      time: "15 mins",
      desc: "Traditional barley porridge simmered in almond milk, topped with crushed pistachios & raw wild honey.",
      icon: "🍯",
      nutrients: "Sunnah Superfood • Gentle Digestion",
      gradient: "lavender",
    },
    {
      title: "Moroccan Spiced Chickpea Stew",
      tag: "🌿 Plant-Powered Iron",
      time: "20 mins",
      desc: "Hearty chickpeas simmered with cumin, turmeric, fresh spinach, and rich extra virgin olive oil.",
      icon: "🍲",
      nutrients: "22g Plant Protein • Iron & Folate",
      gradient: "peach",
    },
  ];

  return (
    <section className="programs-section" id="featured-meals">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="stories-hero__badge">
            <span>🥗</span> Nourish Body &amp; Soul <span>✨</span>
          </span>
          <h2 className="programs-section__title" style={{ marginTop: "12px", marginBottom: "8px" }}>
            Featured Halal Meals
          </h2>
          <p className="programs-section__subtitle" style={{ marginTop: "0" }}>
            Wholesome, Sunnah-inspired recipes crafted for Muslim women seeking vibrant energy and lasting vitality.
          </p>
        </div>

        <div className="programs-meals-grid">
          {meals.map((meal, idx) => (
            <div key={idx} className={`programs-meal-card programs-meal-card--${meal.gradient}`}>
              <div className="programs-meal-card__top">
                <span className="programs-meal-icon">{meal.icon}</span>
                <span className="programs-meal-badge">{meal.tag}</span>
              </div>
              <h3 className="programs-meal-title">{meal.title}</h3>
              <p className="programs-meal-desc">{meal.desc}</p>
              <div className="programs-meal-footer">
                <span className="programs-meal-nutrients">{meal.nutrients}</span>
                <span className="programs-meal-time">⏱️ {meal.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
