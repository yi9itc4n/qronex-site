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
      title: t("operationalExcellence"),
      description: t("operationalExcellenceDesc"),
      href: "/services/operational-excellence"
    },
    {
      title: t("advancedProjectOperationalSupport"),
      description: t("advancedProjectOperationalSupportDesc"),
      href: "/services/advanced-project-operational-support"
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-none">
        <div className="flex h-16 sm:h-20 lg:h-[7.06rem] items-center justify-between min-w-0">
          {/* Logo Group - Characterful Design */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 min-w-0 flex-shrink-0">
            {/* Logo Image */}
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="QroneX Logo"
                width={48}
                height={48}
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
                priority
              />
            </div>
            
            {/* Gradient Text */}
            <div className="flex flex-col justify-center min-w-0 space-y-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#34D399] to-[#60A5FA] bg-clip-text text-transparent">
                QroneX
              </h1>
              <p className="text-xs sm:text-sm font-light tracking-wider opacity-90 hidden sm:block bg-gradient-to-r from-[#34D399] to-[#60A5FA] bg-clip-text text-transparent italic leading-tight">
                Precision in Motion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Show from md breakpoint */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8 text-sm lg:text-base xl:text-lg min-w-0 flex-1 justify-center">
            {/* Simple Navigation Links */}
            <Link href="/about" className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap">
              {t("company")}
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none p-0 h-auto hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent hover:text-current focus:text-current">
                    <Link href="/services" className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base xl:text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap">
                      {t("services")}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] lg:w-[450px] p-4 bg-white rounded-lg shadow-xl border border-gray-200">
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
                          className="text-slate-700 hover:text-blue-700 font-medium text-sm inline-flex items-center"
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
            <Link href="/competencies" className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap">
              {t("competencies")}
            </Link>
            <Link href="/careers" className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap">
              {t("career")}
            </Link>
            <Link href="/contact" className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap">
              {t("contact")}
            </Link>
          </div>

          {/* Right side actions - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0 flex-shrink-0">
            {/* Get Offer CTA Button - Hidden on small screens, visible from md */}
            <Button
              asChild
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-md shadow-blue-500/20 px-3 py-1.5 lg:px-4 text-sm lg:text-base border-0"
            >
              <Link href="/pricing" className="inline-flex items-center whitespace-nowrap">
                {t("getOffer")}
              </Link>
            </Button>

            {/* Language Toggle */}
            <Link
              href={pathname}
              locale={locale === "en" ? "tr" : "en"}
              className="relative inline-flex items-center px-2 py-2 rounded-md text-white/80 hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-16px)] after:-bottom-0.5 after:h-0.5 after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap"
            >
              {locale === "en" ? "TR" : "EN"}
            </Link>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 h-8 w-8">
                    <Menu className="h-5 w-5" />
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
                      href="/competencies"
                      className="text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("competencies")}
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


      </div>
    </header>
  );
}
