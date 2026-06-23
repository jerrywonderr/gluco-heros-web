import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GlucoHero - Gamified Diabetes Management for Kids",
  description: "GlucoHero makes diabetes management fun for kids ages 4-8. One-time payment (29.9 ILS). Zero data collection. Play 6 games, earn rewards, and become a hero with Leo, Fiona, or Ellie!",
  keywords: "diabetes management, kids app, diabetes education, gamified learning, blood sugar tracking, type 1 diabetes",
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
    locale: "en_US",
    url: "https://glucoheros.app",
    siteName: "GlucoHero",
    title: "GlucoHero - Gamified Diabetes Management for Kids",
    description: "Make diabetes management fun with interactive games and emotional character companions. One-time payment, zero data collection.",
    images: [
      {
        url: "/splash-icon.png",
        width: 1200,
        height: 630,
        alt: "GlucoHero - Diabetes Management Game for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlucoHero - Make Diabetes Management Fun",
    description: "Gamified diabetes management app with emotional AI heroes for kids ages 4-8",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
              name: "GlucoHero",
              description: "Gamified diabetes management app for children ages 4-8",
              url: "https://glucoheros.app",
              applicationCategory: "HealthApplication",
              offers: {
                "@type": "Offer",
                price: "29.9",
                priceCurrency: "ILS",
                name: "Lifetime Access"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000"
              },
              operatingSystem: "iOS, Android",
              screenshot: "https://glucoheros.app/splash-icon.png",
              softwareVersion: "1.0.0",
              author: {
                "@type": "Organization",
                name: "GlucoHero Team"
              }
            }),
          }}
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://glucoheros.app" />
        {/* Additional SEO */}
        <meta name="theme-color" content="#317CA2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GlucoHero" />
      </head>
      <body className="font-sans">
        <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-gluco-blue">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24 sm:h-20">
              {/* Logo - Bigger on all screens */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <img src="/splash-icon.png" alt="GlucoHero Logo" className="w-16 h-16 sm:w-14 sm:h-14" />
                <a href="/" className="hidden sm:block text-lg sm:text-2xl font-bold text-gluco-blue hover:text-gluco-teal transition-colors whitespace-nowrap">
                  Gluco Heroes
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-4 lg:gap-8">
                <a href="/" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base">
                  Home
                </a>
                <a href="/support" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base">
                  Support
                </a>
                <a href="/privacy" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base">
                  Privacy
                </a>
                <a href="/terms" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base">
                  Terms
                </a>
              </div>

              {/* Mobile Hamburger Menu */}
              <details className="md:hidden">
                <summary className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-7 h-7 text-gluco-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-full mt-0 w-48 bg-white rounded-b-lg shadow-xl border-t-4 border-gluco-blue">
                  <a href="/" className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100">
                    Home
                  </a>
                  <a href="/support" className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100">
                    Support & FAQ
                  </a>
                  <a href="/privacy" className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm">
                    Terms of Service
                  </a>
                </div>
              </details>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-gluco-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🦁</span> Gluco Heroes
                </h3>
                <p className="text-blue-100">Making diabetes management fun and educational for kids and families.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/support" className="hover:text-white transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>
                    <a href="mailto:hello@glucoheros.com" className="hover:text-white transition-colors">
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1-555-GLUCO-123" className="hover:text-white transition-colors">
                      Call Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-300 pt-8 text-center text-blue-100">
              <p>&copy; 2024 Gluco Heroes. All rights reserved. Making diabetes management heroic! 🦸‍♀️</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
