'use client';

import { useTranslations } from 'next-intl';

export default function Privacy() {
  const t = useTranslations('privacy');

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
              <h1 className="heading-main mb-2 text-white drop-shadow-lg">{t('title')}</h1>
              <p className="text-white/90 drop-shadow-lg text-lg">{t('lastUpdated')}</p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('promise')}</h2>
                <p className="text-gray-700">
                  <strong>{t('promiseTitle')}</strong> {t('promiseBody')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('collect')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('collectItems')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Random Username:</strong> {t('random')}</li>
                  <li><strong>User-Customizable:</strong> {t('custom')}</li>
                  <li><strong>Game Data:</strong> {t('game')}</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('notCollect')}</h2>
                <p className="text-gray-700">
                  {t('notCollectDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('storage')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('storageDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('noAds')}</h2>
                <p className="text-gray-700">
                  {t('noAdsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('children')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('childrenDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('retention')}</h2>
                <p className="text-gray-700">
                  {t('retentionDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('thirdParty')}</h2>
                <p className="text-gray-700">
                  {t('thirdPartyDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('rights')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('rightsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('changes')}</h2>
                <p className="text-gray-700">
                  {t('changesDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('contact')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('contactDesc')}
                </p>
                <div className="bg-gluco-beige p-4 rounded-lg">
                  <p className="font-bold text-gluco-blue">Glucoheros Privacy Team</p>
                  <p>Email: <a href="mailto:hello@glucoheros.app" className="text-gluco-orange hover:underline">hello@glucoheros.app</a></p>
                  <p className="text-sm text-gray-600 mt-2">Response time: Usually within 24 hours</p>
                </div>
              </section>

              <section className="card-playful bg-gluco-green/90 border-gluco-green">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="heading-section text-white">{t('priority')}</h2>
                <p className="text-white text-lg">
                  {t('priorityDesc')}
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
