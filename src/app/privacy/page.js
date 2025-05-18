import PrivacyPolicyPage from '@/components/shared/Privacy/PrivacyPolicyPage';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Политика приватности',
  description: 'То как мы ценим вашу приватность',
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <div className='flex flex-col gap-2 px-5 mt-5'>
      <PrivacyPolicyPage />
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
