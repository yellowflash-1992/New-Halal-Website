"use client";

import { useState } from "react";
import Navigation from "./components/dashboard/Navigation";
import DecorativeLeaves from "./components/dashboard/DecorativeLeaves";
import Hero from "./components/dashboard/Hero";
import FeatureCards from "./components/dashboard/FeatureCards";
import StoriesPreview from "./components/dashboard/StoriesPreview";
import WhySection from "./components/dashboard/WhySection";
import Footer from "./components/dashboard/Footer";
import { useDarkMode } from "./helpers/useDarkMode";

export default function Page() {
  const [darkMode, setDarkMode] = useDarkMode();

  function celebrate(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    const original = btn.textContent;
    btn.textContent = "Welcome, sister! \u2764";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1600);
  }

  return (
    <>
      <DecorativeLeaves />
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} onCelebrate={celebrate} />
      <main className={darkMode ? "dark-mode" : ""}>
        <Hero onCelebrate={celebrate} />
        <FeatureCards />
        <StoriesPreview />
        <WhySection />
        <Footer />
      </main>
    </>
  );
}
