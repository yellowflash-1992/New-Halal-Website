import Link from "next/link";
import { getAssetPath } from "../../helpers/assetHelper";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Brand Logo & Tagline */}
        <div className="footer__brand-block" style={{ marginBottom: "20px" }}>
          <Link
            href="/"
            aria-label="Halal Fit-Sis Home"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            <img
              src={getAssetPath("/new-logo.png")}
              alt="Halal Fit-Sis"
              className="footer__brand-img"
            />
          </Link>
        </div>

        {/* Sitemap navigation links */}
        <nav
          className="footer__nav"
          aria-label="Footer Navigation"
          style={{ marginBottom: "24px" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px 24px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="/start-here"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Start Here
            </Link>
            <Link
              href="/programs"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Programs
            </Link>
            <Link
              href="/stories"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Success Stories
            </Link>
            <Link
              href="/halal-fit-kitchen"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Halal Kitchen
            </Link>
            <Link
              href="/about"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              href="/about/coaches"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Meet the Coaches
            </Link>
            <Link
              href="/charity"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Charity & Giving
            </Link>
            <Link
              href="/blog"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              href="/resources"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Free Resources
            </Link>
            <Link
              href="/contact"
              style={{ color: "var(--plum-soft)", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Charity & Sadaqah Jariyah Foundation subtle note */}
        <div
          className="footer__charity-mention"
          style={{
            maxWidth: "540px",
            margin: "0 auto 20px",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(201, 126, 142, 0.12)",
            border: "1px solid rgba(201, 126, 142, 0.25)",
            fontSize: "12.5px",
            fontWeight: 600,
            color: "var(--plum)",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            lineHeight: 1.4,
          }}
        >
          <span>🤲</span> A percentage of every membership supports our{" "}
          <strong>Sisterhood Charity Foundation</strong> (Sadaqah Jariyah)
        </div>

        <div className="footer__join-callout">
          <p className="footer__join-text">
            Join a community of sisters committed to living healthier and more
            intentional lives
          </p>
          <a
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pill footer__join-btn"
          >
            <span>🌸</span> Join the Sisterhood
          </a>
        </div>

        <section className="footer__social" aria-label="Social media links">
          <a
            className="footer__social-link footer__social-link--facebook"
            href="#!"
            aria-label="Facebook"
            role="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            className="footer__social-link footer__social-link--google"
            href="#!"
            aria-label="Google"
            role="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>

          <a
            className="footer__social-link footer__social-link--instagram"
            href="#!"
            aria-label="Instagram"
            role="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            className="footer__social-link footer__social-link--whatsapp"
            href="#!"
            aria-label="WhatsApp"
            role="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </section>
      </div>

      <div className="footer__bottom">
        <button
          className="footer__back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <div className="footer__copyright">
          &copy; 2026 Halal Fit-Sis | Powered by Ayaang Hub
        </div>
      </div>
    </footer>
  );
}
