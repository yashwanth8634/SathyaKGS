import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const achiko = localFont({
  src: "../public/fonts/achiko.otf",
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const gilroyLight = localFont({
  src: "../public/fonts/Gilroy-Light.otf",
  variable: "--font-sans",
  display: "swap",
  weight: "300",
  preload: true,
});

const gilroyBold = localFont({
  src: "../public/fonts/Gilroy-ExtraBold.otf",
  variable: "--font-gilroy-bold",
  display: "swap",
  weight: "800",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#C8501A",
};

export const metadata: Metadata = {
  title: "Sathya Kirana & General Store – Grocery Shop in Pedda Amberpet, Hyderabad",
  description:
    "Sathya Kirana & General Store is your trusted neighbourhood grocery shop in Pedda Amberpet, Hyderabad. We offer fresh rice, dal, spices, cooking oils, dairy, snacks, and daily essentials at fair prices. Open every day 6:00 AM to 10:00 PM. Call or WhatsApp us at 098480 55614.",
  keywords: [
    "Sathya Kirana",
    "kirana store Pedda Amberpet",
    "grocery store Hyderabad",
    "general store near me",
    "supermarket Pedda Amberpet",
    "daily essentials Hyderabad",
    "grocery shop Yadadri Colony",
    "kirana store near me",
  ],
  metadataBase: new URL("https://sathyakirana.qzz.io"),
  openGraph: {
    title: "Sathya Kirana & General Store – Pedda Amberpet, Hyderabad",
    description:
      "Your trusted neighbourhood grocery shop in Pedda Amberpet, Hyderabad. Fresh groceries, daily essentials, and household items at fair prices. Open every day 6 AM – 10 PM.",
    url: "https://sathyakirana.qzz.io",
    siteName: "Sathya Kirana & General Store",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Kirana & General Store – Pedda Amberpet, Hyderabad",
    description:
      "Fresh groceries and daily essentials at fair prices. Visit us at Pedda Amberpet, Hyderabad. Open every day 6 AM – 10 PM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sathyakirana.qzz.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GroceryStore",
        name: "Sathya Kirana & General Store",
        image: "https://sathyakirana.qzz.io/og-image.jpg",
        "@id": "https://sathyakirana.qzz.io/#store",
        url: "https://sathyakirana.qzz.io",
        telephone: "+919848055614",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No 127, Yadadri Colony, Pedda Amberpet",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "501513",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.3204,
          longitude: 78.6366,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "06:00",
            closes: "22:00",
          },
        ],
        priceRange: "₹",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "5",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://sathyakirana.qzz.io/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the timings for Sathya Kirana & General Store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We are open every day from 6:00 AM to 10:00 PM.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Sathya Kirana & General Store located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our store is located at Plot No 127, Yadadri Colony, Pedda Amberpet, Hyderabad, Telangana 501513.",
            },
          },
          {
            "@type": "Question",
            name: "Does Sathya Kirana deliver groceries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Currently, we do not offer home delivery. However, you can walk in and shop, or place an order via WhatsApp and pick it up from our store.",
            },
          },
          {
            "@type": "Question",
            name: "What products are available at Sathya Kirana & General Store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We stock a wide variety of daily essentials including rice, dal, spices, masalas, cooking oils, ghee, snacks, personal care products, dairy, fresh items, beverages, and household cleaning supplies.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${achiko.variable} ${gilroyLight.variable} ${gilroyBold.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
