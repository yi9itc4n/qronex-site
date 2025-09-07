"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Factory
} from "lucide-react";

export default function NewsPage() {
  const t = useTranslations("news");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsArticles = [
    {
      id: "bmw-engine-sorting",
      slug: "bmw-engine-sorting",
      title: "BMW Engine Sorting Success Story",
      excerpt: "How QroneX helped BMW implement advanced quality control systems for engine component sorting, resulting in 99.8% defect detection rate.",
      content: "Full article content will be here...",
      category: "Case Study",
      author: "QroneX Team",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      image: "/images/news/bmw-engine-sorting.jpg",
      featured: true,
      tags: ["BMW", "Quality Control", "Automotive", "Sorting"]
    },
    {
      id: "valeo-supplier-development",
      slug: "valeo-supplier-development",
      title: "Valeo Supplier Development Program",
      excerpt: "Comprehensive supplier development initiative that improved quality standards across 15+ Tier 1 suppliers in Europe.",
      content: "Full article content will be here...",
      category: "Industry News",
      author: "Aysu KAYAN",
      publishDate: "2024-01-10",
      readTime: "7 min read",
      image: "/images/news/valeo-supplier.jpg",
      featured: false,
      tags: ["Valeo", "Supplier Development", "Quality Management"]
    },
    {
      id: "quality-engineering-trends",
      slug: "quality-engineering-trends",
      title: "2024 Quality Engineering Trends",
      excerpt: "Key trends shaping the future of quality engineering in automotive manufacturing and what companies need to prepare for.",
      content: "Full article content will be here...",
      category: "Industry Insights",
      author: "Senih DİNÇ",
      publishDate: "2024-01-05",
      readTime: "8 min read",
      image: "/images/news/quality-trends.jpg",
      featured: false,
      tags: ["Trends", "Quality Engineering", "Automotive", "2024"]
    },
    {
      id: "digital-transformation-quality",
      slug: "digital-transformation-quality",
      title: "Digital Transformation in Quality Management",
      excerpt: "How digital technologies are revolutionizing quality management processes and creating new opportunities for manufacturers.",
      content: "Full article content will be here...",
      category: "Technology",
      author: "Zafer SEYMEN",
      publishDate: "2023-12-28",
      readTime: "6 min read",
      image: "/images/news/digital-quality.jpg",
      featured: false,
      tags: ["Digital Transformation", "Quality Management", "Technology"]
    },
    {
      id: "sustainable-manufacturing",
      slug: "sustainable-manufacturing",
      title: "Sustainable Manufacturing Quality Standards",
      excerpt: "New quality standards and practices for sustainable manufacturing in the automotive industry.",
      content: "Full article content will be here...",
      category: "Sustainability",
      author: "QroneX Team",
      publishDate: "2023-12-20",
      readTime: "4 min read",
      image: "/images/news/sustainable-manufacturing.jpg",
      featured: false,
      tags: ["Sustainability", "Manufacturing", "Quality Standards"]
    },
    {
      id: "e-mobility-quality-challenges",
      slug: "e-mobility-quality-challenges",
      title: "Quality Challenges in E-Mobility",
      excerpt: "Unique quality challenges and solutions for electric vehicle manufacturing and battery production.",
      content: "Full article content will be here...",
      category: "E-Mobility",
      author: "QroneX Team",
      publishDate: "2023-12-15",
      readTime: "9 min read",
      image: "/images/news/e-mobility.jpg",
      featured: false,
      tags: ["E-Mobility", "Electric Vehicles", "Battery Production"]
    }
  ];

  const categories = [
    { name: "All", count: newsArticles.length },
    { name: "Case Study", count: newsArticles.filter(article => article.category === "Case Study").length },
    { name: "Industry News", count: newsArticles.filter(article => article.category === "Industry News").length },
    { name: "Industry Insights", count: newsArticles.filter(article => article.category === "Industry Insights").length },
    { name: "Technology", count: newsArticles.filter(article => article.category === "Technology").length },
    { name: "Sustainability", count: newsArticles.filter(article => article.category === "Sustainability").length },
    { name: "E-Mobility", count: newsArticles.filter(article => article.category === "E-Mobility").length }
  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  // Separate featured and non-featured articles from filtered results
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const nonFeaturedArticles = filteredArticles.filter(article => !article.featured);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-blue-green" asChild>
                <Link href="/contact">
                  {t("subscribeNewsletter")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-blue-green border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/about">
                  About QroneX
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories filter */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category.name}
                variant="outline" 
                className={`px-4 py-2 text-sm cursor-pointer transition-colors font-medium ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white hover:bg-blue-50 hover:border-blue-300 text-gray-700 border-gray-300"
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredArticles.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            {featuredArticles.map((article) => (
            <Card key={article.id} className="mb-12 overflow-hidden bg-white shadow-lg border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gray-200 h-64 lg:h-full flex items-center justify-center">
                  <Factory className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-blue-green-gradient text-white">
                      {article.category}
                    </Badge>
                                         <Badge variant="outline" className="text-blue-green border-blue-green">
                       {t("featured")}
                     </Badge>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl mb-4">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                                     <Button className="btn-blue-green" asChild>
                     <Link href={`/news/${article.slug}`}>
                       {t("readFullArticle")}
                       <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                </div>
              </div>
            </Card>
            ))}
          </div>
        </section>
      )}

            {/* News grid */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {selectedCategory === "All" ? t("latestArticles") : `${selectedCategory} Articles`}
          </h2>
          {nonFeaturedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonFeaturedArticles.map((article) => (
              <Card key={article.id} className="card-hover h-full bg-white shadow-md border-gray-200">
                <CardHeader>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-green-gradient text-white text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                                     <Button variant="outline" className="w-full btn-outline-blue-green" asChild>
                     <Link href={`/news/${article.slug}`}>
                       {t("readMore")}
                       <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                </CardContent>
              </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Factory className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found in this category
              </h3>
              <p className="text-gray-500 mb-4">
                Try selecting a different category or check back later for new content.
              </p>
              <Button 
                variant="outline" 
                className="btn-outline-blue-green"
                onClick={() => setSelectedCategory("All")}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-green-gradient text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl" asChild>
              <Link href="/contact">
                {t("subscribeNewsletter")}
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-green hover:bg-gray-100 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl" asChild>
              <Link href="/contact">
                {t("contactOurTeam")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
