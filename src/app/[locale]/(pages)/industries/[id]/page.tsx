"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n";
import { 
  Car, 
  Factory, 
  Zap, 
  Truck, 
  Plane, 
  Building2,
  ArrowRight,
  CheckCircle,
  Award
} from "lucide-react";

const industryData = {
  'automotive-oem': {
    icon: Car,
    color: 'blue',
    titleKey: 'industries.automotiveOem.title',
    descriptionKey: 'industries.automotiveOem.description',
    servicesKey: 'industries.automotiveOem.services',
    benefitsKey: 'industries.automotiveOem.benefits',
    statsKey: 'industries.automotiveOem.stats',
    ctaKey: 'industries.automotiveOem.cta'
  },
  'tier1': {
    icon: Factory,
    color: 'green',
    titleKey: 'industries.tier1.title',
    descriptionKey: 'industries.tier1.description',
    servicesKey: 'industries.tier1.services',
    benefitsKey: 'industries.tier1.benefits',
    statsKey: 'industries.tier1.stats',
    ctaKey: 'industries.tier1.cta'
  },
  'e-mobility': {
    icon: Zap,
    color: 'purple',
    titleKey: 'industries.eMobility.title',
    descriptionKey: 'industries.eMobility.description',
    servicesKey: 'industries.eMobility.services',
    benefitsKey: 'industries.eMobility.benefits',
    statsKey: 'industries.eMobility.stats',
    ctaKey: 'industries.eMobility.cta'
  },
  'heavy-transport': {
    icon: Truck,
    color: 'orange',
    titleKey: 'industries.heavyTransport.title',
    descriptionKey: 'industries.heavyTransport.description',
    servicesKey: 'industries.heavyTransport.services',
    benefitsKey: 'industries.heavyTransport.benefits',
    statsKey: 'industries.heavyTransport.stats',
    ctaKey: 'industries.heavyTransport.cta'
  },
  'aerospace': {
    icon: Plane,
    color: 'indigo',
    titleKey: 'industries.aerospace.title',
    descriptionKey: 'industries.aerospace.description',
    servicesKey: 'industries.aerospace.services',
    benefitsKey: 'industries.aerospace.benefits',
    statsKey: 'industries.aerospace.stats',
    ctaKey: 'industries.aerospace.cta'
  },
  'industrial': {
    icon: Building2,
    color: 'teal',
    titleKey: 'industries.title',
    descriptionKey: 'industries.subtitle',
    servicesKey: 'industries.industrial.services',
    benefitsKey: 'industries.industrial.benefits',
    statsKey: 'industries.industrial.stats',
    ctaKey: 'industries.industrial.cta'
  }
};

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-600 to-blue-800'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      gradient: 'from-green-600 to-green-800'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-800',
      gradient: 'from-purple-600 to-purple-800'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800',
      gradient: 'from-orange-600 to-orange-800'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-800',
      gradient: 'from-indigo-600 to-indigo-800'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      badge: 'bg-teal-100 text-teal-800',
      gradient: 'from-teal-600 to-teal-800'
    }
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function IndustryDetailPage() {
  const params = useParams();
  const industryId = params.id as string;
  const t = useTranslations();
  
  const industry = industryData[industryId as keyof typeof industryData];
  
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link href="/industries" className="text-blue-600 hover:text-blue-800">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;
  const colors = getColorClasses(industry.color);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`hero-gradient text-white section-padding bg-gradient-to-r ${colors.gradient}`}>
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t(industry.titleKey)}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t(industry.descriptionKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('industries.sections.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('industries.sections.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw(industry.servicesKey).map((service: {title: string, description: string, features: string[]}, index: number) => (
              <Card key={index} className={`${colors.bg} ${colors.border} card-hover`}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                      <CheckCircle className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('industries.sections.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('industries.sections.benefitsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw(industry.benefitsKey).map((benefit: {title: string, description: string}, index: number) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Award className={`h-8 w-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('industries.sections.statsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('industries.sections.statsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.raw(industry.statsKey).map((stat: {value: string, label: string}, index: number) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${colors.icon} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className={`bg-gradient-to-r ${colors.gradient} rounded-2xl p-8 lg:p-12 text-center text-white`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t(industry.ctaKey + '.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t(industry.ctaKey + '.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  {t(industry.ctaKey + '.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/services">
                  {t(industry.ctaKey + '.secondary')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

