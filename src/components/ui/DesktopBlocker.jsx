'use client';

import { useEffect, useState } from 'react';

export default function DesktopBlocker({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // или другой порог
    };

    handleResize(); // вызвать один раз при монтировании
    window.addEventListener('resize', handleResize); // отслеживать изменения размера

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {isDesktop && !dismissed && (
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
              className='mt-4 rounded-lg bg-black border border-black hover:bg-transparent hover:text-black px-4 py-2 text-white cursor-pointer'
            >
              хочу продолжить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
