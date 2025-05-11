'use client';

import { ProductLoader } from '@/components/shared/Product/ProductLoader';
import { Button } from '@/components/ui/Button';
import { FutureDateButton } from '@/components/ui/FutureDateButton';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('products').select('*');

        if (error) throw error;

        console.log('supabase data:', data);
        console.log('supabase error:', error);

        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // if (loading) return <FullScreenSpinner />;

  return (
    <div>
      <div className='mt-5 overflow-auto scrollbar-none'>
        <div className='inline-flex flex-row px-5 gap-2'>
          <Button>фиксы</Button>
          <Button>горные</Button>
          <Button>шоссы</Button>
          <Button>гибриды</Button>
          <Button>другое</Button>
        </div>
      </div>
      <div className='px-5 mt-5'>
        <div className='mb-2'>
          <p className='font-medium text-[28px]'>новинки</p>
        </div>
        {loading && <ProductLoader />}
        <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
          {products?.map((product) => (
            <div key={product.id} className='flex flex-col gap-2'>
              <Link href={`/product/${product.id}`}>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='w-full'>
                    <Image
                      src={product.images[0]}
                      priority={false}
                      loading='lazy'
                      width={165}
                      height={165}
                      quality={50}
                      alt={product.title}
                      className='rounded-md object-cover w-full max-w-full h-[210px]'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-medium'>
                      {product.price.toLocaleString('ru-RU')} ₸
                    </p>
                    <p className='text-sm text-neutral-500'>{product.title}</p>
                  </div>
                </div>
              </Link>
              <Link href={`/product/${product.id}`}>
                <Button size='sm' className='w-full text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z'></path>
                  </svg>
                  до <FutureDateButton />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
