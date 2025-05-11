import { Skeleton } from '@/components/ui/Skeleton';

function Skeletons() {
  return (
    <div className='flex flex-col gap-3'>
      <Skeleton className='w-full max-w-full h-[210px] rounded-md' />
      <div className='flex flex-col gap-2.5'>
        <Skeleton className='w-full max-w-full h-[15px] rounded-md' />
        <Skeleton className='w-full max-w-full h-[13px] rounded-md' />
        <Skeleton className='w-full max-w-full h-[32px] rounded-md' />
      </div>
    </div>
  );
}

export function ProductLoader() {
  return (
    <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
      <Skeletons />
      <Skeletons />
      <Skeletons />
      <Skeletons />
    </div>
  );
}
