import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle,
  X,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Zap
} from "lucide-react";

export default function PricingPage() {
  const t = useTranslations("pricing");

  const packages = [
    {
      id: "starter",
      name: t("starter.title"),
      subtitle: t("starter.subtitle"),
      description: t("starter.description"),
      price: "€2,500",
      period: "/ay",
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-gray-800",
      features: [
        "7×5 destek (Pazartesi-Cuma)",
        "24-72 saat SLA",
        "1 lokasyon kapsamı",
        "Temel raporlama (PDF/CSV)",
        "Sorting & Containment",
        "Görsel kontroller",
        "Telefon/e-posta desteği"
      ],
      notIncluded: [
        "Hafta sonu desteği",
        "Acil müdahale garantisi",
        "Yerinde ekip",
        "Özel raporlar"
      ]
    },
    {
      id: "growth",
      name: t("growth.title"),
      subtitle: t("growth.subtitle"), 
      description: t("growth.description"),
      price: "€4,500",
      period: "/ay",
      popular: true,
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      features: [
        "7×7 destek",
        "24 saat SLA",
        "2-3 lokasyon kapsamı",
        "Resident/Technical Rep.",
        "Kök neden analizi",
        "Haftalık e-rapor",
        "QMS önerileri",
        "Video konferans desteği",
        "Acil müdahale dahil"
      ],
      notIncluded: [
        "24/7 destek",
        "Çoklu ülke kapsamı",
        "Özel SLA'lar"
      ]
    },
    {
      id: "pro",
      name: t("pro.title"),
      subtitle: t("pro.subtitle"),
      description: t("pro.description"),
      price: "€8,500",
      period: "/ay",
      popular: false,
      color: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        "24×7 destek",
        "<12 saat SLA hedefi",
        "Çoklu lokasyon",
        "Rework + kalite mühendisliği",
        "Tedarikçi hazırlığı",
        "Aylık yönetici özeti",
        "Süreç optimizasyonu",
        "Dedicated project manager",
        "Özel raporlar",
        "API entegrasyonu"
      ],
      notIncluded: [
        "Sözleşmeli kapasite",
        "Yerinde ekip"
      ]
    },
    {
      id: "enterprise",
      name: t("enterprise.title"),
      subtitle: t("enterprise.subtitle"),
      description: t("enterprise.description"),
      price: "Özel Fiyat",
      period: "",
      popular: false,
      color: "border-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      features: [
        "Sözleşmeli kapasite",
        "Yerinde ekip",
        "EV/e-mobility uzmanlığı",
        "Çok ülke roll-out",
        "Sistem entegrasyonları",
        "Özel SLA'lar",
        "Dedicated account manager",
        "Custom reporting dashboard",
        "Priority support",
        "Training & certification"
      ],
      notIncluded: []
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
              {t("title")}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              {t("subtitle")}
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

      {/* Pricing tabs */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="monthly">{t("monthly")}</TabsTrigger>
              <TabsTrigger value="enterprise">{t("enterpriseTab")}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {packages.map((pkg) => (
                  <Card key={pkg.id} className={`relative ${pkg.color} border-2 ${pkg.popular ? 'shadow-2xl transform scale-105' : 'shadow-lg'}`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                        <Star className="h-3 w-3 mr-1" />
                        En Popüler
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        {pkg.subtitle}
                      </CardDescription>
                      <div className="pt-4">
                        <div className="text-4xl font-bold text-gray-900">
                          {pkg.price}
                          {pkg.period && <span className="text-lg text-gray-600">{pkg.period}</span>}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-700">Dahil Olan:</h4>
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Not included */}
                      {pkg.notIncluded.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-700">Dahil Olmayan:</h4>
                          {pkg.notIncluded.map((feature, index) => (
                            <div key={index} className="flex items-start text-sm text-gray-500">
                              <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* CTA */}
                      <Button className={`w-full ${pkg.buttonColor} text-white`} asChild>
                        <Link href={`/contact?package=${pkg.id}`}>
                          {pkg.id === 'enterprise' ? t("contactSales") : 'Başlayın'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="enterprise">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <Card className="border-orange-500 border-2">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl mb-4">Enterprise Çözümler</CardTitle>
                    <CardDescription className="text-lg">
                      Büyük ölçekli projeler ve özel ihtiyaçlar için özelleştirilmiş paketler
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Özelleştirilmiş Hizmetler</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Özel SLA&apos;lar ve kapsamlar</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Dedicated account management</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Custom reporting ve dashboard</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>API entegrasyonları</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Global Projeler</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Çok ülke roll-out desteği</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Yerinde ekip konuşlandırma</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Training ve sertifikasyon</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span>Stratejik ortaklık</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Özel Teklifinizi Alalım</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Her enterprise müşterimiz için özel çözümler geliştiriyoruz. 
                        İhtiyaçlarınızı analiz edip size özel bir teklif hazırlayalım.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                          <Link href="/contact?type=enterprise">
                            <Mail className="h-4 w-4 mr-2" />
                            Teklif Talep Et
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Add-ons section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ek Hizmetler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paketinizi özel ihtiyaçlarınıza göre özelleştirin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
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
              Fiyatlandırma Hakkında SSS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fiyatlara KDV dahil mi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Belirtilen fiyatlar KDV hariçtir. Faturalandırma ülkenize göre geçerli KDV oranı eklenecektir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sözleşme süresi ne kadar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Minimum 12 ay sözleşme süresi bulunmaktadır. Enterprise paketlerde özel süreler belirlenebilir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paket değişikliği yapabilir miyim?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evet, ihtiyaçlarınıza göre paketinizi yükseltebilir veya düşürebilirsiniz. Değişiklik bir sonraki fatura döneminde geçerli olur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hangi Paket Size Uygun?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Emin değil misiniz? Uzman ekibimiz ihtiyaçlarınızı analiz ederek 
            size en uygun paketi önerir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Users className="mr-2 h-4 w-4" />
                Ücretsiz Danışmanlık
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
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
