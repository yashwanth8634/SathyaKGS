"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Flame,
  Droplets,
  Cookie,
  Sparkles,
  Milk,
  Coffee,
  SprayCan,
} from "lucide-react";

const categories = [
  {
    name: "Rice & Dal",
    description: "Basmati, Sona Masoori, Toor, Moong, and more",
    icon: Wheat,
    color: "bg-amber-50 text-amber-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(217,119,6,0.1)]",
  },
  {
    name: "Spices & Masalas",
    description: "Turmeric, chilli, garam masala, whole spices",
    icon: Flame,
    color: "bg-red-50 text-red-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]",
  },
  {
    name: "Oils & Ghee",
    description: "Sunflower, mustard, coconut, pure desi ghee",
    icon: Droplets,
    color: "bg-yellow-50 text-yellow-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]",
  },
  {
    name: "Snacks & Namkeen",
    description: "Biscuits, chips, mixture, chakli, murukku",
    icon: Cookie,
    color: "bg-orange-50 text-orange-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(234,88,12,0.1)]",
  },
  {
    name: "Personal Care",
    description: "Soap, shampoo, toothpaste, skincare basics",
    icon: Sparkles,
    color: "bg-pink-50 text-pink-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(219,39,119,0.1)]",
  },
  {
    name: "Dairy & Fresh",
    description: "Milk, curd, paneer, butter, fresh eggs",
    icon: Milk,
    color: "bg-blue-50 text-blue-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]",
  },
  {
    name: "Beverages",
    description: "Tea, coffee, health drinks, juices",
    icon: Coffee,
    color: "bg-emerald-50 text-emerald-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
  },
  {
    name: "Cleaning & Home",
    description: "Detergent, phenyl, scrubs, household items",
    icon: SprayCan,
    color: "bg-teal-50 text-teal-700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProductCategories() {
  return (
    <section id="products" className="bg-kirana-bg-alt py-20 sm:py-28">
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
            Our Shelves
          </span>
          <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
            Everything Your Home Needs
          </h2>
          <p className="mt-4 text-kirana-text-muted">
            From morning tea to night-time snacks, we stock it all. Walk in
            or call us to check availability.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className={`group relative cursor-default overflow-hidden rounded-xl liquid-glass-card p-6 transition-all duration-300 ${cat.hoverGlow}`}
              >
                <motion.div
                  className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${cat.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  whileHover={{ rotate: 6 }}
                >
                  <cat.icon className="size-6" strokeWidth={1.5} />
                </motion.div>
                <h3 className="mb-1.5 text-base font-bold text-kirana-text">
                  {cat.name}
                </h3>
                <p className="text-sm leading-relaxed text-kirana-text-muted">
                  {cat.description}
                </p>
                {/* Animated corner decoration */}
                <div className="absolute -bottom-3 -right-3 size-16 rounded-full bg-gradient-to-tl from-kirana-primary/8 to-transparent transition-all duration-500 group-hover:size-24 group-hover:from-kirana-primary/12" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
