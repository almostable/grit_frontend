import { Search } from 'lucide-react';
import { HeaderBurger } from '../shared/Header/HeaderBurger';
import { GritLogo } from '../ui/GritLogo';
import Link from 'next/link';

export function Header() {
  return (
    <div className='flex justify-between items-center px-5 py-3 border-b border-b-neutral-200'>
      <HeaderBurger />
      <Link href='/'>
        <GritLogo />
      </Link>
      <Search size={27} />
    </div>
  );
}
