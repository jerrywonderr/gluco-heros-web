import type { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
      : "GlucoHero makes diabetes management fun for kids ages 4-8. One-time payment (29.9 ILS). Zero data collection. Play 6 games, earn rewards, and become a hero with Leo, Fiona, or Ellie!";

  return {
    title:
      locale === "he"
        ? "גלוקו הירואים - ניהול סוכרת משחקי לילדים"
        : "GlucoHero - Gamified Diabetes Management for Kids",
    description,
    keywords:
      locale === "he"
        ? "ניהול סוכרת, אפליקציה לילדים, חינוך סוכרת, משחק משחקי, מעקב סוכר בדם"
        : "diabetes management, kids app, diabetes education, gamified learning, blood sugar tracking, type 1 diabetes",
    authors: [{ name: "GlucoHero Team" }],
    creator: "GlucoHero",
    publisher: "GlucoHero",
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
      siteName: "GlucoHero",
      title:
        locale === "he"
          ? "גלוקו הירואים - הפוך ניהול סוכרת לכיף"
          : "GlucoHero - Make Diabetes Management Fun",
      description,
      images: [
        {
          url: "/splash-icon.png",
          width: 1200,
          height: 630,
          alt:
            locale === "he"
              ? "גלוקו הירואים - משחק ניהול סוכרת לילדים"
              : "GlucoHero - Diabetes Management Game for Kids",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "he"
          ? "גלוקו הירואים - הפוך ניהול סוכרת לכיף"
          : "GlucoHero - Make Diabetes Management Fun",
      description,
      images: ["/splash-icon.png"],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "GlucoHero",
    },
    applicationName: "GlucoHero",
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
        <meta name="apple-mobile-web-app-title" content="GlucoHero" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-gluco-blue">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-24 sm:h-20">
                {/* Logo - Bigger on all screens */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <img
                    src="/splash-icon.png"
                    alt="Glucoheros Logo"
                    className="w-16 h-16 sm:w-14 sm:h-14"
                  />
                  <a
                    href="/"
                    className="hidden sm:block text-lg sm:text-2xl font-bold text-gluco-blue hover:text-gluco-teal transition-colors whitespace-nowrap"
                  >
                    Glucoheros
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-4 lg:gap-8">
                  <a
                    href="/"
                    className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
                  >
                    {locale === "he" ? "בית" : "Home"}
                  </a>
                  <a
                    href="/support"
                    className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
                  >
                    {locale === "he" ? "תמיכה" : "Support"}
                  </a>
                  <a
                    href="/privacy"
                    className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
                  >
                    {locale === "he" ? "מדיניות פרטיות" : "Privacy"}
                  </a>
                  <a
                    href="/terms"
                    className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
                  >
                    {locale === "he" ? "תנאי שימוש" : "Terms"}
                  </a>
                </div>

                {/* Language Switcher & Mobile Menu */}
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />

                  {/* Mobile Hamburger Menu */}
                  <details className="md:hidden">
                    <summary className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors">
                      <svg
                        className="w-7 h-7 text-gluco-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </summary>
                    <div className="absolute right-0 top-full mt-0 w-48 bg-white rounded-b-lg shadow-xl border-t-4 border-gluco-blue">
                      <a
                        href="/"
                        className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                      >
                        {locale === "he" ? "בית" : "Home"}
                      </a>
                      <a
                        href="/support"
                        className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                      >
                        {locale === "he" ? "תמיכה" : "Support & FAQ"}
                      </a>
                      <a
                        href="/privacy"
                        className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                      >
                        {locale === "he" ? "מדיניות פרטיות" : "Privacy Policy"}
                      </a>
                      <a
                        href="/terms"
                        className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm"
                      >
                        {locale === "he" ? "תנאי שימוש" : "Terms of Service"}
                      </a>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </nav>

          <main>{children}</main>

          <footer className="bg-gluco-blue text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🦁</span> Glucoheros
                  </h3>
                  <p className="text-blue-100">
                    {locale === "he" ? "הפיכת ניהול סוכרת לכיף וחינוכי לילדים ולמשפחות." : "Making diabetes management fun and educational for kids and families."}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">{locale === "he" ? "קישורים מהירים" : "Quick Links"}</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>
                      <a
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        {locale === "he" ? "בית" : "Home"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support"
                        className="hover:text-white transition-colors"
                      >
                        {locale === "he" ? "תמיכה" : "Support"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="hover:text-white transition-colors"
                      >
                        {locale === "he" ? "מדיניות פרטיות" : "Privacy Policy"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">{locale === "he" ? "צור קשר" : "Connect"}</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>
                      <a
                        href="mailto:hello@glucoheros.app"
                        className="hover:text-white transition-colors"
                      >
                        {locale === "he" ? "שלח לנו דוא״ל" : "Email Us"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+972XXXXXXXXX"
                        className="hover:text-white transition-colors"
                      >
                        {locale === "he" ? "התקשר אלינו" : "Call Us"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-blue-300 pt-8 text-center text-blue-100">
                <p>
                  {locale === "he" ? "© 2024 Glucoheros. כל הזכויות שמורות. הפיכת ניהול סוכרת להרואי! 🦸‍♀️" : "© 2024 Glucoheros. All rights reserved. Making diabetes management heroic! 🦸‍♀️"}
                </p>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
