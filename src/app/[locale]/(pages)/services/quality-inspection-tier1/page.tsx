"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Filter,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Eye,
  Wrench,
  BarChart3,
  Building
} from "lucide-react";

export default function QualityInspectionTier1Page() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Eye,
      title: "Tier1 Supplier Quality Inspection",
      description: "Comprehensive quality control and inspection services at Tier1 supplier locations",
      features: [
        "Supplier quality assessment",
        "Defect identification and classification",
        "Quality metrics reporting",
        "Supplier development support"
      ]
    },
    {
      icon: Wrench,
      title: "Supplier Location Rework",
      description: "Professional rework and repair services to restore product quality at supplier sites",
      features: [
        "On-site rework services",
        "Quality restoration processes",
        "Supplier training and support",
        "Process improvement guidance"
      ]
    },
    {
      icon: BarChart3,
      title: "Quality Assurance Procedures",
      description: "Implementation and optimization of quality assurance systems for suppliers",
      features: [
        "Quality system development",
        "Process standardization",
        "Supplier certification support",
        "Continuous improvement programs"
      ]
    },
    {
      icon: Building,
      title: "Supplier Development Support",
      description: "Comprehensive support for supplier development and improvement initiatives",
      features: [
        "Supplier capability assessment",
        "Development program design",
        "Training and mentoring",
        "Performance monitoring"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Supplier Assessment",
      description: "Comprehensive evaluation of supplier quality capabilities and processes"
    },
    {
      step: "02",
      title: "Quality Inspection",
      description: "Detailed inspection and quality control at supplier locations"
    },
    {
      step: "03",
      title: "Issue Identification",
      description: "Identification and classification of quality issues and defects"
    },
    {
      step: "04",
      title: "Rework & Improvement",
      description: "Execution of rework and implementation of improvement measures"
    },
    {
      step: "05",
      title: "Verification & Support",
      description: "Quality verification and ongoing supplier development support"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Quality Inspection & Rework @ Tier1
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              Quality inspection and rework services at Tier1 supplier locations
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
              Our Tier1 Quality Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional quality inspection and rework services delivered at Tier1 supplier locations
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

      {/* Process section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to quality inspection and rework at Tier1 supplier locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
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
                Why Choose Our Tier1 Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Supplier Expertise</h3>
                    <p className="text-gray-600">Deep understanding of Tier1 supplier operations and quality challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                    <p className="text-gray-600">Quick deployment and immediate problem resolution at supplier sites</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-green-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Focus</h3>
                    <p className="text-gray-600">Focus on supplier development and long-term improvement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <Badge className="bg-green-100 text-green-800">24-72 Hours</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Service Location</span>
                  <Badge className="bg-blue-100 text-blue-800">Supplier Site</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Team Size</span>
                  <Badge className="bg-purple-100 text-purple-800">2-4 Technicians</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Focus Area</span>
                  <Badge className="bg-orange-100 text-orange-800">Supplier Development</Badge>
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
            Ready to Improve Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our quality inspection and rework team help you optimize your Tier1 supplier relationships
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
