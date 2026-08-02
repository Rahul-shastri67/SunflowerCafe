import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { CAFE } from "../data/menu";
import { SunflowerIcon } from "./SunflowerIcon";

export function Footer() {
  return (
    <footer className="bg-bark text-cream">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <SunflowerIcon size={38} />

              <div>

                <h2 className="font-hand text-3xl font-bold">
                  {CAFE.name}
                </h2>

                <p className="text-sm text-cream/70">
                  {CAFE.tagline}
                </p>

              </div>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-cream/70">
              Fresh vegetarian food made with love.
              Come with your friends and family and enjoy
              a warm cafe experience.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-sunflower"
                />

                <span className="text-cream/75">
                  {CAFE.address}
                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="text-sunflower"
                />

                <span className="text-cream/75">
                  {CAFE.phones.join(" • ")}
                </span>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="text-sunflower"
                />

                <span className="text-cream/75">
                  {CAFE.email}
                </span>

              </div>

              <div className="flex gap-3">

                <Clock
                  size={18}
                  className="text-sunflower"
                />

                <span className="text-cream/75">
                  {CAFE.hours}
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Follow Us
            </h3>

            <a
              href={CAFE.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-cream/10 px-5 py-3 transition hover:bg-sunflower hover:text-bark"
            >

              <FaInstagram size={20} />

              <span>
                Follow on Instagram
              </span>

            </a>

            <p className="mt-6 text-sm text-cream/60">
              Stay updated with our latest dishes,
              offers and cafe moments.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-cream/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-3 text-sm text-cream/60 md:flex-row">

            <p>
              © {new Date().getFullYear()} {CAFE.name}. All Rights Reserved.
            </p>

            <p>
              Fresh • Homemade • Pure Vegetarian 🌻
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;