import type { Metadata } from "next";
import "@fontsource/kanit/latin.css";
import "@fontsource/orbitron/latin.css";
import "@fontsource/turret-road/latin.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "slick-carousel/slick/slick.css";
import "./SiteStyles.module.css";
import "animate.css/animate.compat.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientInitializer from "../components/ClientInitializer";
import SiteAnalytics from "../components/SiteAnalytics";
import StructuredData from "../components/StructuredData";
import {
  LEGACY_SOCIAL_DESCRIPTION,
  LEGACY_SOCIAL_IMAGE,
  LEGACY_SOCIAL_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Homepage | Cob Web",
    template: "%s",
  },
  description: "Homepage",
  keywords: [
    "game development company",
    "game art studio",
    "Unity game development",
    "Unreal Engine game development",
    "2D game art",
    "3D game art",
    "game animation",
    "game testing",
    "game UI UX design",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: LEGACY_SOCIAL_TITLE,
    description: LEGACY_SOCIAL_DESCRIPTION,
    images: [{ url: LEGACY_SOCIAL_IMAGE, alt: SITE_NAME, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CobwebGames",
    creator: "@CobwebGames",
    title: LEGACY_SOCIAL_TITLE,
    description: LEGACY_SOCIAL_DESCRIPTION,
    images: [LEGACY_SOCIAL_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: [
      "yhKLaYmFLuBmU5NChxhmoqEXb57-CezVJVF9Gco6prg",
      "pN-X759aPxgwrDkwFc9GtYW7arDsKMvK-miX4bzL5Zc",
    ],
  },
  other: {
    "DC.date.issued": "2026-07-09T00:00:00+00:00",
    "fb:pages": "https://www.facebook.com/cobwebgames",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/assets/images/logo.svg" sizes="32x32" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="border-body">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </div>
        <ClientInitializer />
        <SiteAnalytics />
      </body>
    </html>
  );
}
