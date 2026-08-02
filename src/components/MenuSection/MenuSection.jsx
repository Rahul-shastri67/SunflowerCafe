import { GiSunflower } from "react-icons/gi";
import MenuCard from "../MenuCard/MenuCard";
import styles from "./MenuSection.module.css";

export default function MenuSection({ category }) {
  return (
    <section
      id={category.id}
      className={styles.section}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className={styles.heading}>
        <GiSunflower className={styles.headingIcon} aria-hidden="true" />
        <h2 id={`${category.id}-heading`} className={styles.headingText}>
          {category.label}
        </h2>
        <span className={styles.headingRule} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        {category.items.map((item, i) => (
          <MenuCard
            key={item.id}
            item={item}
            categoryId={category.id}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
