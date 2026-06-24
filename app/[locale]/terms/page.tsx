'use client';

import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations('terms');

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
                {t('title')}
              </h1>
              <p className="text-white/90 drop-shadow-lg text-lg">
                {t('lastUpdated')}
              </p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('welcome')}</h2>
                <p className="text-gray-700">{t('welcomeDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('getting')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('gettingDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('age')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('ageDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('disclaimer')}</h2>
                <p className="text-gray-700">
                  <strong>⚠️ {t('disclaimerWarning')}</strong> {t('disclaimerBody')} {t('disclaimerFooter')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('responsibility')}</h2>
                <p className="text-gray-700 mb-4">{t('responsibilityDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('provide')}</h2>
                <p className="text-gray-700">
                  {t('provideDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('noAds')}
                </h2>
                <p className="text-gray-700 mb-4">{t('noAdsDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('ip')}</h2>
                <p className="text-gray-700">
                  {t('ipDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('liability')}</h2>
                <p className="text-gray-700">
                  {t('liabilityDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('refund')}</h2>
                <p className="text-gray-700">
                  {t('refundDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('updates')}
                </h2>
                <p className="text-gray-700 mb-4">{t('updatesDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy')}</h2>
                <p className="text-gray-700">
                  {t('privacyDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('prohibited')}</h2>
                <p className="text-gray-700">{t('prohibitedDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('changesTerms')}</h2>
                <p className="text-gray-700">
                  {t('changesTermsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('governing')}</h2>
                <p className="text-gray-700">
                  {t('governingDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('contactTerms')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('contactTermsDesc')}
                </p>
                <div className="bg-gluco-beige p-4 rounded-lg">
                  <p className="font-bold text-gluco-blue">Glucoheros Support</p>
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
                  {t('thankyou')}
                </h2>
                <p className="text-white text-lg">
                  {t('thankyouDesc')}
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
