import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Youtube
} from "lucide-react";

export function Footer() {
  const t = useTranslations();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/logo.jpg"
                  alt="QroneX Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded object-cover ring-2 ring-white/10"
                />
                <span className="text-2xl font-bold">QroneX</span>
              </Link>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t("footer.companyDescription")}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.industries")}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.caseStudies")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.careers")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/resident-engineering" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.residentEngineering")}
                </Link>
              </li>
              <li>
                <Link href="/services/quality-inspection-rework" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.qualityInspectionRework")}
                </Link>
              </li>
              <li>
                <Link href="/services/operational-excellence" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.operationalExcellence")}
                </Link>
              </li>
              <li>
                <Link href="/services/advanced-project-operational-support" className="text-slate-300 hover:text-white transition-colors">
                  {t("navigation.advancedProjectOperationalSupport")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("navigation.contact")}</h3>
            
            {/* Nürnberg Office */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {t("home.contact.nurnbergHeadOffice")}
              </h4>
              <div className="text-slate-300 space-y-2 text-sm">
                <p>Jahn Str. 46A hirsdhaid 96114</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <a href="tel:+4915234649852" className="hover:text-white transition-colors">
                    +49 15234649852
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <a href="mailto:info@qronex.net" className="hover:text-white transition-colors">
                    info@qronex.net
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Contact removed as requested */}
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-slate-400">
            <p>{t("footer.copyright", { year: currentYear })}</p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t("footer.terms")}
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                {t("footer.cookies")}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
