"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Heart } from "lucide-react";

function useObfuscatedEmail(parts: string[]): string {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(parts.join(""));
  }, [parts]);
  return email;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const managerEmail = useObfuscatedEmail([
    "mana",
    "ger@",
    "sathya",
    "kirana",
    ".qzz",
    ".io",
  ]);

  return (
    <footer className="bg-kirana-text text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl text-white">
              Sathya Kirana & General Store
            </h3>
            <p className="mt-1 text-sm text-kirana-accent">
              आपका भरोसेमंद किराना
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Quality groceries, daily essentials, and household items at fair
              prices. Serving the Pedda Amberpet community with trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kirana-accent">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kirana-accent">
              Store Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <Clock className="mt-0.5 size-4 shrink-0 text-kirana-accent" />
                <div>
                  <span className="text-white">Every Day</span>
                  <span className="text-white/40"> · </span>
                  <span className="text-white/60">6:00 AM – 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Phone className="mt-0.5 size-4 shrink-0 text-kirana-accent" />
                <a
                  href="tel:+919848055614"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  098480 55614
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-kirana-accent">
              Visit Us
            </h4>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0 text-kirana-accent" />
              <span className="text-white/60">
                Pedda Amberpet, Plot No 127,
                <br />
                Yadadri Colony, Hyderabad,
                <br />
                Telangana 501513
              </span>
            </div>
            {managerEmail && (
              <a
                href={`mailto:${managerEmail}`}
                className="mt-3 inline-block text-sm text-white/60 transition-colors hover:text-white"
              >
                ✉ {managerEmail}
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Sathya Kirana & General Store. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-white/40">
            Made with{" "}
            <Heart className="inline size-3.5 fill-kirana-primary text-kirana-primary" />{" "}
            by Yash
          </p>
        </div>
      </div>
    </footer>
  );
}
