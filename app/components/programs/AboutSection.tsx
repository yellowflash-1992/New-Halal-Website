export default function AboutSection() {
  return (
    <section className="programs-section programs-about" id="programs-about">
      <div className="container">
        <div className="programs-about-box">
          <div className="programs-about-box__profile"></div>
          <h3 className="programs-about-box__title">Welcome, sisters!</h3>
          <p className="programs-about-box__text">
            I'm here to help you on your wellness journey 💖
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
            Join on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}