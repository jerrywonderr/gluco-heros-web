'use client';

import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations();

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
                {t('terms.title')}
              </h1>
              <p className="text-white/90 drop-shadow-lg text-lg">
                {t('terms.lastUpdated')}
              </p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.welcome')}</h2>
                <p className="text-gray-700" dangerouslySetInnerHTML={{__html: t('terms.welcomeDesc')}}></p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.getting')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('terms.gettingDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('terms.age')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('terms.ageDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.disclaimer')}</h2>
                <p className="text-gray-700" dangerouslySetInnerHTML={{__html: t('terms.disclaimerDesc')}}></p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.responsibility')}</h2>
                <p className="text-gray-700 mb-4">{t('terms.responsibilityDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.provide')}</h2>
                <p className="text-gray-700">
                  {t('terms.provideDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('terms.noAds')}
                </h2>
                <p className="text-gray-700 mb-4">{t('terms.noAdsDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.ip')}</h2>
                <p className="text-gray-700">
                  {t('terms.ipDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.liability')}</h2>
                <p className="text-gray-700">
                  {t('terms.liabilityDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.refund')}</h2>
                <p className="text-gray-700">
                  {t('terms.refundDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">
                  {t('terms.updates')}
                </h2>
                <p className="text-gray-700 mb-4">{t('terms.updatesDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.privacy')}</h2>
                <p className="text-gray-700">
                  {t('terms.privacyDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.prohibited')}</h2>
                <p className="text-gray-700">{t('terms.prohibitedDesc')}</p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.changesTerms')}</h2>
                <p className="text-gray-700">
                  {t('terms.changesTermsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.governing')}</h2>
                <p className="text-gray-700">
                  {t('terms.governingDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('terms.contactTerms')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('terms.contactTermsDesc')}
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
                  {t('terms.thankyou')}
                </h2>
                <p className="text-white text-lg">
                  {t('terms.thankyouDesc')}
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
