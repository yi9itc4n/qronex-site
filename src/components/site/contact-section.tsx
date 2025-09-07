import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("home.contact");


  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        

        

        {/* Quick contact options removed as requested */}

        {/* Office locations */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">{t("officeLocations")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">{t("munichHeadOffice")}</h4>
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
                <h4 className="font-semibold text-lg mb-2">{t("parisOffice")}</h4>
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
