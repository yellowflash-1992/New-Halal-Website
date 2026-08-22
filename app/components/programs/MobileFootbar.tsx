"use client";

import { usePathname, useRouter } from "next/navigation";

export default function MobileFootbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  const isPrograms = pathname === "/programs";
  const isBlog = pathname.startsWith("/blog");

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternalOrHash = false,
  ) => {
    if (isExternalOrHash) {
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      return;
    }

    e.preventDefault();
    router.push(href);
  };

  return (
    <nav className="mobile-footbar" aria-label="Mobile bottom navigation">
      <a
        href="/"
        className={`nav-item${isHome ? " is-active" : ""}`}
        onClick={(e) => handleNav(e, "/")}
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
      </a>

      <div className="nav-divider" />

      <a
        href="/programs"
        className={`nav-item${isPrograms ? " is-active" : ""}`}
        onClick={(e) => handleNav(e, "/programs")}
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
      </a>

      <div className="nav-divider" />

      <a
        href="/blog"
        className={`nav-item${isBlog ? " is-active" : ""}`}
        onClick={(e) => {
          if (isBlog) {
            handleNav(e, "#community", true);
          } else {
            handleNav(e, "/blog");
          }
        }}
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
        <span>Community</span>
      </a>

      <div className="nav-divider" />

      <a
        href="#programs-about"
        className="nav-item"
        onClick={(e) => handleNav(e, "#programs-about", true)}
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
      </a>
    </nav>
  );
}
