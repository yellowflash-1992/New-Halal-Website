"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getAssetPath } from "../../helpers/assetHelper";
import { scrollHandler } from "../../helpers/scrollHelper";
import HomepageSearch from "./HomepageSearch";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  onCelebrate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DropdownItem {
  href: string;
  label: string;
  icon?: string;
  desc?: string;
}

export default function Navigation({
  darkMode,
  setDarkMode,
  onCelebrate,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navWrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Active state determinations
  const isHome = pathname === "/";
  const isStartHere = pathname === "/start-here";
  const isProgramsActive =
    pathname === "/programs" ||
    pathname.startsWith("/programs/") ||
    pathname.startsWith("/stories") ||
    pathname.startsWith("/success-stories");
  const isKitchenPage =
    pathname === "/halal-fit-kitchen" || pathname === "/halal-kitchen";
  const isAboutActive = pathname.startsWith("/about");
  const isSupportActive =
    pathname.startsWith("/blog") ||
    pathname.startsWith("/resources") ||
    pathname === "/contact";

  // Dropdown Configurations
  const programsItems: DropdownItem[] = [
    {
      href: "/programs",
      label: "Our Programs",
      icon: "💪",
      desc: "Workout & custom meal plans",
    },
    {
      href: "/stories",
      label: "Success Stories",
      icon: "✨",
      desc: "Sister transformations & reviews",
    },
  ];

  const aboutItems: DropdownItem[] = [
    {
      href: "/about",
      label: "About Us",
      icon: "🌸",
      desc: "Our mission, pillars & ethos",
    },
    {
      href: "/about/coaches",
      label: "Meet the Coaches & Experts",
      icon: "🤍",
      desc: "The certified team behind Halal Fit-Sis",
    },
  ];

  const supportItems: DropdownItem[] = [
    {
      href: "/blog",
      label: "Blog",
      icon: "📝",
      desc: "Insights on faith, wellness & balanced living",
    },
    {
      href: "/resources",
      label: "Free Resources",
      icon: "🎁",
      desc: "Practical guides, planners & printables",
    },
    {
      href: "/charity",
      label: "Charity & Sadaqah Fund",
      icon: "🤲",
      desc: "Sisterhood relief & giving projects",
    },
    {
      href: "/contact",
      label: "Contact",
      icon: "💬",
      desc: "Questions, collaborations & salam",
    },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    function closeOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const handler = scrollHandler(navWrapRef.current);

    return () => {
      handler.removeListener();
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function toggleDropdown(name: string) {
    setOpenDropdown((current) => (current === name ? null : name));
  }

  function renderDropdown(
    name: string,
    label: string,
    items: DropdownItem[],
    isActive: boolean,
  ) {
    const isOpen = openDropdown === name;
    return (
      <li
        className={`nav__item nav__item--dropdown${isOpen ? " is-open" : ""}`}
        onMouseEnter={() => setOpenDropdown(name)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          type="button"
          className={`nav__dropdown-toggle${isActive ? " is-active" : ""}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => toggleDropdown(name)}
        >
          <span>{label}</span>
          <svg
            className="nav__chevron"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <ul className="nav__dropdown" role="menu">
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className={`nav__dropdown-link${pathname === item.href ? " is-active" : ""}`}
                onClick={closeMenu}
              >
                {item.icon && (
                  <span className="nav__dropdown-icon">{item.icon}</span>
                )}
                <div className="nav__dropdown-item-text">
                  <span className="nav__dropdown-title">{item.label}</span>
                  {item.desc && (
                    <span className="nav__dropdown-desc">{item.desc}</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <header className="nav-wrap" ref={navWrapRef}>
      {/* Backdrop for mobile drawer (Rendered behind nav content) */}
      <button
        className={`nav__backdrop${menuOpen ? " is-visible" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav className="nav container" aria-label="Primary navigation">
        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`nav__menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Brand Logo -> Acts as the Home Link */}
        <Link
          href="/"
          className="nav__brand"
          onClick={closeMenu}
          aria-label="Halal Fit-Sis Home"
        >
          <img
            src={getAssetPath("/new-logo.png")}
            alt="Halal Fit-Sis"
            className="nav__brand-img"
          />
        </Link>

        {/* Desktop & Mobile Navigation Links */}
        <ul
          id="primary-navigation"
          className={`nav__links${menuOpen ? " is-open" : ""}`}
        >
          {/* Mobile Drawer Header with Logo */}
          <li className="nav__mobile-header" aria-hidden="true">
            <Link href="/" onClick={closeMenu} className="nav__mobile-logo">
              <img
                src={getAssetPath("/new-logo.png")}
                alt="Halal Fit-Sis"
                className="nav__mobile-logo-img"
              />
              <span className="nav__mobile-brand-title">Halal Fit-Sis</span>
            </Link>
          </li>

          {/* Mobile Only: Home Link */}
          <li className="nav__item nav__item--mobile-only">
            <Link
              href="/"
              className={isHome ? "is-active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          {/* 1. Start Here */}
          <li className="nav__item">
            <Link
              href="/start-here"
              className={isStartHere ? "is-active" : ""}
              onClick={closeMenu}
            >
              Start Here
            </Link>
          </li>

          {/* 2. Programs ▾ (Our Programs, Success Stories) */}
          {renderDropdown(
            "programs",
            "Programs",
            programsItems,
            isProgramsActive,
          )}

          {/* 3. Halal Kitchen */}
          <li className="nav__item">
            <Link
              href="/halal-fit-kitchen"
              className={isKitchenPage ? "is-active" : ""}
              onClick={closeMenu}
            >
              Halal-Fit-Kitchen
            </Link>
          </li>

          {/* 4. About ▾ (About Us, Meet the Coaches) - placed close to Support */}
          {renderDropdown("about", "About", aboutItems, isAboutActive)}

          {/* 5. Support ▾ (Blog, Free Resources, Contact) */}
          {renderDropdown("support", "Support", supportItems, isSupportActive)}

          {/* Mobile Drawer Bottom Callout */}
          <li className="nav__mobile-footer">
            <div className="nav__mobile-footer-card">
              <span className="nav__mobile-footer-icon">🌸</span>
              <div>
                <p className="nav__mobile-footer-title">Halal Sisterhood</p>
                <p className="nav__mobile-footer-text">
                  Empowering Muslim women in health & faith.
                </p>
              </div>
            </div>
            <a
              href="https://chat.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--pill nav__mobile-wa-btn"
              onClick={closeMenu}
            >
              💬 Join Sisterhood Chat
            </a>
          </li>
        </ul>

        {/* Actions on the Right: Dark Mode & Join Now */}
        <div className="nav__actions">
          {isHome && <HomepageSearch darkMode={darkMode} />}
          <button
            className="dark-mode-toggle"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className="btn btn--pill nav__join-btn"
            type="button"
            onClick={onCelebrate}
          >
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
}
