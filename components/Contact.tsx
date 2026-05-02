'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/lib/i18n/Context';

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">{t.contact.sectionTitle}</h2>
          <p className="text-xl text-gray-600">{t.contact.sectionSubtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{t.contact.addressLabel}</h3>
                  <p className="text-gray-600">
                    {t.contact.addressLines.map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{t.contact.phoneLabel}</h3>
                  <p className="text-gray-600">
                    +1 (828) 888-6668<br />
                    {t.contact.phoneText}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{t.contact.emailLabel}</h3>
                  <div className="text-gray-600 space-y-1">
                    {t.contact.emailDepts.map(d => (
                      <p key={d.email}><span className="font-medium">{d.label}:</span> {d.email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{t.contact.hoursLabel}</h3>
                  <p className="text-gray-600">
                    {t.contact.hoursLines.map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
