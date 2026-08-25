"use client";

import Link from "next/link";
import Navigation from "../components/dashboard/Navigation";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import MobileFootbar from "../components/programs/MobileFootbar";
import { useDarkMode } from "../helpers/useDarkMode";

export default function StartHerePage() {
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

  const steps = [
    {
      icon: "🌸",
      step: "Step 1",
      title: "Meet Your Coaches & Sisterhood",
      desc: "Get to know Coach Khalidah and our certified female wellness leads who guide your journey.",
      href: "/about/coaches",
      cta: "Meet the Coaches",
    },
    {
      icon: "📋",
      step: "Step 2",
      title: "Choose Your Fitness Program",
      desc: "Select a custom meal & workout protocol crafted for your current season, from Ramadan fasting to core recovery.",
      href: "/programs",
      cta: "Explore Programs",
    },
    {
      icon: "🍽️",
      step: "Step 3",
      title: "Explore the Halal Fit Kitchen",
      desc: "Discover simple, nourishing Sunnah-inspired recipes and balanced Nigerian favorites.",
      href: "/halal-fit-kitchen",
      cta: "Visit the Kitchen",
    },
    {
      icon: "🎁",
      step: "Step 4",
      title: "Grab Free Guides & Read the Blog",
      desc: "Download free printable meal planners and read deep-dive articles on holistic Muslimah wellness.",
      href: "/resources",
      cta: "Browse Resources",
    },
    {
      icon: "💬",
      step: "Step 5",
      title: "Join the Sisterhood Community",
      desc: "Connect directly with Coach Khalidah and hundreds of supportive sisters on WhatsApp.",
      href: "/contact",
      cta: "Get in Touch",
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

      <main
        className={darkMode ? "dark-mode start-here-page" : "start-here-page"}
      >
        <section className="start-hero container">
          <span className="stories-hero__badge">
            <span>🌷</span> Welcome to Halal Fit-Sis <span>✨</span>
          </span>
          <h1 className="start-hero__title">Start Here: Your First Steps</h1>
          <p className="start-hero__subtitle">
            New to Halal Fit-Sis? You are in the right place. Follow these
            simple steps to begin your journey toward a healthier, more
            intentional lifestyle — without losing your deen.
          </p>
        </section>

        <section className="container start-steps">
          {steps.map((s, idx) => (
            <article key={idx} className="start-step-card">
              <div className="start-step-card__icon" aria-hidden="true">
                {s.icon}
              </div>
              <div className="start-step-card__body">
                <span className="start-step-card__step">{s.step}</span>
                <h2 className="start-step-card__title">{s.title}</h2>
                <p className="start-step-card__desc">{s.desc}</p>
                <Link
                  href={s.href}
                  className="btn btn--pill start-step-card__cta"
                >
                  {s.cta} →
                </Link>
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
