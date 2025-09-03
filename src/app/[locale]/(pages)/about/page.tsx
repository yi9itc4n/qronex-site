"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Award, TrendingUp, Target, Shield, Heart, Lightbulb } from 'lucide-react';
import { Link } from '@/i18n';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

const teamMembersStatic = [
  {
    key: 'senih',
    name: 'Senih DİNÇ',
    position: 'Co-founder CEO',
    image: '/images/team/senih-dinc.jpg',
    expertise: ['Quality Management', 'Valeo Germany', 'Casting & Materials']
  },
  {
    key: 'aysu',
    name: 'Aysu KAYAN',
    position: 'Co-founder COO',
    image: '/images/team/aysu-kayan.jpg',
    expertise: ['Customer Quality', 'OEM Management', 'Project Quality']
  },
  {
    key: 'zafer',
    name: 'Zafer SEYMEN',
    position: 'Founding Advisor',
    image: '/images/team/zafer-seymen.jpg',
    expertise: ['Manufacturing Operations', 'Global Leadership', 'Operational Excellence']
  }
];

const values = [
  { icon: Target, color: 'blue', titleKey: 'values.items.excellence.title', descKey: 'values.items.excellence.description' },
  { icon: Shield, color: 'green', titleKey: 'values.items.reliability.title', descKey: 'values.items.reliability.description' },
  { icon: Lightbulb, color: 'purple', titleKey: 'values.items.innovation.title', descKey: 'values.items.innovation.description' },
  { icon: Heart, color: 'orange', titleKey: 'values.items.customerFocus.title', descKey: 'values.items.customerFocus.description' }
];

const milestones = [
  {
    year: '2018',
    title: 'QroneX Kuruldu',
    description: 'München\'de kurulan şirket, otomotiv sektöründe kalite danışmanlığına başladı.',
    achievement: 'İlk 5 müşteri'
  },
  {
    year: '2019',
    title: 'Avrupa Genişlemesi',
    description: 'Fransa ve İtalya\'ya expansion, Tier 1 tedarikçilerle ilk büyük projeler.',
    achievement: '25+ proje tamamlandı'
  },
  {
    year: '2020',
    title: 'e-Mobility Uzmanlığı',
    description: 'Elektrikli araç teknolojileri alanında uzmanlaşma ve özel ekip kurulumu.',
    achievement: 'EV projelerinde %300 büyüme'
  },
  {
    year: '2021',
    title: 'Havacılık Sektörü',
    description: 'AS9100 sertifikasyonu ve Airbus tedarik zinciri projelerine katılım.',
    achievement: 'Aerospace sertifikasyonu'
  },
  {
    year: '2022',
    title: 'Digital Transformation',
    description: 'AI destekli kalite analiz sistemleri ve dijital çözümler geliştirme.',
    achievement: 'Teknoloji lideri'
  },
  {
    year: '2023',
    title: 'Market Leadership',
    description: 'Avrupa\'da Tier 1 kalite danışmanlığında lider konuma gelme.',
    achievement: '150+ mutlu müşteri'
  },
  {
    year: '2024',
    title: 'Sürdürülebilirlik',
    description: 'Green manufacturing ve sürdürülebilir kalite süreçleri alanında öncülük.',
    achievement: 'Carbon neutral operations'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'text-blue-green bg-blue-green-light',
    green: 'text-blue-green bg-teal-light',
    purple: 'text-blue-green bg-blue-green-light',
    orange: 'text-blue-green bg-teal-light'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function AboutPage() {
  const t = useTranslations('about');
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const teamMembers = teamMembersStatic.map((m) => ({
    ...m,
    location: t(`team.${m.key}.location`),
    experience: t(`team.${m.key}.experience`),
    description: t(`team.${m.key}.description`),
    bio: t(`team.${m.key}.bio`)
  }));

  const handleImageError = (memberName: string) => {
    setImageErrors(prev => ({ ...prev, [memberName]: true }));
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">15</CardTitle>
                <CardDescription>{t('stats.countries')}</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">50+</CardTitle>
                <CardDescription>{t('stats.engineers')}</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">680+</CardTitle>
                <CardDescription>{t('stats.projects')}</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">99.2%</CardTitle>
                <CardDescription>{t('stats.satisfaction')}</CardDescription>
              </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('leadership.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('leadership.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="w-32 h-32 bg-blue-green-gradient rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    {imageErrors[member.name] ? (
                      <Users className="h-16 w-16 text-white" />
                    ) : (
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full"
                        onError={() => handleImageError(member.name)}
                      />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg">
                    {member.position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-sm text-gray-600">
                    <p className="flex items-center justify-center mb-2">
                      <Globe className="h-4 w-4 mr-2" />
                      {member.location}
                    </p>
                    <p className="font-semibold text-blue-600">{member.experience} deneyim</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                    <p className="font-medium text-gray-800">
                      {member.description}
                    </p>
                    <details className="group">
                      <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">{t('leadership.readMore')}</summary>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </details>
                  </div>
                </CardContent>
              </Card>
            ))}
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
