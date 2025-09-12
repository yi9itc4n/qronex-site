"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  const services = [
    {
      title: t("residentEngineering"),
      description: t("residentEngineeringDesc"),
      href: "/services/resident-engineering"
    },
    {
      title: t("qualityInspectionRework"),
      description: t("qualityInspectionReworkDesc"),
      href: "/services/quality-inspection-rework"
    },
    {
      title: t("consultingTraining"),
      description: t("consultingTrainingDesc"),
      href: "/services/consulting-training"
    },
    {
      title: t("advancedPhaseLaunch"),
      description: t("advancedPhaseLaunchDesc"),
      href: "/services/advanced-phase-launch"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);



  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 text-white transition-transform duration-300 ease-in-out",
      isHeaderVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="container mx-auto px-12 md:px-16 lg:px-20 max-w-none">
        <div className="flex h-[7.06rem] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              {/* Cinematic lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-emerald-400/20 rounded-xl blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 rounded-xl blur-lg"></div>
              
              {/* Logo container with glow effect */}
              <div className="relative bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-xl p-1 backdrop-blur-sm">
                <Image 
                  src="/images/logo.jpg" 
                  alt="QroneX Logo" 
                  width={86}
                  height={86}
                  className="h-[86px] w-[86px] rounded-xl object-cover shadow-2xl ring-2 ring-white/20"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden h-[86px] w-[86px] rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white font-bold text-2xl ring-2 ring-white/20">
                  Q
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[28px] font-bold text-white leading-tight">QroneX</span>
              <span className="text-sm text-gray-300 font-light tracking-wider mt-1 opacity-80">
                Precision in Motion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 text-lg">
            {/* Simple Navigation Links */}
            <Link href="/about" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              {t("company")}
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none p-0 h-auto">
                    <Link href="/services" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                      {t("services")}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] p-4 bg-white rounded-lg shadow-xl border border-gray-200">
                      <div className="space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group block p-3 rounded-md border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                                  {service.title}
                                </h3>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-2" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200 text-center">
                        <Link 
                          href="/services"
                          className="text-blue-600 hover:text-blue-700 font-medium text-xs inline-flex items-center"
                        >
                          {t("viewAllServices")}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/industries" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              {t("competencies")}
            </Link>
            <Link href="/news" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              {t("news")}
            </Link>
            <Link href="/careers" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              {t("career")}
            </Link>
            <Link href="/contact" className="relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              {t("contact")}
            </Link>

            {/* Get Offer CTA Button - left of language toggle */}
            <Button
              asChild
              className="ml-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-md shadow-blue-500/20 px-4 py-1.5 border-0 text-lg"
            >
              <Link href="/pricing" className="inline-flex items-center">
                {t("getOffer")}
              </Link>
            </Button>

            {/* Language Toggle - rightmost */}
            <Link
              href={pathname}
              locale={locale === "en" ? "tr" : "en"}
              className="ml-3 relative inline-flex items-center px-3 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {locale === "en" ? "TR" : "EN"}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col h-full">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/about"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("company")}
                  </Link>
                  <div className="space-y-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-900 transition-colors"
                    >
                      {t("services")}
                      {servicesOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-base text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/industries"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("competencies")}
                  </Link>
                  <Link
                    href="/news"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("news")}
                  </Link>
                  <Link
                    href="/careers"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("career")}
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("contact")}
                  </Link>
                </nav>
                {/* Bottom actions */}
                <div className="mt-auto space-y-3 pt-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full py-3">
                    <Link
                      href="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("getOffer")}
                    </Link>
                  </Button>
                  <Link
                    href={pathname}
                    locale={locale === "en" ? "tr" : "en"}
                    className="inline-flex justify-center items-center w-full rounded-md border px-4 py-2 text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === "en" ? "TR" : "EN"}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>


      </div>
    </header>
  );
}
