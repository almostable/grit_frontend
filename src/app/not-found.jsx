import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'страница не найдена',
  description: 'к сожалению такой страницы не существует',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className='flex flex-col gap-3 px-5 mt-5'>
      <p>ничего не найдено...</p>
      <Link
        href='/'
        className='flex items-center gap-1 text-xl text-neutral-500'
      >
        <MoveLeft size={31} strokeWidth={1.5} />
        на главную
      </Link>
    </div>
  );
}
