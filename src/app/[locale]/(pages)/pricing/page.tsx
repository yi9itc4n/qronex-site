import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  Mail,
  ArrowRight,
  Users,
  Shield
} from "lucide-react";

export default function PricingPage() {
  const t = useTranslations("pricing");


  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="hero-gradient text-white py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href="tel:+498912345678">
                  {t("hero.ctaSecondary")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Enterprise Solutions */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-500 border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-4">{t("why.title")}</CardTitle>
                <CardDescription className="text-lg">
                  {t("why.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Shield className="h-5 w-5 text-orange-600 mr-2" />
                      {t("why.expertise")}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{t("why.expertiseBullets.0")}</p>
                      <p>{t("why.expertiseBullets.1")}</p>
                      <p>{t("why.expertiseBullets.2")}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Users className="h-5 w-5 text-orange-600 mr-2" />
                      {t("why.team")}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{t("why.teamBullets.0")}</p>
                      <p>{t("why.teamBullets.1")}</p>
                      <p>{t("why.teamBullets.2")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-4">{t("why.ctaTitle")}</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    {t("why.ctaSubtitle")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                      <Link href="/contact?type=enterprise">
                        <Mail className="h-4 w-4 mr-2" />
                        {t("why.ctaRequest")}
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+498912345678">
                        <Phone className="h-4 w-4 mr-2" />
                        {t("why.ctaSchedule")}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* FAQ section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("faq.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("faq.q1")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t("faq.a1")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("faq.q2")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t("faq.a2")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("faq.q3")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t("faq.a3")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("faq.q4")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t("faq.a4")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link href="/contact?type=enterprise">
                <Mail className="mr-2 h-4 w-4" />
                {t("cta.ctaPrimary")}
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href="tel:+498912345678">
                <Phone className="mr-2 h-4 w-4" />
                {t("cta.ctaPhone")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
