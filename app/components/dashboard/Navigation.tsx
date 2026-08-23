"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { scrollHandler } from "../../helpers/scrollHelper";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  onCelebrate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Navigation({ darkMode, setDarkMode, onCelebrate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navWrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProgramsPage = pathname === "/programs";
  const isBlogPage = pathname.startsWith("/blog");

  useEffect(() => {
    function closeOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
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
  }

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header className="nav-wrap" ref={navWrapRef}>
      <nav className="nav container" aria-label="Primary navigation">
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
        <ul
          id="primary-navigation"
          className={`nav__links${menuOpen ? " is-open" : ""}`}
        >
          <li>
            <Link
              href="/"
              className={isHome ? "is-active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className={isProgramsPage ? "is-active" : ""}
              onClick={closeMenu}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={isBlogPage ? "is-active" : ""}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#programs"
              onClick={(e) => {
                closeMenu();
                if (isHome) {
                  scrollTo(e, "#programs");
                }
              }}
            >
              Success Stories
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              onClick={(e) => {
                closeMenu();
                if (isHome) {
                  scrollTo(e, "#about");
                }
              }}
            >
              About
            </Link>
          </li>
        </ul>
        <button
          className="dark-mode-toggle"
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="btn btn--pill" type="button" onClick={onCelebrate}>
          Join Now
        </button>
      </nav>
      <button
        className={`nav__backdrop${menuOpen ? " is-visible" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}