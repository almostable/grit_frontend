'use client';

import { isMobile } from 'react-device-detect';

export default function DesktopBlocker({ children }) {
  if (isMobile) {
    <>{children}</>;
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center px-6 text-center'>
        <div>
          <h1 className='text-2xl font-bold'>доступно только с телефона 📱</h1>
          <p className='text-gray-500 mt-2'>
            мы разрабатываем версию для пк, следите за новостями 🥺
          </p>
        </div>
      </div>
    </>
  );
}
