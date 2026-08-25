"use client";

import Navigation from "../components/dashboard/Navigation";
import DecorativeLeaves from "../components/dashboard/DecorativeLeaves";
import Footer from "../components/dashboard/Footer";
import ProgramsHero from "../components/programs/ProgramsHero";
import HalalFitKitchen from "../components/programs/HalalFitKitchen";
import FeaturedMeals from "../components/programs/FeaturedMeals";
import MealPlans from "../components/programs/MealPlans";
import WellnessTips from "../components/programs/WellnessTips";
import CommunityFooter from "../components/programs/CommunityFooter";
import MobileFootbar from "../components/programs/MobileFootbar";
import { useDarkMode } from "../helpers/useDarkMode";

export default function HalalFitKitchenPage() {
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
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCelebrate={celebrate}
      />

      <main className={darkMode ? "dark-mode kitchen-page" : "kitchen-page"}>
        <ProgramsHero />
        <HalalFitKitchen />
        <FeaturedMeals />
        <MealPlans />
        <WellnessTips />
        <CommunityFooter />
        <div className="programs-desktop-footer">
          <Footer />
        </div>
      </main>

      <MobileFootbar />
    </>
  );
}
