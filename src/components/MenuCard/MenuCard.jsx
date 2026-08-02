import { memo } from "react";
import { motion } from "framer-motion";
import FoodImage from "../FoodImage/FoodImage";
import styles from "./MenuCard.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: Math.min(i, 8) * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function MenuCard({ item, categoryId, index }) {
  return (
    <motion.article
      className={`${styles.card} menu-card`}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
    >
      <FoodImage
        src={item.image}
        alt={item.name}
        categoryId={categoryId}
      />
      <div className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>₹{item.price}</p>
      </div>
    </motion.article>
  );
}

export default memo(MenuCard);
