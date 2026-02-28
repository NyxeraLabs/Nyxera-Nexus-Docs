import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/overview',
  '/architecture',
  '/federation-model',
  '/deployment-patterns',
  '/compliance-inheritance',
  '/use-cases',
  '/enterprise-guide',
  '/reference'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://docs.nyxera-nexus.nyxera.cloud${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
