"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "halalfitsis-dark-mode";

/**
 * Shared dark-mode state persisted to localStorage so the toggle
 * stays uniform across every page (no reset on navigation).
 */
export function useDarkMode(): [boolean, (v: boolean) => void] {
  const [darkMode, setDarkModeState] = useState(false);

  // Load the saved preference once on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setDarkModeState(saved === "true");
      }
    } catch {
      // localStorage unavailable — fall back to light mode
    }
  }, []);

  // Keep <body> class in sync
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const setDarkMode = useCallback((value: boolean) => {
    setDarkModeState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // ignore write failures
    }
  }, []);

  return [darkMode, setDarkMode];
}
