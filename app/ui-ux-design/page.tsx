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

export default function UiUxDesign() {
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
    <div className="ui-ux-design-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/ui-ux-design",
  "url": "https://www.cobwebgames.com/ui-ux-design",
  "name": "UI/UX Design Services",
  "description": "UI/UX Design Services",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.cobwebgames.com#website",
    "url": "https://www.cobwebgames.com",
    "name": "Cobweb Games",
    "description": "Play exciting free online games at Cobweb Games. Discover action, puzzle, arcade, racing, strategy, and many more games to enjoy anytime.",
    "inLanguage": "en-US"
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
      "item": "https://www.cobwebgames.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "UI/UX Design",
      "item": "https://www.cobwebgames.com/ui-ux-design"
    }
  ]
}) }} />
       <section className="game-banner d-flex relative">
       <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>UI/UX Design Services</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Designs Geared Toward Your <b>Players</b>` }} />
              <p>Want players to be hooked? We&apos;ll design an interface that&apos;s as immersive as the game, keeping them playing for hours.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/ui-ux-design/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>

      
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our UI/UX Design <b class="c-green">services</b>` }} />
              <p>Whatever style you want your game to be in and whatever requirements you set before us, we can pull it off with excellent results.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/wireframe.webp" alt="*" width={122} height={131} />
                  <h3>Wireframe and Prototype</h3>
                </div>
                <p>We design and create simple plans and detailed models to visualize and plan future interfaces. Ensuring every element serves a purpose and meets specific goals.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-detailing.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Detailing and Design</h3>
                </div>
                <p>We design intuitive interfaces that are both visually appealing and easy to use. We implement the latest methods and tools to enhance user experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/mobile-game.webp" alt="*" width={122} height={131} />
                  <h3>Mobile Game UI Design</h3>
                </div>
                <p>We craft layouts, controls, and interactions tailored for mobile gaming, optimizing for touch-based usability and seamless navigation on smaller screens.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/video-game.webp" alt="*" width={122} height={131} />
                  <h3>Game App and Video Game UI</h3>
                </div>
                <p>We design immersive interfaces for gaming apps across platforms, focusing on user engagement and fluid interactions from login to in-app functionalities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-design.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Design Consulting</h3>
                </div>
                <p>We provide expert guidance to align design strategies with brand goals. Offering tailored solutions to optimize user satisfaction and business objectives.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/support-maintenance.webp" alt="*" width={122} height={131} />
                  <h3>Support and Maintenance</h3>
                </div>
                <p>After your game has launched, we provide ongoing assistance with keeping it running smoothly, including updates, bug fixes, and performance enhancements to guarantee an engaging gaming experience for players.</p>
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
