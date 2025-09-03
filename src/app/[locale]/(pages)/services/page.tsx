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
  const c = useTranslations("common");

  const services = [
    {
      id: "resident-engineering",
      slug: "resident-engineering",
      icon: "zap" as keyof typeof serviceIcons,
      title: "Resident Engineering",
      description: "Customer Quick Response Activities, 8D Management, and Steering Problem-Solving Process",
      features: [
        "Customer Quick Response Activities",
        "8D Management", 
        "Steering Problem-Solving Process",
        "Daily quality routines on production floor"
      ],
      sla: "Sürekli",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      featured: true,
    },
    {
      id: "quality-inspection-customer",
      slug: "quality-inspection-customer",
      icon: "shield" as keyof typeof serviceIcons,
      title: "Quality Inspection & Rework @ Customer",
      description: "Comprehensive quality inspection and rework services at customer locations",
      features: [
        "On-site quality inspection",
        "Customer location rework",
        "Quality control procedures",
        "Immediate response to quality issues"
      ],
      sla: "24-48 saat",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      featured: true,
    },
    {
      id: "quality-inspection-tier1",
      slug: "quality-inspection-tier1",
      icon: "filter" as keyof typeof serviceIcons,
      title: "Quality Inspection & Rework @ Tier1",
      description: "Quality inspection and rework services at Tier1 supplier locations",
      features: [
        "Tier1 supplier quality inspection",
        "Supplier location rework",
        "Quality assurance procedures",
        "Supplier development support"
      ],
      sla: "24-72 saat",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      featured: false,
    },
    {
      id: "consulting-training",
      slug: "consulting-training",
      icon: "graduationCap" as keyof typeof serviceIcons,
      title: "Consulting & Training",
      description: "Professional consulting and training services for quality improvement",
      features: [
        "Quality consulting services",
        "Professional training programs",
        "Process improvement guidance",
        "Best practices implementation"
      ],
      sla: "1-4 hafta",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      featured: false,
    },
    {
      id: "advanced-phase-launch",
      slug: "advanced-phase-launch",
      icon: "userCheck" as keyof typeof serviceIcons,
      title: "Advanced Phase & Launch Services",
      description: "Advanced phase support and launch services for new products and processes",
      features: [
        "Advanced phase support",
        "Product launch services",
        "Process validation",
        "Launch readiness assessment"
      ],
      sla: "2-8 hafta",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
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
              <Button size="lg" className="btn-blue-green" asChild>
                <Link href="/contact">
                  {c("getQuote")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-blue-green border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/pricing">
                  {c("viewPackages")}
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
                <Card key={service.id} className={`card-hover relative border-2 h-full bg-blue-green-subtle border-blue-green`}>
                  {service.featured && (
                    <Badge className="absolute -top-3 left-6 bg-blue-green-gradient">
                      {c("popular")}
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{c("sla")}: {service.sla}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <CardDescription className="text-gray-600 leading-relaxed flex-1">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-900">{c("keyFeatures")}:</h4>
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
                        {t("viewDetails")}
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
              {t("processTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("processSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">1</span>
              </div>
              <h3 className="font-semibold mb-2">İlk Değerlendirme</h3>
              <p className="text-sm text-gray-600">Problem analizi ve acil aksiyonların belirlenmesi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">2</span>
              </div>
              <h3 className="font-semibold mb-2">Ekip Mobilizasyonu</h3>
              <p className="text-sm text-gray-600">Uzman ekip ve kaynakların sahaya sevkiyatı</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">3</span>
              </div>
              <h3 className="font-semibold mb-2">Çözüm Uygulama</h3>
              <p className="text-sm text-gray-600">Sistematik yaklaşımla problemin çözümü</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">4</span>
              </div>
              <h3 className="font-semibold mb-2">Raporlama & İyileştirme</h3>
              <p className="text-sm text-gray-600">Detaylı rapor ve gelecek önerileri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Users className="mr-2 h-4 w-4" />
                {t("ctaPrimary")}
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/news">
                <Users className="mr-2 h-4 w-4" />
                {t("ctaSecondary")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}




