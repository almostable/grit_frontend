import { Button } from '@/components/ui/Button';
import { FutureDateButton } from '@/components/ui/FutureDateButton';
import { TruckLogo } from '@/components/ui/logo/TruckLogo';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({ data }) {
  if (!data) return <p>ничего не найдено...</p>;

  return (
    <>
      {data?.map((i) => (
        <div key={i.id} className='flex flex-col gap-2'>
          <Link href={`/product/${i.id}`}>
            <div className='flex flex-col gap-3 w-full'>
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
                    className='rounded-md object-cover w-full max-w-full h-[190px]'
                  />
                )}
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-nowrap items-baseline gap-1 gap-y-0 whitespace-nowrap overflow-hidden'>
                  <p className='font-medium'>
                    от {i?.price?.toLocaleString('ru-RU')} ₸
                  </p>
                  {i?.old_price && (
                    <p className='text-xs text-neutral-500 line-through'>
                      {i?.old_price?.toLocaleString('ru-RU')} ₸
                    </p>
                  )}
                </div>
                <p className='text-sm text-neutral-500'>{i.name}</p>
              </div>
            </div>
          </Link>
          <Link href={`/product/${i.id}`}>
            <Button size='sm' className='w-full text-sm'>
              <TruckLogo size={18} />
              до <FutureDateButton />
            </Button>
          </Link>
        </div>
      ))}
    </>
  );
}
