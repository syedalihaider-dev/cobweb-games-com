'use client';

import { useEffect } from 'react';
import WhatIsDifferent from '../components/WhatIsDifferent';
import CtaOne from '../components/CtaOne';
import GameArt from '../components/GameArt';
import GameDevelopment from '../components/GameDevelopment';
import GameAnimation from '../components/GameAnimation';
import Platform from '../components/Platform';
import Technologies from '../components/Technologies';
import Reviews from '../components/Reviews';
import CtaTwo from '../components/CtaTwo';
import Faqs from '../components/Faqs';
import FooterForm from '../components/FooterForm';
import Link from 'next/link';
import Image from 'next/image';
import Counter from '@/components/Counter';
import { FaGamepad, FaHandshake } from 'react-icons/fa';
import AboutContent from '@/components/StackedSec';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './HomePage.module.css';

export default function Home() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.banner-tabs ul li');
    const images = document.querySelectorAll('.image-container .img-wrap');
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    function showImageAndHighlightButton(index: number) {
      images.forEach(img => img.classList.remove('active'));
      if (images[index]) images[index].classList.add('active');

      buttons.forEach(btn => {
        btn.classList.remove('active-button');
        const progress = btn.querySelector('.progress') as HTMLElement;
        if (progress) progress.style.height = '0';
      });

      if (buttons[index]) {
        buttons[index].classList.add('active-button');
        const progress = buttons[index].querySelector('.progress') as HTMLElement;
        if (progress) {
          // Force reflow
          void progress.offsetWidth;
          // Start progress bar animation
          setTimeout(() => {
            progress.style.height = '100%';
          }, 100);
        }
      }
    }

    function startAutoLoop(startIndex: number) {
      currentIndex = startIndex;
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        resetProgressBars();
        showImageAndHighlightButton(currentIndex);
      }, 5000);
    }

    function resetProgressBars() {
      buttons.forEach(btn => {
        const progress = btn.querySelector('.progress') as HTMLElement;
        if (progress) progress.style.height = '0';
      });
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        clearInterval(timer);
        resetProgressBars();
        showImageAndHighlightButton(index);
        startAutoLoop(index);
      });
    });

    // Initialize
    resetProgressBars();
    showImageAndHighlightButton(0);
    startAutoLoop(0);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "ProfessionalService"
  ],
  "@id": "https://www.cobwebgames.com/#organization",
  "name": "Cobweb Games",
  "alternateName": "Cobweb Games Studio",
  "url": "https://www.cobwebgames.com/",
  "logo": "https://www.cobwebgames.com/assets/images/logo.svg",
  "image": "https://www.cobwebgames.com/assets/images/logo.svg",
  "description": "Cobweb Games is a San Francisco-based game development company founded in 2017. The company specializes in end-to-end game development, game art, game animation, AR/VR experiences, Unreal Engine development, and mobile game development for clients worldwide.",
  "telephone": "+1-855-773-1064",
  "email": "support@cobwebgames.com",
  "priceRange": "$$-$$$",
  "foundingDate": "2017",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "580 California Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94104",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.787116,
    "longitude": -122.3976582
  },
  "openingHours": "Mo-Fr 09:30-18:00",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Game Development",
    "Game Art",
    "Game Animation",
    "Mobile Game Development",
    "AR Development",
    "VR Development",
    "Unreal Engine Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Game Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Game Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Game Art"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Game Animation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AR Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VR Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Unreal Engine Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Game Development"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-855-773-1064",
    "contactType": "customer support",
    "email": "support@cobwebgames.com",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/people/Cobweb-Games/61563748882713/",
    "https://www.linkedin.com/company/cobweb-games1",
    "https://www.youtube.com/@cobweb-games",
    "https://www.instagram.com/cobweb.games/",
    "https://www.trustpilot.com/review/cobwebgames.co",
    "https://clutch.co/profile/cobweb-games"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "2",
    "bestRating": "5",
    "worstRating": "1"
  }
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/",
  "url": "https://www.cobwebgames.com/",
  "name": "Home - Cobweb Games",
  "datePublished": "2017-01-01T00:00:00+00:00",
  "dateModified": "2026-07-09T00:00:00+00:00",
  "description": "Cobweb Games is a San Francisco-based game development company specializing in end-to-end game development, game art, game animation, AR/VR development, Unreal Engine development, and mobile game development.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.cobwebgames.com/#website",
    "url": "https://www.cobwebgames.com/",
    "name": "Cobweb Games",
    "description": "Game Development Company",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.cobwebgames.com/?s={search_term_string}"
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": "http://schema.org/True",
        "valueName": "search_term_string"
      }
    }
  }
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "url": "https://www.cobwebgames.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "url": "https://www.cobwebgames.com/about-us"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Game Development",
      "url": "https://www.cobwebgames.com/game-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Game Art",
      "url": "https://www.cobwebgames.com/game-art"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Game Animation",
      "url": "https://www.cobwebgames.com/game-animation"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Contact Us",
      "url": "https://www.cobwebgames.com/contact-us"
    }
  ]
}) }} />
      {/* Hero Section - exact replica of PHP home-banner */}
      <section className={`home-banner d-flex next-image-background-host ${styles.hero}`} >
        <Image className="next-image-background" src="/assets/images/home-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        <Image className="banner-shadow" src="/assets/images/banner-img-shpe.webp" alt="*" width={625} height={751} />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <div className={`content ${styles.heroContent}`}>
                <span className='hero-span'>Cobweb Games</span>
                <h1 className={styles.heroHeading}>Game <b>Development </b>& Art Studio in the USA.</h1>
                <p className={styles.heroDescription}>Bad game studios ship renders. Good ones ship games. We are a USA-based game development company and game art studio for indie developers, AA studios, and gaming brands that need production that actually reaches the end screen. Game art services, game animation, and full-cycle development on Unity and Unreal Engine. Assets built for the build, not the portfolio. Code written for the platform, not the demoo. </p>
                <ul className="btn-wrap d-flex align-items-center">
                  <li>
                    <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                  </li>
                  <li>
                    <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
                  </li>
                </ul>
                <div className="play-btn">
                  <a href="https://youtu.be/MP_LpdaMPLg?si=kWwTNF17qsRtsJns" data-fancybox="iframe">
                    <span className="icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span>Latest Showreel</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`banner-tabs ${styles.heroStats}`}>
                <div className="container-fluid">
                  <div className="banner-heading">
                    <h2 className='text-center mb-5'>One team. One pipeline. Press start.</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-2-4 col-lg-3 col-md-6">
                      <div className="counter-wrap text-center">
                        <div className="wrap">
                          <Counter end={200} duration={3000} />
                          <span className="sign">+</span>
                        </div>
                        <p>Games Shipped </p>
                      </div>
                    </div>
                    <div className="col-lg-2-4 col-lg-3 col-md-6">
                      <div className="counter-wrap text-center">
                        <div className="wrap">
                          <Counter end={50} duration={3000} />
                          <span className="sign">+</span>
                        </div>
                        <p>Studios Partnered</p>
                      </div>
                    </div>
                    <div className="col-lg-2-4 col-lg-3 col-md-6">
                      <div className="counter-wrap text-center">
                        <div className="wrap">
                          <Counter end={12} duration={3000} />
                          <span className="sign">+</span>
                        </div>
                        <p>Platforms Supported</p>
                      </div>
                    </div>
                    <div className="col-lg-2-4 col-lg-3 col-md-6">
                      <div className="counter-wrap text-center">
                        <div className="wrap">
                          <h3>
                            <FaGamepad className="text-white text-xl" /></h3>
                        </div>
                        <p> Unity & Unreal Certified</p>
                      </div>
                    </div>
                    <div className="col-lg-2-4 col-lg-3 col-md-6">
                      <div className="counter-wrap text-center">
                        <div className="wrap">
                          <h3>
                            <FaHandshake className="text-white text-xl" />
                          </h3>
                        </div>
                        <p>Plug-and-Play Partner For Gaming Companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-container">
                <div className="img-wrap" id="img1">
                  <Image className="char-01 lazy"
                    src="/assets/images/banner-char-01.png"
                    alt="*" width={701} height={1028} />
                  <Image className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" width={1440} height={810} unoptimized />
                </div>
                <div className="img-wrap" id="img2">
                  <Image className="char-01 lazy"
                    src="/assets/images/banner-char-02.webp"
                    alt="*" width={701} height={1028} />
                  <Image className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" width={1440} height={810} unoptimized />
                </div>
                <div className="img-wrap" id="img3">
                  <Image className="char-01 lazy"
                    src="/assets/images/banner-char-03.webp"
                    alt="*" width={701} height={1028} />
                  <Image className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" width={1440} height={810} unoptimized />
                </div>
                <div className="img-wrap" id="img4">
                  <Image className="char-01 lazy"
                    src="/assets/images/banner-char-04.webp"
                    alt="*" width={701} height={1028} />
                  <Image className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" width={1440} height={810} unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstructed Homepage Sections */}
      <AboutContent/>
      <WhatIsDifferent />
      <CtaOne />
      <GameArt />
      <GameDevelopment />
      <GameAnimation />
      <Platform />

      {/* Marquee Banner */}
      <div className="home-tech py-4 bg-purple-600 text-white font-bold text-xl overflow-hidden flex whitespace-nowrap">
        <span className="mx-4">Technologies * Technologies * Technologies * Technologies *</span>
        <span className="mx-4">Technologies * Technologies * Technologies * Technologies *</span>
      </div>

      <Technologies />
      <Reviews />
      <CtaTwo />
      <Faqs />
      <FooterForm />
    </>
  );
}
