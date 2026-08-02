import { GiSunflower } from "react-icons/gi";
import { CAFE } from "../../data/menuData";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logo}>
            <GiSunflower aria-hidden="true" className={styles.logoIcon} />
            <span>{CAFE.name}</span>
          </div>
          <p className={styles.address}>{CAFE.address}</p>
        </div>

        <div className={styles.details}>
          <p>{CAFE.phones.join(" · ")}</p>
          <p>{CAFE.email}</p>
          <p>{CAFE.hours}</p>
          <p>
            <a
              href={CAFE.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.igLink}
            >
              {CAFE.instagram}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        © {year} {CAFE.name} · Fresh · Homemade · Pure Vegetarian
      </div>
    </footer>
  );
}
