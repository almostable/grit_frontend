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
  metadataBase: new URL('https://www.weel.kz'),
  title: {
    default: 'weel.kz — все про фиксы и многое',
    template: '%s в weel.kz',
  },
  description: 'Покупай фиксы, кастом и другое — удобно и дешево.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'weel.kz',
    description: 'Лучшие фиксы и многое в weel.kz',
    url: 'https://www.weel.kz',
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
      <body className={`${geist.className} antialiased`}>
        <div className='flex flex-col min-h-screen'>
          <DesktopBlocker>
            <Header />
            {children}
            <Footer />
          </DesktopBlocker>
        </div>
      </body>
    </html>
  );
}
