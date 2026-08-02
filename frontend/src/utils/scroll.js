let lenisInstance = null;

/**
 * Save Lenis instance
 */
export function setLenis(instance) {
  lenisInstance = instance;
}

/**
 * Scroll to any section by id
 */
export function scrollToId(id, offset = -96) {
  const element = document.getElementById(id);

  if (!element) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, {
      offset,
      duration: 1.1,
    });
  } else {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/**
 * Scroll to top
 */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, {
      duration: 1,
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

export default {
  setLenis,
  scrollToId,
  scrollToTop,
};