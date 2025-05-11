'use client';

import { useEffect, useState } from 'react';

export default function DesktopBlocker({ children }) {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsBlocked(!isMobile);
  }, []);

  if (isBlocked) {
    return (
      <div className='flex h-screen items-center justify-center px-6 text-center'>
        <div>
          <h1 className='text-2xl font-bold'>доступно только с телефона 📱</h1>
          <p className='text-gray-500 mt-2'>
            мы пока в разработке для десктопа
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
