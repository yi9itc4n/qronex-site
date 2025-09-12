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
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
  const t = useTranslations("home.hero");
  const sc = useTranslations("home.slideshow.custom");
  const nav = useTranslations("navigation");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const slides = [
    {
      id: 1,
      type: "welcome" as const,
      title: sc("welcomeTitle"),
      description: sc("welcomeDesc"),
      link: "/about",
      image: {
        src: "/images/hero/welcome.jpg",
        alt: "Modern industrial environment"
      }
    },
    {
      id: 2,
      type: "services" as const,
      title: sc("servicesTitle"),
      description: sc("servicesDesc"),
      link: "/services",
      image: {
        src: "/images/hero/services.jpg",
        alt: "Engineers collaborating in factory"
      }
    },
    {
      id: 3,
      type: "locations" as const,
      title: sc("locationsTitle"),
      description: sc("locationsDesc"),
      link: "/contact",
      image: {
        src: "/images/hero/world.jpg",
        alt: "European locations map"
      }
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


  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance slides (slower) - only on client
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimationKey(prev => prev + 1);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length, isClient]);

  return (
    <>
          {/* Slideshow Section - Top Position */}
    <section className="bg-slate-950">
        <div className="w-full">

          {/* Slideshow Container - Full Width */}
          <div className="relative w-full">
            {/* Slide */}
            <div className="relative overflow-hidden">
              <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: isClient ? `translateX(-${currentSlide * 100}%)` : 'translateX(0%)' }}
            >
                {slides.map((slide) => (
                <div key={`${slide.id}-${currentSlide}`} className="w-full flex-shrink-0">
                  <div className={`relative border-y border-white/10 min-h-[calc(100vh-7.06rem)]`}>
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover will-change-transform animate-slow-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                      
                      {/* Location markers that move with the image */}
                      {slide.type === "locations" && (
                        <div className="absolute inset-0">
                          {/* Paris marker */}
                          <span className="absolute left-[49.5%] top-[58.2%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="block w-5 h-5 rounded-full bg-rose-500 ring-2 ring-white/90 shadow-xl animate-pulse" title="Paris, France" />
                          </span>
                          {/* Lyon marker */}
                          <span className="absolute left-[49.4%] top-[63.0%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="block w-5 h-5 rounded-full bg-emerald-400 ring-2 ring-white/90 shadow-xl animate-pulse" title="Lyon, France" />
                          </span>
                          {/* Nuremberg marker */}
                          <span className="absolute left-[52.0%] top-[59.2%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <span className="block w-5 h-5 rounded-full bg-sky-400 ring-2 ring-white/90 shadow-xl animate-pulse" title="Nürnberg/Bamberg, Germany" />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="relative container mx-auto min-h-[calc(100vh-7.06rem)] flex items-end px-8 lg:px-12 pb-10 lg:pb-14">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end w-full">
                        {/* Content - Left Side */}
                        <div className="space-y-6 lg:pr-8 max-w-2xl">
                          <h3 key={`title-${animationKey}`} className={`text-2xl lg:text-4xl font-bold text-white opacity-0 ${currentSlide % 2 === 0 ? 'animate-slideInLeft' : 'animate-blurIn'} animation-delay-100`}>
                            {slide.title}
                          </h3>
                          <p key={`desc-${animationKey}`} className={`text-lg lg:text-xl text-gray-200 leading-relaxed opacity-0 ${currentSlide % 2 === 0 ? 'animate-fadeInUp' : 'animate-blurIn'} animation-delay-200`}>
                            {slide.description}
                          </p>
                          {/* Per-slide content */}
                          {slide.type === "welcome" && (
                            <div key={`button-${animationKey}`} className="opacity-0 animate-fadeIn animation-delay-300">
                              <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90" asChild>
                                <Link href={slide.link} className="flex items-center">
                                  {nav("about")}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          )}
                          {slide.type === "services" && (
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-xl opacity-0 animate-fadeIn animation-delay-300">
                              {[
                                { label: nav("residentEngineering"), href: "/services/resident-engineering" },
                                { label: nav("qualityInspectionRework"), href: "/services/quality-inspection-rework" },
                                { label: nav("operationalExcellence"), href: "/services/operational-excellence" },
                                { label: nav("advancedProjectOperationalSupport"), href: "/services/advanced-project-operational-support" },
                              ].map((svc) => (
                                <Link key={svc.href} href={svc.href} className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 rounded-md border border-white/20">
                                  {svc.label}
                                </Link>
                              ))}
                            </div>
                          )}
                          {slide.type === "locations" && (
                            <div className="opacity-0 animate-fadeIn animation-delay-300 space-y-3">
                              <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90" asChild>
                                <Link href={slide.link} className="flex items-center">
                                  {nav("contact")}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          )}
                        </div>
                        
                        {/* Right side: empty for locations slide - markers now on image */}
                        <div className="hidden lg:block relative min-h-[320px]">
                          {/* Markers moved to image overlay */}
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
            {/* Slide selection bar removed as requested */}
          </div>
        </div>
      </section>

      <section className="relative about-background text-slate-900">
      {/* Background pattern removed */}
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="bg-blue-600/10 text-blue-600 border-blue-600/20">
              <Users className="h-3 w-3 mr-1" />
              {t("fieldEngineersEurope")}
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight hero-title text-slate-900" style={{ textShadow: 'none' }}>
                {t("title")}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl" style={{ textShadow: 'none' }}>
                {t("subtitle")}
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{t("responseTime24")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{t("countryCoverage")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{t("successRate")}</span>
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
              <Button size="lg" variant="outline" className="bg-transparent border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900" asChild>
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
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <div className="text-3xl font-bold mb-2 text-slate-900">24h</div>
              <div className="text-sm text-slate-600">{t("responseTimeAvg")}</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <div className="text-3xl font-bold mb-2 text-slate-900">50+</div>
              <div className="text-sm text-slate-600">{t("activeFieldEngineers")}</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Globe className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-3xl font-bold mb-2 text-slate-900">15</div>
              <div className="text-sm text-slate-600">{t("countriesServed")}</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <CheckCircle className="h-8 w-8 text-yellow-600 mb-4" />
              <div className="text-3xl font-bold mb-2 text-slate-900">48h</div>
              <div className="text-sm text-slate-600">{t("solutionTimeAvg")}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Background shapes removed */}
    </section>

    
      </>
  );
}
