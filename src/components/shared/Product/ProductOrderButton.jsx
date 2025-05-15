'use client';

import { Button } from '@/components/ui/Button';
import { Forward } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ProductOrderButton = ({ state, mode = 'inplace', onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollY + windowHeight >= fullHeight - 250) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseClasses =
    'bg-black text-white py-3 rounded-lg text-center text-base transition-all duration-130 transform';

  const variantClasses =
    mode === 'fixed'
      ? `fixed bottom-3 left-5 right-5 z-50 shadow-lg ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`
      : `w-full ${
          !isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`;

  return (
    <>
      <Button
        onClick={onClick}
        disabled={state}
        className={`${baseClasses} ${variantClasses} py-6`}
      >
        <Forward size={21} />
        заказать
      </Button>
    </>
  );
};
