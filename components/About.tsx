'use client';

import { CheckCircle, Globe, Clock, Shield } from 'lucide-react';
import { useLang } from '@/lib/i18n/Context';

const ICONS = [Globe, Clock, Shield, CheckCircle];

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">{t.about.sectionTitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{t.about.intro1}</p>
            <p className="text-lg text-gray-600 mb-6">{t.about.intro2}</p>
            <p className="text-lg text-gray-600">{t.about.intro3}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.advantages.map((advantage, index) => {
              const Icon = ICONS[index] ?? CheckCircle;
              return (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
