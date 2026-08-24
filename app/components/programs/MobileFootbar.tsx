"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileFootbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isPrograms = pathname === "/programs";
  const isStories = pathname.startsWith("/stories") || pathname.startsWith("/success-stories");
  const isBlog = pathname.startsWith("/blog");
  const isAbout = pathname.startsWith("/about");

  return (
    <nav className="mobile-footbar" aria-label="Mobile bottom navigation">
      <Link
        href="/"
        className={`nav-item${isHome ? " is-active" : ""}`}
      >
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
        </svg>
        <span>Home</span>
      </Link>

      <div className="nav-divider" />

      <Link
        href="/programs"
        className={`nav-item${isPrograms ? " is-active" : ""}`}
      >
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20M4 19.5V5a2.5 2.5 0 012.5-2.5H20v14.5" />
          <path d="M12 8l3 3-3 3" />
        </svg>
        <span>Programs</span>
      </Link>

      <div className="nav-divider" />

      <Link
        href="/stories"
        className={`nav-item${isStories ? " is-active" : ""}`}
      >
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>Stories</span>
      </Link>

      <div className="nav-divider" />

      <Link
        href="/blog"
        className={`nav-item${isBlog ? " is-active" : ""}`}
      >
        <div className="icon-wrapper">
          <svg
            className="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
          <span className="notification-dot" />
        </div>
        <span>Blog</span>
      </Link>
      <div className="nav-divider" />

      <Link
        href="/about"
        className={`nav-item${isAbout ? " is-active" : ""}`}
      >
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
        <span>About</span>
      </Link>
    </nav>
  );
}
