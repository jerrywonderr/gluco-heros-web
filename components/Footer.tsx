'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-gluco-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🦁</span> Glucoheros
            </h3>
            <p className="text-blue-100">
              {t('description')}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-white transition-colors"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/support`}
                  className="hover:text-white transition-colors"
                >
                  {t('support')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:text-white transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('connect')}</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a
                  href="mailto:hello@glucoheros.app"
                  className="hover:text-white transition-colors"
                >
                  {t('email')}
                </a>
              </li>
              <li>
                <a
                  href="tel:+972XXXXXXXXX"
                  className="hover:text-white transition-colors"
                >
                  {t('phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-300 pt-8 text-center text-blue-100">
          <p>
            © 2024 Glucoheros. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
