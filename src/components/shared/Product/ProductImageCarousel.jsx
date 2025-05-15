'use client';

import Image from 'next/image';

export function ProductImageCarousel({ data, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className='flex w-full gap-2 overflow-x-auto scroll-snap-type-x'
    >
      {data.map((image, index) => (
        <div key={index} className='flex snap-start min-w-screen'>
          <Image
            src={image}
            width={800}
            height={400}
            loading='lazy'
            alt={alt}
            className='w-full max-h-[400px] object-cover'
          />
        </div>
      ))}
    </div>
  );
}
