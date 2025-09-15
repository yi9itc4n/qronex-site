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
      title: t("residentEngineering.title"),
      description: t("residentEngineering.description"),
      features: [
        t("residentEngineering.feature1"),
        t("residentEngineering.feature2"), 
        t("residentEngineering.feature3"),
        t("residentEngineering.feature4")
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      featured: true,
    },
    {
      id: "quality-inspection-rework",
      slug: "quality-inspection-rework",
      icon: "shield" as keyof typeof serviceIcons,
      title: t("qualityInspectionRework.title"),
      description: t("qualityInspectionRework.description"),
      features: [
        t("qualityInspectionRework.feature1"),
        t("qualityInspectionRework.feature2"),
        t("qualityInspectionRework.feature3"),
        t("qualityInspectionRework.feature4")
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      featured: true,
    },
    {
      id: "operational-excellence",
      slug: "operational-excellence",
      icon: "graduationCap" as keyof typeof serviceIcons,
      title: t("operationalExcellence.title"),
      description: t("operationalExcellence.description"),
      features: [
        t("operationalExcellence.feature1"),
        t("operationalExcellence.feature2"),
        t("operationalExcellence.feature3"),
        t("operationalExcellence.feature4")
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      featured: false,
    },
    {
      id: "advanced-project-operational-support",
      slug: "advanced-project-operational-support",
      icon: "userCheck" as keyof typeof serviceIcons,
      title: t("advancedProjectOperationalSupport.title"),
      description: t("advancedProjectOperationalSupport.description"),
      features: [
        t("advancedProjectOperationalSupport.feature1"),
        t("advancedProjectOperationalSupport.feature2"),
        t("advancedProjectOperationalSupport.feature3"),
        t("advancedProjectOperationalSupport.feature4")
      ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <h3 className="font-semibold mb-2">{t("processSteps.step1.title")}</h3>
              <p className="text-sm text-gray-600">{t("processSteps.step1.description")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">2</span>
              </div>
              <h3 className="font-semibold mb-2">{t("processSteps.step2.title")}</h3>
              <p className="text-sm text-gray-600">{t("processSteps.step2.description")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">3</span>
              </div>
              <h3 className="font-semibold mb-2">{t("processSteps.step3.title")}</h3>
              <p className="text-sm text-gray-600">{t("processSteps.step3.description")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-green-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-green">4</span>
              </div>
              <h3 className="font-semibold mb-2">{t("processSteps.step4.title")}</h3>
              <p className="text-sm text-gray-600">{t("processSteps.step4.description")}</p>
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
              <Link href="/services">
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




