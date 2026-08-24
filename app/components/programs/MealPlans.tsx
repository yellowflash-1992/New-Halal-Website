export default function MealPlans() {
  const plans = [
    {
      title: "Ramadan Fasting & Energy Blueprint",
      badge: "✨ Most Popular",
      desc: "Comprehensive 30-day Suhoor & Iftar hydration protocols, meal plans, and low-impact workout timing to keep energy high for Taraweeh prayers.",
      highlights: [
        "Balanced Suhoor recipes for zero brain fog",
        "Anti-bloat Iftar recovery meals",
        "Daily hydration tracking schedule",
        "Pre-Iftar & post-Taraweeh exercise guides",
      ],
      ctaText: "Get Ramadan Plan",
      gradient: "peach",
    },
    {
      title: "Holistic Fat Loss & Metabolism Guide",
      badge: "🔥 Sustainable Lifestyle",
      desc: "Lose fat without restrictive diets using the prophetic 1/3 portion wisdom, high-protein halal meals, and 20-minute living room workouts.",
      highlights: [
        "Custom grocery list & Sunnah superfoods",
        "4-week progressive bodyweight routines",
        "Dessert swaps with raw honey & dates",
        "Weekly sisterhood accountability check-in",
      ],
      ctaText: "Start Fat Loss Journey",
      gradient: "mint",
    },
    {
      title: "Postpartum Strength & Core Recovery",
      badge: "🌸 Gentle Healing",
      desc: "Safely restore deep core strength, rebuild pelvic floor support, and regain physical stamina in the privacy of your home.",
      highlights: [
        "Diastasis-recti safe low-impact pilates",
        "Hormone-balancing lactation-safe meals",
        "Posture correction for nursing mothers",
        "15-minute gentle daily restorative flows",
      ],
      ctaText: "Begin Core Recovery",
      gradient: "lavender",
    },
  ];

  return (
    <section className="programs-section" id="meal-plans">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="stories-hero__badge">
            <span>📋</span> Tailored For Muslim Women <span>⭐</span>
          </span>
          <h2 className="programs-section__title" style={{ marginTop: "12px", marginBottom: "8px" }}>
            Curated Meal &amp; Fitness Plans
          </h2>
          <p className="programs-section__subtitle" style={{ marginTop: "0" }}>
            Choose the program crafted for your lifestyle, season, and wellness aspirations.
          </p>
        </div>

        <div className="programs-plans-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`programs-plan-box programs-plan-box--${plan.gradient}`}>
              <div className="programs-plan-badge">{plan.badge}</div>
              <h3 className="programs-plan-box__title">{plan.title}</h3>
              <p className="programs-plan-box__desc">{plan.desc}</p>

              <ul className="programs-plan-features">
                {plan.highlights.map((h, i) => (
                  <li key={i} className="programs-plan-feature-item">
                    <span className="feature-check">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary programs-plan-btn"
              >
                {plan.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}