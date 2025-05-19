'use client';

import { CategoryButtons } from '@/components/shared/Index/CategoryButtons';
import { ProductCard } from '@/components/shared/Index/ProductCard';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div>
      {/* категории */}
      <div className='mt-5 overflow-auto scrollbar-none'>
        <CategoryButtons data={categories} />
      </div>

      {/* линейка */}
      <div className='px-5 mt-5'>
        {/* товары */}
        <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
          <ProductCard data={products} />
        </div>

        <div className='flex flex-col gap-2 mt-6'>
          <p className='font-medium text-xl'>Почему мы?</p>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-0.5 p-5 bg-white shadow-xs rounded-xl'>
              <p className='font-medium leading-5'>💸 Разумная цена</p>
              <p className='text-sm text-neutral-500'>
                Не экономим, а продумываем: благодаря логистике и отбору — фикс,
                который реально стоит своих денег
              </p>
            </div>
            <div className='flex flex-col gap-0.5 p-5 bg-white shadow-xs rounded-xl'>
              <p className='font-medium leading-5'>
                ✅ Контроль на каждом этапе
              </p>
              <p className='text-sm text-neutral-500'>
                Следим за фиксом с момента заказа — проверяем состояние,
                упаковку, доставку
              </p>
            </div>
            <div className='flex flex-col gap-0.5 p-5 bg-white shadow-xs rounded-xl'>
              <p className='font-medium leading-5'>📦 Дальше — лучше</p>
              <p className='text-sm text-neutral-500'>
                Сейчас предзаказ, но скоро будет наличие и быстрая доставка
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
