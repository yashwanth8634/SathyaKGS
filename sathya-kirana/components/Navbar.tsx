"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/919848055614?text=" +
  encodeURIComponent(
    "Hi Sathya Kirana! I visited your website and would like to know more about your products and services. 🙏"
  );

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6">
      <motion.nav
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          isScrolled
            ? "liquid-glass-strong shadow-warm-lg"
            : "liquid-glass shadow-warm-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        {/* Store Name */}
        <a href="#home" className="group flex flex-col" aria-label="Go to home">
          <span className="font-heading text-base leading-tight text-kirana-primary sm:text-lg lg:text-xl">
            Sathya Kirana & General Store
          </span>
          <span className="text-[10px] text-kirana-text-muted sm:text-xs">
            Pedda Amberpet, Hyderabad
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3.5 py-1.5 text-sm font-medium text-kirana-text transition-all duration-200 hover:bg-kirana-primary/10 hover:text-kirana-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="ml-2 rounded-xl bg-kirana-primary px-4 py-1.5 text-sm font-medium text-white shadow-warm-sm transition-all duration-200 hover:bg-kirana-primary-light hover:shadow-warm hover:scale-105"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="mr-1.5 size-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <button
                  className="inline-flex size-9 items-center justify-center rounded-xl text-kirana-text transition-colors hover:bg-kirana-primary/10"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </button>
              }
            />
            <SheetContent
              side="right"
              className="w-[280px] border-kirana-border bg-kirana-bg"
              showCloseButton={false}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2 pt-8">
                <div className="mb-6 flex items-center justify-between px-2">
                  <span className="font-heading text-lg text-kirana-primary">
                    Sathya Kirana
                  </span>
                  <SheetClose
                    render={
                      <button
                        className="inline-flex size-8 items-center justify-center rounded-lg text-kirana-text-muted transition-colors hover:bg-kirana-primary/10"
                        aria-label="Close navigation menu"
                      >
                        <X className="size-5" />
                      </button>
                    }
                  />
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-kirana-text transition-colors duration-200 hover:bg-kirana-primary/10 hover:text-kirana-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4"
                >
                  <Button className="w-full rounded-pill bg-kirana-primary text-white hover:bg-kirana-primary-light">
                    <MessageCircle className="mr-2 size-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    </header>
  );
}
