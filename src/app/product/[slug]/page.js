import ProductPage from '@/components/shared/Product/ProductPage';
import { products } from '@/data/products';

export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((product) => product.id === slug);

  if (!product) {
    return {
      title: 'Продукт не найден',
      description: 'Извините, этот товар не найден',
      robots: 'noindex, nofollow',
    };
  }

  return {
    title: `${product.name} — купить фиксы или другое`,
    description: product?.description?.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://weel.kz/product/${slug}`,
      images: [product?.images[0]],
      siteName: 'weel.kz — магазин фиксов и другого',
    },
  };
}

export default function PageProduct() {
  return <ProductPage />;
}
