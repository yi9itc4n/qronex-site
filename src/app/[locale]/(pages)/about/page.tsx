"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Shield, Heart, Lightbulb, Users, Leaf, Zap } from 'lucide-react';
import { Link } from '@/i18n';
import { useTranslations } from 'next-intl';


const values = [
  { icon: Target, color: 'blue', titleKey: 'values.items.excellence.title', descKey: 'values.items.excellence.description' },
  { icon: Shield, color: 'green', titleKey: 'values.items.reliability.title', descKey: 'values.items.reliability.description' },
  { icon: Users, color: 'purple', titleKey: 'values.items.collaboration.title', descKey: 'values.items.collaboration.description' },
  { icon: Heart, color: 'orange', titleKey: 'values.items.customerFocus.title', descKey: 'values.items.customerFocus.description' },
  { icon: Leaf, color: 'teal', titleKey: 'values.items.sustainability.title', descKey: 'values.items.sustainability.description' },
  { icon: Zap, color: 'yellow', titleKey: 'values.items.quickMobility.title', descKey: 'values.items.quickMobility.description' }
];


const getColorClasses = (color: string) => {
  const colors = {
    blue: 'text-blue-green bg-blue-green-light',
    green: 'text-blue-green bg-teal-light',
    purple: 'text-blue-green bg-blue-green-light',
    orange: 'text-blue-green bg-teal-light',
    teal: 'text-teal-600 bg-teal-50',
    yellow: 'text-yellow-600 bg-yellow-50'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">QroneX</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100">{t('heroTitle')}</h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('visionMission')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('visionTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('visionText')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('missionTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('values.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = getColorClasses(value.color);
              
              return (
                <Card key={index} className="text-center p-6 card-hover">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${colorClasses} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {t(value.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {t(value.descKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="bg-blue-green-gradient rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('cta.primary')}
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
