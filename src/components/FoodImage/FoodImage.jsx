import { memo, useState } from "react";
import {
  GiNoodles,
  GiCupcake,
  GiCoffeeCup,
  GiTeapot,
  GiSandwich,
  GiSlicedBread,
  GiRiceCooker,
  GiHotMeal,
  GiCorn,
  GiMeal,
} from "react-icons/gi";
import styles from "./FoodImage.module.css";

// One representative line-icon per category, shown when a verified photo
// isn't available yet — a deliberate, tidy placeholder rather than risking
// an inaccurate photo.
const CATEGORY_ICON = {
  momos: GiMeal,
  noodles: GiNoodles,
  maggi: GiNoodles,
  "korean-ramen": GiHotMeal,
  italian: GiNoodles,
  "quick-bites": GiSandwich,
  rice: GiRiceCooker,
  desserts: GiCupcake,
  bakery: GiSlicedBread,
  "cold-beverages": GiCoffeeCup,
  "hot-beverages": GiTeapot,
};

function FoodImagePlaceholder({ categoryId, name }) {
  const Icon = CATEGORY_ICON[categoryId] || GiCorn;
  return (
    <div className={styles.placeholder} role="img" aria-label={name}>
      <Icon className={styles.placeholderIcon} aria-hidden="true" />
    </div>
  );
}

function FoodImage({ src, alt, categoryId }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className={styles.frame}>
        <FoodImagePlaceholder categoryId={categoryId} name={alt} />
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      {!loaded && <div className={styles.skeleton} aria-hidden="true" />}
      <img
        className={`${styles.image} ${loaded ? styles.imageLoaded : ""}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default memo(FoodImage);
