import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

import { SunflowerIcon } from "./SunflowerIcon";
import { CAFE } from "../data/menu";
import { scrollToId } from "../utils/scroll";

const lineVariant = {
  hidden: {
    y: "110%",
  },
  show: (index) => ({
    y: "0%",
    transition: {
      duration: 0.6,
      delay: 0.15 + index * 0.12,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "10%"]
  );

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden bg-cream pt-24 sm:pt-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-leaf-deep"
          >
            <SunflowerIcon size={16} />

            Ramnagar • Uttarakhand
          </motion.p>

          <h1 className="font-hand text-5xl font-bold leading-[1.05] text-bark sm:text-6xl lg:text-7xl">

            <span className="block overflow-hidden">

              <motion.span
                custom={0}
                variants={lineVariant}
                initial="hidden"
                animate="show"
                className="block"
              >
                Sunflower
              </motion.span>

            </span>

            <span className="block overflow-hidden">

              <motion.span
                custom={1}
                variants={lineVariant}
                initial="hidden"
                animate="show"
                className="block text-leaf-deep"
              >
                Cafe
              </motion.span>

            </span>

          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.55,
            }}
            className="mt-5 max-w-lg text-lg leading-8 text-bark-soft"
          >
            {CAFE.tagline}
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            className="mt-5 max-w-xl text-bark/70"
          >
            Enjoy freshly prepared vegetarian food, handcrafted beverages,
            bakery delights and a cozy cafe experience with your family
            and friends.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.9,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >

            <button
              onClick={() => scrollToId("menu")}
              className="group inline-flex items-center gap-3 rounded-full bg-bark px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-leaf"
            >
              Explore Menu

              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />

            </button>

            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full border border-bark px-8 py-4 text-sm font-semibold text-bark transition hover:bg-bark hover:text-white"
            >
              Visit Us
            </button>

          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="relative"
        >

          <div className="absolute -left-5 -top-5 z-20 rounded-2xl bg-sunflower px-5 py-3 font-hand text-lg font-bold text-bark shadow-soft">
            Fresh Every Day 🌻
          </div>

          <div className="overflow-hidden rounded-[34px] shadow-lift">

            <motion.img
              src="/images/cafe.webp"
              alt="Sunflower Cafe"
              style={{
                y: imageY,
                scale: 1.08,
              }}
              className="aspect-[4/3] w-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;