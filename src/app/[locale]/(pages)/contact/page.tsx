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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
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


  const urgencyOptions = [
    { value: "asap", label: t("urgencyOptions.asap") },
    { value: "48h", label: t("urgencyOptions.48h") },
    { value: "thisWeek", label: t("urgencyOptions.thisWeek") },
  ];

  const packageOptions = [
    { value: "starter", label: t("packageOptions.starter") },
    { value: "growth", label: t("packageOptions.growth") },
    { value: "pro", label: t("packageOptions.pro") },
    { value: "enterprise", label: t("packageOptions.enterprise") },
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
              {t("subtitle")}
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
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isClient ? (
                  <div className="text-center py-8">
                    <div className="animate-pulse">{t("form.loading")}</div>
                  </div>
                ) : submitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      {t("form.success")}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t("form.successDescription")}
                    </p>
                    <Button onClick={() => setSubmitSuccess(false)}>
                      {t("form.newMessage")}
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
                            placeholder={t("form.placeholders.name")}
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
                            placeholder={t("form.placeholders.company")}
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
                            placeholder={t("form.placeholders.email")}
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
                            placeholder={t("form.placeholders.phone")}
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
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                          <Select onValueChange={(value) => {
                            // React Hook Form ile entegrasyon
                            const event = { target: { value, name: "country" } };
                            register("country").onChange(event);
                          }}>
                            <SelectTrigger className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400">
                              <SelectValue placeholder={t("form.selectOptions.country")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="TR">{t("countries.TR")}</SelectItem>
                              <SelectItem value="DE">{t("countries.DE")}</SelectItem>
                              <SelectItem value="FR">{t("countries.FR")}</SelectItem>
                              <SelectItem value="IT">{t("countries.IT")}</SelectItem>
                              <SelectItem value="ES">{t("countries.ES")}</SelectItem>
                              <SelectItem value="NL">{t("countries.NL")}</SelectItem>
                              <SelectItem value="BE">{t("countries.BE")}</SelectItem>
                              <SelectItem value="AT">{t("countries.AT")}</SelectItem>
                              <SelectItem value="CH">{t("countries.CH")}</SelectItem>
                              <SelectItem value="PL">{t("countries.PL")}</SelectItem>
                            </SelectContent>
                          </Select>
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
                            placeholder={t("form.placeholders.city")}
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
                        <Select onValueChange={(value) => {
                          const event = { target: { value, name: "package" } };
                          register("package").onChange(event);
                        }}>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400">
                            <SelectValue placeholder={t("form.selectOptions.package")} />
                          </SelectTrigger>
                          <SelectContent>
                            {packageOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("form.urgency")} *
                        </label>
                        <Select onValueChange={(value) => {
                          const event = { target: { value, name: "urgency" } };
                          register("urgency").onChange(event);
                        }}>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400">
                            <SelectValue placeholder={t("form.selectOptions.urgency")} />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                        placeholder={t("form.placeholders.message")}
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
                        t("form.submitting")
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

            {/* Office info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {t("office.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t("office.location")}</h4>
                  <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: t("office.address") }}>
                  </p>
                </div>
                <div className="space-y-2">
                  <a href="tel:+4989123456789" className="text-blue-600 hover:underline text-sm block">
                    {t("office.phone")}
                  </a>
                  <a href="mailto:info@qronex.net" className="text-blue-600 hover:underline text-sm block">
                    {t("office.email")}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{t("office.hours")}</span>
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {t("responseTimes.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>{t("responseTimes.normal")}</span>
                  <Badge variant="secondary">{t("responseTimes.normalTime")}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>{t("responseTimes.quotes")}</span>
                  <Badge variant="outline">{t("responseTimes.quoteTime")}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </div>
    </main>
  );
}
