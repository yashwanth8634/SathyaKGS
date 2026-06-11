"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, IndianRupee, ShoppingBag, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Fresh Daily Stock",
    description:
      "We source our vegetables, fruits, and dairy fresh every morning from trusted local suppliers. No cold storage, no stale goods.",
    gradient: "from-green-400/20 to-emerald-500/10",
  },
  {
    icon: IndianRupee,
    title: "Fair & Honest Prices",
    description:
      "No MRP markups, no hidden charges. We believe in neighbourhood pricing that keeps your monthly budget happy.",
    gradient: "from-amber-400/20 to-yellow-500/10",
  },
  {
    icon: ShoppingBag,
    title: "Well-Stocked Shelves",
    description:
      "From groceries and household items to daily needs — our shelves are always full. Everything your home needs under one roof.",
    gradient: "from-orange-400/20 to-red-500/10",
  },
  {
    icon: Heart,
    title: "Friendly & Trusted",
    description:
      "Rated 4.8 stars on Google. Our customers love our quality items, reasonable prices, and the personal touch we bring.",
    gradient: "from-pink-400/20 to-rose-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ValueProps() {
  return (
    <section className="bg-kirana-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="liquid-glass-card mb-4 inline-block rounded-pill px-4 py-1.5 text-sm font-medium text-kirana-primary">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
            More Than Just a Store
          </h2>
          <p className="mt-4 text-kirana-text-muted">
            We are not just another shop on the street. We are your
            neighbourhood&apos;s kitchen partner.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group h-full liquid-glass-card overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:glow-primary">
                  <CardContent className="relative flex flex-col items-start p-6">
                    {/* Gradient background blob */}
                    <div className={`absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${item.gradient} blur-2xl transition-all duration-500 group-hover:size-40 group-hover:opacity-80`} />

                    <div className="relative mb-5 flex size-14 items-center justify-center rounded-2xl bg-kirana-primary/10 text-kirana-primary transition-all duration-300 group-hover:bg-kirana-primary group-hover:text-white group-hover:shadow-warm">
                      <item.icon className="size-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="relative mb-2 text-lg font-bold text-kirana-text">
                      {item.title}
                    </h3>
                    <p className="relative text-sm leading-relaxed text-kirana-text-muted">
                      {item.description}
                    </p>

                    {/* Bottom shine line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-kirana-primary/30 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
