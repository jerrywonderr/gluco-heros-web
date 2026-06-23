import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlucoHero - Gamified Diabetes Management for Kids",
  description: "GlucoHero makes diabetes management fun for kids ages 4-8. Play 6 games, earn rewards, and become a hero. One-time payment (29.9 ILS). Zero data collection.",
  openGraph: {
    title: "GlucoHero - Make Diabetes Management Fun",
    description: "Interactive games, emotional AI heroes, and gamified learning for kids with Type 1 Diabetes",
    url: "https://glucoheros.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background - Full Viewport Height */}
      <section className="relative min-h-[calc(100vh-80px)] px-4 text-center overflow-hidden flex items-center justify-center py-0">
        {/* Full-bleed background image */}
        <div
          className="absolute inset-0 -z-10 bg-center"
          style={{backgroundImage: 'url(/assets/home-hero-banner-backdrop-v1.png)', backgroundSize: 'cover'}}
        ></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 -z-5 bg-black/30"></div>

        {/* Animated background circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gluco-orange rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-gluco-blue rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-50 h-50 bg-gluco-pink rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 mt-10">
          <div className="mb-8 animate-bounce-in">
            <h1 className="heading-main mb-6 animate-bounce-slow inline-block text-white drop-shadow-lg">
              🦸 Be a Gluco Hero! 🦸
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white mb-4 animate-slide-left drop-shadow-lg font-bold">
            Turn diabetes management into an <span className="text-gluco-yellow">epic adventure</span> with your companions!
          </p>

          <p className="text-lg md:text-xl text-white mb-8 animate-slide-right drop-shadow-lg">
            Play games. Build habits. Earn rewards. Make friends with Leo, Fiona, or Ellie.
          </p>

          {/* Pricing Badge */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap animate-bounce-in" style={{animationDelay: '0.3s'}}>
            <span className="badge-price">💰 One-Time: 29.9 ILS • Lifetime Access</span>
            <span className="badge-price">🚫 No Real Money Transactions</span>
            <span className="badge-price">🔐 Zero Tracking • No Data Collection</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg animate-pulse-glow">Download Now 🚀</button>
            <button className="btn-secondary text-lg">Learn More 📖</button>
          </div>

          {/* Hero Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-10">
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-lion-happy.png" alt="Leo the Lion" className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">Leo the Lion 🦁</p>
              <p className="text-sm text-gray-600">Brave & Bold</p>
              <p className="text-xs text-gray-500 mt-2">Power & Courage</p>
            </div>

            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-fox-happy.png" alt="Fiona the Fox" className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">Fiona the Fox 🦊</p>
              <p className="text-sm text-gray-600">Smart & Curious</p>
              <p className="text-xs text-gray-500 mt-2">Intelligence & Wisdom</p>
            </div>

            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-elephant-happy.png" alt="Ellie the Elephant" className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">Ellie the Elephant 🐘</p>
              <p className="text-sm text-gray-600">Kind & Strong</p>
              <p className="text-xs text-gray-500 mt-2">Strength & Compassion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4 bg-white/70 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 -z-10"
          style={{backgroundImage: 'url(/assets/games-hero-banner-v1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-center mb-12">🎮 Play 6 Awesome Mini-Games</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Game 1 */}
            <div className="card-playful animate-slide-left">
              <div className="text-5xl mb-4">🩸</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Blood Sugar Test</h3>
              <p className="text-gray-700 text-sm">Tap your finger and see the results. Quick & simple!</p>
            </div>

            {/* Game 2 */}
            <div className="card-playful animate-bounce-in">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Hypo or Hyper?</h3>
              <p className="text-gray-700 text-sm">Learn to identify symptoms and make smart choices.</p>
            </div>

            {/* Game 3 */}
            <div className="card-playful animate-slide-right">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Build Your Plate</h3>
              <p className="text-gray-700 text-sm">Tap and drag to create healthy, balanced meals.</p>
            </div>

            {/* Game 4 */}
            <div className="card-playful animate-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Balance Run</h3>
              <p className="text-gray-700 text-sm">Run forward and collect good items, avoid bad ones!</p>
            </div>

            {/* Game 5 */}
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Daily Tracker</h3>
              <p className="text-gray-700 text-sm">Check off your daily missions and earn awesome rewards!</p>
            </div>

            {/* Game 6 */}
            <div className="card-playful animate-slide-right" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">Learn Together</h3>
              <p className="text-gray-700 text-sm">Interactive lessons about your body and health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-gluco relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 -z-10"
          style={{backgroundImage: 'url(/assets/home-hero-banner-backdrop-v1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-center mb-12">✨ What Makes Gluco Heroes Special</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="card-playful animate-slide-left">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Emotional Connection</h3>
              <p className="text-gray-700">Your hero reacts to your behavior! Happy when you play, sad if you've been away too long.</p>
            </div>

            {/* Feature 2 */}
            <div className="card-playful animate-slide-right">
              <div className="text-6xl mb-4">🎖️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Earn & Unlock</h3>
              <p className="text-gray-700">Collect coins, gain XP, unlock badges. Watch your hero evolve with cool accessories!</p>
            </div>

            {/* Feature 3 */}
            <div className="card-playful animate-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Daily Missions</h3>
              <p className="text-gray-700">Fun daily tasks that build healthy habits without pressure or stress.</p>
            </div>

            {/* Feature 4 */}
            <div className="card-playful animate-slide-right" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Privacy First</h3>
              <p className="text-gray-700">No data collection. No tracking. Just you and your hero. Complete peace of mind.</p>
            </div>

            {/* Feature 5 */}
            <div className="card-playful animate-bounce-in">
              <div className="text-6xl mb-4">⏱️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Quick Games</h3>
              <p className="text-gray-700">Each game is only 30-60 seconds. Perfect for busy kids!</p>
            </div>

            {/* Feature 6 */}
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-4">🪅</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">Physical Plush Toy</h3>
              <p className="text-gray-700">Get your hero as a real plush toy to hold and hug!</p>
            </div>
          </div>

          {/* In-Game Economy Card */}
          <div className="mt-12 p-8 bg-gluco-beige rounded-3xl border-4 border-gluco-blue">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gluco-blue mb-4">💰 Earn • Trade • Unlock</h3>
              <p className="text-lg text-gray-700 mb-4">
                Play games to earn <strong>coins</strong> and <strong>XP</strong>. Use your coins to unlock cosmetics, time boosts, and special items.
                <strong className="block mt-2">No real money needed!</strong>
              </p>
              <p className="text-gray-600 text-sm">
                Everything is earned through gameplay. Our in-game economy is 100% money-free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Emotional States */}
      <section className="py-20 px-4 bg-white/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-center mb-12">💭 Your Hero Reacts to You</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-happy.png" alt="Happy" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-green mb-2">😊 HAPPY</h3>
              <p className="text-gray-700">When you play games and complete missions!</p>
            </div>

            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-neutral.png" alt="Neutral" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-blue mb-2">😐 NEUTRAL</h3>
              <p className="text-gray-700">When you haven't played for a while.</p>
            </div>

            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-sad.png" alt="Sad" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-pink mb-2">😢 SAD</h3>
              <p className="text-gray-700">If you've been away too long. Time to visit!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-fun relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 -z-10"
          style={{backgroundImage: 'url(/assets/missions-header-banner-v1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-slow">Ready to Save the Day?</h2>
          <p className="text-xl mb-8 text-white/90">Join thousands of kids & families making diabetes management FUN.</p>
          <p className="text-lg mb-4 text-white/80"><strong>One-time payment:</strong> 29.9 ILS → Lifetime access + all updates free</p>
          <p className="text-lg mb-8 text-white/80">No ads • No real money transactions • Earn coins through gameplay • No data collection</p>
          <button className="px-8 py-4 rounded-full font-bold bg-white text-gluco-orange hover:bg-gluco-beige shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 text-lg animate-pulse-glow">
            Download the App Now! 📱
          </button>
        </div>
      </section>
    </div>
  );
}
