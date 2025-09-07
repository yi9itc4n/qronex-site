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
  Target,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
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
  const sv = await getTranslations("services.onSiteRapidResponse");
  const sc = await getTranslations("services.sortingContainment");
  const qe = await getTranslations("services.qualityEngineering");
  const trp = await getTranslations("services.technicalRepresentation");
  const sRoot = await getTranslations("services");
  const nav = await getTranslations("navigation");
  const c = await getTranslations("common");
  const hc = await getTranslations("home.contact");
  const serviceData = await getServiceContent(slug);
  
  if (!serviceData) {
    notFound();
  }

  const { frontmatter, content } = serviceData;

  // Related services (i18n + exclude current slug)
  const allServices = [
    { title: sc('title'), slug: 'sorting-containment', description: sc('intro') },
    { title: qe('title'), slug: 'quality-engineering', description: qe('intro') },
    { title: trp ? trp('title') : 'Technical Representation', slug: 'technical-representation', description: trp ? trp('intro') : '' },
    { title: sv('title'), slug: 'on-site-rapid-response', description: sv('intro') }
  ];
  const relatedServices = allServices.filter(s => s.slug !== slug).slice(0,3);

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
            <Link href="/" className="hover:text-blue-600">{nav("home")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">{nav("services")}</Link>
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
                  {nav("services")}
                </Link>
              </Button>
              {frontmatter.featured && (
                <Badge className="bg-blue-600">{c("popular")}</Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('title') : slug === 'sorting-containment' ? sc('title') : slug === 'quality-engineering' ? qe('title') : slug === 'technical-representation' ? trp('title') : frontmatter.title}
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
              {slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('intro') : slug === 'sorting-containment' ? sc('intro') : slug === 'quality-engineering' ? qe('intro') : slug === 'technical-representation' ? trp('intro') : frontmatter.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {(slug === 'on-site-rapid-response' || slug === 'sorting-containment' || slug === 'quality-engineering' || slug === 'technical-representation') && (
              <section className="mb-10 space-y-6">
                {/* Neden kritik? */}
                <Card className="hero-gradient text-white border border-white/10">
                  <CardHeader>
                    <CardTitle>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('whyTitle') : slug === 'sorting-containment' ? sc('whyTitle') : slug === 'quality-engineering' ? qe('whyTitle') : trp('whyTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="rounded-lg border border-white/20 bg-black/20 p-4">
                        <div className="text-sm text-blue-100">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.downtime.t') : slug === 'sorting-containment' ? sc('why.line.t') : slug === 'quality-engineering' ? qe('why.stability.t') : trp('why.interface.t')}</div>
                        <div className="font-semibold text-white">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.downtime.d') : slug === 'sorting-containment' ? sc('why.line.d') : slug === 'quality-engineering' ? qe('why.stability.d') : trp('why.interface.d')}</div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-black/20 p-4">
                        <div className="text-sm text-blue-100">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.customer.t') : slug === 'sorting-containment' ? sc('why.quality.t') : slug === 'quality-engineering' ? qe('why.compliance.t') : trp('why.speed.t')}</div>
                        <div className="font-semibold text-white">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.customer.d') : slug === 'sorting-containment' ? sc('why.quality.d') : slug === 'quality-engineering' ? qe('why.compliance.d') : trp('why.speed.d')}</div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-black/20 p-4">
                        <div className="text-sm text-blue-100">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.cost.t') : slug === 'sorting-containment' ? sc('why.trace.t') : slug === 'quality-engineering' ? qe('why.insight.t') : trp('why.visibility.t')}</div>
                        <div className="font-semibold text-white">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.cost.d') : slug === 'sorting-containment' ? sc('why.trace.d') : slug === 'quality-engineering' ? qe('why.insight.d') : trp('why.visibility.d')}</div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-black/20 p-4">
                        <div className="text-sm text-blue-100">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.quality.t') : slug === 'sorting-containment' ? sc('why.speed.t') : slug === 'quality-engineering' ? qe('why.speed.t') : trp('why.launch.t')}</div>
                        <div className="font-semibold text-white">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('why.quality.d') : slug === 'sorting-containment' ? sc('why.speed.d') : slug === 'quality-engineering' ? qe('why.speed.d') : trp('why.launch.d')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hizmet Kapsamı */}
                <Card className="hero-gradient text-white border border-white/10">
                  <CardHeader>
                    <CardTitle>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scopeTitle') : slug === 'sorting-containment' ? sc('scopeTitle') : slug === 'quality-engineering' ? qe('scopeTitle') : trp('scopeTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s1.t') : slug === 'sorting-containment' ? sc('scope.s1.t') : slug === 'quality-engineering' ? qe('scope.s1.t') : trp('scope.s1.t')}</h4>
                        <ul className="list-disc pl-5 text-sm text-blue-50 space-y-1">
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s1.i.0') : slug === 'sorting-containment' ? sc('scope.s1.i.0') : slug === 'quality-engineering' ? qe('scope.s1.i.0') : trp('scope.s1.i.0')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s1.i.1') : slug === 'sorting-containment' ? sc('scope.s1.i.1') : qe('scope.s1.i.1')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s1.i.2') : slug === 'sorting-containment' ? sc('scope.s1.i.2') : qe('scope.s1.i.2')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s1.i.3') : slug === 'sorting-containment' ? sc('scope.s1.i.3') : qe('scope.s1.i.3')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s2.t') : slug === 'sorting-containment' ? sc('scope.s2.t') : slug === 'quality-engineering' ? qe('scope.s2.t') : trp('scope.s2.t')}</h4>
                        <ul className="list-disc pl-5 text-sm text-blue-50 space-y-1">
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s2.i.0') : slug === 'sorting-containment' ? sc('scope.s2.i.0') : slug === 'quality-engineering' ? qe('scope.s2.i.0') : trp('scope.s2.i.0')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s2.i.1') : slug === 'sorting-containment' ? sc('scope.s2.i.1') : qe('scope.s2.i.1')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s2.i.2') : slug === 'sorting-containment' ? sc('scope.s2.i.2') : qe('scope.s2.i.2')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s2.i.3') : slug === 'sorting-containment' ? sc('scope.s2.i.3') : qe('scope.s2.i.3')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s3.t') : slug === 'sorting-containment' ? sc('scope.s3.t') : slug === 'quality-engineering' ? qe('scope.s3.t') : trp('scope.s3.t')}</h4>
                        <ul className="list-disc pl-5 text-sm text-blue-50 space-y-1">
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s3.i.0') : slug === 'sorting-containment' ? sc('scope.s3.i.0') : slug === 'quality-engineering' ? qe('scope.s3.i.0') : trp('scope.s3.i.0')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s3.i.1') : slug === 'sorting-containment' ? sc('scope.s3.i.1') : qe('scope.s3.i.1')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s3.i.2') : slug === 'sorting-containment' ? sc('scope.s3.i.2') : qe('scope.s3.i.2')}</li>
                          <li>{slug === 'on-site-rapid-response' ? (await getTranslations('services.onSiteRapidResponse'))('scope.s3.i.3') : slug === 'sorting-containment' ? sc('scope.s3.i.3') : qe('scope.s3.i.3')}</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                

                
              </section>
            )}
            {!(slug === 'on-site-rapid-response' || slug === 'sorting-containment') && (
              <article className="prose prose-lg max-w-none">
                <MDXRemote source={content} />
              </article>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick contact */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  {c("getStarted")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/contact?service=${slug}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      {c("requestQuote")}
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700" asChild>
                    <a href="tel:+498912345678">
                      <Phone className="h-4 w-4 mr-2" />
                      {c("contactUsToday")}
                    </a>
                  </Button>
                </div>
                <div className="text-xs text-blue-600 space-y-1">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{hc("response24h")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>{hc("freeInitialAssessment")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  {sv('highlightsTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{sv('highlights.h1')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{sv('highlights.h2')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{sv('highlights.h3')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{sv('highlights.h4')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{sv('highlights.h5')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer rating */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  {sv('customerRatingTitle')}
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
                    127 {sv('customerReviewsLabel')}
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
          <h2 className="text-3xl font-bold text-center mb-12">{sv('faqTitle')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{sv(`faq.q${index+1}.q`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{sv(`faq.q${index+1}.a`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">{sRoot('relatedTitle') || sv('relatedTitle')}</h2>
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
                      {c('viewDetails')}
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
