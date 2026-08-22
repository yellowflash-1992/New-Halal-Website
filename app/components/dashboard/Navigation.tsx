"use client";

import { useState, useRef, useEffect } from "react";
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
            <a
              href="/"
              className={isHome ? "is-active" : ""}
              onClick={(e) => {
                closeMenu();
                if (!isHome) {
                  e.preventDefault();
                  router.push("/");
                }
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/programs"
              className={isProgramsPage ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                if (!isProgramsPage) {
                  router.push("/programs");
                }
                closeMenu();
              }}
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className={isBlogPage ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                if (!isBlogPage) {
                  router.push("/blog");
                }
                closeMenu();
              }}
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#stories" onClick={closeMenu}>
              Success Stories
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                closeMenu();
                if (!isHome) {
                  e.preventDefault();
                  router.push("/#about");
                } else {
                  scrollTo(e, "#about");
                }
              }}
            >
              About
            </a>
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