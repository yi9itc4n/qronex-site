import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Filter, 
  Wrench,
  Shield,
  UserCheck,
  Building,
  GraduationCap,
  Headphones,
  ArrowRight,
  Clock,
  Users,
  CheckCircle
} from "lucide-react";

const serviceIcons = {
  zap: Zap,
  filter: Filter,
  wrench: Wrench,
  shield: Shield,
  userCheck: UserCheck,
  building: Building,
  graduationCap: GraduationCap,
  headphones: Headphones,
};

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      id: "on-site-rapid-response",
      slug: "on-site-hizli-mudahale",
      icon: "zap" as keyof typeof serviceIcons,
      title: t("onSiteRapidResponse.title"),
      description: t("onSiteRapidResponse.description"),
      features: ["24-72h müdahale", "7/24 destek", "Acil müdahale", "Anlık kaynak tahsisi"],
      sla: "6-24 saat",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      featured: true,
    },
    {
      id: "sorting-containment",
      slug: "sorting-containment", 
      icon: "filter" as keyof typeof serviceIcons,
      title: t("sortingContainment.title"),
      description: t("sortingContainment.description"),
      features: ["%100 kontrol", "Hızlı ayırma", "Risk yönetimi", "Dokümantasyon"],
      sla: "12-48 saat",
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200",
      featured: true,
    },
    {
      id: "rework",
      slug: "rework",
      icon: "wrench" as keyof typeof serviceIcons,
      title: t("rework.title"),
      description: t("rework.description"),
      features: ["Parça kurtarma", "Maliyet tasarrufu", "Hızlı çözüm", "Kalite garantisi"],
      sla: "24-72 saat",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      featured: false,
    },
    {
      id: "quality-engineering",
      slug: "quality-engineering",
      icon: "shield" as keyof typeof serviceIcons,
      title: t("qualityEngineering.title"),
      description: t("qualityEngineering.description"),
      features: ["Süreç iyileştirme", "Kalite sistemleri", "Analiz", "Metodoloji geliştirme"],
      sla: "1-2 hafta",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      featured: false,
    },
    {
      id: "supplier-readiness",
      slug: "supplier-readiness",
      icon: "userCheck" as keyof typeof serviceIcons,
      title: t("supplierReadiness.title"),
      description: t("supplierReadiness.description"),
      features: ["Tedarikçi geliştirme", "Hazırlık süreçleri", "Sertifikasyon", "Eğitim"],
      sla: "2-4 hafta",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      featured: false,
    },
    {
      id: "technical-representation",
      slug: "technical-representation",
      icon: "building" as keyof typeof serviceIcons,
      title: t("technicalRepresentation.title"),
      description: t("technicalRepresentation.description"),
      features: ["Yerinde destek", "Sürekli izleme", "Danışmanlık", "Raporlama"],
      sla: "Sürekli",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      featured: true,
    },
    {
      id: "audits-training",
      slug: "audits-training",
      icon: "graduationCap" as keyof typeof serviceIcons,
      title: t("auditsTraining.title"),
      description: t("auditsTraining.description"),
      features: ["Sistem denetimi", "Personel eğitimi", "Sertifikasyon", "İyileştirme"],
      sla: "1-3 hafta",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      featured: false,
    },
    {
      id: "aftersales-support",
      slug: "aftersales-support",
      icon: "headphones" as keyof typeof serviceIcons,
      title: t("aftersalesSupport.title"),
      description: t("aftersalesSupport.description"),
      features: ["Müşteri desteği", "Sorun çözme", "Sürekli iyileştirme", "İzleme"],
      sla: "7/24",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      featured: false,
    },
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
                  Hemen Teklif Al
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/pricing">
                  Paket Seçenekleri
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.icon];
              
              return (
                <Card key={service.id} className={`card-hover relative ${service.borderColor} border-2 h-full`}>
                  {service.featured && (
                    <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-purple-600">
                      Popüler
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">SLA: {service.sla}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <CardDescription className="text-gray-600 leading-relaxed flex-1">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-900">Temel Özellikler:</h4>
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button variant="outline" className="w-full group mt-auto" asChild>
                      <Link href={`/services/${service.slug}`}>
                        Detayları Gör
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her proje için standart süreçlerimizle hızlı ve etkili çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">İlk Değerlendirme</h3>
              <p className="text-sm text-gray-600">Problem analizi ve acil aksiyonların belirlenmesi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Ekip Mobilizasyonu</h3>
              <p className="text-sm text-gray-600">Uzman ekip ve kaynakların sahaya sevkiyatı</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Çözüm Uygulama</h3>
              <p className="text-sm text-gray-600">Sistematik yaklaşımla problemin çözümü</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Raporlama & İyileştirme</h3>
              <p className="text-sm text-gray-600">Detaylı rapor ve gelecek önerileri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hangi Hizmete İhtiyacınız Var?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Uzman ekibimiz size en uygun çözümü belirlemek için 7/24 hazır. 
            Ücretsiz ön değerlendirme ile başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Users className="mr-2 h-4 w-4" />
                Uzmanlarla Konuş
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/case-studies">
                Başarı Hikayelerini Gör
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
