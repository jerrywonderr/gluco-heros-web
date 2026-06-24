'use client';

import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export default function Support() {
  const t = useTranslations('support');

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
          <h1 className="heading-main mb-4 animate-bounce-slow text-white drop-shadow-lg">{t('hero.title')}</h1>
          <p className="text-2xl text-white drop-shadow-lg mb-12">{t('hero.subtitle')}</p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="card-playful text-center animate-slide-left">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gluco-blue mb-4">{t('contact.email')}</h3>
              <p className="text-gray-700 mb-6">
                {t('contact.emailDesc')}
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
              <h3 className="text-2xl font-bold text-gluco-blue mb-4">{t('contact.phone')}</h3>
              <p className="text-gray-700 mb-6">
                {t('contact.phoneDesc')}
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
            className="mx-auto btn-primary text-lg inline-block"
          >
            {t('faq.title')} ⬇️
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 px-4 bg-gradient-gluco">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-12">{t('faq.title')}</h2>

          <div className="space-y-6">
            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.price')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.priceAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.age')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.ageAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.data')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.dataAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.games')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.gamesAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.mood')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.moodAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.missions')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.missionsAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.devices')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.devicesAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.badges')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.badgesAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.plush')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.plushAnswer')}</p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('economy')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                {t('economyAnswerMain')} <strong>{t('economyAnswerCTA')}</strong> {t('economyAnswerFooter')}
              </p>
            </details>

            <details className="card-playful group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gluco-blue text-lg">
                <span>{t('faq.updates')}</span>
                <span className="transition-transform group-open:rotate-180 text-2xl">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">{t('faq.updatesAnswer')}</p>
            </details>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-center mb-12">{t('trust.title')}</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-playful text-center animate-bounce-in">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="font-bold text-gluco-blue mb-2">{t('trust.privacyFirst')}</h3>
              <p className="text-gray-700 text-sm">{t('trust.privacyFirstDesc')}</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-bold text-gluco-blue mb-2">{t('trust.builtForKids')}</h3>
              <p className="text-gray-700 text-sm">{t('trust.builtForKidsDesc')}</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-gluco-blue mb-2">{t('trust.noAds')}</h3>
              <p className="text-gray-700 text-sm">{t('trust.noAdsDesc')}</p>
            </div>

            <div className="card-playful text-center animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl mb-4">🆓</div>
              <h3 className="font-bold text-gluco-blue mb-2">{t('trust.onePrice')}</h3>
              <p className="text-gray-700 text-sm">{t('trust.onePriceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-16 px-4 bg-gradient-fun text-white text-center">
        <h2 className="text-3xl font-bold mb-6">{t('stillQuestions.title')}</h2>
        <p className="text-lg mb-8 text-white/90">{t('stillQuestions.subtitle')}</p>
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
