import { Metadata } from 'next';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Building2, Car, Truck, Plane, Zap, Factory } from 'lucide-react';
import { Link } from '@/i18n';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Sektörler | QroneX',
  description: 'Farklı sektörlerdeki deneyimimizle size özel kalite çözümleri geliştiriyoruz. Otomotiv, havacılık, e-mobility ve daha fazlası.',
};

const industries = [
  {
    id: 'automotive-oem',
    title: 'industries.automotiveOem.title',
    description: 'industries.automotiveOem.description',
    icon: Car,
    color: 'blue'
  },
  {
    id: 'tier1',
    title: 'industries.tier1.title',
    description: 'industries.tier1.description',
    icon: Factory,
    color: 'green'
  },
  {
    id: 'e-mobility',
    title: 'industries.eMobility.title',
    description: 'industries.eMobility.description',
    icon: Zap,
    color: 'purple'
  },
  {
    id: 'heavy-transport',
    title: 'industries.heavyTransport.title',
    description: 'industries.heavyTransport.description',
    icon: Truck,
    color: 'orange'
  },
  {
    id: 'aerospace',
    title: 'industries.aerospace.title',
    description: 'industries.aerospace.description',
    icon: Plane,
    color: 'indigo'
  },
  {
    id: 'industrial',
    title: 'industries.industrial.title',
    description: 'industries.industrial.description',
    icon: Building2,
    color: 'teal'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-800'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-800'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      badge: 'bg-teal-100 text-teal-800'
    }
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function IndustriesPage() {
  const t = useTranslations();
  const ti = useTranslations('industries');
  const ts = useTranslations('industries.sections');
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {ti('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {ti('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {ts('expertiseTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ti('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const colors = getColorClasses(industry.color);
              
              return (
                <Card key={industry.id} className={`${colors.bg} ${colors.border} transition-all duration-200`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-white shadow-sm flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {t(industry.title)}
                        </CardTitle>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t(industry.description)}
                        </p>
                      </div>
                    </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {ts('cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {ts('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {ts('cta.primary')}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                {ts('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
