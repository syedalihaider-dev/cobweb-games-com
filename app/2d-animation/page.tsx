'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

export default function Page2dAnimation() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
          ]
        });
      } else {
        timer = setTimeout(initSlick, 100);
      }
    };
    initSlick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="2d-animation-page">
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/2d-animation",
  "url": "https://www.cobwebgames.com/2d-animation",
  "name": "2D Animation - Cobweb Games",
  "description": "Cobweb Games provides professional 2D animation services for games, including 2D character animation, 2D environment animation, game animation cycles, cutscenes, and other animated game content.",
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
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much budget do I need to build a mobile game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple casual mobile game: $25,000 to $80,000. Mid-tier mobile title with custom characters and IAP systems: $80,000 to $250,000. Feature-complete with multiplayer and AAA art: $500,000 plus. Scope drives the number."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a game from concept to launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple mobile game: three to six months. Mid-tier mobile or PC: eight to eighteen months. VR or significant IP development: twelve to thirty-six months. The timeline is determined by the scope and content volume."
      }
    },
    {
      "@type": "Question",
      "name": "I have a game idea. What is the next step?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A discovery session that converts the idea into a production brief: what the game is, who it is for, which platform it targets, and what the core loop is. From the brief comes a scope estimate and a milestone plan."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do you develop games for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile (iOS and Android), PC, VR (Oculus, HTC Vive, PS VR), browser, and web3 platforms. Platform selection is confirmed in discovery based on audience and scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide both game development and game art services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both under one roof. Studios can engage for art only, development only, or both. One point of contact and one pipeline regardless of scope."
      }
    },
    {
      "@type": "Question",
      "name": "What game engines do you use for development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unity and Unreal Engine primarily. Godot for specific project types. We recommend the engine that fits the project, not the one we are most comfortable in."
      }
    },
    {
      "@type": "Question",
      "name": "Can you develop multiplayer and online games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multiplayer architecture, online infrastructure, matchmaking, and live ops back-end. Networking architecture is a week-one design decision, not a week-twenty addition."
      }
    },
    {
      "@type": "Question",
      "name": "How involved will I be during the development process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As involved as the project requires. Milestone-based reviews with documented feedback. Creative decisions that affect game direction require client sign-off. Technical decisions within the established brief we handle independently."
      }
    },
    {
      "@type": "Question",
      "name": "What information do you need before providing a quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Game concept, target platform, core feature list, reference games, target audience, and timeline requirements. The more complete the brief, the more accurate the estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Can you take over an existing game project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after a technical audit of the existing codebase and art pipeline. We provide an honest assessment of what exists and what it takes to ship before agreeing to the scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer post-launch support and maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Post-launch support, live ops content updates, bug fixes, and platform recertification are available as a continuing engagement. Structure it before launch, not after."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose the right game development company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask to see shipped games, not work in progress. Ask how they handle scope changes. Ask who your project manager will be and whether they have experience in your category. A studio that answers these specifically is ready to produce your game."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my game idea is technically feasible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The discovery session answers this. If the concept is not feasible at the stated budget, we say so and propose what is achievable. A project that fails mid-production because feasibility was assumed is expensive for everyone."
      }
    },
    {
      "@type": "Question",
      "name": "How do you protect my game idea and intellectual property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NDAs are signed before any project information is shared. Full IP ownership of all assets and code produced transfers to the client on final payment. We retain no rights to reference or use client work."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after my game launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The launch is the start of the live phase. Player feedback arrives, platform requirements change, and content updates retain the audience. We offer structured post-launch support and ongoing development retainers."
      }
    }
  ]
}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.cobwebgames.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "2D Animation",
      "item": "https://www.cobwebgames.com/2d-animation"
    }
  ]
}) }} />
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>2D Animation</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Fluid Animation for Seamless <b>Gameplay</b>` }} />
              <p>From the pacing of idle animations to perfectly timed combat moves, our focus is on fluidity and
						responsiveness. We eliminate choppiness to avoid breaking immersion.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/2d-game/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>
      
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 2D Animation <b class="c-green">services</b>` }} />
              <p>At Cobweb Games, we offer a wide range of 2D animation services designed to enhance every aspect
						of your gaming project.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/character-animation.webp" alt="*" width={122} height={131} />
                  <h3>Character Animation</h3>
                </div>
                <p>Our character animation services bring your game&apos;s characters to life with fluid, expressive
							movements. We focus on creating animations that reflect each character&apos;s unique personality
							and traits, ensuring they resonate with players.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/environmental-animation.webp" alt="*" width={122} height={131} />
                  <h3>Environmental Animation</h3>
                </div>
                <p>Our environmental animation services make game worlds feel alive and immersive. We animate
							backgrounds, objects, and environmental elements to create dynamic and interactive settings.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/special-effects-animation.webp" alt="*" width={122} height={131} />
                  <h3>Special Effects Animation</h3>
                </div>
                <p>Special effects animation adds a layer of excitement and immersion to your game. Our team
							creates stunning visual effects, from magical spells to explosive actions, enhancing
							gameplay and captivating players.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/ui-animation.webp" alt="*" width={122} height={131} />
                  <h3>UI Animation</h3>
                </div>
                <p>UI animation is crucial in making user interfaces more intuitive and engaging. Our UI
							animation services include animated menus, buttons, and icons that enhance the overall user
							experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/cutscene-animation.webp" alt="*" width={122} height={131} />
                  <h3>Cutscene Animation</h3>
                </div>
                <p>Our cutscene animation services ensure they are visually compelling and emotionally
							impactful. We create high-quality animations that seamlessly blend with your game&apos;s
							narrative, enhancing key plot moments.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/promotional-animation.webp" alt="*" width={122} height={131} />
                  <h3>Promotional Animation</h3>
                </div>
                <p>Promote your game with eye-catching promotional animations. Our promotional animation
							services include trailers, teasers, and social media content that showcase your game&apos;s best
							features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />
      <Platform />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      <Reviews />
      <Faqs />
      <FooterForm />
    </div>
  );
}
