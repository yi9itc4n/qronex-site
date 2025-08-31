"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Factory,
  TrendingUp,
  Award,
  Globe
} from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const t = useTranslations("news");

  // This would typically come from a CMS or API
  const articles = [
    {
      id: "bmw-engine-sorting",
      slug: "bmw-engine-sorting",
      title: "BMW Engine Sorting Success Story: Revolutionizing Quality Control in Automotive Manufacturing",
      excerpt: "How QroneX helped BMW implement advanced quality control systems for engine component sorting, resulting in 99.8% defect detection rate.",
      content: `
        <h2>The Challenge</h2>
        <p>BMW faced significant challenges in their engine component quality control process. With thousands of engine parts being manufactured daily, traditional inspection methods were proving inadequate, leading to quality issues and increased costs.</p>
        
        <h2>Our Solution</h2>
        <p>QroneX implemented a comprehensive quality control system that included:</p>
        <ul>
          <li>Advanced automated sorting systems</li>
          <li>Real-time quality monitoring</li>
          <li>Machine learning-based defect detection</li>
          <li>Integrated quality management platform</li>
        </ul>
        
        <h2>Implementation Process</h2>
        <p>The implementation was carried out in three phases:</p>
        <ol>
          <li><strong>Phase 1:</strong> System design and integration planning</li>
          <li><strong>Phase 2:</strong> Pilot implementation and testing</li>
          <li><strong>Phase 3:</strong> Full-scale deployment and optimization</li>
        </ol>
        
        <h2>Results</h2>
        <p>The new system delivered exceptional results:</p>
        <ul>
          <li>99.8% defect detection rate</li>
          <li>60% reduction in quality-related costs</li>
          <li>40% improvement in production efficiency</li>
          <li>Real-time quality monitoring capabilities</li>
        </ul>
        
        <h2>Key Technologies Used</h2>
        <p>Our solution leveraged cutting-edge technologies including:</p>
        <ul>
          <li>Computer vision systems</li>
          <li>AI-powered defect recognition</li>
          <li>IoT sensors for real-time monitoring</li>
          <li>Advanced data analytics</li>
        </ul>
        
        <h2>Future Impact</h2>
        <p>This successful implementation has set a new standard for quality control in automotive manufacturing. BMW is now expanding this system to other production lines, and other manufacturers are following suit.</p>
      `,
      category: "Case Study",
      author: "QroneX Team",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      image: "/images/news/bmw-engine-sorting.jpg",
      featured: true,
      tags: ["BMW", "Quality Control", "Automotive", "Sorting", "AI", "Machine Learning"]
    },
    {
      id: "valeo-supplier-development",
      slug: "valeo-supplier-development",
      title: "Valeo Supplier Development Program: Transforming Quality Standards Across Europe",
      excerpt: "Comprehensive supplier development initiative that improved quality standards across 15+ Tier 1 suppliers in Europe.",
      content: `
        <h2>Program Overview</h2>
        <p>Valeo's supplier development program was designed to elevate quality standards across their entire supply chain in Europe. The program targeted 15+ Tier 1 suppliers across multiple countries.</p>
        
        <h2>Program Objectives</h2>
        <ul>
          <li>Standardize quality processes across all suppliers</li>
          <li>Improve supplier performance metrics</li>
          <li>Reduce quality-related incidents</li>
          <li>Enhance supplier capabilities</li>
        </ul>
        
        <h2>Implementation Strategy</h2>
        <p>Our approach included:</p>
        <ul>
          <li>Comprehensive supplier assessment</li>
          <li>Customized training programs</li>
          <li>Process optimization</li>
          <li>Continuous monitoring and support</li>
        </ul>
        
        <h2>Results Achieved</h2>
        <p>The program delivered significant improvements:</p>
        <ul>
          <li>85% improvement in supplier quality scores</li>
          <li>70% reduction in quality incidents</li>
          <li>Standardized processes across all suppliers</li>
          <li>Enhanced supplier relationships</li>
        </ul>
      `,
      category: "Industry News",
      author: "Aysu KAYAN",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      image: "/images/news/valeo-supplier.jpg",
      featured: false,
      tags: ["Valeo", "Supplier Development", "Quality Management"]
    }
  ];

  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button asChild>
            <Link href="/news">Back to News</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Article header */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
                         <Button variant="ghost" className="text-white hover:bg-white/10 mb-6" asChild>
               <Link href="/news">
                 <ArrowLeft className="mr-2 h-4 w-4" />
                 {t("backToNews")}
               </Link>
             </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-blue-green-gradient text-white">
                {article.category}
              </Badge>
                             {article.featured && (
                 <Badge variant="outline" className="text-white border-white">
                   {t("featured")}
                 </Badge>
               )}
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-slate-200 mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
            
                         <div className="flex items-center gap-4">
               <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                 <Share2 className="mr-2 h-4 w-4" />
                 {t("share")}
               </Button>
               <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                 <Bookmark className="mr-2 h-4 w-4" />
                 {t("bookmark")}
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="lg:col-span-3">
                <Card className="mb-8 bg-white shadow-lg border-gray-200">
                  <div className="bg-gray-200 h-64 rounded-t-lg flex items-center justify-center">
                    <Factory className="h-24 w-24 text-gray-400" />
                  </div>
                  <CardContent className="p-8 bg-white">
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </CardContent>
                </Card>
                
                                 {/* Tags */}
                 <div className="mb-8">
                   <h3 className="text-lg font-semibold mb-4">{t("tags")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                                 {/* Author bio */}
                 <Card className="bg-white shadow-md border-gray-200">
                   <CardContent className="p-6 bg-white">
                     <h3 className="text-lg font-semibold mb-4">{t("aboutAuthor")}</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-green-gradient rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{article.author}</h4>
                        <p className="text-gray-600 text-sm">
                          Expert in quality management and automotive industry solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                                     {/* Related articles */}
                   <Card className="bg-white shadow-md border-gray-200">
                     <CardContent className="p-6 bg-white">
                       <h3 className="text-lg font-semibold mb-4">{t("relatedArticles")}</h3>
                      <div className="space-y-4">
                        {articles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle) => (
                          <Link 
                            key={relatedArticle.id}
                            href={`/news/${relatedArticle.slug}`}
                            className="block group"
                          >
                            <h4 className="font-medium text-sm group-hover:text-blue-green transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {relatedArticle.readTime}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                                     {/* Newsletter signup */}
                   <Card className="bg-white shadow-md border-gray-200">
                     <CardContent className="p-6 bg-white">
                       <h3 className="text-lg font-semibold mb-4">{t("stayUpdated")}</h3>
                       <p className="text-sm text-gray-600 mb-4">
                         Get the latest insights and case studies delivered to your inbox.
                       </p>
                       <Button className="w-full btn-blue-green" asChild>
                         <Link href="/contact">
                           {t("subscribeNewsletter")}
                         </Link>
                       </Button>
                     </CardContent>
                   </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("readyToTransform")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let QroneX help you implement similar quality solutions for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100" asChild>
              <Link href="/contact">
                {t("getStartedToday")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-green" asChild>
              <Link href="/services">
                {t("viewOurServices")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
