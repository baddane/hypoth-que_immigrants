"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "./CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const UET_TAG_ID = process.env.NEXT_PUBLIC_UET_TAG_ID ?? "";

// Charge les scripts de mesure APRÈS consentement uniquement, et seulement si
// l'ID correspondant est configuré (sinon rien n'est injecté).
export default function Analytics() {
  const [consent, setConsent] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const sync = () => {
      const c = getConsent();
      setConsent({ analytics: c.analytics, marketing: c.marketing });
    };
    sync();
    window.addEventListener("cookie-consent-changed", sync);
    return () => window.removeEventListener("cookie-consent-changed", sync);
  }, []);

  const showAnalytics = consent.analytics && GA_ID;
  const showMarketing = consent.marketing;

  return (
    <>
      {showAnalytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {showMarketing && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      {showMarketing && UET_TAG_ID && (
        <Script id="bing-uet" strategy="afterInteractive">
          {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${UET_TAG_ID}",enableAutoSpaTracking:true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
        </Script>
      )}
    </>
  );
}
