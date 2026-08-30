"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CharityFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string>("water");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showCelebration, setShowCelebration] = useState(false);
  const pathname = usePathname();

  // Close modal when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Hide the floating widget on the homepage only (AFTER all hooks)
  if (pathname === "/" || pathname === "") {
    return null;
  }

  const causes = [
    {
      id: "maternal",
      icon: "🌸",
      title: "Maternal & Women's Health",
      desc: "Clean birth kits & maternal nutrition for mothers in need.",
    },
    {
      id: "water",
      icon: "💧",
      title: "Clean Water Wells",
      desc: "Sustainable water infrastructure as lifelong Sadaqah Jariyah.",
    },
    {
      id: "food",
      icon: "🍲",
      title: "Food & Ramadan Hampers",
      desc: "Wholesome food packs for widowed sisters & orphans.",
    },
  ];

  const presetAmounts = [10, 25, 50, 100];

  const activeCauseObj =
    causes.find((c) => c.id === selectedCause) || causes[0];
  const finalAmount =
    selectedAmount === "custom"
      ? customAmount || "custom"
      : `$${selectedAmount}`;

  function handleDonateClick() {
    setShowCelebration(true);
    const message = encodeURIComponent(
      `Assalamu Alaikum! I would like to make a Sadaqah donation to the Halal Fit-Sis Charity Foundation.\n\n• Cause: ${activeCauseObj.title}\n• Amount: ${finalAmount}\n\nMay Allah accept this as Sadaqah Jariyah and bless all involved. Please guide me on completing my donation. Jazakallahu Khair!`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/?text=${message}`, "_blank");
      setShowCelebration(false);
    }, 1200);
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        className="charity-widget-container"
        aria-label="Charity Foundation Widget"
      >
        <button
          type="button"
          className={`charity-floating-btn${isOpen ? " is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Open Halal Fit-Sis Charity Foundation donation modal"
        >
          <span className="charity-btn-icon" aria-hidden="true">
            🤲
          </span>
          <span className="charity-btn-text">
            <span className="charity-text-desktop">
              Sisterhood Charity Fund
            </span>
            <span className="charity-text-mobile">Charity Fund</span>
          </span>
          <span className="charity-btn-pulse" aria-hidden="true" />
        </button>
      </div>

      {/* Modal / Dialog */}
      {isOpen && (
        <div
          className="charity-modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="charity-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="charity-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="charity-modal-header">
              <div className="charity-modal-badge">
                <span>🤍</span>
                Sisterhood Sadaqah Jariyah
                {/* <span className="jar"></span> */}
                <span>✨</span>
              </div>
              <button
                type="button"
                className="charity-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close donation modal"
              >
                ✕
              </button>
            </div>

            <h2 id="charity-modal-title" className="charity-modal-title">
              Halal Fit-Sis Charity Foundation
            </h2>
            <p className="charity-modal-subtitle">
              Dedicated to continuous charity (Sadaqah Jariyah). Every donation
              directly funds clean water wells, maternal healthcare, and food
              security for Muslim women and orphans in need.
            </p>

            {/* Select Cause */}
            <div className="charity-section-label">Select Impact Cause:</div>
            <div className="charity-causes-grid">
              {causes.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`charity-cause-pill${selectedCause === c.id ? " is-selected" : ""}`}
                  onClick={() => setSelectedCause(c.id)}
                >
                  <span className="charity-cause-icon">{c.icon}</span>
                  <div className="charity-cause-text">
                    <span className="charity-cause-title">{c.title}</span>
                    <span className="charity-cause-desc">{c.desc}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Select Amount */}
            <div
              className="charity-section-label"
              style={{ marginTop: "16px" }}
            >
              Select Amount:
            </div>
            <div className="charity-amounts-grid">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`charity-amount-btn${selectedAmount === amt ? " is-selected" : ""}`}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                >
                  ${amt}
                </button>
              ))}
              <button
                type="button"
                className={`charity-amount-btn${selectedAmount === "custom" ? " is-selected" : ""}`}
                onClick={() => setSelectedAmount("custom")}
              >
                Custom
              </button>
            </div>

            {selectedAmount === "custom" && (
              <div className="charity-custom-input-wrap">
                <span className="charity-currency-prefix">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  className="charity-custom-input"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  autoFocus
                />
              </div>
            )}

            {/* Transparency Note */}
            <div className="charity-impact-note">
              <span className="charity-impact-check">✓</span>
              <span>
                100% transparency. Handled by verified Muslimah charity
                coordinators.
              </span>
            </div>

            {/* Actions */}
            <div className="charity-modal-actions">
              <button
                type="button"
                className="btn btn--pill charity-submit-btn"
                onClick={handleDonateClick}
              >
                {showCelebration ? (
                  <span>Barakallahu Feekum! 🤍</span>
                ) : (
                  <span>🤲 Proceed with {finalAmount} Sadaqah</span>
                )}
              </button>

              <Link
                href="/charity"
                className="charity-learn-more-link"
                onClick={() => setIsOpen(false)}
              >
                Learn more about our Foundation &amp; Impact &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
