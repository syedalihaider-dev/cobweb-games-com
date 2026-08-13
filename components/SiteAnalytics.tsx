import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const GTM_ID = (process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-5JMDDC7W').trim();
const validGaId = GA_ID && /^G-[A-Z0-9]+$/i.test(GA_ID) ? GA_ID : undefined;
const validGtmId = GTM_ID && /^GTM-[A-Z0-9]+$/i.test(GTM_ID) ? GTM_ID : undefined;

export default function SiteAnalytics() {
  return (
    <>
      {validGtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${validGtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${validGtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      )}
      {validGaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${validGaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${validGaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
