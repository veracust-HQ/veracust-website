import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define your base production domain
  const baseUrl = 'https://onrender.com';

  // Add any new sub-routes to this array as your app grows
  const routes = [
    '',        // Home page (/)
    '/docs',   // Documentation overview
    // Example format for future expansion:
    // '/about',
    // '/dashboard',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
