export default function WellnessTips() {
  const tips = [
    {
      icon: "💧",
      title: "Staying Full & Hydrated",
      category: "Fasting Mastery",
      desc: "Incorporate slow-digesting complex carbs (oats, brown rice, sweet potatoes) and chia seeds into Suhoor for steady hydration and continuous fullness.",
    },
    {
      icon: "🥗",
      title: "Mindful Sunnah Portions",
      category: "Prophetic Eating",
      desc: "Adopt the 1/3 rule (1/3 food, 1/3 liquid, 1/3 air) to protect digestive health, prevent post-meal lethargy, and keep your body energized for prayers.",
    },
    {
      icon: "💪",
      title: "Modest Home Movement",
      category: "Daily Fitness",
      desc: "Consistency beats intensity. Just 20 minutes of daily resistance band or bodyweight movements delivers 90% of gym benefits in complete privacy.",
    },
  ];

  return (
    <section className="programs-section" id="wellness-tips">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="stories-hero__badge">
            <span>💡</span> Daily Sisterhood Wisdom <span>🌸</span>
          </span>
          <h2 className="programs-section__title" style={{ marginTop: "12px", marginBottom: "8px" }}>
            Essential Wellness Tips
          </h2>
          <p className="programs-section__subtitle" style={{ marginTop: "0" }}>
            Practical advice to help you nurture mind, body, and spiritual vitality every day.
          </p>
        </div>

        <div className="programs-tips-grid">
          {tips.map((tip, idx) => (
            <article key={idx} className="programs-tip-card-enhanced">
              <div className="programs-tip-icon-wrap">
                <span className="programs-tip-icon">{tip.icon}</span>
                <span className="programs-tip-badge">{tip.category}</span>
              </div>
              <h3 className="programs-tip-title">{tip.title}</h3>
              <p className="programs-tip-desc">{tip.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
