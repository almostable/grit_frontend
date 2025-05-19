import { Button } from '@/components/ui/Button';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function CategoryButtons({ data, activeSlug }) {
  return (
    <div className='inline-flex flex-row px-5 gap-2'>
      {data.map((i) => {
        const isActive = i.slug === activeSlug;

        return (
          <Link key={i.id} href={`/category/${i.slug}`}>
            <Button
              className={clsx(
                `text-[15px] font-normal border border-neutral-800 rounded-4xl items-center gap-0.5 cursor-pointer`,
                isActive
                  ? 'bg-neutral-800 text-white'
                  : 'bg-transparent text-neutral-700 hover:bg-neutral-800 hover:text-white hover:underline underline-offset-1 decoration-1'
              )}
            >
              {i.name}
              <ArrowUpRight size={15} />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
