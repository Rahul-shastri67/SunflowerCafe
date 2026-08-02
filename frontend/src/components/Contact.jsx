import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import { CAFE } from "../data/menu";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    value: CAFE.address,
  },
  {
    icon: Phone,
    title: "Phone",
    value: CAFE.phones.join(" • "),
  },
  {
    icon: Mail,
    title: "Email",
    value: CAFE.email,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: CAFE.hours,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-beige py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-sunflower/20 px-4 py-2 text-sm font-semibold text-bark">
            Contact Us
          </span>

          <h2 className="mt-5 font-hand text-5xl text-bark">
            Visit Sunflower Cafe
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-bark/70">
            We'd love to welcome you. Visit us with your friends and family
            for delicious vegetarian food, refreshing beverages and a cozy
            cafe experience.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <div className="space-y-6">

              {contactInfo.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 rounded-3xl bg-white p-5 shadow-soft"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sunflower text-bark">

                      <Icon size={24} />

                    </div>

                    <div>

                      <h3 className="text-lg font-bold text-bark">
                        {item.title}
                      </h3>

                      <p className="mt-1 leading-7 text-bark/70">
                        {item.value}
                      </p>

                    </div>

                  </div>
                );
              })}

              {/* Instagram */}

              <div className="flex items-start gap-5 rounded-3xl bg-white p-5 shadow-soft">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sunflower text-bark">

                  <FaInstagram size={24} />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-bark">
                    Instagram
                  </h3>

                  <a
                    href={CAFE.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block font-semibold text-leaf transition hover:text-brick"
                  >
                    Visit our Instagram →
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[32px] shadow-lift"
          >

            <iframe
              title="Sunflower Cafe Map"
              src={CAFE.mapEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[520px] w-full border-0"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;