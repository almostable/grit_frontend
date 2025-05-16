import { Geist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import DesktopBlocker from '@/components/ui/DesktopBlocker';
import { Footer } from '@/components/layout/Footer';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://grit.kz'),
  title: {
    default: 'grit.kz — все про фиксы и многое',
    template: '%s в grit.kz',
  },
  description: 'покупай фиксы, кастом и другое — удобно и дешево.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'grit.kz',
    description: 'лучшие фиксы и многое в grit.kz',
    url: 'https://grit.kz',
    siteName: 'grit.kz',
    images: [
      {
        url: '/gritpreview.png',
        width: 1200,
        height: 630,
        alt: 'grit.kz — preview',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`${geist.className} antialiased`}>
        <div className='flex flex-col min-h-screen'>
          {/* <DesktopBlocker> */}
          <Header />
          {children}
          <Footer />
          {/* </DesktopBlocker> */}
        </div>
      </body>
    </html>
  );
}
