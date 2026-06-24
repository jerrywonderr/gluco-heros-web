'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from "next";

export default function Home() {
  const t = useTranslations('home');

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
              {t('hero.title')}
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white mb-4 animate-slide-left drop-shadow-lg font-bold">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-white mb-8 animate-slide-right drop-shadow-lg">
            {t('hero.description')}
          </p>

          {/* Pricing Badge */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap animate-bounce-in" style={{animationDelay: '0.3s'}}>
            <span className="badge-price">{t('pricing.oneTime')}</span>
            <span className="badge-price">{t('pricing.noIAP')}</span>
            <span className="badge-price">{t('pricing.privacy')}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg animate-pulse-glow">{t('buttons.download')}</button>
            <button className="btn-secondary text-lg">{t('buttons.learnMore')}</button>
          </div>

          {/* Hero Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-10">
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-lion-happy.png" alt={t('characters.leo')} className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">{t('characters.leo')} 🦁</p>
              <p className="text-sm text-gray-600">{t('characters.leoBio')}</p>
              <p className="text-xs text-gray-500 mt-2">{t('characters.leoTraits')}</p>
            </div>

            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-fox-happy.png" alt={t('characters.fiona')} className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">{t('characters.fiona')} 🦊</p>
              <p className="text-sm text-gray-600">{t('characters.fionaBio')}</p>
              <p className="text-xs text-gray-500 mt-2">{t('characters.fionaTraits')}</p>
            </div>

            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="w-full h-40 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center">
                <img src="/assets/hero-elephant-happy.png" alt={t('characters.ellie')} className="h-40 w-auto" />
              </div>
              <p className="font-bold text-2xl text-gluco-blue">{t('characters.ellie')} 🐘</p>
              <p className="text-sm text-gray-600">{t('characters.ellieBio')}</p>
              <p className="text-xs text-gray-500 mt-2">{t('characters.ellieTraits')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4 bg-white/70 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 -z-10"
          style={{backgroundImage: 'url(/assets/games-hero-banner-v1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-center mb-12">{t('games.title')}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Game 1 */}
            <div className="card-playful animate-slide-left">
              <div className="text-5xl mb-4">🩸</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.bloodSugar')}</h3>
              <p className="text-gray-700 text-sm">{t('games.bloodSugarDesc')}</p>
            </div>

            {/* Game 2 */}
            <div className="card-playful animate-bounce-in">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.hypoHyper')}</h3>
              <p className="text-gray-700 text-sm">{t('games.hypoHyperDesc')}</p>
            </div>

            {/* Game 3 */}
            <div className="card-playful animate-slide-right">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.buildPlate')}</h3>
              <p className="text-gray-700 text-sm">{t('games.buildPlateDesc')}</p>
            </div>

            {/* Game 4 */}
            <div className="card-playful animate-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.balanceRun')}</h3>
              <p className="text-gray-700 text-sm">{t('games.balanceRunDesc')}</p>
            </div>

            {/* Game 5 */}
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.dailyTracker')}</h3>
              <p className="text-gray-700 text-sm">{t('games.dailyTrackerDesc')}</p>
            </div>

            {/* Game 6 */}
            <div className="card-playful animate-slide-right" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-lg">{t('games.learnTogether')}</h3>
              <p className="text-gray-700 text-sm">{t('games.learnTogetherDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-gluco relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 -z-10"
          style={{backgroundImage: 'url(/assets/home-hero-banner-backdrop-v1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-center mb-12">{t('features.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="card-playful animate-slide-left">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.emotional')}</h3>
              <p className="text-gray-700">{t('features.emotionalDesc')}</p>
            </div>

            {/* Feature 2 */}
            <div className="card-playful animate-slide-right">
              <div className="text-6xl mb-4">🎖️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.earnUnlock')}</h3>
              <p className="text-gray-700">{t('features.earnUnlockDesc')}</p>
            </div>

            {/* Feature 3 */}
            <div className="card-playful animate-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.dailyMissions')}</h3>
              <p className="text-gray-700">{t('features.dailyMissionsDesc')}</p>
            </div>

            {/* Feature 4 */}
            <div className="card-playful animate-slide-right" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.privacyFirst')}</h3>
              <p className="text-gray-700">{t('features.privacyFirstDesc')}</p>
            </div>

            {/* Feature 5 */}
            <div className="card-playful animate-bounce-in">
              <div className="text-6xl mb-4">⏱️</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.quickGames')}</h3>
              <p className="text-gray-700">{t('features.quickGamesDesc')}</p>
            </div>

            {/* Feature 6 */}
            <div className="card-playful animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl mb-4">🪅</div>
              <h3 className="font-bold text-gluco-blue mb-2 text-xl">{t('features.plushToy')}</h3>
              <p className="text-gray-700">{t('features.plushToyDesc')}</p>
            </div>
          </div>

          {/* In-Game Economy Card */}
          <div className="mt-12 p-8 bg-gluco-beige rounded-3xl border-4 border-gluco-blue">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gluco-blue mb-4">{t('economy')}</h3>
              <p className="text-lg text-gray-700 mb-4">
                Play games to earn <strong>coins</strong> and <strong>XP</strong>. {t('economyDescMain')}
              </p>
              <p className="text-lg font-bold text-gluco-blue mb-4" style={{display: 'block', marginTop: '0.5rem'}}>
                {t('economyDescCTA')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('economyFooter')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Emotional States */}
      <section className="py-20 px-4 bg-white/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-center mb-12">{t('emotionalStates')}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-happy.png" alt="Happy" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-green mb-2">{t('happy')}</h3>
              <p className="text-gray-700">{t('happyDesc')}</p>
            </div>

            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-neutral.png" alt="Neutral" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-blue mb-2">{t('neutral')}</h3>
              <p className="text-gray-700">{t('neutralDesc')}</p>
            </div>

            <div className="card-playful text-center">
              <div className="w-full h-48 bg-gluco-beige rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="/assets/hero-lion-sad.png" alt="Sad" className="h-48 w-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gluco-pink mb-2">{t('sad')}</h3>
              <p className="text-gray-700">{t('sadDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-fun relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 -z-10"
          style={{backgroundImage: 'url(/assets/missions-header-banner-v1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}></div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-slow">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-white/90">{t('cta.subtitle')}</p>
          <p className="text-lg mb-4 text-white/80"><strong>{t('cta.oneTimePayment')}</strong> {t('cta.lifetime')}</p>
          <p className="text-lg mb-8 text-white/80">{t('cta.benefits')}</p>
          <button className="px-8 py-4 rounded-full font-bold bg-white text-gluco-orange hover:bg-gluco-beige shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 text-lg animate-pulse-glow">
            {t('cta.download')}
          </button>
        </div>
      </section>
    </div>
  );
}
