import { motion } from "framer-motion";
import cafePhoto from "../../assets/cafe-hero.jpg";
import { CAFE } from "../../data/menuData";
import { scrollToSection } from "../../constants";
import styles from "./Hero.module.css";

const easeOut = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {CAFE.location}
          </span>
          <h1 className={styles.headline}>
            <span className={styles.headlineBrown}>Sunflower</span>
            <span className={styles.headlineGreen}>Cafe</span>
          </h1>
          <p className={styles.tagline}>{CAFE.tagline}</p>
          <motion.button
            type="button"
            className={styles.cta}
            onClick={() => scrollToSection("momos")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Explore Menu
            <span className={styles.ctaArrow} aria-hidden="true">↓</span>
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
        >
          <span className={styles.badge}>{CAFE.badge}</span>
          <img
            className={styles.photo}
            src={cafePhoto}
            alt="Sunflower Cafe — the café's brick storefront and courtyard seating in Ramnagar"
            width={1400}
            height={933}
            fetchpriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
