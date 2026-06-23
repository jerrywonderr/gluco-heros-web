import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - GlucoHero",
  description: "GlucoHero Terms of Service. One-time payment (29.9 ILS) for lifetime access. No ads, no in-app purchases, no data tracking.",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service - GlucoHero",
    description: "Read GlucoHero's terms of service and user agreement",
    url: "https://glucoheros.app/terms",
    type: "website",
  },
};

export default function Terms() {
  return (
    <div>
      {/* Full-bleed background with content */}
      <div
        className="relative min-h-screen bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/assets/missions-header-banner-v1.png)",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="heading-main mb-2 text-white drop-shadow-lg">
                ⚖️ Terms of Service
              </h1>
              <p className="text-white/90 drop-shadow-lg text-lg">
                Last Updated: June 2024 • GlucoHero Terms
              </p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">1. Welcome to GlucoHero!</h2>
                <p className="text-gray-700">
                  GlucoHero is a gamified diabetes management app designed for
                  children ages 4-8. By downloading and using GlucoHero, you
                  agree to these terms. This is a one-time purchase app with no
                  subscriptions, ads, or hidden fees.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">2. What You're Getting</h2>
                <p className="text-gray-700 mb-4">
                  Your one-time purchase (29.9 ILS) gives you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>✅ Lifetime access to the app</li>
                  <li>
                    ✅ All 6 mini-games (Blood Sugar Test, Hypo/Hyper, Build
                    Your Plate, Balance Run, Daily Tracker, Learn Together)
                  </li>
                  <li>✅ All features and updates forever</li>
                  <li>✅ No ads, ever</li>
                  <li>✅ No in-app purchases required</li>
                  <li>✅ Offline access (works without internet)</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  3. Age Requirements & Parental Responsibility
                </h2>
                <p className="text-gray-700 mb-4">
                  GlucoHero is designed for children ages 4-8 with Type 1
                  Diabetes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Parents/guardians are responsible for supervising app usage
                  </li>
                  <li>
                    The app is a companion tool, NOT a medical device or
                    replacement for healthcare
                  </li>
                  <li>
                    Parents should monitor gameplay and ensure healthy balance
                  </li>
                  <li>
                    Medical decisions should always be made with your healthcare
                    provider
                  </li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">4. Medical Disclaimer</h2>
                <p className="text-gray-700">
                  <strong>⚠️ Important:</strong> GlucoHero is an educational and
                  entertainment app, NOT a medical device. It should never
                  replace professional medical advice, consultation with your
                  doctor, or clinical diabetes management. GlucoHero is designed
                  to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reduce fear around diabetes management</li>
                  <li>Make learning fun and engaging</li>
                  <li>Build healthy habits through gamification</li>
                  <li>Support emotional connection to a character</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Always consult with your healthcare team before making any
                  medical decisions.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">5. Your Responsibilities</h2>
                <p className="text-gray-700 mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Use the app only for its intended purpose (diabetes
                    education & engagement for children)
                  </li>
                  <li>
                    Not attempt to hack, reverse-engineer, or modify the app
                  </li>
                  <li>Not use the app to deceive or harm anyone</li>
                  <li>Respect the app's intellectual property rights</li>
                  <li>Follow all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">6. What We Provide</h2>
                <p className="text-gray-700">
                  With your one-time payment, you get:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>✅ Full app access, forever</li>
                  <li>✅ All current and future updates (free)</li>
                  <li>✅ New games and features (free)</li>
                  <li>✅ Bug fixes and improvements (free)</li>
                  <li>✅ Email support</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  7. No Ads • No Real Money • No Tracking
                </h2>
                <p className="text-gray-700 mb-4">GlucoHero guarantees:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>🚫 NO advertisements</li>
                  <li>🚫 NO in-app purchases (no real money transactions)</li>
                  <li>🚫 NO subscriptions</li>
                  <li>🚫 NO hidden fees</li>
                  <li>🚫 NO data tracking</li>
                  <li>🚫 NO behavioral monitoring</li>
                  <li>
                    ✅ IN-GAME ECONOMY: Earn coins through gameplay, trade coins
                    for cosmetics/boosts (all money-free!)
                  </li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">8. Intellectual Property</h2>
                <p className="text-gray-700">
                  GlucoHero, including all characters (Leo, Fiona, Ellie),
                  artwork, games, and content, is owned by GlucoHero. You may
                  not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Copy or reproduce the app</li>
                  <li>Modify or create derivative works</li>
                  <li>Distribute or resell the app</li>
                  <li>Use our characters or artwork without permission</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">9. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the fullest extent allowed by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>GlucoHero is provided "as is" without warranties</li>
                  <li>
                    We're not liable for health outcomes or medical decisions
                  </li>
                  <li>We're not liable for device damage or data loss</li>
                  <li>
                    Our liability is limited to refunds of the purchase price
                  </li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">10. Refund Policy</h2>
                <p className="text-gray-700">
                  We're confident you'll love GlucoHero! If you're not
                  satisfied:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    iOS: Request refund through Apple App Store (usually within
                    14 days)
                  </li>
                  <li>
                    Android: Request refund through Google Play Store (usually
                    within 15 minutes of purchase)
                  </li>
                  <li>Contact us for assistance: hello@glucoheros.app</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  11. App Availability & Updates
                </h2>
                <p className="text-gray-700 mb-4">We reserve the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Update or improve the app anytime</li>
                  <li>Fix bugs and security issues</li>
                  <li>Discontinue features (but will provide alternative)</li>
                  <li>
                    Remove the app from stores (but users keep their copy)
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Once you download GlucoHero, it's yours. If we ever
                  discontinue the app, you'll still have full access on your
                  device.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">12. Privacy & Data</h2>
                <p className="text-gray-700">
                  Read our{" "}
                  <a
                    href="/privacy"
                    className="text-gluco-orange hover:underline font-bold"
                  >
                    Privacy Policy
                  </a>{" "}
                  for details on how we handle your data (spoiler: we barely
                  collect any!).
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">13. Prohibited Activities</h2>
                <p className="text-gray-700">Don't use GlucoHero to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Harass or harm others</li>
                  <li>Hack or breach security</li>
                  <li>Steal intellectual property</li>
                  <li>Spread false information</li>
                  <li>Engage in illegal activity</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">14. Changes to These Terms</h2>
                <p className="text-gray-700">
                  We may update these terms occasionally. Significant changes
                  will be announced in the app. Your continued use means you
                  accept the new terms.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">15. Governing Law</h2>
                <p className="text-gray-700">
                  These terms are governed by the laws of Israel. Any disputes
                  will be resolved in Israeli courts.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">16. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  Questions about these terms? Reach out:
                </p>
                <div className="bg-gluco-beige p-4 rounded-lg">
                  <p className="font-bold text-gluco-blue">GlucoHero Support</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:hello@glucoheros.app"
                      className="text-gluco-orange hover:underline"
                    >
                      hello@glucoheros.app
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>
              </section>

              <section className="card-playful bg-gluco-orange/90 border-gluco-orange">
                <div className="text-5xl mb-4">🎮</div>
                <h2 className="heading-section text-white">
                  Thank You for Choosing GlucoHero!
                </h2>
                <p className="text-white text-lg">
                  Your one-time purchase supports our mission to make diabetes
                  management fun, empowering, and emotionally supportive for
                  children. Play safely, have fun, and remember: you're a hero!
                  🦁✨
                </p>
              </section>

              <div className="h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
