import { CATEGORIES } from "../data/menu";
import { SunflowerIcon } from "./SunflowerIcon";

export function Marquee() {
  // Duplicate for infinite scrolling
  const marqueeItems = [...CATEGORIES, ...CATEGORIES];

  return (
    <section
      className="overflow-hidden border-y border-bark/10 bg-bark py-4"
      aria-label="Menu Categories"
    >
      <div className="marquee-track flex w-max items-center">

        {marqueeItems.map((category, index) => (
          <div
            key={`${category.id}-${index}`}
            className="mx-6 flex items-center gap-6 whitespace-nowrap"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cream">
              {category.name}
            </span>

            <SunflowerIcon
              size={16}
              className="opacity-80"
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default Marquee;