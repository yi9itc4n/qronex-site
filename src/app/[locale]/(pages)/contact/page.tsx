"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
  User,
  Building,
  Globe
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  company: z.string().min(2, "Şirket adı en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  country: z.string().min(2, "Ülke seçiniz"),
  city: z.string().min(2, "Şehir giriniz"),
  package: z.string().optional(),
  urgency: z.string(),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const urgencyOptions = [
    { value: "asap", label: t("urgencyOptions.asap") },
    { value: "48h", label: t("urgencyOptions.48h") },
    { value: "thisWeek", label: t("urgencyOptions.thisWeek") },
  ];

  const packageOptions = [
    { value: "starter", label: "Starter - On-Site Hızlı Müdahale" },
    { value: "growth", label: "Growth - Teknik Temsilcilik" },
    { value: "pro", label: "Pro - Kalite Ortaklığı" },
    { value: "enterprise", label: "Enterprise - Özel Çözümler" },
  ];

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
              Kalite problemleriniz için 7/24 erişilebilir uzman ekibimizle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  {t("quickQuote")}
                </CardTitle>
                <CardDescription>
                  Formu doldurun, 24 saat içinde size dönelim. Acil durumlar için direkt arayabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isClient ? (
                  <div className="text-center py-8">
                    <div className="animate-pulse">Yükleniyor...</div>
                  </div>
                ) : submitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      {t("form.success")}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
                    </p>
                    <Button onClick={() => setSubmitSuccess(false)}>
                      Yeni Mesaj Gönder
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.name")} *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            {...register("name")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ad Soyad"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.company")} *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            {...register("company")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Şirket Adı"
                          />
                        </div>
                        {errors.company && (
                          <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.email")} *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="ornek@sirket.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.phone")} *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            {...register("phone")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+90 532 123 4567"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.country")} *
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <select
                            {...register("country")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Ülke Seçin</option>
                            <option value="TR">Türkiye</option>
                            <option value="DE">Almanya</option>
                            <option value="FR">Fransa</option>
                            <option value="IT">İtalya</option>
                            <option value="ES">İspanya</option>
                            <option value="NL">Hollanda</option>
                            <option value="BE">Belçika</option>
                            <option value="AT">Avusturya</option>
                            <option value="CH">İsviçre</option>
                            <option value="PL">Polonya</option>
                          </select>
                        </div>
                        {errors.country && (
                          <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.city")} *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            {...register("city")}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Şehir"
                          />
                        </div>
                        {errors.city && (
                          <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.package")}
                        </label>
                        <select
                          {...register("package")}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Paket Seçin (Opsiyonel)</option>
                          {packageOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.urgency")} *
                        </label>
                        <select
                          {...register("urgency")}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Aciliyet Seçin</option>
                          {urgencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.urgency && (
                          <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t("form.message")} *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Kalite probleminizi detaylı olarak açıklayın..."
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Gönderiliyor..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t("form.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-8">
            {/* Emergency contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Acil Durum 7/24
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-red-700 text-sm">
                  Kritik kalite problemleri için:
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:+498912345678"
                    className="text-2xl font-bold text-red-800 hover:text-red-900 block"
                  >
                    +49 89 123 456 789
                  </a>
                  <p className="text-xs text-red-600">
                    Ortalama yanıt süresi: 15 dakika
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Office info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Merkez Ofis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">München, Germany</h4>
                  <p className="text-sm text-gray-600">
                    Maximilianstraße 35<br />
                    80539 München
                  </p>
                </div>
                <div className="space-y-2">
                  <a href="tel:+4989123456789" className="text-blue-600 hover:underline text-sm block">
                    +49 89 123 456 789
                  </a>
                  <a href="mailto:info@qronex.com" className="text-blue-600 hover:underline text-sm block">
                    info@qronex.com
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>09:00 - 18:00 (CET)</span>
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Yanıt Süreleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Acil durumlar:</span>
                  <Badge variant="destructive">15 dakika</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Normal talepler:</span>
                  <Badge variant="secondary">24 saat</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Teklifler:</span>
                  <Badge variant="outline">48 saat</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional managers */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t("regionalManagers")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
