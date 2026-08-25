"use client";

import React from "react";

export interface LogoProps {
  variant?: "full" | "horizontal" | "icon" | "stacked";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showSubtitle?: boolean;
  isDark?: boolean;
}

export default function Logo({
  variant = "horizontal",
  size = "md",
  className = "",
  showSubtitle = true,
  isDark = false,
}: LogoProps) {
  // Dimensions based on size
  const sizeMap = {
    xs: { emblem: 26, titleSize: "14px", taglineSize: "7.5px" },
    sm: { emblem: 34, titleSize: "16px", taglineSize: "8.5px" },
    md: { emblem: 42, titleSize: "18.5px", taglineSize: "9px" },
    lg: { emblem: 56, titleSize: "23px", taglineSize: "10.5px" },
    xl: { emblem: 76, titleSize: "30px", taglineSize: "12px" },
  };

  const { emblem: emblemSize, titleSize, taglineSize } =
    sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`hfs-logo hfs-logo--${variant} hfs-logo--${size} ${isDark ? "hfs-logo--dark" : ""} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: variant === "stacked" ? "6px" : "9px",
      }}
    >
      {/* Modern Open Vector Mark (No enclosed ball/disk background) */}
      <div className="hfs-logo__emblem-wrap" style={{ flexShrink: 0 }}>
        <svg
          width={emblemSize}
          height={emblemSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hfs-logo__svg"
          aria-hidden="true"
        >
          <defs>
            {/* Rich Brand Gradients */}
            <linearGradient
              id="hfsPrimaryGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7a4a56" />
              <stop offset="45%" stopColor="#b06576" />
              <stop offset="100%" stopColor="#c97e8e" />
            </linearGradient>

            <linearGradient
              id="hfsCrescentGrad"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7a4a56" />
              <stop offset="50%" stopColor="#c97e8e" />
              <stop offset="100%" stopColor="#e8a598" />
            </linearGradient>

            <linearGradient
              id="hfsGoldGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f3e3cb" />
              <stop offset="50%" stopColor="#e8d5b7" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>

            <linearGradient
              id="hfsFigureGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7a4a56" />
              <stop offset="55%" stopColor="#8f4f60" />
              <stop offset="100%" stopColor="#c97e8e" />
            </linearGradient>

            <filter id="hfsSoftShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2.5"
                floodColor="#7a4a56"
                floodOpacity="0.18"
              />
            </filter>
          </defs>

          {/* 1. GRACEFUL ISLAMIC CRESCENT SWOOP */}
          <path
            d="M48 8 C25.9 8 8 25.9 8 48 C8 70.1 25.9 88 48 88 C34.5 80.5 25.5 65.5 25.5 48 C25.5 30.5 34.5 15.5 48 8 Z"
            fill="url(#hfsCrescentGrad)"
          />

          {/* 2. DELICATE WELLNESS LAUREL LEAVES ALONG THE CRESCENT */}
          <g fill="url(#hfsPrimaryGrad)">
            {/* Top Sprig */}
            <path d="M22 23 C19 18 23 15 26 16 C26 20 23 22 22 23 Z" />
            <path d="M17 31 C14 27 16 23 20 23 C21 27 19 30 17 31 Z" />
            {/* Bottom Sprig */}
            <path d="M17 65 C14 66 13 70 16 73 C18 71 19 68 17 65 Z" />
            <path d="M22 74 C20 77 22 81 26 80 C26 77 24 74 22 74 Z" />
          </g>

          {/* 3. BLOOMING WELLNESS LOTUS BLOSSOM NESTLED IN CRESCENT */}
          <g transform="translate(4, -1)">
            {/* Center Petal (Empowered, rising tall) */}
            <path
              d="M52 24 C47 36 47 50 52 64 C57 50 57 36 52 24 Z"
              fill="url(#hfsFigureGrad)"
            />
            {/* Inner Petal Glow Accent */}
            <path
              d="M52 32 C49.5 40 49.5 50 52 58 C54.5 50 54.5 40 52 32 Z"
              fill="#ffffff"
              opacity="0.35"
            />

            {/* Left Petal (Soft, protective curve) */}
            <path
              d="M50 44 C38 46 29 55 34 67 C43 67 49 58 50 44 Z"
              fill="url(#hfsFigureGrad)"
              opacity="0.9"
            />

            {/* Right Petal (Graceful bloom opening) */}
            <path
              d="M54 44 C66 46 75 55 70 67 C61 67 55 58 54 44 Z"
              fill="url(#hfsFigureGrad)"
              opacity="0.9"
            />

            {/* Outer Left Bloom Leaf */}
            <path
              d="M48 54 C36 59 30 68 36 74 C44 73 48 66 48 54 Z"
              fill="url(#hfsPrimaryGrad)"
              opacity="0.75"
            />

            {/* Outer Right Bloom Leaf */}
            <path
              d="M56 54 C68 59 74 68 68 74 C60 73 56 66 56 54 Z"
              fill="url(#hfsPrimaryGrad)"
              opacity="0.75"
            />

            {/* Lotus Calyx / Base Support */}
            <path
              d="M42 67 C48 71 56 71 62 67 C58 73 46 73 42 67 Z"
              fill="url(#hfsGoldGrad)"
            />
          </g>

          {/* 4. SPARKLE STARS OF EXCELLENCE (IHSAN) */}
          <path
            d="M74 15 C74 18 75.5 19.5 78.5 19.5 C75.5 19.5 74 21 74 24 C74 21 72.5 19.5 69.5 19.5 C72.5 19.5 74 18 74 15 Z"
            fill="url(#hfsGoldGrad)"
          />
          <circle cx="83" cy="25" r="1.5" fill="url(#hfsGoldGrad)" opacity="0.85" />
          <circle cx="34" cy="16" r="1.2" fill="url(#hfsGoldGrad)" opacity="0.75" />

          {/* SISTERHOOD FLOURISH PETAL AT BASE */}
          <path
            d="M48 78 C46.5 76.5 40 71.5 40 67.5 C40 65 42 63 44.5 63 C46 63 47.5 64 48 65 C48.5 64 50 63 51.5 63 C54 63 56 65 56 67.5 C56 71.5 49.5 76.5 48 78 Z"
            fill="url(#hfsPrimaryGrad)"
            opacity="0.92"
          />
        </svg>
      </div>

      {/* Brand Logotype */}
      {variant !== "icon" && (
        <div
          className="hfs-logo__text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: variant === "stacked" ? "center" : "flex-start",
            lineHeight: 1.05,
          }}
        >
          <div
            className="hfs-logo__title"
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "3.5px",
              fontFamily:
                "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
              fontSize: titleSize,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            <span className="hfs-logo__halal" style={{ color: "var(--plum)" }}>
              Halal
            </span>
            <span
              className="hfs-logo__fitsis"
              style={{
                color: "var(--rose-deep)",
                fontFamily:
                  "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              Fit-Sis
            </span>
            <span
              className="hfs-logo__dot"
              style={{
                display: "inline-block",
                width: "4.5px",
                height: "4.5px",
                borderRadius: "50%",
                background: "var(--rose)",
                marginLeft: "1px",
              }}
              aria-hidden="true"
            />
          </div>

          {showSubtitle && (
            <span
              className="hfs-logo__tagline"
              style={{
                fontSize: taglineSize,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                marginTop: "2px",
                fontFamily:
                  "var(--font-nunito-sans), 'Nunito Sans', system-ui, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Sisterhood &bull; Wellness
            </span>
          )}
        </div>
      )}
    </div>
  );
}
