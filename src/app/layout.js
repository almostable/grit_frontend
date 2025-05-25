import { Geist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import DesktopBlocker from '@/components/ui/DesktopBlocker';
import { Footer } from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/shared/Analytics/GoogleAnalytics';
import YandexMetrika from '@/components/shared/Analytics/YandexMetrika';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://weel.kz'),
  title: {
    default:
      'Фиксы и стильные аксессуары для уверенной и безопасной катки — Weel.kz',
    template: '%s в Weel',
  },
  description:
    'Онлайн-магазин фиксированных велосипедов и аксессуаров: шлемы, перчатки, стрепы и всё, что нужно для комфортной и безопасной езды. Катай со стилем на Weel.kz.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Фиксы и экип для стильных и безопасных каток — Weel.kz',
    description:
      'Стильные фиксы и экипировка для безопасности и комфорта на катке. Твой лучший выбор для катки — Weel.kz.',
    url: 'https://weel.kz',
    siteName: 'weel.kz',
    images: [
      {
        url: 'https://res.cloudinary.com/dtkdoiowo/image/upload/v1747479386/Frame_21_ynqknm.jpg',
        width: 1200,
        height: 630,
        alt: 'weel.kz — preview',
      },
    ],
    type: 'website',
  },
  other: {
    ['yandex-verification']: 'd04c87f21e74dcc3',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <GoogleAnalytics />
        <YandexMetrika />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body
        className={`${geist.className} antialiased bg-neutral-100 max-w-[768px] m-auto`}
      >
        <div className='flex flex-col min-h-screen'>
          <DesktopBlocker>
            <Header />
            <div className='pt-[50px]'>{children}</div>
            <Footer />
          </DesktopBlocker>
        </div>
      </body>
    </html>
  );
}
