import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  Globe, 
  Clock,
  Shield,
  Target,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const valueIcons = {
  speed: Zap,
  experience: Users,
  coverage: Globe,
  support: Clock,
  quality: Shield,
  precision: Target,
  improvement: TrendingUp,
  reliability: CheckCircle2,
};

export function ValueCards() {
  const t = useTranslations("home.values");

  const values = [
    {
      id: "speed",
      icon: "speed" as keyof typeof valueIcons,
      title: t("value1.title"),
      description: t("value1.description"),
      stats: t("value1.stats"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "experience", 
      icon: "experience" as keyof typeof valueIcons,
      title: t("value2.title"),
      description: t("value2.description"),
      stats: t("value2.stats"),
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "coverage",
      icon: "coverage" as keyof typeof valueIcons,
      title: t("value3.title"),
      description: t("value3.description"),
      stats: t("value3.stats"),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "support",
      icon: "support" as keyof typeof valueIcons,
      title: t("value4.title"), 
      description: t("value4.description"),
      stats: t("value4.stats"),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
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

        {/* Value cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const IconComponent = valueIcons[value.icon];
            
            return (
              <Card key={value.id} className="card-hover border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                  <div className={`text-2xl font-bold ${value.color}`}>
                    {value.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{t("extraStats.completedProjectsValue")}</div>
            <div className="text-gray-600">{t("extraStats.completedProjects")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{t("extraStats.customerSatisfactionValue")}</div>
            <div className="text-gray-600">{t("extraStats.customerSatisfaction")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{t("extraStats.activeCustomersValue")}</div>
            <div className="text-gray-600">{t("extraStats.activeCustomers")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">{t("extraStats.preventedLossValue")}</div>
            <div className="text-gray-600">{t("extraStats.preventedLoss")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

