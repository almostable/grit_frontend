import { Button } from '../ui/Button';
import { WhatsappLogo } from '../ui/logo/WhatsappLogo';

export function ProductsWarning() {
  return (
    <div className='mt-9'>
      <div className='flex flex-col gap-5 p-5 bg-white shadow-xs rounded-xl'>
        <div className='flex flex-col gap-1'>
          <p className='text-base font-medium'>Не нашел нужный фикс?</p>
          <p className='text-sm text-neutral-500'>
            Напиши нам — найдём нужный фикс и поможем с подбором. Доставим всё
            как можно быстрее и в сохранности.
          </p>
        </div>
        <a
          href='https://wa.me/message/OG6BDAAF77YZG1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='bg-emerald-600 py-2.5 w-full rounded-4xl'>
            <WhatsappLogo size={21} />
            Написать
          </Button>
        </a>
      </div>
    </div>
  );
}
