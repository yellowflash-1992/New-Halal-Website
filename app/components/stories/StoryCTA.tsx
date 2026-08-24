import Link from "next/link";

export default function StoryCTA() {
  return (
    <section className="stories-cta-card">
      <h2 className="stories-cta-card__title">
        Ready to Write Your Own Success Story?
      </h2>
      <p className="stories-cta-card__subtitle">
        Join hundreds of Muslim sisters transforming their health, strengthening
        their prayers, and building sustainable habits in our private,
        supportive community.
      </p>
      <div className="stories-cta-card__actions">
        <a
          href="https://chat.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="stories-cta-btn-wa"
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
          Join Our Sisterhood Group
        </a>
        <Link href="/programs" className="stories-cta-btn-alt">
          Explore Meal &amp; Fitness Plans
        </Link>
      </div>
    </section>
  );
}
