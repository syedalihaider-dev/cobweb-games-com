import type { MetadataRoute } from 'next';
import { resourcePacksData } from '@/components/resourcePacksData';
import { SITE_URL, STATIC_ROUTES } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));
  const resourcePacks = resourcePacksData.map((pack) => ({
    url: `${SITE_URL}/portfolio/${pack.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pages, ...resourcePacks];
}
