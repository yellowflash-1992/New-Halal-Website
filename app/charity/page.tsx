"use client";

import { useState } from "react";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import Navigation from "../components/dashboard/Navigation";
import MobileFootbar from "../components/programs/MobileFootbar";
import { useDarkMode } from "../helpers/useDarkMode";

export default function CharityPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [selectedCause, setSelectedCause] = useState("water");
  const [amount, setAmount] = useState(25);
  const [donated, setDonated] = useState(false);

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

  const causes = [
    {
      id: "water",
      icon: "💧",
      title: "Clean Water Wells (Sadaqah Jariyah)",
      desc: "Constructing solar-powered community water wells and filtration stations in drought-affected Muslim communities in loving memory of sister Sumayyah.",
      impact: "1 Share ($50) brings clean water to 10 sisters & families",
    },
    {
      id: "maternal",
      icon: "🌸",
      title: "Maternal Health & Safe Birth Aid",
      desc: "Funding sterile birth kits, postnatal vitamins, and maternal wellness care for expectant Muslim mothers in underserved clinics.",
      impact: "1 Kit ($25) supports 1 safe, dignified birth",
    },
    {
      id: "food",
      icon: "🍲",
      title: "Nourishing Food & Ramadan Hampers",
      desc: "Delivering nutrient-dense Sunnah food hampers (dates, grains, olive oil, wholesome staples) to widowed sisters, orphans, and fasting families.",
      impact: "1 Food Pack ($15) feeds a family for 2 weeks",
    },
    {
      id: "education",
      icon: "📖",
      title: "Sisterhood Health & Wellness Grants",
      desc: "Sponsoring community health literacy, maternal recovery coaching, and nutritional education for young Muslim girls and sisters.",
      impact: "1 Grant ($100) educates and empowers 25 young sisters",
    },
  ];

  function handleDonateSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDonated(true);
    const activeCause =
      causes.find((c) => c.id === selectedCause)?.title ||
      "The Sumayyah Legacy Fund";
    const msg = encodeURIComponent(
      `Assalamu Alaikum! I would like to make a $${amount} donation to The Sumayyah Legacy Foundation for ${activeCause}.\n\nMay Allah accept this as Sadaqah Jariyah for sister Sumayyah and bless all involved. Please share the direct transfer details.`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/?text=${msg}`, "_blank");
    }, 1000);
  }

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />

      <main className={darkMode ? "dark-mode charity-page" : "charity-page"}>
        {/* Memorial Hero */}
        <section className="charity-hero-section container">
          <span
            className="stories-hero__badge"
            style={{ marginBottom: "20px" }}
          >
            <span>🌸</span> In Loving Memory of Sister Sumayyah • Sadaqah
            Jariyah <span>🤍</span>
          </span>
          <h1 className="charity-page-title">The Sumayyah Legacy Foundation</h1>
          <p className="charity-page-subtitle">
            A sacred sisterhood giving initiative by Halal Fit-Sis — dedicated
            as eternal continuous charity (Sadaqah Jariyah) in loving memory of
            our beloved sister Sumayyah (Rahimahallah). Every contribution
            directly funds clean water wells, maternal healthcare, and
            nourishing meals for Muslim women and orphans worldwide.
          </p>
        </section>

        {/* Memorial Tribute Block */}
        <section
          className="container"
          style={{ position: "relative", zIndex: 2, marginBottom: "34px" }}
        >
          <div className="charity-memorial-card">
            <div className="charity-memorial-badge">
              <span>🤍</span> Her Memory Lives on Through Good Deeds
            </div>
            <h2 className="charity-memorial-title">Honoring Sister Sumayyah</h2>
            <p className="charity-memorial-text">
              Sister Sumayyah was a light in our lives — known for her gentle
              heart, selfless generosity, and deep passion for uplifting her
              sisters. Though she has returned to her Creator (SWT), our
              sisterhood ensures that her goodness never ceases on this earth.
            </p>
            <p className="charity-memorial-hadith">
              ✨{" "}
              <em>
                &ldquo;When a human being dies, their deeds come to an end
                except for three: an ongoing charity (Sadaqah Jariyah),
                beneficial knowledge, or a righteous soul who prays for
                them.&rdquo;
              </em>
              <br />
              <span
                style={{ fontSize: "12.5px", fontWeight: 700, opacity: 0.9 }}
              >
                — Sahih Muslim
              </span>
            </p>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section
          className="container charity-pillars-section"
          aria-label="Our Charity Initiatives"
        >
          <div className="charity-grid-cards">
            {causes.map((c) => (
              <article key={c.id} className="charity-page-card">
                <span className="charity-page-card-icon">{c.icon}</span>
                <h2 className="charity-page-card-title">{c.title}</h2>
                <p className="charity-page-card-desc">{c.desc}</p>
                <div className="charity-page-card-impact">
                  <span className="impact-tag">Impact:</span> {c.impact}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Donation Interactive Box */}
        <section className="container charity-donation-section">
          <div className="charity-donation-box">
            <span
              className="stories-hero__badge"
              style={{ marginBottom: "14px" }}
            >
              <span>🤲</span> Give in Loving Memory <span>✨</span>
            </span>
            <h2 className="charity-box-title">
              Contribute to The Sumayyah Legacy Fund
            </h2>
            <p className="charity-box-subtitle">
              Choose a cause and Sadaqah amount. 100% of your gift is dedicated
              to verified sisterhood relief projects as Sadaqah Jariyah.
            </p>

            <form onSubmit={handleDonateSubmit} className="charity-box-form">
              <div className="charity-form-group">
                <label className="charity-form-label">
                  Select Legacy Cause:
                </label>
                <div className="charity-cause-select-grid">
                  {causes.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`charity-cause-btn${selectedCause === c.id ? " is-active" : ""}`}
                      onClick={() => setSelectedCause(c.id)}
                    >
                      <span>{c.icon}</span> {c.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="charity-form-group">
                <label className="charity-form-label">Select Amount:</label>
                <div className="charity-amount-select-grid">
                  {[10, 25, 50, 100, 250].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`charity-amount-btn${amount === val ? " is-active" : ""}`}
                      onClick={() => setAmount(val)}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--pill charity-main-donate-btn"
              >
                {donated
                  ? "Connecting to WhatsApp Giving Coordinator... 🤲"
                  : `🤲 Give $${amount} as Sadaqah Jariyah`}
              </button>
            </form>

            <div className="charity-transparency-pledge">
              <p className="pledge-title">
                Our 100% Transparency &amp; Akhirah Pledge
              </p>
              <p className="pledge-text">
                Every single donation is documented, tracked, and deployed
                directly with trusted female grassroots coordinators. May Allah
                accept every drop of water and every meal provided as light and
                elevated ranks for Sister Sumayyah and continuous reward for
                you.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <MobileFootbar />
    </>
  );
}
