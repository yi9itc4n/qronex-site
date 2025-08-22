"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n';

const caseStudies = [
  {
    id: 'bmw-engine-sorting',
    title: 'BMW Motor Bloğu Sorting Projesi',
    client: 'BMW AG',
    industry: 'Otomotiv OEM',
    location: 'München, Almanya',
    duration: '6 ay',
    teamSize: '8 mühendis',
    challenge: 'Motor blokları üretiminde %3.2 hata oranı, günlük 1200 parça sorting ihtiyacı',
    solution: 'On-site ekip kurulumu, 24/7 sorting operasyonu, kalite kontrol sistemleri',
    results: [
      'Hata oranı %0.1\'e düşürüldü',
      'Günlük sorting kapasitesi 1500 parçaya çıkarıldı',
      'Müşteri memnuniyeti %98 seviyesine ulaştı',
      '€2.3M maliyet tasarrufu sağlandı'
    ],
    tags: ['Sorting', 'Otomotiv', 'On-Site'],
    date: '2024',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 'volkswagen-ev-battery',
    title: 'Volkswagen EV Batarya Kalite Kontrolü',
    client: 'Volkswagen Group',
    industry: 'e-Mobility',
    location: 'Wolfsburg, Almanya',
    duration: '12 ay',
    teamSize: '12 mühendis',
    challenge: 'ID.3 ve ID.4 modelleri için batarya kalite kontrol süreçlerinin optimize edilmesi',
    solution: 'Gelişmiş test sistemleri, AI destekli kalite analizi, süreç otomasyonu',
    results: [
      'Test süresi %40 azaltıldı',
      'Kalite skoru %99.2\'ye yükseldi',
      'Üretim verimliliği %25 arttı',
      'Geri çağırma oranı %0.02\'ye düştü'
    ],
    tags: ['e-Mobility', 'Batarya', 'AI/ML'],
    date: '2024',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 'bosch-supplier-readiness',
    title: 'Bosch Tedarikçi Hazırlık Programı',
    client: 'Robert Bosch GmbH',
    industry: 'Tier 1',
    location: 'Stuttgart, Almanya',
    duration: '8 ay',
    teamSize: '15 mühendis',
    challenge: 'Yeni tedarikçilerin Bosch kalite standartlarına uyumlu hale getirilmesi',
    solution: 'Kapsamlı eğitim programı, süreç audit\'i, mentoring sistemi',
    results: [
      '25 tedarikçi başarıyla sertifikalandırıldı',
      'İlk geçiş oranı %85\'e çıkarıldı',
      'Audit süresi %50 kısaltıldı',
      'Tedarikçi memnuniyeti %92'
    ],
    tags: ['Tedarikçi', 'Eğitim', 'Sertifikasyon'],
    date: '2023',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 'airbus-quality-system',
    title: 'Airbus Kalite Sistem Implementasyonu',
    client: 'Airbus SE',
    industry: 'Havacılık',
    location: 'Toulouse, Fransa',
    duration: '10 ay',
    teamSize: '20 mühendis',
    challenge: 'A350 üretim hattında kalite yönetim sisteminin optimize edilmesi',
    solution: 'AS9100 standardına uygun sistemler, dijital kalite kontrol, predictive analysis',
    results: [
      'AS9100 Rev D sertifikasyonu alındı',
      'Üretim hatası %60 azaldı',
      'Delivery time %20 iyileşti',
      'Müşteri audit skorları mükemmel seviyede'
    ],
    tags: ['Havacılık', 'AS9100', 'Sistem'],
    date: '2023',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 'man-trucks-rework',
    title: 'MAN Trucks Rework Operasyonu',
    client: 'MAN Truck & Bus',
    industry: 'Ağır Nakliye',
    location: 'Nürnberg, Almanya',
    duration: '4 ay',
    teamSize: '6 mühendis',
    challenge: 'TGX serisi kamyonlarda transmisyon problemlerinin çözümü',
    solution: 'Özel rework istasyonu kurulumu, part modification, quality gates',
    results: [
      '2800 araç başarıyla rework edildi',
      'Müşteri şikayetleri %95 azaldı',
      'Garanti maliyetleri €4.2M tasarruf',
      'Müşteri güveni yeniden tesis edildi'
    ],
    tags: ['Rework', 'Kamyon', 'Transmisyon'],
    date: '2023',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 'continental-technical-rep',
    title: 'Continental Teknik Temsilcilik',
    client: 'Continental AG',
    industry: 'Tier 1',
    location: 'Hannover, Almanya',
    duration: 'Sürekli',
    teamSize: '4 mühendis',
    challenge: 'Müşteri lokasyonunda sürekli kalite desteği sağlanması',
    solution: 'Resident engineer programı, günlük quality check, rapid response',
    results: [
      'Müşteri memnuniyeti %96',
      'Problem çözme süresi %70 azaldı',
      'Kalite skorları tutarlı %99+',
      'Long-term partnership kuruld'
    ],
    tags: ['Resident', 'Support', 'Partnership'],
    date: '2022-devam',
    image: '/api/placeholder/600/400',
    featured: false
  }
];

const industries = ['Tümü', 'Otomotiv OEM', 'e-Mobility', 'Tier 1', 'Havacılık', 'Ağır Nakliye'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('Tümü');
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredCases = caseStudies.filter(caseStudy => {
    if (selectedIndustry === 'Tümü') return true;
    return caseStudy.industry === selectedIndustry;
  });

  const featuredCases = filteredCases.filter(c => c.featured);
  const allCases = selectedTab === 'featured' ? featuredCases : filteredCases;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vaka Çalışmaları
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Müşterilerimizle birlikte gerçekleştirdiğimiz başarılı projeler ve elde ettiğimiz sonuçlar
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">680+</div>
              <div className="text-blue-200">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">€45M+</div>
              <div className="text-blue-200">Maliyet Tasarrufu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">99.2%</div>
              <div className="text-blue-200">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          {/* Filter Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="all">Tüm Projeler</TabsTrigger>
              <TabsTrigger value="featured">Öne Çıkanlar</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Industry Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                className="mb-2"
              >
                {industry}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              <span className="font-semibold">{allCases.length}</span> proje gösteriliyor
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allCases.map((caseStudy) => (
              <Card key={caseStudy.id} className="card-hover bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">
                        {caseStudy.client}
                      </CardDescription>
                    </div>
                    {caseStudy.featured && (
                      <Badge className="bg-orange-100 text-orange-800">
                        Öne Çıkan
                      </Badge>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {caseStudy.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {caseStudy.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {caseStudy.teamSize}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.industry}
                    </Badge>
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Meydan Okuma</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Çözümümüz</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Elde Edilen Sonuçlar
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {allCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Seçilen filtreler için proje bulunamadı.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bir Sonraki Başarı Hikayesi Sizinki Olsun
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Deneyimli ekibimizle kalite problemlerinizi başarı hikayelerine dönüştürelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Projenizi Başlatalım
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
