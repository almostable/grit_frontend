export default function FullScreenSpinner() {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='h-9 w-9 animate-spin rounded-full border-4 border-neutral-200 border-t-black'></div>
    </div>
  );
}
