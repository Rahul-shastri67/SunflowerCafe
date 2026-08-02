import { useEffect, useRef, useState } from "react";
import { NAV_HEIGHT, NAV_HEIGHT_MOBILE, CAT_BAR_HEIGHT, MOBILE_BREAKPOINT } from "../constants";

/**
 * Tracks which section (by id) is currently "active" as the user scrolls,
 * using IntersectionObserver so there's no scroll-event thrashing.
 *
 * The trigger line sits just below whatever is actually stuck to the top of
 * the viewport — navbar only on mobile (the category rail sits beside the
 * content, not above it), navbar + category bar on desktop/tablet.
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const ratios = useRef(new Map());

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    let observer;

    const getOffset = () =>
      window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
        ? NAV_HEIGHT_MOBILE + 8
        : NAV_HEIGHT + CAT_BAR_HEIGHT + 8;

    const build = () => {
      if (observer) observer.disconnect();
      const offsetPx = getOffset();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios.current.set(entry.target.id, entry.intersectionRatio);
          });

          let bestId = null;
          let bestRatio = 0;
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              bestId = entry.target.id;
            }
          });

          if (bestId) setActiveId(bestId);
        },
        {
          rootMargin: `-${offsetPx}px 0px -55% 0px`,
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    build();

    // Breakpoint changes (rotation, resize, devtools) shift where the
    // sticky headers end — rebuild the observer with the correct offset.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const onChange = () => build();
    mql.addEventListener("change", onChange);

    return () => {
      observer?.disconnect();
      mql.removeEventListener("change", onChange);
    };
  }, [sectionIds]);

  return activeId;
}
