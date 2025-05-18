import { CategoryButtons } from '@/components/shared/Index/CategoryButtons';
import { ProductCard } from '@/components/shared/Index/ProductCard';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: 'Категория не найдена',
      description: 'Извините, такой категории не существует',
      robots: 'noindex, nofollow',
    };
  }

  return {
    title: `${category.name} — ассортимент фиксов`,
    description: category.description.slice(0, 160),
    openGraph: {
      title: category.name,
      description: category.description,
      url: `https://weel.kz/category/${slug}`,
      siteName: 'weel.kz — магазин фиксов и другого',
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = categories.find((cat) => cat.slug === slug);

  const filteredProducts = products
    .filter((product) => product.category_id === category.id)
    .sort((a, b) => a.id - b.id);

  return (
    <div>
      {/* категории */}
      <div className='mt-5 overflow-auto scrollbar-none'>
        <CategoryButtons data={categories} activeSlug={slug} />
      </div>
      <div className='px-5 mt-5'>
        <h1 className='text-2xl font-medium'>{category.name}</h1>
        <div className='mt-2'>
          {filteredProducts.length === 0 ? (
            <>
              <p className='text-sm'>
                к сожалению, пока нет товаров в этой категории, но мы скоро
                добавим! следите за новостями.
              </p>
              <Link
                href='/'
                className='flex items-center gap-1 mt-3 text-xl text-neutral-500'
              >
                <MoveLeft size={31} strokeWidth={1.5} />
                на главную
              </Link>
            </>
          ) : (
            <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
              <ProductCard data={filteredProducts} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
