export default function MealPlans() {
  return (
    <section className="programs-section" id="meal-plans">
      <div className="container">
        <h2 className="programs-section__title">Our Meal Plans</h2>
        <div className="programs-plans">
          <div className="programs-plan-card">
            <h3 className="programs-plan-card__title">Ramadan Meal Plan</h3>
          </div>
          <div className="programs-plan-card">
            <h3 className="programs-plan-card__title">Weight Loss Plan</h3>
            <span className="programs-plan-card__coming-soon">(Coming Soon)</span>
          </div>
          <div className="programs-plan-card">
            <h3 className="programs-plan-card__title">Weight Gain Plan</h3>
            <span className="programs-plan-card__coming-soon">(Coming Soon)</span>
          </div>
        </div>
      </div>
    </section>
  );
}