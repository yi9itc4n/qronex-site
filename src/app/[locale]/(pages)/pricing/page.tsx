import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Zap,
  Settings,
  Globe,
  Award
} from "lucide-react";

export default function PricingPage() {
  const t = useTranslations("pricing");

  const enterpriseSolutions = [
    {
      id: "enterprise-premium",
      name: "Enterprise Premium",
      subtitle: "Kapsamlı Kalite Çözümleri",
      description: "Büyük ölçekli projeler için tam kapsamlı kalite mühendisliği hizmetleri",
      icon: Award,
      features: [
        "24×7 destek ve acil müdahale",
        "Sözleşmeli kapasite garantisi",
        "Yerinde ekip konuşlandırma",
        "Çok ülke roll-out desteği",
        "EV/e-mobility uzmanlığı",
        "Sistem entegrasyonları",
        "Özel SLA'lar",
        "Dedicated account manager",
        "Custom reporting dashboard",
        "Priority support"
      ]
    },
    {
      id: "enterprise-global",
      name: "Enterprise Global",
      subtitle: "Küresel Operasyonlar",
      description: "Uluslararası projeler ve çok lokasyonlu operasyonlar için özelleştirilmiş çözümler",
      icon: Globe,
      features: [
        "Çok ülke koordinasyonu",
        "Küresel standart uygulamaları",
        "Yerel ekip koordinasyonu",
        "24/7 global destek",
        "Çoklu dil desteği",
        "Kültürel adaptasyon",
        "Uluslararası compliance",
        "Global raporlama"
      ]
    },
    {
      id: "enterprise-custom",
      name: "Enterprise Custom",
      subtitle: "Özelleştirilmiş Çözümler",
      description: "Özel ihtiyaçlarınıza göre tamamen özelleştirilmiş kalite mühendisliği hizmetleri",
      icon: Settings,
      features: [
        "Tam özelleştirilebilir hizmet paketi",
        "İhtiyaca özel SLA tasarımı",
        "Özel teknoloji entegrasyonları",
        "Sektörel uzmanlık",
        "Training ve sertifikasyon",
        "Stratejik ortaklık",
        "Innovation support",
        "Future-ready solutions"
      ]
    }
  ];

  const addOns = [
    {
      name: "Acil Müdahale (6 saat)",
      price: "€500",
      description: "6 saat içinde yerinde müdahale garantisi",
      icon: Zap
    },
    {
      name: "Hafta Sonu Desteği",
      price: "€300",
      description: "Cumartesi-Pazar günleri destek",
      icon: Clock
    },
    {
      name: "Ek Lokasyon",
      price: "€800",
      description: "Paketinize ek lokasyon ekleme",
      icon: Users
    },
    {
      name: "Detaylı Raporlama",
      price: "€200",
      description: "Özelleştirilmiş analiz raporları",
      icon: Shield
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Enterprise Çözümler
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              Büyük ölçekli projeler için özelleştirilmiş kalite mühendisliği hizmetleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  Özel Teklif Al
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <a href="tel:+498912345678">
                  Uzmanlarla Konuş
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Çözüm Paketleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza göre özelleştirilmiş üç farklı enterprise paket seçeneği
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <Card key={solution.id} className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{solution.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      {solution.subtitle}
                    </CardDescription>
                    <p className="text-sm text-gray-600 mt-3">{solution.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-700">Dahil Olan Hizmetler:</h4>
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                      <Link href={`/contact?package=${solution.id}`}>
                        Teklif Talep Et
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Enterprise Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-orange-500 border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-4">Neden Enterprise Çözümler?</CardTitle>
                <CardDescription className="text-lg">
                  Büyük ölçekli projelerde sizin için neden doğru seçim olduğumuzu öğrenin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Shield className="h-5 w-5 text-orange-600 mr-2" />
                      Kanıtlanmış Uzmanlık
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>15+ yıllık sektör deneyimi ile otomotiv kalite standartlarında uzmanız</p>
                      <p>Fortune 500 şirketleri ile çalışma tecrübesi</p>
                      <p>Uluslararası sertifikalar ve akreditasyonlar</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Users className="h-5 w-5 text-orange-600 mr-2" />
                      Dedicated Ekip
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Projenize özel atanmış uzman ekip</p>
                      <p>24/7 müşteri hizmetleri ve destek</p>
                      <p>Proje yöneticisi ataması ve düzenli raporlama</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-4">Özel Teklifinizi Alalım</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    Her enterprise müşterimiz için özel çözümler geliştiriyoruz. 
                    İhtiyaçlarınızı analiz edip size özel bir teklif hazırlayalım.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                      <Link href="/contact?type=enterprise">
                        <Mail className="h-4 w-4 mr-2" />
                        Detaylı Teklif Talep Et
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+498912345678">
                        <Phone className="h-4 w-4 mr-2" />
                        Görüşme Planlayın
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Services section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ek Hizmetler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise paketinizi tamamlayacak özel hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <Card key={index} className="card-hover border-orange-200 hover:border-orange-400 transition-all duration-200">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-lg font-semibold text-orange-600">Özel Fiyat</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{addon.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Çözümler Hakkında SSS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise çözümler nasıl fiyatlandırılır?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Her enterprise projesi özeldir. Proje kapsamı, süre, lokasyon ve ihtiyaçlarınıza göre özel fiyat teklifi hazırlanır. Minimum yatırım seviyeleri mevcuttur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minimum sözleşme süresi nedir?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise projeler için minimum 24 ay sözleşme süresi bulunmaktadır. Büyük projeler için daha uzun süreli stratejik ortaklıklar da mümkündür.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hangi ülkelerde hizmet veriyorsunuz?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Avrupa genelinde hizmet vermekteyiz. Türkiye, Almanya, Fransa, İtalya, İspanya ve diğer AB ülkelerinde yerinde ekip konuşlandırma imkanımız bulunmaktadır.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proje başlangıç süresi ne kadar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sözleşme imzalandıktan sonra 2-4 hafta içinde proje ekibinizi oluşturup operasyonlara başlayabiliriz. Acil projeler için daha hızlı başlangıç da mümkündür.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Enterprise Projenizi Başlatalım
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Büyük ölçekli kalite projeleriniz için özel çözümler geliştirmeye hazırız. 
            Uzman ekibimizle projenizi planlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link href="/contact?type=enterprise">
                <Mail className="mr-2 h-4 w-4" />
                Enterprise Teklif Talep Et
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <a href="tel:+498912345678">
                <Phone className="mr-2 h-4 w-4" />
                +49 89 123 456 789
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
