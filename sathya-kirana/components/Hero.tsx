"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FDF6EC 0%, #FFF8F0 30%, #F5E6D0 60%, #FDF6EC 100%)",
      }}
    >
      {/* Decorative SVG motif overlay */}
      <div className="bg-motif-pattern absolute inset-0 opacity-60" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-32 -top-32 size-96 rounded-full bg-kirana-primary/8 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 size-96 rounded-full bg-kirana-accent/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/4 size-72 rounded-full bg-kirana-primary-light/6 blur-2xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glass decorations */}
      <motion.div
        className="absolute right-[10%] top-[15%] hidden size-24 rounded-2xl liquid-glass lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[8%] bottom-[25%] hidden size-16 rounded-xl liquid-glass lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute right-[20%] bottom-[20%] hidden size-20 rounded-full liquid-glass lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="liquid-glass-card mb-6 inline-flex items-center gap-2 rounded-pill px-5 py-2 text-sm font-medium text-kirana-primary">
              <Sparkles className="size-4" />
              4.8 ★ Rated on Google &middot; Pedda Amberpet
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-6 font-heading text-4xl leading-tight text-kirana-text sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Neighbourhood
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-kirana-primary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Store, Since Always
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-kirana-text-muted sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Fresh groceries, daily essentials, and everything your kitchen
            needs&mdash;with the warmth and trust of a family-run store.
            Quality items at reasonable prices, every single day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#products">
              <Button className="shimmer rounded-pill bg-kirana-primary px-8 py-6 text-base font-medium text-white shadow-warm transition-all duration-300 hover:bg-kirana-primary-light hover:shadow-warm-lg hover:scale-105">
                <ShoppingBasket className="mr-2 size-5" />
                See What We Stock
              </Button>
            </a>
            <a
              href={`https://wa.me/919848055614?text=${encodeURIComponent("Hi Sathya Kirana! I visited your website and would like to know more about your products. 🙏")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="liquid-glass rounded-pill border-2 border-kirana-primary/30 px-8 py-6 text-base font-medium text-kirana-primary transition-all duration-300 hover:border-kirana-primary hover:bg-kirana-primary/10 hover:scale-105"
              >
                <MessageCircle className="mr-2 size-5" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Trust badges — liquid glass cards */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {[
              { dot: "bg-kirana-success", label: "4.8 ★ Google Rating" },
              { dot: "bg-kirana-accent", label: "Quality & Fair Prices" },
              { dot: "bg-kirana-primary", label: "Fresh Stock Daily" },
            ].map((badge) => (
              <motion.span
                key={badge.label}
                className="liquid-glass-card flex items-center gap-2 rounded-pill px-4 py-2 text-sm text-kirana-text-muted"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className={`inline-block size-2 rounded-full ${badge.dot}`} />
                {badge.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
            fill="#FDF6EC"
          />
        </svg>
      </div>
    </section>
  );
}
