import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CategoryButtons({ data }) {
  return (
    <div className='inline-flex flex-row px-5 gap-2'>
      {data.map((i) => (
        <Link key={i.id} href={`/category/${i.slug}`}>
          <Button>{i.name}</Button>
        </Link>
      ))}
    </div>
  );
}
