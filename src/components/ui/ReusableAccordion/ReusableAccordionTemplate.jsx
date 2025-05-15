'use client';

import { Accordion } from '@/components/ui/Accordion';

export function ReusableAccordionTemplate({ children }) {
  return (
    <Accordion
      type='single'
      collapsible
      className='border-b border-neutral-200'
    >
      {children}
    </Accordion>
  );
}
