'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLang } from '@/lib/i18n/Context';
import { LanguageSwitch } from './LanguageSwitch';

export function Header() {
  const { t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white">🌈</span>
              </div>
              <div>
                <h1 className="text-xl text-gray-900">Rainbow Logistics Inc</h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.home}
            </button>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                {t.nav.services}
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-10">
                  <button
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => { scrollToSection('services'); setIsServicesOpen(false); }}
                  >
                    {t.nav.serviceDetails}
                  </button>
                  <a href="https://cs.rainbowlogisticsus.com/customer-prealert" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.air}</a>
                  <a href="https://cs.rainbowlogisticsus.com/driver-mobile" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.driver}</a>
                  <a href="https://cs.rainbowlogisticsus.com/" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.platform}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/client-mobile/login" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.seaPrealert}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/warehouse-mobile/login" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.partnerWarehouse}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsServicesOpen(false)}>{t.nav.seaPlatform}</a>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.contact}
            </button>
            <a
              href="/download"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              {t.nav.download}
            </a>
            <LanguageSwitch />
          </nav>

          {/* Mobile: Lang switch + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitch />
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
              {t.nav.home}
            </button>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                {t.nav.services}
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 w-full bg-white shadow-lg rounded-md">
                  <button
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => { scrollToSection('services'); setIsMobileServicesOpen(false); }}
                  >
                    {t.nav.serviceDetails}
                  </button>
                  <a href="https://cs.rainbowlogisticsus.com/customer-prealert" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.air}</a>
                  <a href="https://cs.rainbowlogisticsus.com/driver-mobile" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.driver}</a>
                  <a href="https://cs.rainbowlogisticsus.com/" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.platform}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/client-mobile/login" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.seaPrealert}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/warehouse-mobile/login" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.partnerWarehouse}</a>
                  <a href="https://ocop.rainbowlogisticsus.com/" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={() => setIsMobileServicesOpen(false)}>{t.nav.seaPlatform}</a>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
              {t.nav.contact}
            </button>
            <a
              href="/download"
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.download}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
