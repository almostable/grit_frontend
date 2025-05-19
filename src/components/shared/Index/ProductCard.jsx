import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({ data }) {
  if (!data) return <p>ничего не найдено...</p>;

  return (
    <>
      {data?.map((i) => (
        <div key={i.id} className='flex flex-col'>
          <Link href={`/product/${i.id}`}>
            <div className='flex flex-col w-full'>
              <div className='w-full'>
                {i?.images?.length > 0 && (
                  <Image
                    src={i?.images[0]}
                    priority={false}
                    loading='lazy'
                    width={165}
                    height={165}
                    quality={50}
                    alt={i.name}
                    className='rounded-xl object-cover w-full max-w-full h-[190px]'
                  />
                )}
              </div>
              <div className='flex flex-col p-1 mt-1'>
                <p className='text-sm whitespace-nowrap overflow-hidden'>
                  {i.name}
                </p>
                <div className='flex flex-nowrap items-baseline gap-1 whitespace-nowrap overflow-hidden'>
                  <p
                    className={clsx(
                      'text-base font-medium',
                      i?.old_price && 'text-emerald-600'
                    )}
                  >
                    от {i?.price?.toLocaleString('ru-RU')} ₸
                  </p>
                  {i?.old_price && (
                    <p className='text-xs text-neutral-500 line-through'>
                      {i?.old_price?.toLocaleString('ru-RU')} ₸
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
