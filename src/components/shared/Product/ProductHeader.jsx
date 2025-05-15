'use client';

import { FutureDateButton } from '@/components/ui/FutureDateButton';
import { TruckLogo } from '@/components/ui/logo/TruckLogo';
import { CirclePercent } from 'lucide-react';

export function ProductHeader({ data }) {
  return (
    <>
      <p className='text-xl font-medium'>{data}</p>
      <div className='flex gap-1.5'>
        <div className='flex gap-1 max-w-fit px-2 py-1 items-center text-xs bg-emerald-500/20 text-emerald-500 rounded-md'>
          <TruckLogo size={17} />
          доставим до <FutureDateButton />
        </div>
        <div className='flex gap-1 max-w-fit px-2 py-1 items-center text-xs bg-blue-600/20 text-blue-600 rounded-md'>
          <CirclePercent size={17} />
          *предоплата 80%
        </div>
      </div>
    </>
  );
}
