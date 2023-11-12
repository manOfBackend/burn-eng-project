import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/writing/*', '/dashboard', '/admin/*', '/settings/*'],
    },
    sitemap: 'https://burn-eng.vercel.app/sitemap.xml',
  }
}