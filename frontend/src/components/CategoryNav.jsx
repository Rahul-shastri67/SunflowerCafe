import { motion } from "framer-motion";
import { CATEGORIES } from "../data/menu";
import { scrollToId } from "../utils/scroll";

/* ---------------- Desktop Category Navigation ---------------- */

export function CategoryNavDesktop({ active }) {
  return (
    <div className="sticky top-16 z-40 hidden border-b border-bark/10 bg-cream/95 backdrop-blur-md lg:block">
      <div className="no-scrollbar mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-3">

        {CATEGORIES.map((category) => {
          const isActive = active === category.id;

          return (
            <button
              key={category.id}
              onClick={() => scrollToId(category.id, -120)}
              className={`relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "text-bark"
                  : "text-bark-mute hover:text-bark"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="desktop-active-pill"
                  className="absolute inset-0 rounded-full bg-sunflower shadow-soft"
                  transition={{
                    duration: 0.3,
                  }}
                />
              )}

              <span className="relative z-10">
                {category.name}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
}

/* ---------------- Mobile Category Navigation ---------------- */

export function CategoryNavMobile({ active }) {
  return (
    <aside className="sticky top-24 self-start lg:hidden">

      <div className="no-scrollbar flex max-h-[calc(100vh-7rem)] flex-col gap-2 overflow-y-auto pr-1">

        {CATEGORIES.map((category) => {
          const isActive = active === category.id;

          return (
            <button
              key={category.id}
              onClick={() => scrollToId(category.id, -80)}
              className={`relative w-[92px] rounded-2xl px-2 py-3 text-center text-xs font-semibold transition-all duration-300
              ${
                isActive
                  ? "text-bark shadow-soft"
                  : "bg-white text-bark-mute"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-active-pill"
                  className="absolute inset-0 rounded-2xl bg-sunflower"
                  transition={{
                    duration: 0.3,
                  }}
                />
              )}

              <span className="relative z-10">
                {category.name}
              </span>
            </button>
          );
        })}

      </div>

    </aside>
  );
}

/* ---------------- Default Export ---------------- */

export default CategoryNavDesktop;