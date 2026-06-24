'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
          locale === 'en'
            ? 'bg-gluco-orange text-white'
            : 'text-gluco-blue hover:bg-gray-100'
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('he')}
        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
          locale === 'he'
            ? 'bg-gluco-orange text-white'
            : 'text-gluco-blue hover:bg-gray-100'
        }`}
      >
        עברית
      </button>
    </div>
  );
}
