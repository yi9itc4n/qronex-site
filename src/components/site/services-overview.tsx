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
  ArrowRight
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

export function ServicesOverview() {
  const t = useTranslations("services");

  const services = [
    {
      id: "on-site-rapid-response",
      slug: "on-site-hizli-mudahale",
      icon: "zap" as keyof typeof serviceIcons,
      title: t("onSiteRapidResponse.title"),
      description: t("onSiteRapidResponse.description"),
      features: ["24-72h müdahale", "7/24 destek", "Acil müdahale"],
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
      features: ["%100 kontrol", "Hızlı ayırma", "Risk yönetimi"],
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
      features: ["Parça kurtarma", "Maliyet tasarrufu", "Hızlı çözüm"],
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
      features: ["Süreç iyileştirme", "Kalite sistemleri", "Analiz"],
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
      features: ["Tedarikçi geliştirme", "Hazırlık süreçleri", "Sertifikasyon"],
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
      features: ["Yerinde destek", "Sürekli izleme", "Danışmanlık"],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      featured: true,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.icon];
            
            return (
              <Card key={service.id} className={`card-hover relative ${service.borderColor} border-2`}>
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
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-2 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button variant="outline" className="w-full group" asChild>
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

        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Kalite Probleminiz için Hemen Destek Alın
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Uzman ekibimiz 7/24 sizin için hazır. Acil durumlar için anında müdahale, 
            planlı projeler için detaylı danışmanlık sağlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/services">
                Tüm Hizmetleri Gör
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

