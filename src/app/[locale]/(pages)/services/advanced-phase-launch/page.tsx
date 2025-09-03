"use client";

import { Link } from "@/i18n";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  Star
} from "lucide-react";

export default function AdvancedPhaseLaunchPage() {
  const c = useTranslations("common");
  const t = useTranslations("servicesDetails.launch");

  const services = [
    {
      icon: Rocket,
      title: t("service1.title"),
      description: t("service1.description"),
      features: [
        t("service1.f1"),
        t("service1.f2"),
        t("service1.f3"),
        t("service1.f4")
      ]
    },
    {
      icon: Settings,
      title: t("service2.title"),
      description: t("service2.description"),
      features: [
        t("service2.f1"),
        t("service2.f2"),
        t("service2.f3"),
        t("service2.f4")
      ]
    },
    {
      icon: Zap,
      title: t("service3.title"),
      description: t("service3.description"),
      features: [
        t("service3.f1"),
        t("service3.f2"),
        t("service3.f3"),
        t("service3.f4")
      ]
    },
    {
      icon: Star,
      title: t("service4.title"),
      description: t("service4.description"),
      features: [
        t("service4.f1"),
        t("service4.f2"),
        t("service4.f3"),
        t("service4.f4")
      ]
    }
  ];

  const phases = [
    {
      phase: t("phases.p1"),
      title: t("phases.p1Title"),
      description: t("phases.p1Desc")
    },
    {
      phase: t("phases.p2"),
      title: t("phases.p2Title"),
      description: t("phases.p2Desc")
    },
    {
      phase: t("phases.p3"),
      title: t("phases.p3Title"),
      description: t("phases.p3Desc")
    },
    {
      phase: t("phases.p4"),
      title: t("phases.p4Title"),
      description: t("phases.p4Desc")
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("heroTitle")}</h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-blue-green" asChild>
                <Link href="/contact">
                  {c("getStarted")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-blue-green border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/contact">
                  {c("requestQuote")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("servicesTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-white shadow-md border-gray-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-green-gradient rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">{t("featuresTitle")}</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phases section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("phasesTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("phasesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.phase}</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t("benefitsTitle")}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch Excellence</h3>
                    <p className="text-gray-600">Proven track record of successful product launches and market introductions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Optimization</h3>
                    <p className="text-gray-600">Accelerated processes and rapid deployment for time-critical projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals with deep expertise in advanced phase management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("highlightsTitle")}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("highlights.projectDuration")}</span>
                  <Badge className="bg-green-100 text-green-800">{t("highlights.projectDurationValue")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("highlights.teamSize")}</span>
                  <Badge className="bg-blue-100 text-blue-800">{t("highlights.teamSizeValue")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("highlights.successRate")}</span>
                  <Badge className="bg-purple-100 text-purple-800">{t("highlights.successRateValue")}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t("highlights.supportLevel")}</span>
                  <Badge className="bg-orange-100 text-orange-800">{t("highlights.supportLevelValue")}</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("heroSubtitle")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our advanced phase and launch services help you achieve successful product launches and operational excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/contact">
                {c("contactUsToday")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-green" asChild>
              <Link href="/services">
                {c("viewAllServices")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
