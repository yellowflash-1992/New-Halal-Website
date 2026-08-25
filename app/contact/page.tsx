"use client";

import { useState } from "react";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import Navigation from "../components/dashboard/Navigation";
import MobileFootbar from "../components/programs/MobileFootbar";
import { useDarkMode } from "../helpers/useDarkMode";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [submitted, setSubmitted] = useState(false);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <DecorativeLeaves />
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />

      <main className={darkMode ? "dark-mode contact-page" : "contact-page"}>
        <section className="contact-hero container">
          <span className="stories-hero__badge">
            <span>💬</span> We Would Love to Hear From You <span>✨</span>
          </span>
          <h1 className="contact-hero__title">Contact Us &amp; Get in Touch</h1>
          <p className="contact-hero__subtitle">
            Have questions about our programs, recipes, or ready to join the
            sisterhood? Send a salam or reach out directly.
          </p>
        </section>

        <section className="container contact-grid">
          <div className="contact-info">
            <h2 className="contact-info__title">Connect With Us</h2>
            <p className="contact-info__text">
              Halal Fit-Sis is run by sisters, for sisters. Whether you need
              personalized fitness guidance, want to collaborate, or have a
              question about our meal plans, we are here for you.
            </p>

            <a
              href="https://chat.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn programs-community-btn-wa"
              style={{ marginTop: "10px", width: "100%" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Chat Directly on WhatsApp
            </a>

            <div className="contact-info__socials">
              <span>Follow our journey:</span>
              <a href="#!">Instagram</a>
              <span>•</span>
              <a href="#!">Facebook</a>
              <span>•</span>
              <a href="#!">WhatsApp Channel</a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="contact-form__success">
                  <span className="contact-form__success-icon">🌸</span>
                  <h3>Jazakillahu Khayran, Sister!</h3>
                  <p>
                    Your message has been received with warmth. We will get back
                    to you as soon as possible, insha&apos;Allah.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="contact-form__title">Send Us a Message</h2>
                  <label className="contact-form__label">
                    Your Name
                    <input
                      className="contact-form__input"
                      type="text"
                      name="name"
                      required
                      placeholder="Sister Aisha"
                    />
                  </label>
                  <label className="contact-form__label">
                    Email Address
                    <input
                      className="contact-form__input"
                      type="email"
                      name="email"
                      required
                      placeholder="aisha@example.com"
                    />
                  </label>
                  <label className="contact-form__label">
                    How Can We Help You?
                    <textarea
                      className="contact-form__input contact-form__textarea"
                      name="message"
                      required
                      rows={5}
                      placeholder="Ask about programs, nutrition advice, or joining our sisterhood..."
                    />
                  </label>
                  <button
                    className="btn btn--primary contact-form__submit"
                    type="submit"
                  >
                    Send Message ✉️
                  </button>
                </>
              )}
            </form>
          </div>
        </section>

        <Footer />
      </main>

      <MobileFootbar />
    </>
  );
}
