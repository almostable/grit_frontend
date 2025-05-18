import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-PWJ0SQWJV9'
        strategy='afterInteractive'
        async
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PWJ0SQWJV9');
        `}
      </Script>
    </>
  );
}
