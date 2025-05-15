import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CategoryButtons({ data, activeSlug }) {
  return (
    <div className='inline-flex flex-row px-5 gap-2'>
      {data.map((i) => {
        const isActive = i.slug === activeSlug;

        return (
          <Link key={i.id} href={`/category/${i.slug}`}>
            <Button
              variant={isActive ? 'default' : 'outline'}
              className={isActive ? 'bg-black text-white' : ''}
            >
              {i.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
