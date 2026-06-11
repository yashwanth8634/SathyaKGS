"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Star, value: "4.8★", label: "Google Rating" },
  { icon: Users, value: "500+", label: "Happy Families" },
  { icon: ShieldCheck, value: "5+", label: "Years of Trust" },
  { icon: MapPin, value: "1", label: "Neighbourhood Hub" },
];

export default function About() {
  return (
    <section id="about" className="bg-kirana-bg-alt py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="liquid-glass-card mb-4 inline-block rounded-pill px-4 py-1.5 text-sm font-medium text-kirana-primary">
              Our Story
            </span>
            <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
              A Store Built on{" "}
              <span className="text-kirana-primary">Trust</span>
            </h2>
            <div className="mt-6 space-y-4 text-kirana-text-muted">
              <p>
                Sathya Kirana & General Store started with a simple belief
                — every family deserves access to quality groceries at fair
                prices, right in their neighbourhood.
              </p>
              <p>
                Located at Pedda Amberpet, Plot No 127, Yadadri Colony in
                Hyderabad, our store has been serving the community with
                fresh produce, daily essentials, and household items. From
                a well-stocked general store with groceries to personal care
                products — we have got it all.
              </p>
              <p>
                Managed by Yash, we take pride in knowing our customers by
                name, remembering their preferences, and going the extra
                mile. Our 4.8-star Google rating is a testament to the
                quality items, reasonable prices, and friendly service that
                our customers have come to love.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid with liquid glass */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="liquid-glass-strong flex flex-col items-center rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-kirana-primary/10 text-kirana-primary transition-all duration-300">
                  <stat.icon className="size-6" strokeWidth={1.5} />
                </div>
                <motion.span
                  className="text-3xl font-heading text-kirana-primary"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2 + 0.1 * index,
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="mt-1 text-sm text-kirana-text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
