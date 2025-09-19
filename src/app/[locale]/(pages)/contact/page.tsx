import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto container-padding py-16">
        <div className="max-w-7xl mx-auto">
          {/* Contact information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Office Address and Map Combined */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="h-7 w-7 mr-3" />
                    {t("office.title")}
                </CardTitle>
              </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-800">{t("office.location")}</h4>
                    <p className="text-gray-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t("office.address") }}>
                    </p>
                      </div>

                  {/* Map Section */}
                      <div>
                    <h5 className="font-semibold text-lg mb-3 text-gray-800">{t("office.locationTitle")}</h5>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                      <iframe
                        src="https://maps.google.com/maps?q=Jahn+Str.+46A,+96114+Hirschaid,+Germany&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="QroneX Office Location"
                      />
                    </div>
                  </div>
              </CardContent>
            </Card>
          </div>

            {/* Right side - Contact Details and Business Hours */}
          <div className="space-y-8">
              {/* Contact Details */}
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Phone className="h-6 w-6 mr-3" />
                    {t("office.contactTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <a href="tel:+4915234649852" className="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    <Phone className="h-5 w-5 mr-3" />
                    <span className="font-medium">{t("office.phone")}</span>
                  </a>
                  <a href="mailto:info@qronex.net" className="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="font-medium">{t("office.email")}</span>
                  </a>
              </CardContent>
            </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-6 w-6 mr-3" />
                    {t("office.businessHoursTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3" />
                    <span className="font-medium">{t("office.hours")}</span>
                </div>
                  <p className="text-sm text-gray-500">
                    {t("office.emergencyNote")}
                  </p>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
