"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    {
      title: "On-Site Hızlı Müdahale",
      href: "/services/on-site-rapid-response",
      description: "24-72 saat içinde sahada müdahale",
    },
    {
      title: "Sorting & Containment", 
      href: "/services/sorting-containment",
      description: "Hatalı parçaları ayırma ve kontrol",
    },
    {
      title: "Quality Engineering",
      href: "/services/quality-engineering", 
      description: "Kalite süreçlerini optimize etme",
    },
    {
      title: "Technical Representation",
      href: "/services/technical-representation",
      description: "Yerinde teknik temsilcilik",
    },
    {
      title: "Supplier Readiness",
      href: "/services/supplier-readiness",
      description: "Tedarikçi hazırlık süreçleri",
    },
    {
      title: "Audits & Training",
      href: "/services/audits-training",
      description: "Denetim ve eğitim hizmetleri",
    },
  ];

  const industries = [
    {
      title: "Automotive OEM",
      href: "/industries/automotive-oem",
      description: "Ana otomotiv üreticileri",
    },
    {
      title: "Tier 1 Suppliers",
      href: "/industries/tier-1",
      description: "Birinci kademe tedarikçiler",
    },
    {
      title: "e-Mobility / EV",
      href: "/industries/e-mobility",
      description: "Elektrikli araç teknolojileri",
    },
    {
      title: "Heavy Transport",
      href: "/industries/heavy-transport", 
      description: "Kamyon ve otobüs sektörü",
    },
    {
      title: "Aerospace",
      href: "/industries/aerospace",
      description: "Havacılık sektörü",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">
              Q
            </div>
            <span className="text-xl font-bold">QroneX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    {t("services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 lg:grid-cols-2">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Hizmetlerimiz
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Avrupa genelinde yerleşik mühendis kadromuzla kalite problemlerinize hızlı çözümler
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      {services.slice(0, 5).map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    {t("industries")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-4 lg:grid-cols-1">
                      {industries.map((industry) => (
                        <NavigationMenuLink key={industry.href} asChild>
                          <Link
                            href={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {industry.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {industry.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/case-studies" className="nav-link">
                      {t("caseStudies")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="nav-link">
                      {t("about")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/careers" className="nav-link">
                      {t("careers")}
                      <Badge variant="secondary" className="ml-1 text-xs">
                        5
                      </Badge>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/pricing" className="nav-link">
                      {t("pricing")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Link
                href={pathname}
                locale="tr"
                className={cn(
                  "text-sm px-2 py-1 rounded",
                  locale === "tr" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
              >
                TR
              </Link>
              <Link
                href={pathname}
                locale="en"
                className={cn(
                  "text-sm px-2 py-1 rounded",
                  locale === "en" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
              >
                EN
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">{t("getQuote")}</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact?service=start">{t("startService")}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/services"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("services")}
                  </Link>
                  <Link
                    href="/industries"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("industries")}
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("caseStudies")}
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="/careers"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("careers")}
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("pricing")}
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("contact")}
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center space-x-2 pt-4">
                    <Link
                      href={pathname}
                      locale="tr"
                      className={cn(
                        "text-sm px-3 py-2 rounded flex-1 text-center",
                        locale === "tr" ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Türkçe
                    </Link>
                    <Link
                      href={pathname}
                      locale="en"
                      className={cn(
                        "text-sm px-3 py-2 rounded flex-1 text-center",
                        locale === "en" ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      English
                    </Link>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1" asChild>
                      <Link href="/contact">{t("getQuote")}</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Top contact bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm text-muted-foreground border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+49 89 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@qronex.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>🇩🇪 Munich</span>
            <span>🇫🇷 Paris</span>
            <span>🇹🇷 Istanbul</span>
          </div>
        </div>
      </div>
    </header>
  );
}
