"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Oggu Shivani",
    rating: 5,
    text: "Well-stocked general store with groceries, household items, and daily needs. Friendly service and fair prices.",
    timeAgo: "Recently",
    verified: true,
  },
  {
    name: "Boya Praveen",
    rating: 5,
    text: "Quality items and reasonable prices. This is my go-to store for all daily essentials. Yash bhaiya always keeps the best stock.",
    timeAgo: "5 months ago",
    verified: true,
  },
  {
    name: "Yuvana Ganga",
    rating: 5,
    text: "Quality is good. I have been coming here for a while and the consistency is amazing. Always find what I need.",
    timeAgo: "5 months ago",
    verified: true,
  },
  {
    name: "Vijay Kumar",
    rating: 5,
    text: "Best kirana store in Pedda Amberpet area. Fresh products, fair pricing, and very helpful staff. Highly recommended!",
    timeAgo: "10 months ago",
    verified: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
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
            Google Reviews
          </span>
          <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
            4.8 ★ Rated by Our Customers
          </h2>
          <p className="mt-4 text-kirana-text-muted">
            Real reviews from real customers on Google. We are proud of every
            star we have earned.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((review) => (
            <motion.div key={review.name} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group h-full liquid-glass-card overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:glow-accent">
                  <CardContent className="relative flex h-full flex-col p-6">
                    {/* Quote icon with glass effect */}
                    <div className="mb-4 flex size-10 items-center justify-center rounded-xl liquid-glass">
                      <Quote className="size-5 text-kirana-accent" strokeWidth={1.5} />
                    </div>

                    {/* Review text */}
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-kirana-text-muted">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, type: "spring" }}
                        >
                          <Star
                            className="size-4 fill-kirana-accent text-kirana-accent"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-t border-white/30 pt-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-kirana-primary to-kirana-primary-light font-heading text-sm text-white">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-bold text-kirana-text">
                            {review.name}
                          </p>
                          {review.verified && (
                            <BadgeCheck className="size-3.5 text-blue-500" />
                          )}
                        </div>
                        <p className="text-xs text-kirana-text-muted">
                          {review.timeAgo}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google badge */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="liquid-glass-card inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm text-kirana-text-muted">
            <span className="font-bold text-kirana-text">4.8</span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-kirana-accent text-kirana-accent" />
              ))}
            </span>
            on Google &middot; 5 Reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
}
