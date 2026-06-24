'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Privacy() {
  const t = useTranslations();
  const locale = useLocale();

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
              <h1 className="heading-main mb-2 text-white drop-shadow-lg">{t('privacy.title')}</h1>
              <p className="text-white/90 drop-shadow-lg text-lg">{t('privacy.lastUpdated')}</p>
            </div>

            <div className="space-y-6">
              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.promise')}</h2>
                <p className="text-gray-700" dangerouslySetInnerHTML={{__html: locale === 'he' ? '<strong>אנחנו מאמינים בפרטיות קיצונית.</strong> גלוקו הירואים אוסף אפס מידע אישי. אנחנו לא שואלים על שמות, דוא״ל, מספרי טלפון או כל מידע מזהה. הבריאות שלך פרטית. הנתונים שלך נשארים שלך.' : '<strong>We believe in radical privacy.</strong> GlucoHero collects ZERO personal information. We don\'t ask for names, emails, phone numbers, or any identifying data. Your health is private. Your data stays yours.'}}></p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.collect')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacy.collectItems')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Random Username:</strong> {t('privacy.random')}</li>
                  <li><strong>User-Customizable:</strong> {t('privacy.custom')}</li>
                  <li><strong>Game Data:</strong> {t('privacy.game')}</li>
                </ul>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.notCollect')}</h2>
                <p className="text-gray-700">
                  {t('privacy.notCollectDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.storage')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacy.storageDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.noAds')}</h2>
                <p className="text-gray-700">
                  {t('privacy.noAdsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.children')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacy.childrenDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.retention')}</h2>
                <p className="text-gray-700">
                  {t('privacy.retentionDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.thirdParty')}</h2>
                <p className="text-gray-700">
                  {t('privacy.thirdPartyDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.rights')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacy.rightsDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.changes')}</h2>
                <p className="text-gray-700">
                  {t('privacy.changesDesc')}
                </p>
              </section>

              <section className="card-playful bg-white/95 backdrop-blur-sm">
                <h2 className="heading-section">{t('privacy.contact')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacy.contactDesc')}
                </p>
                <div className="bg-gluco-beige p-4 rounded-lg">
                  <p className="font-bold text-gluco-blue">GlucoHero Privacy Team</p>
                  <p>Email: <a href="mailto:hello@glucoheros.app" className="text-gluco-orange hover:underline">hello@glucoheros.app</a></p>
                  <p className="text-sm text-gray-600 mt-2">Response time: Usually within 24 hours</p>
                </div>
              </section>

              <section className="card-playful bg-gluco-green/90 border-gluco-green">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="heading-section text-white">{t('privacy.priority')}</h2>
                <p className="text-white text-lg">
                  {t('privacy.priorityDesc')}
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
