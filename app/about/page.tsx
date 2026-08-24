"use client";

import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import Navigation from "../components/dashboard/Navigation";
import MobileFootbar from "../components/programs/MobileFootbar";
import { getAssetPath } from "../helpers/assetHelper";
import { useDarkMode } from "../helpers/useDarkMode";

export default function AboutPage() {
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

  const pillars = [
    {
      icon: "🌙",
      title: "Faith as the Foundation",
      desc: "Treating physical vitality and energy as an act of worship (Ibadah), honoring the body as a sacred trust (Amanah).",
      variant: "mint",
    },
    {
      icon: "🌸",
      title: "Modest & Sustainable",
      desc: "Gentle, realistic habits without extreme diets, exhausting burnout, or uncomfortable mixed gym environments.",
      variant: "sky",
    },
    {
      icon: "🤍",
      title: "Empowering Sisterhood",
      desc: "A warm, uplifting community where Muslim women encourage one another to grow in health, prayer, and consistency.",
      variant: "peach",
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

      <main className={darkMode ? "dark-mode about-page" : "about-page"}>
        {/* ================= HERO SECTION ================= */}
        <section className="about-hero-section container">
          <div className="about-hero-container">
            <span
              className="stories-hero__badge"
              style={{ marginBottom: "24px" }}
            >
              <span>🌸</span> Sisterhood Wellness &amp; Lifestyle{" "}
              <span>✨</span>
            </span>

            {/* Prominent Large Hero Photo Space */}
            <div className="about-hero-photo-wrap">
              <div className="about-hero-photo-circle">
                <img
                  src={getAssetPath("/hero.png")}
                  alt="Muslim woman tying running shoes"
                  className="about-hero-photo-img"
                />
              </div>
              {/* Decorative Sparkles */}
              <span
                className="about-sparkle about-sparkle-1"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="about-sparkle about-sparkle-2"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="about-sparkle about-sparkle-3"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>

            <h1 className="about-hero-title">
              Helping Muslim Women Build Healthy, Consistent Lifestyles Without
              Losing Their Deen
            </h1>
            <p className="about-hero-subtitle">
              Nourishing body, mind, and soul through Sunnah-inspired wellness,
              mindful habits, and intentional sisterhood.
            </p>
          </div>
        </section>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* ================= OUR MISSION ================= */}
          <section className="about-mission-card" aria-label="Our Mission">
            <h2 className="about-mission-title">
              Our Mission <span aria-hidden="true">🩷</span>
            </h2>
            <p className="about-mission-text">
              Halal Fit-Sis was created to help Muslim women build a balanced
              lifestyle that nurtures both their body and their faith.
            </p>
            <p className="about-mission-text">
              We believe that taking care of your body is an act of worship.
              Through simple nutrition, realistic fitness habits, and spiritual
              mindfulness, we aim to help women stay consistent, disciplined,
              and intentional.
            </p>
            <p className="about-mission-text about-mission-text--emphasis">
              This is not about perfection, but about progress, becoming better,
              one step at a time.
            </p>
          </section>

          {/* ================= COACH STORY CARD ================= */}
          <section className="about-story-card">
            <h2 className="about-greeting-header">
              <span>Assalamualaikum beautiful sisters 🤍</span>
              <svg
                className="about-heart-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </h2>

            <div className="about-coach-intro">
              <div className="about-coach-avatar-circle" aria-hidden="true">
                🌸
              </div>
              <div className="about-coach-lead">
                <p>
                  I’m <strong>Khalidah</strong>, your Halal Fit-Sis, a Muslimah
                  wellness and lifestyle coach passionate about helping women
                  live healthier, more intentional lives.
                </p>
              </div>
            </div>

            <p className="about-coach-body-text">
              My journey into wellness started from a place of wanting to become
              better, not just physically, but spiritually and mentally too.
              Like many sisters, I have struggled with consistency, discipline,
              and finding balance. Over time, I began to understand that taking
              care of my body is also an act of worship. Through small,
              realistic changes in my meals, habits, and mindset, I started
              building a lifestyle I could actually sustain. Now, I share that
              journey with you. Through simple meal ideas, realistic fitness
              routines, and gentle spiritual reminders, I help you stay
              consistent and disciplined without feeling overwhelmed.
            </p>

            <div className="about-coach-conclusion">
              <span>
                This is more than fitness. It is a journey of becoming your best
                self, inside and out. Barakallahu feekum!!!
              </span>
              <svg
                className="about-heart-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </section>

          {/* ================= CORE PILLARS GRID ================= */}
          <section className="about-pillars-grid" aria-label="Our Core Pillars">
            {pillars.map((pillar, idx) => (
              <article
                key={idx}
                className={`about-pillar-card about-pillar-card--${pillar.variant}`}
              >
                <span className="about-pillar-icon">{pillar.icon}</span>
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p className="about-pillar-desc">{pillar.desc}</p>
              </article>
            ))}
          </section>

          {/* ================= CLOSING INSPIRATIONAL NOTE ================= */}
          <section className="about-closing-note">
            <p>
              ✨{" "}
              <em>
                "A strong believer is better and more beloved to Allah than a
                weak believer, while there is good in both."
              </em>{" "}
              (Sahih Muslim)
            </p>
          </section>
        </div>

        {/* ================= FOOTER ================= */}
        <Footer />
      </main>

      <MobileFootbar />
    </>
  );
}
