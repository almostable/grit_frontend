import { Search } from 'lucide-react';
import { HeaderBurger } from '../shared/Header/HeaderBurger';
import { GritLogo } from '../ui/GritLogo';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { WhatsappLogo } from '../ui/logo/WhatsappLogo';
import { Button } from '../ui/Button';

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
      <Link href='/' className='text-black'>
        <GritLogo size={65} />
      </Link>
      <a
        href='https://wa.me/message/OG6BDAAF77YZG1'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button size='icon' className='size-9 bg-black text-white'>
          <WhatsappLogo size={20} />
        </Button>
      </a>
    </div>
  );
}
