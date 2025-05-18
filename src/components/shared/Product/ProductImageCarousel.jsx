'use client';

import Image from 'next/image';

export function ProductImageCarousel({ data, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className='flex w-full gap-2 overflow-x-auto scroll-snap-type-x'
    >
      {data?.map((image, index) => (
        <div
          key={index}
          className='flex snap-start min-w-screen h-[400px] relative'
        >
          <div className='absolute inset-0 bg-neutral-500 animate-pulse z-0' />
          <Image
            src={image}
            width={800}
            height={400}
            loading={index === 0 ? 'eager' : 'lazy'}
            alt={alt}
            className='w-full max-h-[400px] z-10 object-cover'
          />
        </div>
      ))}
    </div>
  );
}
