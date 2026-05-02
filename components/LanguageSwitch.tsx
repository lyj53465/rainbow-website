'use client';

import { useLang } from '@/lib/i18n/Context';

export function LanguageSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center text-sm select-none">
      <button
        onClick={() => setLang('zh')}
        className={`px-2 py-1 transition-colors ${lang === 'zh' ? 'text-purple-600 font-semibold' : 'text-gray-500 hover:text-gray-800'}`}
        aria-pressed={lang === 'zh'}
      >
        中
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-purple-600 font-semibold' : 'text-gray-500 hover:text-gray-800'}`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
