// Layout constants shared between CSS and JS (scroll offset calculations).
export const NAV_HEIGHT = 64;
export const NAV_HEIGHT_MOBILE = 58;
export const CAT_BAR_HEIGHT = 56;
export const MOBILE_BREAKPOINT = 767;

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const mobile = isMobileViewport();
  const offset = mobile ? NAV_HEIGHT_MOBILE + 12 : NAV_HEIGHT + CAT_BAR_HEIGHT + 16;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};
