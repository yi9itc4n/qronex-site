import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Target, 
  TrendingDown
} from "lucide-react";

export function WhyQronex() {
  const t = useTranslations("home.whyQronex");

  const reasons = [
    {
      icon: Users,
      title: t("reason1"),
      description: t("description1"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: t("reason2"),
      description: t("description2"),
      color: "text-green-600", 
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: t("reason3"),
      description: t("description3"),
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Globe,
      title: t("reason4"),
      description: t("description4"),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Target,
      title: t("reason5"),
      description: t("description5"),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingDown,
      title: t("reason6"),
      description: t("description6"),
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("experienceDescription")}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <Card key={index} className="card-hover border-0 shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${reason.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${reason.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
