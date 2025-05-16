'use client';

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function DesktopBlocker({ children }) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('desktopWarningDismissed');
    if (stored === 'true') {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('desktopWarningDismissed', 'true');
  };

  return (
    <>
      {children}

      {!isMobile && !dismissed && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-white px-6 text-center'>
          <div>
            <h1 className='text-2xl font-bold'>
              доступно только с телефона 📱
            </h1>
            <p className='text-gray-500 mt-2'>
              мы разрабатываем версию для пк, следите за новостями 🥺
            </p>
            <button
              onClick={handleDismiss}
              className='mt-4 rounded-lg bg-black px-4 py-2 text-white hover:bg-transparent border border-black hover:text-black  transition duration-150 cursor-pointer'
            >
              я хочу продолжить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
