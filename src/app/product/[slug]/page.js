import ProductPage from '@/components/shared/Product/ProductPage';
import { products } from '@/data/products';

export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((product) => product.id === slug);

  if (!product) {
    return {
      title: 'продукт не найден',
      description: 'извините, этот товар не найден',
      robots: 'noindex, nofollow',
    };
  }

  return {
    title: `${product.name} — купить фиксы или другое`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://grit.kz/product/${slug}`,
      images: [product.images[0]],
      siteName: 'grit.kz — магазин фиксов и другого',
    },
  };
}

export default function PageProduct() {
  return <ProductPage />;
}
