'use client';

import { FutureDateButton } from '@/components/ui/FutureDateButton';
import { TruckLogo } from '@/components/ui/logo/TruckLogo';
import { CirclePercent } from 'lucide-react';

export function ProductHeader({ data }) {
  return (
    <>
      <h1 className='text-xl font-medium'>{data}</h1>
      <div className='flex gap-1.5'>
        <div className='flex gap-1 max-w-fit px-2 py-1 items-center text-xs bg-emerald-600/13 text-emerald-600 rounded-md'>
          <TruckLogo size={17} />
          доставим до <FutureDateButton />
        </div>
        <div className='flex gap-1 max-w-fit px-2 py-1 items-center text-xs bg-blue-500/13 text-blue-500 rounded-md'>
          <CirclePercent size={17} />
          *предоплата 80%
        </div>
      </div>
    </>
  );
}
