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
  Phone
} from "lucide-react";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
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
              50+ Saha Mühendisi Avrupa Genelinde
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
                <span className="text-sm">24-72 saat müdahale</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">15 ülke kapsamı</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">%98 başarı oranı</span>
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

            {/* Emergency contact */}
            <div className="flex items-center space-x-4 p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-red-300 font-medium">Acil Durum 7/24</p>
                <a href="tel:+498912345678" className="text-red-200 hover:text-white transition-colors">
                  +49 89 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-blue-400 mb-4" />
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm text-slate-300">Ortalama Müdahale Süresi</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-green-400 mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-slate-300">Aktif Saha Mühendisi</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="h-8 w-8 text-purple-400 mb-4" />
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm text-slate-300">Hizmet Verdiğimiz Ülke</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold mb-2">48h</div>
              <div className="text-sm text-slate-300">Ortalama Çözüm Süresi</div>
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
  );
}
