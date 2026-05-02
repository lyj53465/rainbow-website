'use client';

import { useLang } from '@/lib/i18n/Context';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span>🌈</span>
              </div>
              <div>
                <h3 className="text-lg">Rainbow Logistics Inc</h3>
              </div>
            </div>
            <p className="text-gray-400">{t.footer.companyDesc}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">{t.footer.ourServices}</h3>
            <ul className="space-y-2 text-gray-400">
              {t.footer.services.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <a href="/privacy" className="hover:text-white transition-colors text-sm">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
