export function scrollHandler(navWrapRef: HTMLDivElement | null) {
  // Add initial class for opacity 0.1 at top
  if (navWrapRef) {
    navWrapRef.classList.add("at-top");
  }

  function handleScroll() {
    if (!navWrapRef) return;

    const scrollY = window.scrollY;

    if (scrollY > 10) {
      // User has started scrolling, change to opacity 0.9
      navWrapRef.classList.remove("at-top");
      navWrapRef.classList.add("scrolling-up");
    } else {
      // Back at top, change to opacity 0.1
      navWrapRef.classList.remove("scrolling-up");
      navWrapRef.classList.add("at-top");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Return object with removeListener method
  return {
    removeListener: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}
