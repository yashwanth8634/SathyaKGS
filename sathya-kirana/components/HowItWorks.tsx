"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, ShoppingBag } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse Our Categories",
    description:
      "Check out what we stock — from rice and dal to personal care. See our full range and make your list.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Call or WhatsApp Us",
    description:
      "Have a question about stock? Want to check availability? Give us a call at 098480 55614 or drop a WhatsApp message.",
  },
  {
    step: "03",
    icon: ShoppingBag,
    title: "Visit & Pick Up",
    description:
      "Walk into our store at Pedda Amberpet, Yadadri Colony. We are open 6 AM to 10 PM, ready to serve you.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
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
            Simple & Easy
          </span>
          <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-kirana-text-muted">
            Getting your groceries has never been this easy. Three simple steps
            and you are done.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative grid gap-8 md:grid-cols-3 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connector lines — desktop only */}
          <div className="absolute left-0 right-0 top-20 hidden md:block">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-20">
              <motion.div
                className="h-0.5 flex-1 bg-gradient-to-r from-kirana-primary/30 via-kirana-accent/40 to-kirana-primary/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step icon with liquid glass */}
              <motion.div
                className="relative z-10 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="liquid-glass-strong flex size-16 items-center justify-center rounded-2xl">
                  <item.icon
                    className="size-7 text-kirana-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-kirana-primary to-kirana-primary-light text-xs font-bold text-white shadow-warm-sm">
                  {item.step}
                </span>
              </motion.div>

              <h3 className="mb-3 text-lg font-bold text-kirana-text">
                {item.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-kirana-text-muted">
                {item.description}
              </p>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="my-4 h-8 w-0.5 bg-gradient-to-b from-kirana-primary/30 to-kirana-accent/30 md:hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`https://wa.me/919848055614?text=${encodeURIComponent("Hi Sathya Kirana! I would like to check availability of some items. 🙏")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="shimmer rounded-pill bg-kirana-primary px-8 py-6 text-base font-medium text-white shadow-warm transition-all duration-300 hover:bg-kirana-primary-light hover:shadow-warm-lg hover:scale-105">
              <MessageCircle className="mr-2 size-5" />
              Chat With Us on WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
