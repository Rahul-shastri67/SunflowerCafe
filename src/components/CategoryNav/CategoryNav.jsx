import { motion } from "framer-motion";
import { scrollToSection } from "../../constants";
import styles from "./CategoryNav.module.css";

export default function CategoryNav({ categories, activeId }) {
  return (
    <nav className={styles.nav} aria-label="Menu categories">
      <div className={styles.rail}>
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-current={isActive ? "true" : undefined}
              className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              onClick={() => scrollToSection(cat.id)}
            >
              {isActive && (
                <motion.span
                  className={styles.pillBg}
                  layoutId="activeCategoryPill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    layout: { type: "spring", stiffness: 420, damping: 34 },
                    opacity: { duration: 0.18 },
                  }}
                />
              )}
              <span className={styles.pillLabel}>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
