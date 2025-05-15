'use client';

export function ProductPrice({ data }) {
  return (
    <div className='flex items-baseline gap-1 mt-4'>
      <p className='text-sm font-medium'>от</p>
      <p className='text-xl font-medium'>{data.toLocaleString('ru-RU')} ₸</p>
    </div>
  );
}
