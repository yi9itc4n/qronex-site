import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qronex.vercel.app'
  
  const routes = [
    '',
    '/services',
    '/services/on-site-hizli-mudahale',
    '/services/sorting-containment',
    '/services/quality-engineering',
    '/services/technical-representation',
    '/services/supplier-readiness',
    '/services/audits-training',
    '/industries',
    '/case-studies',
    '/about',
    '/careers',
    '/contact',
    '/pricing',
  ]

  const locales = ['tr', 'en']
  
  const sitemap: MetadataRoute.Sitemap = []

  // Add root redirect
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // Add localized routes
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}





