"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Globe, 
  CheckCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Factory,
  Award,
  TrendingUp,
  Shield
} from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const t = useTranslations("home.hero");
  const s = useTranslations("home.slideshow");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    {
      id: 1,
      title: s("s1.title"),
      description: s("s1.description"),
      icon: Wrench,
      link: "/services/on-site-rapid-response",
      color: "from-blue-600/20 to-blue-800/20",
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      title: s("s2.title"),
      description: s("s2.description"),
      icon: Shield,
      link: "/services/sorting-containment",
      color: "from-teal-600/20 to-teal-800/20",
      iconColor: "text-teal-400"
    },
    {
      id: 3,
      title: s("s3.title"),
      description: s("s3.description"),
      icon: Factory,
      link: "/industries/automotive-oem",
      color: "from-cyan-600/20 to-cyan-800/20",
      iconColor: "text-cyan-400"
    },
    {
      id: 4,
      title: s("s4.title"),
      description: s("s4.description"),
      icon: Award,
      link: "/services/quality-engineering",
      color: "from-emerald-600/20 to-emerald-800/20",
      iconColor: "text-emerald-400"
    },
    {
      id: 5,
      title: s("s5.title"),
      description: s("s5.description"),
      icon: TrendingUp,
      link: "/case-studies",
      color: "from-sky-600/20 to-sky-800/20",
      iconColor: "text-sky-400"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimationKey(prev => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAnimationKey(prev => prev + 1);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
          {/* Slideshow Section - Top Position */}
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
        <div className="w-full">

          {/* Slideshow Container - Full Width */}
          <div className="relative w-full">
            {/* Slide */}
            <div className="relative overflow-hidden">
                          <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                            {slides.map((slide) => (
                <div key={`${slide.id}-${currentSlide}`} className="w-full flex-shrink-0">
                  <div className={`relative p-8 lg:p-12 bg-gradient-to-br ${slide.color} border-y border-white/20 min-h-[420px] lg:min-h-[560px]`}>
                    <div className="container mx-auto min-h-[420px] lg:min-h-[560px] flex items-center">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
                        {/* Content - Left Side */}
                        <div className="space-y-6 lg:pr-8">
                          <div key={`icon-${animationKey}`} className={`inline-flex p-3 rounded-xl bg-white/10 ${slide.iconColor} animate-fadeIn`}>
                            <slide.icon className="h-8 w-8" />
                          </div>
                          <h3 key={`title-${animationKey}`} className="text-2xl lg:text-4xl font-bold text-white animate-fadeIn animation-delay-100">
                            {slide.title}
                          </h3>
                          <p key={`desc-${animationKey}`} className="text-lg lg:text-xl text-gray-200 leading-relaxed animate-fadeIn animation-delay-200">
                            {slide.description}
                          </p>
                          <div key={`button-${animationKey}`} className="animate-fadeIn animation-delay-300">
                            <Button 
                              size="lg" 
                              className="bg-white text-gray-900 hover:bg-white/90"
                              asChild
                            >
                              <Link href={slide.link} className="flex items-center">
                                {s("viewDetails")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        
                        {/* Visual Element - Right Side */}
                        <div key={`visual-${animationKey}`} className="hidden lg:flex justify-center animate-fadeIn animation-delay-150">
                          <div className={`w-56 h-56 rounded-full bg-gradient-to-br ${slide.color.replace('/20', '/40')} flex items-center justify-center`}>
                            <slide.icon className={`h-32 w-32 ${slide.iconColor}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Side gutters with controls (avoid overlaying text) */}
            <div className="hidden md:flex absolute inset-y-0 left-0 w-10 md:w-12 z-10">
              <div className="flex-1 flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex absolute inset-y-0 right-0 w-10 md:w-12 z-10">
              <div className="flex-1 flex items-center justify-center">
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex justify-center space-x-3 py-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-white' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative hero-gradient text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
              <Users className="h-3 w-3 mr-1" />
              {t("fieldEngineersEurope")}
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight hero-title">
                {t("title")}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl">
                {t("subtitle")}
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{t("responseTime24")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{t("countryCoverage")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{t("successRate")}</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact" className="flex items-center">
                  {t("cta1")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/contact?service=start">
                  {t("cta2")}
                </Link>
              </Button>
            </div>

            {/* Emergency contact removed as requested */}
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-blue-400 mb-4" />
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm text-slate-300">{t("responseTimeAvg")}</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-green-400 mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-slate-300">{t("activeFieldEngineers")}</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Globe className="h-8 w-8 text-purple-400 mb-4" />
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm text-slate-300">{t("countriesServed")}</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold mb-2">48h</div>
              <div className="text-sm text-slate-300">{t("solutionTimeAvg")}</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </section>

    
      </>
  );
}
