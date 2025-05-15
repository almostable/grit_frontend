'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export function ReusableAccordionItem({
  index,
  label = 'характеристики',
  labelClassname,
  content,
}) {
  return (
    <AccordionItem value={index}>
      <AccordionTrigger className={labelClassname}>{label}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
}
