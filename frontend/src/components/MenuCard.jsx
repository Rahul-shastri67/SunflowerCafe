import { memo } from "react";
import { motion } from "framer-motion";
import { FoodImage } from "./FoodImage";

const slug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function MenuCardComponent({ item, index }) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            delay: (index % 8) * 0.05,
          },
        },
      }}
      whileHover={{
        y: -8,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-warmwhite shadow-soft transition-all duration-300 hover:shadow-lift"
      data-testid={`menu-card-${slug(item.name)}`}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <FoodImage
          src={item.image}
          alt={item.name}
          className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Price Badge */}

        <div className="absolute right-3 top-3 rounded-full bg-sunflower px-3 py-1 text-sm font-bold text-bark shadow-lg">
          ₹{item.price}
        </div>

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col justify-between p-4">

        <div>

          <h3
            className="text-base font-bold leading-snug text-bark"
            data-testid={`menu-item-name-${slug(item.name)}`}
          >
            {item.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-bark/60">
            Freshly prepared with premium ingredients and served hot for
            the best cafe experience.
          </p>

        </div>

        <div className="mt-5 flex items-center justify-between">

          <span
            className="font-hand text-2xl font-bold text-leaf-deep"
            data-testid={`menu-item-price-${slug(item.name)}`}
          >
            ₹{item.price}
          </span>

          <button className="rounded-full bg-bark px-4 py-2 text-xs font-semibold text-white transition hover:bg-leaf">
            Order
          </button>

        </div>

      </div>

    </motion.article>
  );
}

export const MenuCard = memo(MenuCardComponent);

export default MenuCard;