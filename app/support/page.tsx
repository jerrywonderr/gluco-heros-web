import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & FAQ - GlucoHero",
  description: "Get help with GlucoHero. Contact us via email or phone. Find answers to frequently asked questions about pricing, games, and features.",
  robots: "index, follow",
  openGraph: {
    title: "Support & FAQ - GlucoHero",
    description: "Contact GlucoHero support and find answers to common questions",
    url: "https://glucoheros.app/support",
    type: "website",
  },
};

export default function Support() {
  return (
    <div className="relative">
      {/* Combined Hero + Contact Section */}
      <section className="relative min-h-screen py-16 px-4 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 -z-10 bg-center"
          style={{backgroundImage: 'url(/assets/games-hero-banner-v1.png)', backgroundSize: 'cover'}}
        ></div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-5 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="heading-main mb-4 animate-bounce-slow text-white drop-shadow-lg">💬 Questions?</h1>
          <p className="text-2xl text-white drop-shadow-lg mb-12">We're here to help! Pick your preferred way to reach us.</p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="card-playful text-center animate-slide-left">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gluco-blue mb-4">Email Support</h3>
              <p className="text-gray-700 mb-6">
                Send us an email anytime. We typically respond within 24 hours.
              </p>
              <a
                href="mailto:hello@glucoheros.app"
                className="btn-primary inline-block"
              >
                hello@glucoheros.app
              </a>
            </div>

            {/* Phone */}
            <div className="card-playful text-center animate-slide-right">
              <div className="text-6xl mb-4">☎️</div>
              <h3 className="text-2xl font-bold text-gluco-blue mb-4">Call Us</h3>
              <p className="text-gray-700 mb-6">
                Need immediate help? Call during business hours (IST).
              </p>
              <a
                href="tel:+972XXXXXXXXX"
                className="btn-primary inline-block"
              >
                +972-X-XXX-XXXX
              </a>
            </div>
          </div>

          {/* Scroll to FAQs Button */}
          <a
            href="#faq-section"
            className="mx-auto block btn-primary text-lg inline-block"
          >
            See Our FAQs ⬇️
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 px-4 bg-gradient-gluco">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center">❓ Frequently Asked Questions</h2>

          <div className="space-y-6">
            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>💰 How much does Gluco Heroes cost?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Gluco Heroes is a one-time payment of 29.9 ILS (~$8 USD). This gives you lifetime access to the entire app—no ads, no subscriptions, no hidden fees. Download it once, play forever!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>👶 What age is the app designed for?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Gluco Heroes is designed for kids ages 4-8 with Type 1 Diabetes. The games are simple, fun, and age-appropriate. The app uses large text, bright colors, and quick interactions perfect for young children.
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🔐 What data do you collect?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We collect ONLY a randomly generated username (that users can customize later if they want). We DO NOT ask for names, emails, phone numbers, or any personal information. We DO NOT track usage outside the app. Your privacy is our top priority!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🎮 What games are included?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                There are 6 mini-games: Blood Sugar Test, Hypo or Hyper?, Build a Healthy Plate, Balance Run, Daily Tracker, and Learn Together. Each game is 30-60 seconds and teaches important diabetes management skills through play!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🎭 Why does my hero have different moods?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Your hero (Leo, Fiona, or Ellie) reacts emotionally to your behavior! They're happy when you play games, neutral when you haven't played in a bit, and sad if you've been away for too long. This creates an emotional bond and motivates kids to come back and play!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🏆 What are missions and why should kids complete them?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Daily missions are fun tasks like "play 1 game" or "log your reading." Completing them earns coins, XP, and unlocks cool rewards. Missions help kids build healthy daily habits without feeling pressured—it's all game-ified and fun!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>📱 What devices does it work on?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Gluco Heroes works on iOS (iPhone/iPad) and Android devices. You can download it from the App Store or Google Play Store. It's designed to be lightweight and works smoothly on most devices.
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🎁 What are badges and achievements?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Badges are rewards for completing milestones (e.g., "First Blood Test," "3-Day Streak"). They help kids feel proud of their progress and motivate them to keep going. There are badges for all different achievements!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🪅 Is there a physical plush toy?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! You can get Leo, Fiona, or Ellie as a real plush toy to hold and hug. The physical toy pairs with the app to make the experience even more special and personal for kids.
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>💰 What's the in-game economy? Do I spend real money?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                GlucoHero has an in-game economy using <strong>coins</strong> that you earn by playing games. You can trade coins for cosmetics, XP boosts, time boosts, and special items. <strong>This costs zero real money!</strong> Everything is earned through gameplay. No credit cards, no microtransactions, no spending. Just play and earn!
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>🔄 How often are new features added?</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We regularly update Gluco Heroes with new features, games, and improvements. All updates are FREE for users who already have the app. You get lifetime updates with your one-time purchase!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-center">🤝 Why Trust Gluco Heroes?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-playful text-center animate-bounce-in">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="font-bold text-gluco-blue mb-2">Privacy First</h3>
              <p className="text-gray-700 text-sm">Zero data collection. No tracking. Your data stays yours.</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-bold text-gluco-blue mb-2">Built for Kids</h3>
              <p className="text-gray-700 text-sm">Designed by people who understand diabetes and children.</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-gluco-blue mb-2">No Ads Ever</h3>
              <p className="text-gray-700 text-sm">Clean, ad-free experience. Full focus on fun and learning.</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl mb-4">🆓</div>
              <h3 className="font-bold text-gluco-blue mb-2">One Price</h3>
              <p className="text-gray-700 text-sm">29.9 ILS once. Lifetime access. No subscriptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-16 px-4 bg-gradient-fun text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
        <p className="text-lg mb-8 text-white/90">Feel free to reach out to us!</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="mailto:hello@glucoheros.app" className="text-white hover:text-gluco-beige transition-colors">
            <span className="text-3xl">📧</span>
            <p className="font-bold">hello@glucoheros.app</p>
          </a>
          <a href="tel:+972XXXXXXXXX" className="text-white hover:text-gluco-beige transition-colors">
            <span className="text-3xl">☎️</span>
            <p className="font-bold">+972-X-XXX-XXXX</p>
          </a>
        </div>
      </section>
    </div>
  );
}
