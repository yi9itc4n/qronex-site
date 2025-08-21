import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Award, TrendingUp, Target, Shield, Heart, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda | QroneX',
  description: 'QroneX; Avrupa\'da yerleşik saha mühendisleriyle Tier 1 tedarikçilerin kalite problemlerine hızlı ve doğru çözümler sunan lider kalite danışmanlık şirketidir.',
};

const teamMembers = [
  {
    name: 'Dr. Mehmet Yılmaz',
    position: 'CEO & Kurucu',
    location: 'München, Almanya',
    experience: '20+ yıl',
    expertise: ['Automotive OEM', 'Quality Management', 'Strategic Leadership'],
    description: 'BMW ve Mercedes-Benz\'de 15 yıl üst düzey kalite yönetimi deneyimi.',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Hans Müller',
    position: 'CTO & Operasyon Direktörü',
    location: 'Stuttgart, Almanya',
    experience: '18+ yıl',
    expertise: ['Technical Operations', 'Process Optimization', 'Team Management'],
    description: 'Bosch ve Continental\'de kritik projelerin başarılı yönetimi.',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Pierre Dubois',
    position: 'Quality Engineering Director',
    location: 'Paris, Fransa',
    experience: '16+ yıl',
    expertise: ['Aerospace Quality', 'AS9100', 'Six Sigma'],
    description: 'Airbus tedarik zincirinde kalite sistemleri uzmanlığı.',
    image: '/api/placeholder/150/150'
  },
  {
    name: 'Alessandro Rossi',
    position: 'e-Mobility Specialist',
    location: 'Milano, İtalya',
    experience: '12+ yıl',
    expertise: ['EV Systems', 'Battery Technology', 'Innovation'],
    description: 'Tesla ve VW Group\'ta elektrikli araç kalite süreçleri deneyimi.',
    image: '/api/placeholder/150/150'
  }
];

const values = [
  {
    icon: Target,
    title: 'Mükemmellik',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz ve müşterilerimizin beklentilerini aşmaya odaklanıyoruz.',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Müşterilerimizin güvenini kazanmak için tutarlı, zamanında ve etkili çözümler sunuyoruz.',
    color: 'green'
  },
  {
    icon: Lightbulb,
    title: 'İnovasyon',
    description: 'Sektördeki en son teknolojileri ve metodolojileri kullanarak sürekli gelişim sağlıyoruz.',
    color: 'purple'
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklılık',
    description: 'Müşterilerimizin başarısı bizim başarımızdır. Onların ihtiyaçlarını anlamak önceliğimizdir.',
    color: 'orange'
  }
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
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    orange: 'text-orange-600 bg-orange-50'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              QroneX; Avrupa&apos;da yerleşik saha mühendisleriyle Tier 1 tedarikçilerin kalite problemlerine hızlı ve doğru çözümler sunan lider kalite danışmanlık şirketidir.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Vizyonumuz ve Misyonumuz
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Vizyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avrupa&apos;nın en güvenilir kalite danışmanlık partneri olarak, müşterilerimizin kalite excellency yolculuğunda vazgeçilmez bir rehber olmak.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Misyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Saha mühendislerimizin derinlemesine uzmanlığı ve güncel teknolojik çözümlerle, müşterilerimizin kalite hedeflerine ulaşmalarını sağlamak ve sürdürülebilir başarı elde etmelerini desteklemek.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">15</CardTitle>
                <CardDescription>Ülkede Hizmet</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">50+</CardTitle>
                <CardDescription>Saha Mühendisi</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">680+</CardTitle>
                <CardDescription>Başarılı Proje</CardDescription>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">99.2%</CardTitle>
                <CardDescription>Müşteri Memnuniyeti</CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              QroneX olarak çalışma kültürümüzü ve müşteri ilişkilerimizi şekillendiren temel değerlerimiz
            </p>
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
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Liderlik Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sektörde uzun yıllar deneyim sahibi, uzmanlıklarıyla QroneX&apos;i başarıya taşıyan liderlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <p className="flex items-center justify-center mb-1">
                      <Globe className="h-4 w-4 mr-2" />
                      {member.location}
                    </p>
                    <p>{member.experience} deneyim</p>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              QroneX&apos;in kuruluşundan bugüne kadar geçirdiği önemli kilometre taşları
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-blue-600 text-white font-bold text-lg px-3 py-1">
                          {milestone.year}
                        </Badge>
                        <Badge variant="outline" className="text-blue-600">
                          {milestone.achievement}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </CardDescription>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Birlikte Başarıya Ulaşalım
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Deneyimli ekibimiz ve kanıtlanmış metodolojilerimizle kalite hedeflerinize ulaşmanızı sağlayalım
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tr/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                İletişime Geçin
              </a>
              <a
                href="/tr/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Başarı Hikayelerimizi İnceleyin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
