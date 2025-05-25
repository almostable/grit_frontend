import { Search } from 'lucide-react';
import { HeaderBurger } from '../shared/Header/HeaderBurger';
import { GritLogo } from '../ui/GritLogo';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { WhatsappLogo } from '../ui/logo/WhatsappLogo';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <div className='fixed w-full flex justify-between items-center px-5 py-3 bg-white/80 backdrop-blur-xs border-b-neutral-200 max-w-[768px]'>
      <HeaderBurger
        nav={categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      />
      <Link href='/' className='text-black'>
        <GritLogo size={59} />
      </Link>
      <a
        href='https://wa.me/message/OG6BDAAF77YZG1'
        target='_blank'
        rel='noopener noreferrer'
        className=''
      >
        <WhatsappLogo size={24} />
      </a>
    </div>
  );
}
