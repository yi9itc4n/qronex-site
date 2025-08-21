import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  ArrowRight
} from "lucide-react";

export function ContactSection() {
  const t = useTranslations("home.contact");

  const regionalManagers = [
    {
      name: "Mehmet Yılmaz",
      title: "Türkiye & Balkanlar Bölge Sorumlusu",
      phone: "+90 532 123 4567",
      email: "mehmet.yilmaz@qronex.com",
      region: "TR, BG, RO, GR",
      flag: "🇹🇷",
      available: true,
    },
    {
      name: "Hans Müller", 
      title: "DACH Bölge Sorumlusu",
      phone: "+49 170 987 6543",
      email: "hans.mueller@qronex.com",
      region: "DE, AT, CH",
      flag: "🇩🇪",
      available: true,
    },
    {
      name: "Pierre Dubois",
      title: "Fransa & BeNeLux Bölge Sorumlusu", 
      phone: "+33 6 12 34 56 78",
      email: "pierre.dubois@qronex.com",
      region: "FR, BE, NL, LU",
      flag: "🇫🇷",
      available: false,
    },
    {
      name: "Alessandro Rossi",
      title: "İtalya & İspanya Bölge Sorumlusu",
      phone: "+39 333 123 4567", 
      email: "alessandro.rossi@qronex.com",
      region: "IT, ES, PT",
      flag: "🇮🇹",
      available: true,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Regional managers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regionalManagers.map((manager, index) => (
            <Card key={index} className="card-hover relative">
              {manager.available && (
                <Badge className="absolute -top-2 -right-2 bg-green-600">
                  <Clock className="h-3 w-3 mr-1" />
                  Müsait
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{manager.flag}</div>
                <CardTitle className="text-lg">{manager.name}</CardTitle>
                <p className="text-sm text-gray-600">{manager.title}</p>
                <Badge variant="outline" className="text-xs">
                  {manager.region}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <a 
                  href={`tel:${manager.phone}`}
                  className="flex items-center space-x-2 text-sm hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{manager.phone}</span>
                </a>
                
                <a 
                  href={`mailto:${manager.email}`}
                  className="flex items-center space-x-2 text-sm hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{manager.email}</span>
                </a>
                
                <Button size="sm" className="w-full" asChild>
                  <Link href={`/contact?manager=${manager.name.toLowerCase().replace(' ', '-')}`}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    İletişime Geç
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick contact options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency contact */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Acil Durum 7/24
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-700">
                Kritik kalite problemleri için anında müdahale gerekiyorsa:
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+498912345678"
                  className="text-2xl font-bold text-red-800 hover:text-red-900 block"
                >
                  +49 89 123 456 789
                </a>
                <p className="text-sm text-red-600">
                  Ortalama yanıt süresi: 15 dakika
                </p>
              </div>
              <div className="flex space-x-4 text-sm text-red-700">
                <span>✓ 6-12 saat müdahale</span>
                <span>✓ Anlık kaynak tahsisi</span>
              </div>
            </CardContent>
          </Card>

          {/* Standard contact */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Planlı Proje Desteği
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700">
                Detaylı teklif ve planlama için:
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">
                    Online Form Doldur
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700" asChild>
                  <Link href="/pricing">
                    Paket Seçenekleri Gör
                  </Link>
                </Button>
              </div>
              <div className="flex space-x-4 text-sm text-blue-700">
                <span>✓ 24h içinde yanıt</span>
                <span>✓ Ücretsiz ön değerlendirme</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office locations */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Ofis Lokasyonlarımız</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">München Merkez Ofis</h4>
                <p className="text-gray-600 mb-2">
                  Maximilianstraße 35<br />
                  80539 München, Germany
                </p>
                <div className="space-y-1 text-sm">
                  <a href="tel:+4989123456789" className="text-blue-600 hover:underline block">
                    +49 89 123 456 789
                  </a>
                  <a href="mailto:munich@qronex.com" className="text-blue-600 hover:underline block">
                    munich@qronex.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Paris Ofis</h4>
                <p className="text-gray-600 mb-2">
                  25 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
                <div className="space-y-1 text-sm">
                  <a href="tel:+33142123456" className="text-blue-600 hover:underline block">
                    +33 1 42 12 34 56
                  </a>
                  <a href="mailto:paris@qronex.com" className="text-blue-600 hover:underline block">
                    paris@qronex.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
