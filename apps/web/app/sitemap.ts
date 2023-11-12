import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://burn-eng.vercel.app/',
      changeFrequency: 'always',
    },
  ];
}