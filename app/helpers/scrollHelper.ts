export function scrollHandler(navWrapRef: HTMLDivElement | null) {
  if (!navWrapRef || typeof window === "undefined") {
    return {
      removeListener: () => {},
    };
  }

  let isAtTop = true;
  let rafId: number | null = null;

  // Set initial state without unnecessary layout thrashing
  navWrapRef.classList.add("at-top");

  function update() {
    if (!navWrapRef) return;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const shouldBeAtTop = scrollY <= 10;

    if (shouldBeAtTop !== isAtTop) {
      isAtTop = shouldBeAtTop;
      if (isAtTop) {
        navWrapRef.classList.remove("scrolling-up");
        navWrapRef.classList.add("at-top");
      } else {
        navWrapRef.classList.remove("at-top");
        navWrapRef.classList.add("scrolling-up");
      }
    }
    rafId = null;
  }

  function handleScroll() {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(update);
    }
  }

  // Use passive listener to avoid blocking main thread scrolling
  window.addEventListener("scroll", handleScroll, { passive: true });

  return {
    removeListener: () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
    },
  };
}
