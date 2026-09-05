'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import TechnologiesNew from '../../components/TechnologiesNew';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import { WhyChooseUsSection } from '@/components/WhyChooseAbout';
import TwoDArtTeam from '@/components/TwoDteam';
import ThreeDEnvironmentPortfolio from '@/components/TechnologiesEnviroment';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// ============================================================
// MOBILE GAME - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const mobileGamePortfolioImages = [
  {
    id: 'mobile-port-1',
    src: '/assets/images/mobile-game/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Mobile RPG Project',
    title: 'Mobile RPG Project',
    description: 'Mid-core RPG with D7 retention from 9% to 17% before global launch.',
    heightClass: 'h-1'
  },
  {
    id: 'mobile-port-2',
    src: '/assets/images/mobile-game/port-02.webp',
    width: 570,
    height: 331,
    alt: 'Mobile Strategy Game',
    title: 'Mobile Strategy Game',
    description: 'PC strategy title ported to mobile now outearning the PC original.',
    heightClass: 'h-2'
  },
  {
    id: 'mobile-port-3',
    src: '/assets/images/mobile-game/port-03.webp',
    width: 267,
    height: 331,
    alt: 'Mobile Casual Game',
    title: 'Mobile Casual Game',
    description: 'Hyper-casual title with rapid prototype-test-kill-or-scale loop.',
    heightClass: 'h-2'
  },
  {
    id: 'mobile-port-4',
    src: '/assets/images/mobile-game/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Mobile Multiplayer Game',
    title: 'Mobile Multiplayer Game',
    description: 'Real-time multiplayer with matchmaking and server infrastructure.',
    heightClass: 'h-3'
  },
  {
    id: 'mobile-port-5',
    src: '/assets/images/mobile-game/port-05.webp',
    width: 301,
    height: 242,
    alt: 'Mobile Action Game',
    title: 'Mobile Action Game',
    description: 'Responsive touch controls and combat feedback tuned for latency.',
    heightClass: 'h-3'
  },
  {
    id: 'mobile-port-6',
    src: '/assets/images/mobile-game/port-06.webp',
    width: 248,
    height: 505,
    alt: 'Mobile Puzzle Game',
    title: 'Mobile Puzzle Game',
    description: 'Difficulty curves engineered from player data for maximum retention.',
    heightClass: 'h-1'
  },
  {
    id: 'mobile-port-7',
    src: '/assets/images/mobile-game/port-07.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// MOBILE GAME - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const mobileGameData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Cobweb Games for <b>Mobile Game Development</b>?",
    slides: [
      {
        title: "Experienced Mobile Game Developers",
        description: "Our team has shipped mobile games. They have watched a build fail certification, watched a soft launch return brutal retention data, and learned what to build differently. That experience is priced into every project as a discount, not a surcharge."
      },
      {
        title: "Cross-Platform Expertise",
        description: "iOS and Android treated as two platforms with two rulebooks, not one platform with an export button. Store requirements, rendering differences, and input behavior handled per-platform."
      },
      {
        title: "Scalable Development Teams",
        description: "Production-heavy phases get more hands. Quiet phases do not bill for idle ones. Team size follows the milestone plan."
      },
      {
        title: "Agile Development Process",
        description: "Two-week sprints, playable builds at every milestone, and course corrections made when they are cheap instead of when they are catastrophic."
      },
      {
        title: "Performance-First Development",
        description: "Frame budget, memory budget, and build size budget set at design and enforced through production. Optimization is a standing discipline, not a panic sprint before launch."
      },
      {
        title: "Transparent Communication",
        description: "Weekly builds, honest status reports, and problems surfaced when they appear. You will never learn about a slipped milestone from the milestone."
      },
      {
        title: "Long-Term Technical Support",
        description: "OS updates, store policy changes, device launches, and SDK deprecations keep happening after launch. So do we."
      },
      {
        title: "On-Time Project Delivery",
        description: "We commit to dates, not vibes. A milestone plan that cannot survive contact with a calendar was never a plan."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Professional <b>Mobile Game Development</b>",
    slides: [
      {
        title: "Reach Millions of Mobile Players",
        description: "Mobile is the largest gaming platform on earth. A professionally built game is the entry ticket, not a guarantee. We build the ticket properly."
      },
      {
        title: "Faster Time to Market",
        description: "An experienced team with an established pipeline ships months faster than a team learning mobile's failure modes on your budget."
      },
      {
        title: "High-Performance Gameplay",
        description: "Stable frame rates on the median device. Performance is a retention feature; players uninstall stutter."
      },
      {
        title: "Scalable Architecture",
        description: "Backend and client architecture that survives success. The worst launch problem is popularity your infrastructure cannot hold."
      },
      {
        title: "Better Player Retention",
        description: "Onboarding, difficulty tuning, and session design engineered from data. D1, D7, and D30 are design outcomes, not luck."
      },
      {
        title: "Optimized Monetization Systems",
        description: "IAP, ads, and battle pass economies designed with the gameplay, not against it. Monetization that respects players outearns monetization that ambushes them."
      },
      {
        title: "Seamless Cross-Platform Experiences",
        description: "Shared progression and synchronized live content across both stores from one operational pipeline."
      },
      {
        title: "Future-Ready Game Infrastructure",
        description: "Analytics, remote config, and modular content systems that let the live game evolve without client updates for every change."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our Mobile Game <b>Development Process</b>",
    slides: [
      {
        title: "Game Discovery & Planning",
        description: "Concept, audience, market position, monetization model, and technical feasibility established before production spends anything."
      },
      {
        title: "Game Design Documentation",
        description: "Core loop, systems, economy, and content scope in a document specific enough to build from and estimate against."
      },
      {
        title: "UI/UX Design",
        description: "Touch-first interface design for thumb zones, one-handed play, and the screen the player actually holds."
      },
      {
        title: "Game Programming",
        description: "Gameplay systems, backend services, and platform integration built to the performance budget set at design."
      },
      {
        title: "Art & Animation Integration",
        description: "Art pipeline with texture compression, atlas packing, and draw call discipline built in. Assets that fit the device, not just the concept art."
      },
      {
        title: "Quality Assurance & Testing",
        description: "Mobile game testing services on real device labs: functional, performance, compatibility, and compliance testing before either store sees the build."
      },
      {
        title: "Store Submission",
        description: "App Store and Google Play submission handled in scope, with the metadata, ratings, and policy compliance work done before the first rejection can happen."
      },
      {
        title: "LiveOps & Maintenance",
        description: "Post-launch events, updates, economy tuning, and the data-driven iteration loop that live mobile revenue depends on."
      }
    ]
  }
};

// ============================================================
// MOBILE GAME - PLATFORMS (passed as props to Platform)
// ============================================================
const mobileGamePlatforms = [
  {
    title: "Android Smartphones/Tablets",
    description: "The full Android range, from flagship to the budget device with 3GB of RAM that represents an enormous share of the global player base. Tested on hardware, not emulators.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "iOS iPhone/iPad",
    description: "iPhone and iPad development with universal builds, correct aspect-ratio handling across the device range, and App Store submission handled in scope.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Cross-Platform Mobile Experiences",
    description: "Shared codebase, shared backend, cross-platform progression, and matchmaking that lets iOS and Android players exist in the same game world without either side noticing a difference.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// MOBILE GAME - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const mobileGameTeam = [
  {
    id: 'mobile-team-1',
    title: 'Mobile Game Developers',
    number: '01',
    description: 'Unity and Unreal engineers who have shipped to both stores and debugged on real hardware.'
  },
  {
    id: 'mobile-team-2',
    title: 'Game Designers',
    number: '02',
    description: 'Loop, economy, and progression designers who work from retention data, not intuition alone.'
  },
  {
    id: 'mobile-team-3',
    title: 'UI/UX Designers',
    number: '03',
    description: 'Touch interface specialists who design for thumbs and glare, not desktop mockups.'
  },
  {
    id: 'mobile-team-4',
    title: '2D & 3D Artists',
    number: '04',
    description: 'Asset production within mobile budgets: compressed, atlased, and optimized on arrival.'
  },
  {
    id: 'mobile-team-5',
    title: 'QA Engineers',
    number: '05',
    description: 'Device lab testing across the hardware range players actually own.'
  },
  {
    id: 'mobile-team-6',
    title: 'Producers',
    number: '06',
    description: 'Milestone accountability and the single point of contact your project deserves.'
  }
];

// ============================================================
// MOBILE GAME - REVIEWS (passed as props to Reviews)
// ============================================================
const mobileGameReviews = [
  {
    id: 'mobile-review-1',
    text: "We came to Cobweb with a game that ran at 60fps on our test phones and 19fps on our players' phones. They profiled it on a $150 Android device in the first week, found the overdraw problem our team had missed for months, and rebuilt the rendering path. Median-device frame rate tripled. Our one-star reviews about performance stopped within two updates.",
    name: 'Hank Brian',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'mobile-review-2',
    text: "Cobweb built our mid-core RPG from design doc to soft launch in eight months. Every milestone landed on its date. Every build was playable. When our soft launch retention came back weaker than projected, they treated the tuning sprint as part of the job rather than a change order. D7 went from 9% to 17% before global launch.",
    name: 'Katrina Cyrus',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'mobile-review-3',
    text: "We needed our PC strategy title ported to mobile without it feeling like a PC game trapped in a phone. Cobweb redesigned the entire control layer and UI for touch. The mobile version now outearns the PC original, which nobody in our company predicted, including me.",
    name: 'Russell James',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// MOBILE GAME - FAQS (passed as props to Faqs)
// ============================================================
const mobileGameFaqs = [
  {
    id: 1,
    question: 'What mobile game development services do you offer?',
    answer: 'Full-cycle mobile game development: concept, design documentation, UI/UX, programming, art integration, multiplayer infrastructure, QA, store submission, and post-launch LiveOps for iOS and Android. Also porting, optimization of existing games, and dedicated team extensions.'
  },
  {
    id: 2,
    question: 'Do you develop games for Android and iOS?',
    answer: 'Yes. Both platforms, native or cross-platform, with platform-specific optimization and store submission handled in scope. Most projects ship to both stores from a shared codebase.'
  },
  {
    id: 3,
    question: 'Which game engine is best for mobile game development?',
    answer: 'Unity for most mobile projects: mature mobile pipeline, small builds, huge device compatibility. Unreal when the visual target demands it and the device tier list can carry it. Godot for lightweight 2D. We recommend the engine that fits the project, not the one we feel like using.'
  },
  {
    id: 4,
    question: 'How much does mobile game development cost?',
    answer: 'Simple casual game: $25,000 to $80,000. Mid-tier title with custom characters and IAP systems: $80,000 to $250,000. Feature-complete with multiplayer and AAA art: $500,000 plus. Scope drives the number. Itemized quote within 48 hours of a brief.'
  },
  {
    id: 5,
    question: 'How long does it take to develop a mobile game?',
    answer: 'Simple mobile game: three to six months. Mid-tier: eight to eighteen months. The timeline is set by scope and content volume, and we commit to it in the milestone plan.'
  },
  {
    id: 6,
    question: 'Can you develop multiplayer mobile games?',
    answer: 'Yes. Real-time and asynchronous multiplayer with matchmaking, server infrastructure, and anti-cheat. Networking architecture is a week-one design decision, not a week-twenty addition.'
  },
  {
    id: 7,
    question: 'Do you publish games to the App Store and Google Play?',
    answer: 'We handle the full submission process for both stores under your developer accounts: builds, metadata, content ratings, and policy compliance. The game ships under your name and you keep the store relationship.'
  },
  {
    id: 8,
    question: 'Can you update and maintain my mobile game after launch?',
    answer: 'Yes. LiveOps retainers cover content updates, events, economy tuning, OS compatibility updates, and bug fixes. Structure it before launch, not after.'
  },
  {
    id: 9,
    question: 'Do you integrate in-app purchases and ads?',
    answer: 'Yes. StoreKit and Google Play Billing, ad mediation, rewarded video, and battle pass systems, designed into the game economy rather than duct-taped onto it.'
  },
  {
    id: 10,
    question: 'Will I own the game source code and assets?',
    answer: 'Yes. Full IP ownership of all code and assets transfers to you on final payment. We retain no rights to reference, reuse, or resell your work.'
  },
  {
    id: 11,
    question: 'Can you port my existing game to mobile devices?',
    answer: 'Yes, after a technical audit of the existing codebase. We assess what exists, redesign controls and UI for touch, rebuild the performance budget for mobile hardware, and tell you honestly what the port will take before agreeing to scope.'
  }
];

// ============================================================
// MOBILE GAME - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const mobileGameTechnologies = [
  {
    id: 'tech-1',
    name: 'Unity',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Primary mobile engine. C# gameplay systems, URP rendering, Addressables content delivery.'
  },
  {
    id: 'tech-2',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'High-fidelity mobile projects where the visual target justifies the footprint.'
  },
  {
    id: 'tech-3',
    name: 'Godot',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Lightweight 2D and casual projects where engine overhead is the enemy.'
  },
  {
    id: 'tech-4',
    name: 'C#',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Gameplay logic, tooling, and backend services across the Unity stack.'
  },
  {
    id: 'tech-5',
    name: 'C++',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Unreal development and performance-critical native plugins.'
  },
  {
    id: 'tech-6',
    name: 'Kotlin',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Native Android integration, platform services, and store billing.'
  },
  {
    id: 'tech-7',
    name: 'Swift',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Native iOS integration, StoreKit, and Apple platform services.'
  },
  {
    id: 'tech-8',
    name: 'Firebase',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Analytics, remote config, crash reporting, cloud messaging, and the backend spine of live mobile operations.'
  }
];

// ============================================================
// MOBILE GAME - CTA DATA
// ============================================================
const mobileGameCtaData = {
  heading: 'Hire a Mobile Game <b class="c-green">Development</b> Company',
  headingHighlight: 'Development',
  description: 'Tell us the concept, the audience, and the platform. We will tell you what it takes to build and what it costs. Send the brief. Itemized estimate with milestone plan within 48 hours. NDA signed before anything is shared. The store does not care about your idea. It cares about your build. Let\'s make the build undeniable.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function MobileGameDevelopment() {
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
    <div className="mobile-game-development-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/mobile-game-development",
  "url": "https://www.cobwebgames.com/mobile-game-development",
  "name": "Mobile Game Development Services for iOS and Android",
  "description": "Mobile game development services calibrated for the devices players actually own. Cobweb Games builds, optimizes, ships, and maintains iOS and Android games that survive contact with real hardware.",
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
      "name": "What mobile game development services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full-cycle mobile game development: concept, design documentation, UI/UX, programming, art integration, multiplayer infrastructure, QA, store submission, and post-launch LiveOps for iOS and Android. Also porting, optimization of existing games, and dedicated team extensions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you develop games for Android and iOS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both platforms, native or cross-platform, with platform-specific optimization and store submission handled in scope. Most projects ship to both stores from a shared codebase."
      }
    },
    {
      "@type": "Question",
      "name": "Which game engine is best for mobile game development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unity for most mobile projects: mature mobile pipeline, small builds, huge device compatibility. Unreal when the visual target demands it and the device tier list can carry it. Godot for lightweight 2D. We recommend the engine that fits the project, not the one we feel like using."
      }
    },
    {
      "@type": "Question",
      "name": "How much does mobile game development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple casual game: $25,000 to $80,000. Mid-tier title with custom characters and IAP systems: $80,000 to $250,000. Feature-complete with multiplayer and AAA art: $500,000 plus. Scope drives the number. Itemized quote within 48 hours of a brief."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to develop a mobile game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple mobile game: three to six months. Mid-tier: eight to eighteen months. The timeline is set by scope and content volume, and we commit to it in the milestone plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can you develop multiplayer mobile games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Real-time and asynchronous multiplayer with matchmaking, server infrastructure, and anti-cheat. Networking architecture is a week-one design decision, not a week-twenty addition."
      }
    },
    {
      "@type": "Question",
      "name": "Do you publish games to the App Store and Google Play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle the full submission process for both stores under your developer accounts: builds, metadata, content ratings, and policy compliance. The game ships under your name and you keep the store relationship."
      }
    },
    {
      "@type": "Question",
      "name": "Can you update and maintain my mobile game after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LiveOps retainers cover content updates, events, economy tuning, OS compatibility updates, and bug fixes. Structure it before launch, not after."
      }
    },
    {
      "@type": "Question",
      "name": "Do you integrate in-app purchases and ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. StoreKit and Google Play Billing, ad mediation, rewarded video, and battle pass systems, designed into the game economy rather than duct-taped onto it."
      }
    },
    {
      "@type": "Question",
      "name": "Will I own the game source code and assets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Full IP ownership of all code and assets transfers to you on final payment. We retain no rights to reference, reuse, or resell your work."
      }
    },
    {
      "@type": "Question",
      "name": "Can you port my existing game to mobile devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after a technical audit of the existing codebase. We assess what exists, redesign controls and UI for touch, rebuild the performance budget for mobile hardware, and tell you honestly what the port will take before agreeing to scope."
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
      "name": "Mobile Game Development",
      "item": "https://www.cobwebgames.com/mobile-game-development"
    }
  ]
}) }} />
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className="game-banner d-flex relative">
         <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Mobile Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Mobile Game Development Services <br/> Design, Develop, and Dominate in <b>2D</b>` }} />
              <p>Every mobile game ships twice. Once on the dev team&apos;s flagship phones where it runs beautifully, and once on the four-year-old mid-range Android device the median player actually owns, where the frame rate discovers gravity. Most mobile game development companies build for the first launch and apologize for the second. Cobweb Games builds for the second one from the first line of code because that&apos;s where your retention numbers, reviews, and revenue actually live. We provide full-cycle mobile game development services for iOS and Android: custom development, cross-platform builds, multiplayer infrastructure, monetization systems, store submission, and the LiveOps pipeline that keeps a game earning after launch. What are mobile game development services? Everything between &quot;we have an idea&quot; and &quot;we have a game with a player base.&quot; That is the scope. We handle all of it.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/mobile-game/services-bg.webp" alt="*" width={1440} height={814} />
        </div>
      </section>

    
      {/* ============================================================
          SERVICES SECTION - INNER GAME SERVICES
          ============================================================ */}
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Mobile Game Development <b class="c-green">Services</b>` }} />
              <p>The full mobile production stack, from the first design document to the thousandth live update.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" width={81} height={124} />
                  <h3>Custom Mobile Game Development</h3>
                </div>
                <p>Custom mobile game development from original concept through store listing. Not a template reskin with your logo on the splash screen. A game designed for your audience, your monetization model, and the hardware profile of your target market.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" width={117} height={124} />
                  <h3>Android Game Development</h3>
                </div>
                <p>Android game development calibrated for the device fragmentation Android actually ships on. Thousands of hardware configurations, a dozen active OS versions, and GPU drivers of wildly variable honesty. We test against fragmentation rather than pretend it does not exist.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" width={117} height={124} />
                  <h3>iPhone (iOS) Game Development</h3>
                </div>
                <p>iOS game development for the full iPhone and iPad hardware range, built to Apple&apos;s submission requirements from the start rather than discovering them at review. Metal rendering, correct safe-area handling, and App Store guidelines treated as a build spec, not a surprise.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" width={117} height={124} />
                  <h3>Cross-Platform Mobile Game Development</h3>
                </div>
                <p>One codebase, both stores, no platform feeling like the afterthought. Cross-platform mobile development with platform-specific optimization passes so the iOS build and the Android build both feel native to their hardware.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" width={117} height={124} />
                  <h3>Unity Mobile Game Development</h3>
                </div>
                <p>Unity mobile game development with the draw call discipline, texture compression strategy, and build size management that separates a Unity game that runs on mid-range hardware from one that thermal-throttles in the tutorial.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-06.webp" alt="*" width={117} height={124} />
                  <h3>Unreal Engine Mobile Game Development</h3>
                </div>
                <p>Unreal Engine mobile development for projects where the visual ceiling justifies the engine weight. Scalability settings configured for the actual device tier list, not the marketing screenshots.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" width={81} height={124} />
                  <h3>Multiplayer Mobile Game Development</h3>
                </div>
                <p>Multiplayer mobile games with the networking architecture decided in week one, not bolted on in week twenty. Matchmaking, sync models, and server infrastructure designed around mobile network reality: packet loss, connection swaps, and the player who goes into a tunnel mid-match.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" width={117} height={124} />
                  <h3>Hyper-Casual Game Development</h3>
                </div>
                <p>Hyper-casual development with the rapid prototype-test-kill-or-scale loop the genre economics demand. The core loop is validated with real CPI and retention data before full production spends a dollar it should not.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" width={117} height={124} />
                  <h3>Casual &amp; Mid-Core Game Development</h3>
                </div>
                <p>Casual and mid-core titles with the meta systems, progression depth, and content cadence that turn a download into a 90-day player. This is where LiveOps planning starts at design, not at launch.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" width={117} height={124} />
                  <h3>LiveOps &amp; Post-Launch Support</h3>
                </div>
                <p>Events, seasons, content drops, A/B tests, and the economy tuning that live mobile games run on. Launch is the start of the revenue curve, not the end of development. We build the pipeline that feeds it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" width={117} height={124} />
                  <h3>Mobile Game Optimization</h3>
                </div>
                <p>Performance optimization for games that already exist and already struggle. Frame rate, memory, load times, battery drain, and build size, profiled on real devices and fixed at the cause, not the symptom.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-06.webp" alt="*" width={117} height={124} />
                  <h3>Mobile Game Porting</h3>
                </div>
                <p>PC and console titles ported to mobile with the control scheme redesigned for touch, the UI rebuilt for 6-inch screens, and the performance budget rebuilt for mobile silicon. A port that plays like a port is a failed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={mobileGameCtaData.heading}
        description={mobileGameCtaData.description}
        imageSrc={mobileGameCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Platforms We "
        highlightText="Develop"
        subheading=" For"
        platforms={mobileGamePlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={mobileGameData.section1.slides}
        smHeading={mobileGameData.section1.smHeading}
        mainHeading={mobileGameData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-mobile-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={mobileGameData.section2.slides}
        smHeading={mobileGameData.section2.smHeading}
        mainHeading={mobileGameData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-mobile-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={mobileGameData.section3.slides}
        smHeading={mobileGameData.section3.smHeading}
        mainHeading={mobileGameData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-mobile-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Portfolio"
        heading="Mobile Game Development <b class='c-green'>Portfolio</b>"
        images={mobileGamePortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our Mobile Game <b class='c-green'>Development Team</b>"
        teamMembers={mobileGameTeam}
        imageSrc="/assets/images/mens-charc.gif"
      />

      {/* ============================================================
          MARQUEE
          ============================================================ */}
      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      {/* ============================================================
          TECHNOLOGIES SECTION
          ============================================================ */}
      <TechnologiesNew techItems={mobileGameTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios &amp; Global Brands"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={mobileGameReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={mobileGameFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a Mobile Game <b class='c-green'>Development</b> Company"
        description="Tell us the concept, the audience, and the platform. We will tell you what it takes to build and what it costs."
        formTitle="Discuss Your Mobile Game Idea"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

