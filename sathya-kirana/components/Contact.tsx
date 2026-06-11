"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

function useObfuscatedEmail(parts: string[]): string {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(parts.join(""));
  }, [parts]);
  return email;
}

export default function Contact() {
  const managerEmail = useObfuscatedEmail([
    "mana",
    "ger@",
    "sathya",
    "kirana",
    ".qzz",
    ".io",
  ]);
  const supportEmail = useObfuscatedEmail([
    "sup",
    "port@",
    "sathya",
    "kirana",
    ".qzz",
    ".io",
  ]);

  return (
    <section id="contact" className="bg-kirana-bg-alt py-20 sm:py-28">
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
            Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl text-kirana-text sm:text-4xl lg:text-5xl">
            Visit Us or Say Hello
          </h2>
          <p className="mt-4 text-kirana-text-muted">
            Walk into our store or reach out through WhatsApp, call, or email.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* WhatsApp & Phone Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="h-full liquid-glass-card overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:glow-primary">
              <CardContent className="flex flex-col items-start p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl liquid-glass text-green-600">
                  <MessageCircle className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-kirana-text">
                  WhatsApp & Call
                </h3>
                <p className="mb-2 text-sm text-kirana-text-muted">
                  The quickest way to reach us. Ask about stock, check
                  availability, or just say hello.
                </p>
                <a
                  href="tel:+919848055614"
                  className="mb-4 flex items-center gap-2 text-sm font-medium text-kirana-primary hover:underline"
                >
                  <Phone className="size-4" />
                  098480 55614
                </a>
                <a
                  href={`https://wa.me/919848055614?text=${encodeURIComponent("Hi Sathya Kirana! I have a question about your store. 🙏")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button className="shimmer rounded-pill bg-green-600 text-white hover:bg-green-700">
                    <MessageCircle className="mr-2 size-4" />
                    Open WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="h-full liquid-glass-card overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:glow-accent">
              <CardContent className="flex flex-col items-start p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl liquid-glass text-kirana-primary">
                  <Mail className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-kirana-text">
                  Email Us
                </h3>
                <div className="mb-4 space-y-2 text-sm text-kirana-text-muted">
                  <div className="flex items-center gap-2">
                    <Phone className="size-3.5 text-kirana-primary" />
                    <span>Manager: </span>
                    {managerEmail && (
                      <a
                        href={`mailto:${managerEmail}`}
                        className="text-kirana-primary underline-offset-2 hover:underline"
                      >
                        {managerEmail}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-3.5 text-kirana-accent" />
                    <span>Support: </span>
                    {supportEmail && (
                      <a
                        href={`mailto:${supportEmail}`}
                        className="text-kirana-primary underline-offset-2 hover:underline"
                      >
                        {supportEmail}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Store Hours & Address Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="h-full liquid-glass-card overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:glow-primary md:col-span-2 lg:col-span-1">
              <CardContent className="flex flex-col items-start p-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl liquid-glass text-kirana-accent">
                  <Clock className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-kirana-text">
                  Store Hours
                </h3>
                <div className="mb-4 space-y-1.5 text-sm text-kirana-text-muted">
                  <div className="flex justify-between gap-8">
                    <span>Every Day</span>
                    <span className="font-medium text-kirana-text">
                      6:00 AM – 10:00 PM
                    </span>
                  </div>
                </div>
                <div className="mt-auto flex items-start gap-2 border-t border-white/30 pt-4 text-sm text-kirana-text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-kirana-primary" />
                  <span>
                    Pedda Amberpet, Plot No 127, Yadadri Colony,
                    Hyderabad, Telangana 501513
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          className="mt-10 overflow-hidden rounded-2xl shadow-warm-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=8JGW%2BPX%20Hyderabad%2C%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sathya Kirana & General Store Location — Pedda Amberpet, Hyderabad"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
