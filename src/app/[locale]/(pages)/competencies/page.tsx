"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Zap, Users, Shield, Wrench, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CompetenciesPage() {
  const t = useTranslations('competencies');

  const competencies = [
    {
      id: 'automotive-oem',
      title: t('automotiveOem.title'),
      description: t('automotiveOem.description'),
      image: '/images/competencies/automotive-oem.jpg',
      icon: Target,
      color: 'blue'
    },
    {
      id: 'tier1-suppliers',
      title: t('tier1Suppliers.title'),
      description: t('tier1Suppliers.description'),
      image: '/images/competencies/tier1-suppliers.jpg',
      icon: Zap,
      color: 'green'
    },
    {
      id: 'emobility',
      title: t('emobility.title'),
      description: t('emobility.description'),
      image: '/images/competencies/emobility.jpg',
      icon: Shield,
      color: 'purple'
    },
    {
      id: 'heavy-transport',
      title: t('heavyTransport.title'),
      description: t('heavyTransport.description'),
      image: '/images/competencies/heavy-transport.jpg',
      icon: Wrench,
      color: 'orange'
    },
    {
      id: 'aerospace',
      title: t('aerospace.title'),
      description: t('aerospace.description'),
      image: '/images/competencies/aerospace.jpg',
      icon: CheckCircle,
      color: 'teal'
    },
    {
      id: 'industrial',
      title: t('industrial.title'),
      description: t('industrial.description'),
      image: '/images/competencies/industrial.jpg',
      icon: Users,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50',
      teal: 'text-teal-600 bg-teal-50',
      indigo: 'text-indigo-600 bg-indigo-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('competenciesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('competenciesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((competency, index) => {
              const Icon = competency.icon;
              const colorClasses = getColorClasses(competency.color);
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={competency.image}
                      alt={competency.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full ${colorClasses} flex items-center justify-center`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {competency.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {competency.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{t('ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/contact">
                {t('ctaPrimary')}
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/services">
                {t('ctaSecondary')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
