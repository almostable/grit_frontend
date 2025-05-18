import { ReusableAccordionItem } from '@/components/ui/ReusableAccordion/ReusableAccordionItem';
import { ReusableAccordionTemplate } from '@/components/ui/ReusableAccordion/ReusableAccordionTemplate';
import { faqAccordions } from '@/data/accordions/faq_accordions';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'FAQ — часто задаваемые вопросы',
  description: 'Ответы на часто задаваемые вопросы',
  robots: 'index, follow',
};

export default function FaqPage() {
  return (
    <div className='flex flex-col gap-2 px-5 mt-5'>
      <p className='text-2xl font-medium'>вопросы и ответы / faq</p>
      {/* Accordions */}
      <ReusableAccordionTemplate>
        {/* Информационные текста */}
        {faqAccordions.map((acc) => (
          <ReusableAccordionItem
            labelClassname='text-lg'
            key={acc.id}
            index={acc.id}
            label={acc.name}
            content={acc.text.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className='mb-2'>
                {paragraph}
              </p>
            ))}
          />
        ))}
      </ReusableAccordionTemplate>
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
