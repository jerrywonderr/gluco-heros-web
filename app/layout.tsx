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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                <img src="/splash-icon.png" alt="GlucoHero Logo" className="w-12 h-12" />
                <a href="/" className="text-2xl font-bold text-gluco-blue hover:text-gluco-teal transition-colors">
                  Gluco Heroes
                </a>
              </div>
              <div className="flex gap-4 sm:gap-8">
                <a href="/" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors">
                  Home
                </a>
                <a href="/support" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors">
                  Support
                </a>
                <a href="/privacy" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors">
                  Terms
                </a>
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
