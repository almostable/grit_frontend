import { Search } from 'lucide-react';
import { HeaderBurger } from '../shared/Header/HeaderBurger';
import { GritLogo } from '../ui/GritLogo';
import Link from 'next/link';
import { categories } from '@/data/categories';

export function Header() {
  return (
    <div className='flex justify-between items-center px-5 py-3 border-b border-b-neutral-200'>
      <HeaderBurger
        nav={categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      />
      <Link href='/'>
        <GritLogo />
      </Link>
      <Search size={27} />
    </div>
  );
}
