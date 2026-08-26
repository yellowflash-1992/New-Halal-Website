"use client";

import React from "react";
import { getAssetPath } from "../../helpers/assetHelper";

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
    xs: { emblem: 32, titleSize: "16px" },
    sm: { emblem: 40, titleSize: "18px" },
    md: { emblem: 52, titleSize: "22px" },
    lg: { emblem: 68, titleSize: "26px" },
    xl: { emblem: 90, titleSize: "32px" },
  };

  const { emblem: emblemSize, titleSize } = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`hfs-logo hfs-logo--${variant} hfs-logo--${size} ${isDark ? "hfs-logo--dark" : ""} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: variant === "stacked" ? "8px" : "10px",
        flexDirection: variant === "stacked" ? "column" : "row",
      }}
    >
      <img
        src={getAssetPath("/new-logo.png")}
        alt="Halal Fit-Sis"
        style={{
          width: `${emblemSize}px`,
          height: `${emblemSize}px`,
          borderRadius: "50%",
          objectFit: "cover",
          border: "1.5px solid rgba(201, 126, 142, 0.35)",
          boxShadow: "0 4px 14px rgba(122, 74, 86, 0.2)",
          flexShrink: 0,
        }}
      />

      {variant !== "icon" && (
        <span
          className="hfs-logo__title"
          style={{
            fontFamily:
              "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            color: "var(--plum)",
          }}
        >
          Halal <span style={{ color: "var(--rose-deep)", fontStyle: "italic" }}>Fit-Sis</span>
        </span>
      )}
    </div>
  );
}

