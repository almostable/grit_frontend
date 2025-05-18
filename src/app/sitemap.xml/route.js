import { categories } from '@/data/categories';
import { products } from '@/data/products';

export async function GET() {
  const baseUrl = 'https://www.weel.kz';

  // Статичные страницы
  const staticPages = ['', 'faq', 'privacy'];

  // Заменить на твои реальные данные
  const cat = categories.map((c) => c.slug);
  const item = products.map((p) => p.id);

  const urls = [
    ...staticPages.map((page) => ({
      loc: `${baseUrl}/${page}`,
      changefreq: 'monthly',
      priority: 0.8,
    })),
    ...cat.map((slug) => ({
      loc: `${baseUrl}/category/${slug}`,
      changefreq: 'weekly',
      priority: 0.7,
    })),
    ...item.map((slug) => ({
      loc: `${baseUrl}/product/${slug}`,
      changefreq: 'weekly',
      priority: 0.9,
    })),
  ];

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url.loc}</loc>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
