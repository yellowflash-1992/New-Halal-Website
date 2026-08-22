"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/dashboard/Navigation";
import DecorativeLeaves from "./components/dashboard/DecorativeLeaves";
import Hero from "./components/dashboard/Hero";
import FeatureCards from "./components/dashboard/FeatureCards";
import WhySection from "./components/dashboard/WhySection";
import Footer from "./components/dashboard/Footer";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <DecorativeLeaves />
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} onCelebrate={celebrate} />
      <main className={darkMode ? "dark-mode" : ""}>
        <Hero onCelebrate={celebrate} />
        <FeatureCards />
        <WhySection />
        <Footer />
      </main>
    </>
  );
}
