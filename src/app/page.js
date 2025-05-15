'use client';

import { CategoryButtons } from '@/components/shared/Index/CategoryButtons';
import { ProductCard } from '@/components/shared/Index/ProductCard';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div>
      {/* категории */}
      <div className='mt-5 overflow-auto scrollbar-none'>
        <CategoryButtons data={categories} />
      </div>

      {/* линейка */}
      <div className='px-5 mt-5'>
        {/* заголовок */}
        <div className='mb-2'>
          <p className='font-medium text-2xl'>новинки</p>
        </div>

        {/* товары */}
        <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
          <ProductCard data={products} />
        </div>

        <div className='flex flex-col gap-2 mt-5'>
          <p className='font-medium text-2xl'>почему мы?</p>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-0.5 p-4 border border-neutral-300 rounded-md'>
              <p className='font-medium leading-5'>💸 цены без накруток</p>
              <p className='text-sm text-neutral-500'>
                не арендуем офисы, не платим складам и маркетологам — ты платишь
                только за сам велик.
              </p>
            </div>
            <div className='flex flex-col gap-0.5 p-4 border border-neutral-300 rounded-md'>
              <p className='font-medium leading-5'>🔍 отбираем</p>
              <p className='text-sm text-neutral-500'>
                по отзывам, характеристикам и без откровенного хлама.
              </p>
            </div>
            <div className='flex flex-col gap-0.5 p-4 border border-neutral-300 rounded-md'>
              <p className='font-medium leading-5'>📦 дальше — лучше</p>
              <p className='text-sm text-neutral-500'>
                сейчас предзаказ, но скоро будет наличие и быстрая доставка.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
