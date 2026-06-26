'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-gluco-blue">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/splash-icon.png"
              alt="Glucoheros Logo"
              width={64}
              height={64}
              className="w-16 h-16 sm:w-14 sm:h-14"
            />
            <Link
              href={`/${locale}`}
              className="hidden sm:block text-lg sm:text-2xl font-bold text-gluco-blue hover:text-gluco-teal transition-colors whitespace-nowrap"
            >
              Glucoheros
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 lg:gap-8">
            <Link
              href={`/${locale}`}
              className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/support`}
              className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
            >
              {t('support')}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-gluco-blue hover:text-gluco-orange font-semibold transition-colors text-sm lg:text-base"
            >
              {t('terms')}
            </Link>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Mobile Hamburger Menu */}
            <details className="md:hidden">
              <summary className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors">
                <svg
                  className="w-7 h-7 text-gluco-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <div className="absolute right-0 top-full mt-0 w-48 bg-white rounded-b-lg shadow-xl border-t-4 border-gluco-blue">
                <Link
                  href="/"
                  className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                >
                  {t('home')}
                </Link>
                <Link
                  href={`/${locale}/support`}
                  className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                >
                  {t('support')}
                </Link>
                <Link
                  href={`/${locale}/privacy`}
                  className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm border-b border-gray-100"
                >
                  {t('privacy')}
                </Link>
                <Link
                  href={`/${locale}/terms`}
                  className="block w-full px-4 py-3 text-gluco-blue hover:bg-blue-50 font-semibold transition-colors text-sm"
                >
                  {t('terms')}
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
