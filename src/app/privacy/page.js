import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'политика приватности',
  description: 'то как мы ценим вашу приватность',
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <div className='flex flex-col gap-2 px-5 mt-5'>
      <p className='text-2xl font-medium'>приватность</p>
      <div className='text-sm'>
        мы уважаем вашу конфиденциальность.
        <br />
        <br />
        наш сайт не собирает и не обрабатывает персональные данные. мы не
        используем формы, авторизацию, cookies, аналитику или рекламные
        технологии.
        <br />
        <br />
        вы просто просматриваете содержимое сайта — без отслеживания,
        регистрации и сбора информации.
        <br />
        <br />
        если у вас есть вопросы, напишите нам на whatsapp.
      </div>
      <Link
        href='/'
        className='flex items-center gap-1 mt-3 text-xl text-neutral-500'
      >
        <MoveLeft size={31} strokeWidth={1.5} />
        на главную
      </Link>
    </div>
  );
}
