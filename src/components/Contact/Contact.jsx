import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiExternalLink } from "react-icons/fi";
import { CAFE } from "../../data/menuData";
import styles from "./Contact.module.css";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CAFE.mapsQuery)}&z=14&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CAFE.mapsQuery)}`;

const rows = [
  {
    icon: FiMapPin,
    label: "Find us",
    content: <span>{CAFE.address}</span>,
  },
  {
    icon: FiPhone,
    label: "Call us",
    content: (
      <span>
        {CAFE.phones.map((p, i) => (
          <span key={p}>
            <a href={`tel:${p.replace(/\s+/g, "")}`}>{p}</a>
            {i < CAFE.phones.length - 1 ? "  ·  " : ""}
          </span>
        ))}
      </span>
    ),
  },
  {
    icon: FiMail,
    label: "Write to us",
    content: <a href={`mailto:${CAFE.email}`}>{CAFE.email}</a>,
  },
  {
    icon: FiClock,
    label: "Open",
    content: <span>{CAFE.hours}</span>,
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    content: (
      <a href={CAFE.instagramUrl} target="_blank" rel="noreferrer noopener">
        {CAFE.instagram}
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.heading}>Visit us</h2>
          <p className={styles.subheading}>
            A little cafe under the sunflowers — drop by for a warm cup.
          </p>

          <dl className={styles.rows}>
            {rows.map(({ icon: Icon, label, content }) => (
              <div className={styles.row} key={label}>
                <span className={styles.rowIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <dt className={styles.rowLabel}>{label}</dt>
                  <dd className={styles.rowContent}>{content}</dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className={styles.mapWrap}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <a
            className={styles.mapLink}
            href={mapLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in Maps <FiExternalLink aria-hidden="true" />
          </a>
          <iframe
            className={styles.map}
            title={`${CAFE.name} location`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
