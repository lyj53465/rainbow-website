'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLang } from '@/lib/i18n/Context';

export function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzY0NDQ0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Shipping containers at port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-6xl mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{t.hero.subtitle}</p>
            <p className="text-lg mb-8 max-w-3xl">{t.hero.description}</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
