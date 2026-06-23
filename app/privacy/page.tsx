import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GlucoHero",
  description: "GlucoHero Privacy Policy. We collect zero personal data. Only a random username and local game data. COPPA, GDPR, and CCPA compliant.",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy - GlucoHero",
    description: "Learn how GlucoHero protects your privacy with zero data collection",
    url: "https://glucoheros.app/privacy",
    type: "website",
  },
};

export default function Privacy() {
  return (
    <div>
      {/* Full-bleed background with content */}
      <div
        className="relative min-h-screen bg-center bg-cover bg-fixed"
        style={{backgroundImage: 'url(/assets/achievements-header-banner-v1.png)'}}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="heading-main mb-2 text-white drop-shadow-lg">🔒 Privacy Policy</h1>
              <p className="text-white/90 drop-shadow-lg text-lg">Last Updated: June 2024 • Your privacy is our priority</p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">1. Our Privacy Promise</h2>
                <p className="text-gray-700">
                  <strong>We believe in radical privacy.</strong> GlucoHero collects ZERO personal information. We don't ask for names, emails, phone numbers, or any identifying data. Your health is private. Your data stays yours.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">2. What We DO Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect ONLY:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Random Username:</strong> A randomly generated username at app start (e.g., "Hero_12345")</li>
                  <li><strong>User-Customizable:</strong> Users can change their username anytime if they want</li>
                  <li><strong>Game Data:</strong> Gameplay metrics (games played, scores, progress) stored locally on the device</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">3. What We DO NOT Collect</h2>
                <p className="text-gray-700">
                  We explicitly do NOT collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>❌ No names</li>
                  <li>❌ No email addresses</li>
                  <li>❌ No phone numbers</li>
                  <li>❌ No dates of birth</li>
                  <li>❌ No location data</li>
                  <li>❌ No medical information</li>
                  <li>❌ No parental contact info</li>
                  <li>❌ No school or family details</li>
                  <li>❌ No usage analytics or tracking</li>
                  <li>❌ No behavioral profiling</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">4. Data Storage & Security</h2>
                <p className="text-gray-700 mb-4">
                  All game data is stored locally on the user's device. We do NOT transmit personal data to servers. Your data stays on your phone/tablet. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>✅ Your data is never sent to our servers</li>
                  <li>✅ Your data is never sold to third parties</li>
                  <li>✅ Your data is never shared with advertisers</li>
                  <li>✅ Your data is never used for profiling</li>
                  <li>✅ Your data is never combined with other data</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">5. No Advertising or Tracking</h2>
                <p className="text-gray-700">
                  GlucoHero is ad-free. We do NOT:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Include third-party ads</li>
                  <li>Use analytics tools (Google Analytics, Mixpanel, etc.)</li>
                  <li>Track user behavior</li>
                  <li>Use cookies or similar technologies</li>
                  <li>Employ behavioral targeting</li>
                  <li>Share data with marketing partners</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">6. Children's Privacy (COPPA & GDPR)</h2>
                <p className="text-gray-700 mb-4">
                  GlucoHero is designed for children ages 4-8. We comply with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>COPPA (Children's Online Privacy Protection Act):</strong> We don't collect identifying information from children</li>
                  <li><strong>GDPR (EU):</strong> We meet all EU data protection requirements</li>
                  <li><strong>CCPA (California):</strong> We comply with California privacy law</li>
                  <li><strong>Israel's Privacy Law:</strong> Full compliance with local regulations</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>No Parental Consent Needed:</strong> Because we don't collect ANY identifiable information, we don't need parental consent to use the app. Parents can be confident their child's privacy is protected.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">7. Data Retention</h2>
                <p className="text-gray-700">
                  Game progress is stored locally on the user's device indefinitely until:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>User deletes the app</li>
                  <li>User clears device storage</li>
                  <li>User manually deletes their data</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Users can request complete data deletion anytime by contacting us.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">8. Third-Party Services</h2>
                <p className="text-gray-700">
                  GlucoHero uses minimal third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>App Store (Apple/Google):</strong> Required for app distribution only</li>
                  <li><strong>No analytics platforms</strong></li>
                  <li><strong>No cloud storage of personal data</strong></li>
                  <li><strong>No advertising networks</strong></li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">9. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Know what data we collect (answer: almost nothing!)</li>
                  <li>Request data deletion anytime</li>
                  <li>Change your username</li>
                  <li>Offline access (app works without internet)</li>
                  <li>Complete app control on your device</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">10. Changes to This Policy</h2>
                <p className="text-gray-700">
                  If we ever change this privacy policy, we'll notify users of significant changes. Our commitment to privacy will only strengthen, never weaken.
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  Questions about privacy? Contact us anytime:
                </p>
                <div className="bg-gluco-beige p-4 rounded-lg">
                  <p className="font-bold text-gluco-blue">GlucoHero Privacy Team</p>
                  <p>Email: <a href="mailto:hello@glucoheros.app" className="text-gluco-orange hover:underline">hello@glucoheros.app</a></p>
                  <p className="text-sm text-gray-600 mt-2">Response time: Usually within 24 hours</p>
                </div>
              </section>

              <section className="card-playful bg-gluco-green/90 border-gluco-green">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="heading-section text-white">Your Privacy Is Our Priority</h2>
                <p className="text-white text-lg">
                  GlucoHero was built with privacy-first principles. We believe children deserve protection, and parents deserve peace of mind. Play safely. Your data stays yours. 🦁✨
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
