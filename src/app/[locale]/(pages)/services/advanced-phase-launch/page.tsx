"use client";

import { Link } from "@/i18n";
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

  const services = [
    {
      icon: Rocket,
      title: "Product Launch Support",
      description: "Comprehensive support for successful product launches and market introduction",
      features: [
        "Launch planning and strategy",
        "Quality validation",
        "Risk assessment",
        "Market readiness support"
      ]
    },
    {
      icon: Settings,
      title: "Advanced Phase Management",
      description: "Expert management of advanced development phases and production ramp-up",
      features: [
        "Phase transition management",
        "Production ramp-up support",
        "Quality system implementation",
        "Performance optimization"
      ]
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Accelerated deployment of quality systems and processes for time-critical projects",
      features: [
        "Fast-track implementation",
        "Critical path management",
        "Resource optimization",
        "Risk mitigation"
      ]
    },
    {
      icon: Star,
      title: "Excellence Programs",
      description: "Implementation of excellence programs to achieve operational and quality excellence",
      features: [
        "Excellence framework design",
        "Performance benchmarking",
        "Continuous improvement",
        "Best practice implementation"
      ]
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description: "Comprehensive planning and strategic development for successful launch"
    },
    {
      phase: "Phase 2",
      title: "Development & Validation",
      description: "Product development and quality validation processes"
    },
    {
      phase: "Phase 3",
      title: "Production Ramp-up",
      description: "Managed production ramp-up with quality assurance"
    },
    {
      phase: "Phase 4",
      title: "Launch & Optimization",
      description: "Successful launch and ongoing optimization"
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Advanced Phase & Launch Services
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              Expert support for advanced development phases and successful product launches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-blue-green" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-blue-green border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/contact">
                  Request Quote
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Advanced Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for advanced development phases and successful product launches
            </p>
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
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process Phases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to advanced phase management and product launch
            </p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Advanced Services?
              </h2>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Project Duration</span>
                  <Badge className="bg-green-100 text-green-800">3-12 Months</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Team Size</span>
                  <Badge className="bg-blue-100 text-blue-800">3-8 Experts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <Badge className="bg-purple-100 text-purple-800">95%+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Support Level</span>
                  <Badge className="bg-orange-100 text-orange-800">Full-Service</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Launch Your Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our advanced phase and launch services help you achieve successful product launches and operational excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/contact">
                Contact Us Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-green" asChild>
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
