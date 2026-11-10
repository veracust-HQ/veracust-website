import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // CORRECTED FULL BASE URL
  const baseUrl = 'https://veracust-website.onrender.com';

  const routes = [
    '',        // Home page (/)
    '/docs',   // Documentation route (/docs)
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
