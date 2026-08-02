import { motion } from "framer-motion";
import { SunflowerIcon } from "./SunflowerIcon";
import { scrollToId } from "../utils/scroll";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-bark/10 bg-cream/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <button
          onClick={() => scrollToId("top", 0)}
          className="flex items-center gap-3"
        >
          <SunflowerIcon size={32} />

          <div className="text-left">
            <h1 className="font-hand text-2xl font-bold text-bark">
              Sunflower Cafe
            </h1>

            <p className="hidden text-xs text-bark/60 sm:block">
              Fresh • Homemade • Pure Veg
            </p>
          </div>
        </button>

        {/* Right */}

        <div className="flex items-center gap-3">

          <span className="hidden rounded-full bg-leaf/10 px-4 py-2 text-xs font-semibold text-leaf-deep md:flex">
            🌿 100% Pure Veg
          </span>

          <button
            onClick={() => scrollToId("menu")}
            className="rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-leaf"
          >
            View Menu
          </button>

        </div>

      </nav>
    </motion.header>
  );
}

export default Navbar;