"use client";

import Navigation from "../../components/dashboard/Navigation";
import DecorativeLeaves from "../../components/dashboard/DecorativeLeaves";
import Footer from "../../components/dashboard/Footer";
import MobileFootbar from "../../components/programs/MobileFootbar";
import { useDarkMode } from "../../helpers/useDarkMode";

export default function CoachesPage() {
  const [darkMode, setDarkMode] = useDarkMode();

  function celebrate(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    const original = btn.textContent;
    btn.textContent = "Welcome, sister! \u2764";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1600);
  }

  const team = [
    {
      category: "Fitness & Wellness Coach",
      emoji: "🌸",
      name: "Coach Khalidah",
      role: "Founder & Lead Sisterhood Wellness Coach",
      bio: "Passionate Muslimah wellness mentor dedicated to helping sisters build sustainable, deen-centered fitness habits, daily vitality, and mindful lifestyle consistency without burnout or restrictive dieting.",
      focus: ["Sunnah Nutrition", "Mindful Habit Building", "Sisterhood Mentorship"],
    },
    {
      category: "Fitness & Wellness Coach",
      emoji: "💪",
      name: "Coach Rahma",
      role: "Lead Fitness Trainer & Home Workout Specialist",
      bio: "Certified female personal trainer specializing in modest strength conditioning, core stability, postpartum recovery, and energizing living room routines tailored for busy Muslim women.",
      focus: ["Home Strength Training", "Postpartum Recovery", "Functional Core Mobility"],
    },
    {
      category: "Clinical & Nutrition Expert",
      emoji: "🥗",
      name: "Dr. Mamia",
      role: "Holistic Clinical Nutritionist & Sunnah Dietary Specialist",
      bio: "Clinical dietary specialist guiding sisters in wholesome prophetic nutrition, hormone-friendly meal blueprints, balanced metabolic health, and clean eating protocols for the entire family.",
      focus: ["Hormonal Wellness", "Prophetic Superfoods", "Family Nutrition Blueprint"],
    },
    {
      category: "Clinical & Nutrition Expert",
      emoji: "🩺",
      name: "Dr. Aisha",
      role: "Medical Health Advisor & Sports Medicine Specialist",
      bio: "Physician and women's health advocate focused on female physiology, cardiovascular wellness, bone density preservation, safe exercise during pregnancy, and optimal fasting wellness during Ramadan.",
      focus: ["Ramadan Fasting Health", "Cardiovascular Longevity", "Injury Prevention & Bone Health"],
    },
  ];

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />

      <main className={darkMode ? "dark-mode coaches-page" : "coaches-page"}>
        <section className="coaches-hero container">
          <span className="stories-hero__badge">
            <span>🤍</span> Certified Coaches &amp; Medical Specialists <span>✨</span>
          </span>
          <h1 className="coaches-hero__title">
            Meet the Coaches &amp; Experts Behind Halal Fit-Sis
          </h1>
          <p className="coaches-hero__subtitle">
            Dedicated Muslim women guiding you in faith-aligned strength, wholesome Sunnah nutrition,
            and clinical health — every step of your sisterhood journey.
          </p>
        </section>

        <section className="container coaches-grid" aria-label="Our Coaches and Experts">
          {team.map((member, idx) => (
            <article key={idx} className="coach-card">
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--rose-deep)",
                  background: "rgba(201, 126, 142, 0.14)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  marginBottom: "14px",
                }}
              >
                {member.category}
              </span>
              <div className="coach-card__avatar" aria-hidden="true">
                {member.emoji}
              </div>
              <h2 className="coach-card__name">{member.name}</h2>
              <p className="coach-card__role">{member.role}</p>
              <p className="coach-card__bio">{member.bio}</p>
              <div className="coach-card__focus">
                {member.focus.map((f, i) => (
                  <span key={i} className="coach-card__tag">
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <Footer />
      </main>

      <MobileFootbar />
    </>
  );
}
