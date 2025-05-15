import Link from 'next/link';
import { GritLogo } from '../ui/GritLogo';
import { InstagramLogo } from '../ui/logo/InstagramLogo';
import { WhatsappLogo } from '../ui/logo/WhatsappLogo';

export function Footer() {
  return (
    <div className='mt-auto'>
      <div className='flex flex-col gap-6 mt-9 px-5 py-6 bg-black text-white'>
        <GritLogo />
        <div className='flex flex-col gap-2'>
          <Link href='/faq' className=' text-sm text-neutral-400'>
            вопрос — ответ
          </Link>
          <Link href='/faq' className=' text-sm text-neutral-400'>
            доставка
          </Link>
          <Link href='/faq' className=' text-sm text-neutral-400'>
            возврат
          </Link>
          <Link href='/privacy' className=' text-sm text-neutral-400'>
            приватность
          </Link>
        </div>
        <div className='flex gap-5'>
          <a
            href='https://instagram.com/grit.kz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='flex items-center gap-1 text-sm font-medium'>
              <InstagramLogo size={20} />
              Instagram
            </button>
          </a>
          <a
            href='https://wa.me/message/OG6BDAAF77YZG1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='flex items-center gap-1 text-sm font-medium'>
              <WhatsappLogo size={20} />
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
