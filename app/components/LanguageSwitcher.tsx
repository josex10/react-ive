"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/routing';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <label className="flex items-center gap-2">
      <span className="sr-only">Choose language</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        className="cursor-pointer appearance-none bg-transparent text-sm font-medium text-white/60 transition-colors hover:text-white focus:outline-none"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-[#0A1128] text-white">
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
