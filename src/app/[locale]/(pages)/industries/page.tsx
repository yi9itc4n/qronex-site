import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Car, Truck, Plane, Zap, Factory } from 'lucide-react';
import { Link } from '@/i18n';

export const metadata: Metadata = {
  title: 'Sektörler | QroneX',
  description: 'Farklı sektörlerdeki deneyimimizle size özel kalite çözümleri geliştiriyoruz. Otomotiv, havacılık, e-mobility ve daha fazlası.',
};

const industries = [
  {
    id: 'automotive-oem',
    title: 'Otomotiv OEM',
    description: 'Ana otomotiv üreticileri için kapsamlı kalite çözümleri. BMW, Mercedes, Audi ve diğer premium markalarla çalışma deneyimi.',
    icon: Car,
    services: ['On-Site Müdahale', 'Sorting & Containment', 'Kalite Mühendisliği'],
    color: 'blue',
    stats: {
      projects: '150+',
      clients: '25',
      locations: '8 Ülke'
    }
  },
  {
    id: 'tier1',
    title: 'Tier 1 Tedarikçiler',
    description: 'Birinci kademe tedarikçiler için özelleşmiş hizmetler. Bosch, Continental, ZF gibi büyük tedarikçilerle partnership.',
    icon: Factory,
    services: ['Tedarikçi Hazırlığı', 'Teknik Temsilcilik', 'Süreç Optimizasyonu'],
    color: 'green',
    stats: {
      projects: '200+',
      clients: '35',
      locations: '12 Ülke'
    }
  },
  {
    id: 'e-mobility',
    title: 'e-Mobility / EV',
    description: 'Elektrikli araç teknolojileri için gelişmiş kalite süreçleri. Tesla, VW ID serisi, BMW i serisi projeleri.',
    icon: Zap,
    services: ['Battery QC', 'Charging Systems', 'EV Components'],
    color: 'purple',
    stats: {
      projects: '75+',
      clients: '15',
      locations: '6 Ülke'
    }
  },
  {
    id: 'heavy-transport',
    title: 'Ağır Nakliye',
    description: 'Kamyon ve otobüs sektörü için güçlü çözümler. MAN, Scania, Volvo trucks ile uzun dönemli projeler.',
    icon: Truck,
    services: ['Heavy Duty Testing', 'Reliability Analysis', 'Fleet Support'],
    color: 'orange',
    stats: {
      projects: '90+',
      clients: '18',
      locations: '5 Ülke'
    }
  },
  {
    id: 'aerospace',
    title: 'Havacılık',
    description: 'Havacılık sektörü için yüksek standart kalite hizmetleri. Airbus, Boeing tedarikçileri ile kritik projeler.',
    icon: Plane,
    services: ['AS9100 Compliance', 'Critical Components', 'Aerospace Testing'],
    color: 'indigo',
    stats: {
      projects: '45+',
      clients: '12',
      locations: '4 Ülke'
    }
  },
  {
    id: 'industrial',
    title: 'Endüstriyel Üretim',
    description: 'Genel endüstriyel üretim için kapsamlı kalite hizmetleri. Makine, ekipman ve komponent üreticileri.',
    icon: Building2,
    services: ['Production Support', 'Quality Systems', 'Certification'],
    color: 'teal',
    stats: {
      projects: '120+',
      clients: '40',
      locations: '10 Ülke'
    }
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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sektörler
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Farklı sektörlerdeki deneyimimizle size özel kalite çözümleri geliştiriyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her sektörün kendine özgü ihtiyaçlarını anlıyor ve bu doğrultuda özelleştirilmiş çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const colors = getColorClasses(industry.color);
              
              return (
                <Card key={industry.id} className={`${colors.bg} ${colors.border} card-hover`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                        <Icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {industry.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Services */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Öne Çıkan Hizmetler</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service) => (
                          <Badge key={service} className={colors.badge}>
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${colors.icon}`}>
                          {industry.stats.projects}
                        </div>
                        <div className="text-xs text-gray-500">Proje</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${colors.icon}`}>
                          {industry.stats.clients}
                        </div>
                        <div className="text-xs text-gray-500">Müşteri</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${colors.icon}`}>
                          {industry.stats.locations}
                        </div>
                        <div className="text-xs text-gray-500">Lokasyon</div>
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
              Sektörünüze Özel Çözüm Arıyorsunuz?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Deneyimli ekibimizle sektörünüzün özel ihtiyaçlarına yönelik kalite çözümleri geliştirelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Danışmanlık Al
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
