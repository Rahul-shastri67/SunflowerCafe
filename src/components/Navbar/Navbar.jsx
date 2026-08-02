import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiSunflower } from "react-icons/gi";
import { CAFE } from "../../data/menuData";
import { scrollToSection } from "../../constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <GiSunflower className={styles.logoIcon} aria-hidden="true" />
          <span>{CAFE.name}</span>
        </a>

        <div className={styles.actions}>
          <span className={styles.vegBadge}>
            <span className={styles.vegDot} aria-hidden="true" />
            100% Pure Veg
          </span>
          <motion.button
            type="button"
            className={styles.menuBtn}
            onClick={() => scrollToSection("momos")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Menu
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
