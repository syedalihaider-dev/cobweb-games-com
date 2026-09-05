'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
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
// GAME PROTOTYPING - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const gamePrototypingPortfolioImages = [
  {
    id: 'proto-port-1',
    src: '/assets/images/prototyping-services/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Core Loop Prototype',
    title: 'Core Loop Prototype',
    description: 'Nine-day build that saved an eighteen-month production budget.',
    heightClass: 'h-1'
  },
  {
    id: 'proto-port-2',
    src: '/assets/images/prototyping-services/port-02.webp',
    width: 301,
    height: 242,
    alt: 'Vertical Slice Development',
    title: 'Vertical Slice Development',
    description: 'Six-week polished slice that closed a Series A funding round.',
    heightClass: 'h-2'
  },
  {
    id: 'proto-port-3',
    src: '/assets/images/prototyping-services/port-03.webp',
    width: 301,
    height: 242,
    alt: 'Multiplayer Prototype',
    title: 'Multiplayer Prototype',
    description: 'Three-week networked prototype that greenlit a flagship mode.',
    heightClass: 'h-2'
  },
  {
    id: 'proto-port-4',
    src: '/assets/images/prototyping-services/port-04.webp',
    width: 267,
    height: 331,
    alt: 'Mobile Prototype',
    title: 'Mobile Prototype',
    description: 'Touch-first core loop tested on mid-range hardware.',
    heightClass: 'h-3'
  },
  {
    id: 'proto-port-5',
    src: '/assets/images/prototyping-services/port-05.webp',
    width: 267,
    height: 331,
    alt: 'VR Prototype',
    title: 'VR Prototype',
    description: 'Comfort and presence testing for immersive mechanics.',
    heightClass: 'h-3'
  },
  {
    id: 'proto-port-6',
    src: '/assets/images/prototyping-services/port-06.webp',
    width: 248,
    height: 505,
    alt: 'MVP Development',
    title: 'MVP Development',
    description: 'Minimum viable product built to generate real player reactions.',
    heightClass: 'h-1'
  },
  {
    id: 'proto-port-7',
    src: '/assets/images/prototyping-services/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// GAME PROTOTYPING - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const gamePrototypingData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>Game Prototyping</b> Services?",
    slides: [
      {
        title: "Validate Ideas Before Full Production",
        description: "A prototype costs a fraction of a production budget and tells you the thing a production budget cannot buy back: whether the idea was good in the first place."
      },
      {
        title: "Reduce Development Risks",
        description: "Every risky assumption in your design document gets tested at prototype scale, where being wrong costs weeks, not the risk being discovered at production scale, where being wrong costs the project."
      },
      {
        title: "Accelerate Investor & Publisher Pitches",
        description: "A playable build closes more funding conversations than a pitch deck ever will. Investors and publishers have seen a thousand slide decks. A prototype they can actually play is a different conversation entirely."
      },
      {
        title: "Rapid Development Cycles",
        description: "Prototyping moves fast because it is supposed to. We are not precious about throwing away a build that answered its question and served its purpose."
      },
      {
        title: "Experienced Prototype Developers",
        description: "Our prototyping team has built more prototypes than most studios have built games. They know which corners are safe to cut and which ones will silently invalidate your test if you cut them."
      },
      {
        title: "Cross-Platform Expertise",
        description: "Mobile, PC, console, and VR prototyping under one roof, so the platform decision does not force a studio switch mid-validation."
      },
      {
        title: "Agile Collaboration",
        description: "Tight feedback loops with your internal team throughout, because the point of a prototype is the conversation it generates, not a build delivered into silence."
      },
      {
        title: "Scalable Development Teams",
        description: "One developer for a two-week core loop test. A full squad for a publisher-facing vertical slice. The team size matches the question being asked."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Professional <b>Game Prototyping</b>",
    slides: [
      {
        title: "Test Gameplay Before Production",
        description: "Know if the game is fun before you have hired the team that will spend two years finding out the hard way."
      },
      {
        title: "Improve Player Experience Early",
        description: "Fix a broken core loop when it is a day of code, not a live game update players are already angry about."
      },
      {
        title: "Validate Core Mechanics",
        description: "Confirm the central hook actually works before every other system in the game gets built to depend on it."
      },
      {
        title: "Minimize Development Costs",
        description: "A killed prototype is a saved production budget. This is the cheapest insurance a game project can buy."
      },
      {
        title: "Gather Early User Feedback",
        description: "Real player reactions before the game design has calcified into something too expensive to change."
      },
      {
        title: "Speed Up Production Planning",
        description: "A validated prototype produces a production plan grounded in evidence instead of optimism."
      },
      {
        title: "Attract Publishers & Investors",
        description: "A playable demo is the strongest fundraising asset in games. It is proof, not a promise."
      },
      {
        title: "Build a Stronger Development Roadmap",
        description: "Prototype learnings become the roadmap's foundation instead of assumptions nobody stress-tested."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our Game <b>Prototyping Process</b>",
    slides: [
      {
        title: "Game Idea Discovery",
        description: "The concept, the core question, and what a successful prototype needs to prove are established before any build begins."
      },
      {
        title: "Requirement Analysis",
        description: "Platform, scope, timeline, and technical constraints locked so the prototype answers the right question, not an easier one."
      },
      {
        title: "Prototype Planning",
        description: "Scope document defining exactly what is in the build and what is deliberately left out."
      },
      {
        title: "Core Gameplay Development",
        description: "The mechanic, built and playable, as fast as honest engineering allows."
      },
      {
        title: "Art & UI Integration",
        description: "Placeholder or light-pass visuals, only to the degree the test actually requires them."
      },
      {
        title: "Internal Playtesting",
        description: "Structured playtesting with documented findings, not just a group of developers nodding at their own work."
      },
      {
        title: "Prototype Refinement",
        description: "Iteration on what the playtesting revealed, with each pass measurably improving the loop."
      },
      {
        title: "Final Prototype Delivery",
        description: "The build, the findings, and an honest recommendation on what to do next, including if that recommendation is to stop."
      }
    ]
  }
};

// ============================================================
// GAME PROTOTYPING - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const gamePrototypingTeam = [
  {
    id: 'proto-team-1',
    title: 'Game Designers',
    number: '01',
    description: 'Systems thinkers who know which mechanic to test first and which questions a prototype cannot actually answer.'
  },
  {
    id: 'proto-team-2',
    title: 'Gameplay Programmers',
    number: '02',
    description: 'Fast, disciplined engineers who build for iteration speed without producing code nobody can build on later.'
  },
  {
    id: 'proto-team-3',
    title: 'Technical Artists',
    number: '03',
    description: 'Pipeline specialists who get just enough visual fidelity into a prototype to make the test honest.'
  },
  {
    id: 'proto-team-4',
    title: 'UI/UX Designers',
    number: '04',
    description: 'Interface designers who prototype flows players can actually navigate, not wireframes that only make sense in a meeting.'
  },
  {
    id: 'proto-team-5',
    title: 'QA Engineers',
    number: '05',
    description: 'Testers who separate "this is a prototype bug" from "this mechanic is fundamentally broken," which is a harder distinction than it sounds.'
  },
  {
    id: 'proto-team-6',
    title: 'Producers',
    number: '06',
    description: 'Scope guardians who keep a two-week prototype from quietly turning into a six-month production.'
  }
];

// ============================================================
// GAME PROTOTYPING - REVIEWS (passed as props to Reviews)
// ============================================================
const gamePrototypingReviews = [
  {
    id: 'proto-review-1',
    text: "We had a design document we were convinced was a hit. Cobweb built the core loop in nine days. It was not a hit. It was fine. That prototype saved us from an eighteen-month production on a game that would have been fine, which in this market is a polite word for failed. We pivoted the mechanic based on what the prototype revealed, and the second version tested significantly better.",
    name: 'Damian',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'proto-review-2',
    text: "We needed a vertical slice to close our Series A. Cobweb delivered a fifteen-minute polished slice in six weeks that represented the full game honestly, not a fake demo that would embarrass us at production scale. The investors played it in the room. We closed the round two weeks later.",
    name: 'Walter',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'proto-review-3',
    text: "Our publisher wanted proof our proposed multiplayer mode would actually feel good before greenlighting the budget. Cobweb built a networked prototype in three weeks that tested real latency conditions, not a same-room demo. The publisher greenlit based on that build. It is now our flagship mode.",
    name: 'Kevin',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// GAME PROTOTYPING - FAQS (passed as props to Faqs)
// ============================================================
const gamePrototypingFaqs = [
  {
    id: 1,
    question: 'What is the difference between a game prototype and a vertical slice?',
    answer: 'A prototype tests whether a mechanic or concept works, usually with placeholder art and minimal polish. A vertical slice is a fully polished, representative section of the finished game, built to show what the final product will actually look and feel like. Prototypes answer "is this fun." Vertical slices answer "is this real."'
  },
  {
    id: 2,
    question: 'How much does game prototyping cost?',
    answer: 'A focused core mechanic prototype typically starts at $5,000 to $15,000 depending on platform and scope. A full vertical slice for publisher or investor pitching runs $25,000 to $75,000 depending on length and fidelity. Itemized quotes within 48 hours of a brief.'
  },
  {
    id: 3,
    question: 'Can you build a prototype from my game design document (GDD)?',
    answer: 'Yes. We review the GDD, identify the highest-risk assumptions worth testing first, and scope a prototype around answering those specifically rather than trying to build the entire document at once.'
  },
  {
    id: 4,
    question: 'Can you prototype multiplayer games?',
    answer: 'Yes. Networked prototypes tested against real latency conditions, not a same-room LAN test that hides the actual problems multiplayer games run into.'
  },
  {
    id: 5,
    question: 'Do I own the prototype and source code after delivery?',
    answer: 'Yes. Full IP ownership of the prototype, its code, and its assets transfers to you on final payment. We retain no rights to reuse or reference the work.'
  },
  {
    id: 6,
    question: 'Can a prototype be turned into a full game?',
    answer: 'Yes. Prototype code is often production-adjacent by design, and many of our prototyping engagements convert directly into full development contracts with the same team that built the original.'
  },
  {
    id: 7,
    question: 'Which game engines are best for prototyping?',
    answer: 'Unity for most fast-iteration prototypes given its rapid build cycle. Unreal when visual fidelity is part of what the prototype needs to prove. Godot for lightweight 2D concepts. We recommend the engine that answers your question fastest.'
  },
  {
    id: 8,
    question: 'How many gameplay mechanics should a prototype include?',
    answer: 'As few as possible. A prototype testing one mechanic in isolation produces a clean, trustworthy answer. A prototype testing five mechanics at once produces a muddy result where you cannot tell which mechanic caused the reaction.'
  },
  {
    id: 9,
    question: 'Can you help prepare a prototype for publishers or investors?',
    answer: 'Yes. Publisher and investor-facing prototypes are scoped differently from internal validation prototypes, with the polish and pacing calibrated to hold an external audience\'s attention in a pitch meeting.'
  },
  {
    id: 10,
    question: 'Do you sign an NDA before discussing game ideas?',
    answer: 'Yes, always, before any concept details are shared. Signed before the first substantive conversation, not after we have already heard the pitch.'
  },
  {
    id: 11,
    question: 'What deliverables are included in a game prototype?',
    answer: 'The playable build, source files, a playtesting findings report, and an honest recommendation on next steps. What is included beyond that is scoped to the specific brief.'
  },
  {
    id: 12,
    question: 'How many prototype iterations are included?',
    answer: 'Two structured iteration rounds based on playtesting findings are standard. Additional iteration rounds are scoped and priced if the findings suggest the concept needs more testing before a decision can be made responsibly.'
  },
  {
    id: 13,
    question: 'Do you provide playtesting and user feedback reports?',
    answer: 'Yes. Structured internal playtesting with documented findings is a standard part of every prototype engagement, not an optional add-on.'
  },
  {
    id: 14,
    question: 'What\'s the difference between an MVP and a game prototype?',
    answer: 'A prototype tests whether an idea works, often disposably. An MVP is a minimum but real, shippable version of the product, built to be shown to actual players or investors and potentially to become the foundation of the live product. Prototypes are disposable by design. MVPs are not.'
  }
];

// ============================================================
// GAME PROTOTYPING - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const gamePrototypingTechnologies = [
  {
    id: 'tech-1',
    name: 'Unity',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Fast-iteration prototyping for mobile, PC, and cross-platform concepts.'
  },
  {
    id: 'tech-2',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'High-fidelity vertical slices and prototypes where visual quality is part of the pitch.'
  },
  {
    id: 'tech-3',
    name: 'Godot Engine',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Lightweight, fast prototyping for 2D and small-scope concepts.'
  },
  {
    id: 'tech-4',
    name: 'C#',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Unity gameplay logic and rapid systems iteration.'
  },
  {
    id: 'tech-5',
    name: 'C++',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Performance-critical Unreal systems where the prototype needs to prove technical feasibility.'
  },
  {
    id: 'tech-6',
    name: 'Blueprint Visual Scripting',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Fast Unreal prototyping without waiting on a full compile cycle for every iteration.'
  },
  {
    id: 'tech-7',
    name: 'Git',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Clean iteration history so you can see exactly how the prototype evolved and why.'
  },
  {
    id: 'tech-8',
    name: 'Jira & Agile Tools',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Transparent sprint tracking so you always know what has been tested and what has not.'
  }
];

// ============================================================
// GAME PROTOTYPING - CTA DATA
// ============================================================
const gamePrototypingCtaData = {
  heading: 'Hire a Game <br/> <b class="c-green">Prototyping</b> Studio',
  headingHighlight: 'Prototyping',
  description: 'Tell us the core loop and the question you actually need answered. We will tell you what it takes to build a prototype that answers it honestly. Send the concept. Itemized scope and estimate within 48 hours. NDA signed before the pitch, not after. The fastest way to find out if your game idea is good is to stop imagining it and start playing it.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function GamePrototyping() {
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
    <div className="game-prototyping-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/game-prototyping",
  "url": "https://www.cobwebgames.com/game-prototyping",
  "name": "Game Prototyping Services for Faster Game Validation",
  "description": "Game prototyping services that answer whether your game is fun before you spend a production budget finding out. Cobweb Games builds playable prototypes, vertical slices, and MVPs for studios, publishers, and startups.",
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
      "name": "What is the difference between a game prototype and a vertical slice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prototype tests whether a mechanic or concept works, usually with placeholder art and minimal polish. A vertical slice is a fully polished, representative section of the finished game, built to show what the final product will actually look and feel like. Prototypes answer is this fun. Vertical slices answer is this real."
      }
    },
    {
      "@type": "Question",
      "name": "How much does game prototyping cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A focused core mechanic prototype typically starts at $5,000 to $15,000 depending on platform and scope. A full vertical slice for publisher or investor pitching runs $25,000 to $75,000 depending on length and fidelity. Itemized quotes within 48 hours of a brief."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a prototype from my game design document (GDD)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We review the GDD, identify the highest-risk assumptions worth testing first, and scope a prototype around answering those specifically rather than trying to build the entire document at once."
      }
    },
    {
      "@type": "Question",
      "name": "Can you prototype multiplayer games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Networked prototypes tested against real latency conditions, not a same-room LAN test that hides the actual problems multiplayer games run into."
      }
    },
    {
      "@type": "Question",
      "name": "Do I own the prototype and source code after delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Full IP ownership of the prototype, its code, and its assets transfers to you on final payment. We retain no rights to reuse or reference the work."
      }
    },
    {
      "@type": "Question",
      "name": "Can a prototype be turned into a full game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Prototype code is often production-adjacent by design, and many of our prototyping engagements convert directly into full development contracts with the same team that built the original."
      }
    },
    {
      "@type": "Question",
      "name": "Which game engines are best for prototyping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unity for most fast-iteration prototypes given its rapid build cycle. Unreal when visual fidelity is part of what the prototype needs to prove. Godot for lightweight 2D concepts. We recommend the engine that answers your question fastest."
      }
    },
    {
      "@type": "Question",
      "name": "How many gameplay mechanics should a prototype include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As few as possible. A prototype testing one mechanic in isolation produces a clean, trustworthy answer. A prototype testing five mechanics at once produces a muddy result where you cannot tell which mechanic caused the reaction."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help prepare a prototype for publishers or investors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Publisher and investor-facing prototypes are scoped differently from internal validation prototypes, with the polish and pacing calibrated to hold an external audience's attention in a pitch meeting."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sign an NDA before discussing game ideas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, always, before any concept details are shared. Signed before the first substantive conversation, not after we have already heard the pitch."
      }
    },
    {
      "@type": "Question",
      "name": "What deliverables are included in a game prototype?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The playable build, source files, a playtesting findings report, and an honest recommendation on next steps. What is included beyond that is scoped to the specific brief."
      }
    },
    {
      "@type": "Question",
      "name": "How many prototype iterations are included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two structured iteration rounds based on playtesting findings are standard. Additional iteration rounds are scoped and priced if the findings suggest the concept needs more testing before a decision can be made responsibly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide playtesting and user feedback reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Structured internal playtesting with documented findings is a standard part of every prototype engagement, not an optional add-on."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an MVP and a game prototype?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prototype tests whether an idea works, often disposably. An MVP is a minimum but real, shippable version of the product, built to be shown to actual players or investors and potentially to become the foundation of the live product. Prototypes are disposable by design. MVPs are not."
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
      "name": "Game Prototyping",
      "item": "https://www.cobwebgames.com/game-prototyping"
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
              <h5>Game Prototyping</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Game Prototyping Services <br/> Test, Debug, Build &amp; <b>Repeat</b>` }} />
              <p>Most cancelled games were not cancelled because the team could not build them. They were cancelled because somebody finally played the core loop after eighteen months of production and discovered it was not fun. That discovery cost a full budget and a full team&apos;s worth of time to arrive at something a two-week prototype would have told them for free. Game prototyping exists to answer the one question that actually determines whether a project should exist: is the core loop good, on its own, with nothing dressed up around it? Everything else, the art, the narrative, the monetization, is a multiplier on that answer. Multiply a good loop, and you get a hit. Multiply a bad one, and you get an expensive, polished bad game. We build gameplay prototypes, proof of concepts, vertical slices, and MVPs that answer whether the game is fun before the game is a mortgage. Fast, honest, and built to be thrown away if the answer is no, which is sometimes the most valuable thing a prototype can tell you.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/prototyping-services/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Game Prototyping <b class="c-green">Services</b>` }} />
              <p>Every prototype format, matched to the specific question it needs to answer.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_&_art_design_solutions.webp" alt="*" width={122} height={131} />
                  <h3>Gameplay Prototype Development</h3>
                </div>
                <p>Core loop builds stripped of everything that is not the loop. No final art, no narrative, no polish. Just the mechanic, playable, so you can feel whether it works before deciding whether it deserves the rest of the budget.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_mechanics.webp" alt="*" width={122} height={131} />
                  <h3>Proof of Concept (PoC) Development</h3>
                </div>
                <p>Technical proof of concept builds that answer a specific feasibility question: can this mechanic actually run at scale, does this rendering approach hold the frame budget, does this networking model survive real latency. Narrow scope, specific answer.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/multi_platform_prototype.webp" alt="*" width={122} height={131} />
                  <h3>Vertical Slice Development</h3>
                </div>
                <p>A fully polished, representative slice of the finished game: final art, final feel, final production values, in a controlled scope. The document that convinces a publisher, an investor, or your own leadership that the full game is real.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_performance_testing.webp" alt="*" width={122} height={131} />
                  <h3>Core Mechanics Prototyping</h3>
                </div>
                <p>Individual mechanic testing before they get bolted together into a system. The dodge roll gets tested alone before it gets tested against the combat system it needs to feel good inside of.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/output_of_prototype.webp" alt="*" width={122} height={131} />
                  <h3>Rapid Prototype Development</h3>
                </div>
                <p>Compressed-timeline prototyping for teams that need an answer this week, not next quarter. Speed without skipping the parts that make the answer trustworthy.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_art_prototyping.webp" alt="*" width={122} height={131} />
                  <h3>MVP Game Development</h3>
                </div>
                <p>Minimum viable product builds with the smallest feature set that still represents the actual game, built to be shown to real players or real investors and generate a real reaction.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_&_art_design_solutions.webp" alt="*" width={122} height={131} />
                  <h3>Feature Validation Prototypes</h3>
                </div>
                <p>Focused builds that test one proposed feature in isolation before it gets greenlit into the main production roadmap. Cheaper to kill a feature at prototype stage than at sprint fourteen.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_mechanics.webp" alt="*" width={122} height={131} />
                  <h3>Multiplayer Prototype Development</h3>
                </div>
                <p>Networked prototypes that test the actual multiplayer feel, not just the single-player mechanic with a theoretical multiplayer layer imagined on top of it. Latency, sync, and matchmaking behavior tested early, because multiplayer problems found late are rewrite-sized problems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/multi_platform_prototype.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Prototype Design</h3>
                </div>
                <p>Interactive UI and UX prototypes that test navigation flow and information clarity before a single final asset is produced. Wireframes you can actually click through, not slides you have to imagine clicking through.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_performance_testing.webp" alt="*" width={122} height={131} />
                  <h3>Playable Demo Development</h3>
                </div>
                <p>Polished, distributable demo builds for showcases, press, Steam Next Fest, or publisher meetings. Built to represent the game honestly to an external audience, not just to your internal team.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/output_of_prototype.webp" alt="*" width={122} height={131} />
                  <h3>Prototype Optimization &amp; Iteration</h3>
                </div>
                <p>Iterative refinement of an existing prototype based on playtest data, not just aesthetic notes. The second version of a prototype should be measurably more fun than the first, and we can show you the data that proves it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/prototyping-services/game_art_prototyping.webp" alt="*" width={122} height={131} />
                  <h3>Technical Feasibility Assessment</h3>
                </div>
                <p>An honest engineering assessment of whether your concept is buildable at your stated budget, platform, and timeline, before you commit to any of the three. Sometimes the most valuable deliverable is the one that tells you to change the plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={gamePrototypingCtaData.heading}
        description={gamePrototypingCtaData.description}
        imageSrc={gamePrototypingCtaData.imageSrc}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gamePrototypingData.section1.slides}
        smHeading={gamePrototypingData.section1.smHeading}
        mainHeading={gamePrototypingData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-proto-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gamePrototypingData.section2.slides}
        smHeading={gamePrototypingData.section2.smHeading}
        mainHeading={gamePrototypingData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-proto-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gamePrototypingData.section3.slides}
        smHeading={gamePrototypingData.section3.smHeading}
        mainHeading={gamePrototypingData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-proto-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Portfolio"
        heading="Our Game Prototype <b class='c-green'>Portfolio</b>"
        images={gamePrototypingPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our Game <b class='c-green'>Prototyping Team</b>"
        teamMembers={gamePrototypingTeam}
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
      <TechnologiesNew techItems={gamePrototypingTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Studios, Publishers &amp; Startups"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={gamePrototypingReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={gamePrototypingFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a Game <b class='c-green'>Prototyping</b> Studio"
        description="Tell us the core loop and the question you actually need answered. We will tell you what it takes to build a prototype that answers it honestly."
        formTitle="Validate Your Game Idea"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

