import { notFound } from "next/navigation";
import { Link } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Target
} from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ServicePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

async function getServiceContent(slug: string) {
  try {
    const servicesDirectory = path.join(process.cwd(), "content/services");
    const filePath = path.join(servicesDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      frontmatter: data,
      content,
    };
  } catch {
    return null;
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceData = await getServiceContent(slug);
  
  if (!serviceData) {
    notFound();
  }

  const { frontmatter, content } = serviceData;

  // Related services (mock data)
  const relatedServices = [
    {
      title: "Sorting & Containment",
      slug: "sorting-containment",
      description: "Hatalı parçaları ayırma ve kontrol altına alma"
    },
    {
      title: "Quality Engineering", 
      slug: "quality-engineering",
      description: "Kalite süreçlerini optimize etme"
    },
    {
      title: "Technical Representation",
      slug: "technical-representation", 
      description: "Yerinde teknik temsilcilik hizmeti"
    }
  ];

  // FAQ data (mock)
  const faqs = [
    {
      question: "Hizmet kapsamınız hangi ülkeleri içeriyor?",
      answer: "Avrupa genelinde 15 ülkede hizmet veriyoruz. Almanya, Fransa, İtalya, İspanya, Türkiye başta olmak üzere tüm ana pazarlarda yerleşik ekiplerimiz bulunmaktadır."
    },
    {
      question: "Acil durumlarda ne kadar sürede müdahale edebiliyorsunuz?",
      answer: "Kritik durumlar için 6-12 saat içinde sahada olabiliyoruz. Normal projeler için 24-72 saat müdahale süremiz vardır."
    },
    {
      question: "Hangi sektörlerde deneyiminiz var?",
      answer: "Öncelikle otomotiv sektöründe uzmanız. Tier 1 tedarikçiler, OEM'ler, e-mobility, havacılık ve ağır taşıt sektörlerinde kapsamlı deneyimimiz bulunmaktadır."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto container-padding">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Hizmetler</Link>
            <span>/</span>
            <span className="text-gray-900">{frontmatter.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="ghost" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/services">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Hizmetlere Dön
                </Link>
              </Button>
              {frontmatter.featured && (
                <Badge className="bg-blue-600">Popüler Hizmet</Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
              {frontmatter.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <MDXRemote source={content} />
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick contact */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Hemen Başlayın
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-700 text-sm">
                  Bu hizmet için hemen teklif alın veya uzmanlarımızla görüşün.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/contact?service=${slug}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Teklif Al
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700" asChild>
                    <a href="tel:+498912345678">
                      <Phone className="h-4 w-4 mr-2" />
                      Hemen Ara
                    </a>
                  </Button>
                </div>
                <div className="text-xs text-blue-600 space-y-1">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>24h içinde yanıt</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Ücretsiz ön değerlendirme</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Hizmet Özellikleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Avrupa genelinde hizmet</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Deneyimli uzman ekip</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Hızlı mobilizasyon</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Detaylı raporlama</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Sürekli destek</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer rating */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Müşteri Değerlendirmesi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-yellow-600">4.9/5</div>
                  <div className="flex justify-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    127 müşteri değerlendirmesi
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Sık Sorulan Sorular</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">İlgili Hizmetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Detayları Gör
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
