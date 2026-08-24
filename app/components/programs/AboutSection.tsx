export default function AboutSection() {
  return (
    <section className="programs-section programs-about" id="programs-about">
      <div className="container">
        <div className="programs-about-box">
          <div className="programs-about-box__avatar" aria-hidden="true">
            🌸
          </div>
          <span className="stories-hero__badge" style={{ marginBottom: "10px" }}>
            Coach Khalidah • Halal Fit-Sis Lead
          </span>
          <h3 className="programs-about-box__title">Welcome, Beautiful Sisters! 🤍</h3>
          <p className="programs-about-box__text">
            I’m Khalidah, your Muslimah wellness &amp; lifestyle coach. I believe that taking care of your physical body is an act of worship. Through simple Sunnah meals, realistic fitness habits, and gentle reminders, I help you stay consistent, strong, and spiritually fulfilled.
          </p>
          <a
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn programs-about-box__whatsapp"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Connect with Coach Khalidah
          </a>
        </div>
      </div>
    </section>
  );
}
