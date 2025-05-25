'use client';

export function ProductPrice({ data, old }) {
  return (
    <div className='flex flex-nowrap items-baseline gap-1.5'>
      <div className='flex items-baseline gap-1 mt-4'>
        <p className='text-sm font-medium'>от</p>
        <p className='text-2xl font-medium'>
          {data?.toLocaleString('ru-RU')} ₸
        </p>
      </div>
      {old && (
        <div>
          <p className='text-sm line-through text-neutral-500'>
            {old?.toLocaleString('ru-RU')} ₸
          </p>
        </div>
      )}
    </div>
  );
}
