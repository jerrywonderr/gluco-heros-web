import type { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const locales = ['he', 'en'] as const;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const description =
    locale === "he"
      ? "גלוקו הירואים הופכת ניהול סוכרת לכיף לילדים בגיל 4-8. תשלום חד פעמי (29.9 ש״ח). אפס איסוף נתונים. שחק 6 משחקים, זכה בפרסים, והפוך להירו עם לאו, פיונה או אלי!"
      : "Glucoheros makes diabetes management fun for kids ages 4-8. One-time payment (29.9 ILS). Zero data collection. Play 6 games, earn rewards, and become a hero with Leo, Fiona, or Ellie!";

  return {
    title:
      locale === "he"
        ? "גלוקו הירואים - ניהול סוכרת משחקי לילדים"
        : "Glucoheros - Gamified Diabetes Management for Kids",
    description,
    keywords:
      locale === "he"
        ? "ניהול סוכרת, אפליקציה לילדים, חינוך סוכרת, משחק משחקי, מעקב סוכר בדם"
        : "diabetes management, kids app, diabetes education, gamified learning, blood sugar tracking, type 1 diabetes",
    authors: [{ name: "Glucoheros Team" }],
    creator: "Glucoheros",
    publisher: "Glucoheros",
    robots: "index, follow",
    icons: {
      icon: "/splash-icon.png",
      apple: "/splash-icon.png",
      shortcut: "/splash-icon.png",
    },
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      url: `https://glucoheros.app/${locale}`,
      siteName: "Glucoheros",
      title:
        locale === "he"
          ? "גלוקו הירואים - הפוך ניהול סוכרת לכיף"
          : "Glucoheros - Make Diabetes Management Fun",
      description,
      images: [
        {
          url: "/splash-icon.png",
          width: 1200,
          height: 630,
          alt:
            locale === "he"
              ? "גלוקו הירואים - משחק ניהול סוכרת לילדים"
              : "Glucoheros - Diabetes Management Game for Kids",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "he"
          ? "גלוקו הירואים - הפוך ניהול סוכרת לכיף"
          : "Glucoheros - Make Diabetes Management Fun",
      description,
      images: ["/splash-icon.png"],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Glucoheros",
    },
    applicationName: "Glucoheros",
    category: "health",
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Sans+MS:wght@400;700&family=Fredoka:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Glucoheros",
              description:
                "Gamified diabetes management app for children ages 4-8",
              url: "https://glucoheros.app",
              applicationCategory: "HealthApplication",
              offers: {
                "@type": "Offer",
                price: "29.9",
                priceCurrency: "ILS",
                name: "Lifetime Access",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
              operatingSystem: "iOS, Android",
              screenshot: "https://glucoheros.app/splash-icon.png",
              softwareVersion: "1.0.0",
              author: {
                "@type": "Organization",
                name: "Glucoheros Team",
              },
            }),
          }}
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://glucoheros.app" />
        {/* Additional SEO */}
        <meta name="theme-color" content="#317CA2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Glucoheros" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
