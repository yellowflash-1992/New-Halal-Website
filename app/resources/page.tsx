"use client";

import Link from "next/link";
import Navigation from "../components/dashboard/Navigation";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import CommunityFooter from "../components/programs/CommunityFooter";
import MobileFootbar from "../components/programs/MobileFootbar";
import BlogCard from "../components/blog/BlogCard";
import { ALL_BLOG_POSTS } from "../data/blogData";
import { useDarkMode } from "../helpers/useDarkMode";

export default function ResourcesPage() {
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

  const freebies = [
    {
      icon: "📋",
      title: "Weekly Halal Meal Planner",
      desc: "Printable PDF template to design balanced, nutrient-dense meals for your family each week.",
    },
    {
      icon: "💧",
      title: "Ramadan Hydration Tracker",
      desc: "Hourly water & electrolyte intake schedule to ensure sustained energy from Iftar to Suhoor.",
    },
    {
      icon: "🏠",
      title: "20-Minute Living Room Workout Guide",
      desc: "Low-impact bodyweight routine cards for private, modest fitness in the comfort of your home.",
    },
    {
      icon: "🌙",
      title: "Prophetic Nutrition & Sunnah Checklist",
      desc: "Quick reference sheet for Sunnah superfoods including Ajwa dates, raw honey, olive oil & barley.",
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
        className={darkMode ? "dark-mode resources-page" : "resources-page"}
      >
        <section className="resources-hero container">
          <span className="stories-hero__badge">
            <span>🎁</span> Sisterhood Freebies <span>✨</span>
          </span>
          <h1 className="resources-hero__title">Free Resources &amp; Guides</h1>
          <p className="resources-hero__subtitle">
            Practical tools, printable schedules, and actionable guides crafted
            to make your wellness and faith journey effortless.
          </p>
        </section>

        <section
          className="container resources-freebies"
          aria-label="Free Downloads"
        >
          {freebies.map((f, idx) => (
            <article key={idx} className="resource-card">
              <span className="resource-card__icon" aria-hidden="true">
                {f.icon}
              </span>
              <h2 className="resource-card__title">{f.title}</h2>
              <p className="resource-card__desc">{f.desc}</p>
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--pill resource-card__btn"
              >
                Download Free Guide →
              </a>
            </article>
          ))}
        </section>

        <section className="container resources-blog">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span className="stories-hero__badge">
              <span>📖</span> Wisdom &amp; Articles <span>🌸</span>
            </span>
            <h2
              className="programs-section__title"
              style={{ marginTop: "12px", marginBottom: "8px" }}
            >
              Latest Articles from the Blog
            </h2>
          </div>

          <div className="blog-grid">
            {ALL_BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/blog" className="btn btn--primary">
              View All Blog Articles →
            </Link>
          </div>
        </section>

        <CommunityFooter />
        <div className="blog-desktop-footer">
          <Footer />
        </div>
      </main>

      <MobileFootbar />
    </>
  );
}
