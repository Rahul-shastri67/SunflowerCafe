import { motion } from "framer-motion";
import { MenuCard } from "./MenuCard";
import { SunflowerIcon } from "./SunflowerIcon";

export function MenuSection({ category, items }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-40 pt-10 first:pt-6 sm:pt-12"
    >
      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="mb-6 flex items-center gap-3"
      >
        <SunflowerIcon size={24} />

        <h2 className="font-hand text-3xl font-bold text-bark">
          {category.name}
        </h2>

        <div className="h-px flex-1 bg-bark/10" />
      </motion.div>

      {/* Cards */}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {items.map((item, index) => (
          <MenuCard
            key={item.name}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default MenuSection;