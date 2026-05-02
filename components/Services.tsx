'use client';

import { Ship, Plane, FileText, Package, Check, Zap, TruckIcon, Shield, Settings, Share2, FileCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLang } from '@/lib/i18n/Context';

const ADVANTAGE_ICONS = [Zap, TruckIcon, Shield, Settings, Share2, FileCheck];

export function Services() {
  const { t } = useLang();
  const services = [
    {
      icon: Ship,
      key: 'sea' as const,
      data: t.services.sea,
      image: 'https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzY0NDQ0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Plane,
      key: 'air' as const,
      data: t.services.air,
      image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3NjQ0NDQ1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: FileText,
      key: 'y2' as const,
      data: t.services.y2,
      image: 'https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0MzgxOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Package,
      key: 'drop' as const,
      data: t.services.drop,
      image: 'https://images.unsplash.com/photo-1724770388461-58567b88f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NDQ0NDU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">{t.services.sectionTitle}</h2>
          <p className="text-xl text-gray-600">{t.services.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const data = service.data as any;
            return (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <ImageWithFallback
                  src={service.image}
                  alt={data.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl text-gray-900">{data.title}</h3>
                </div>

                <p className="text-purple-600 mb-4">{data.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

                {data.highlight && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-4 mb-6 rounded-r-lg">
                    <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{data.highlight}</p>
                  </div>
                )}

                {data.advantages && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {data.advantages.map((label: string, i: number) => {
                        const Icon = ADVANTAGE_ICONS[i] ?? Check;
                        return (
                          <div key={i} className="flex items-center gap-2 text-gray-700">
                            <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                              <Icon className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="text-sm">{label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2">
                    {data.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-gray-700">
                        <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {data.useCases && (
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-900 mb-3">{t.services.suitableScenarios}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {data.useCases.map((useCase: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 text-gray-700">
                          <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {data.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
