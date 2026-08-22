export default function CommunityFooter() {
  return (
    <footer className="programs-mobile-community" id="community">
      <div className="container">
        <div className="programs-mobile-community__content">
          <h2 className="programs-mobile-community__title">
            Join Our Fit-Sis Community
          </h2>
          <p className="programs-mobile-community__subtitle">
            Connect with us for tips &amp; support!
          </p>
          <a
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn programs-community-btn-wa"
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
            Join on WhatsApp
          </a>
          <div className="programs-mobile-community__socials">
            <span>Follow Us:</span>
            <a href="#!">Instagram</a>
            <span className="social-divider">|</span>
            <a href="#!">Contact</a>
            <span className="social-divider">|</span>
            <a href="#!">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
