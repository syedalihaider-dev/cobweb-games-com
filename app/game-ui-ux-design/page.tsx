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
// GAME UI/UX - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const gameUIUXPortfolioImages = [
  {
    id: 'uiux-port-1',
    src: '/assets/images/ui-ux-design/port-01.webp',
    width: 552,
    height: 505,
    alt: 'HUD Redesign Project',
    title: 'HUD Redesign',
    description: 'Before/after wireframe-to-final comparison for a PC RPG HUD.',
    heightClass: 'h-1'
  },
  {
    id: 'uiux-port-2',
    src: '/assets/images/ui-ux-design/port-02.webp',
    width: 248,
    height: 505,
    alt: 'Mobile UI Project',
    title: 'Mobile Game UI',
    description: 'Thumb-friendly UI design for a Southeast Asian casual mobile game.',
    heightClass: 'h-2'
  },
  {
    id: 'uiux-port-3',
    src: '/assets/images/ui-ux-design/port-03.webp',
    width: 301,
    height: 242,
    alt: 'Inventory System Redesign',
    title: 'Inventory System Redesign',
    description: '40% reduction in player time-in-inventory with 89% action completion rate.',
    heightClass: 'h-2'
  },
  {
    id: 'uiux-port-4',
    src: '/assets/images/ui-ux-design/port-04.webp',
    width: 301,
    height: 242,
    alt: 'VR UI Project',
    title: 'VR UI Design',
    description: 'World-space UI designed for headset interpupillary distance and reading comfort.',
    heightClass: 'h-3'
  },
  {
    id: 'uiux-port-5',
    src: '/assets/images/ui-ux-design/port-05.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 5',
    title: '',
    description: '',
    heightClass: 'h-3'
  },
  {
    id: 'uiux-port-6',
    src: '/assets/images/ui-ux-design/port-06.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 6',
    title: '',
    description: '',
    heightClass: 'h-1'
  },
  {
    id: 'uiux-port-7',
    src: '/assets/images/ui-ux-design/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// GAME UI/UX - WHY CHOOSE US CONTENT (1 section)
// ============================================================
const gameUIUXData = {
  section1: {
    smHeading: "Why Choose Cobweb Games",
    mainHeading: "Why Choose <b>Cobweb Games</b>?",
    slides: [
      {
        title: "Dedicated Partnership Approach",
        description: "We are in the UI/UX design for the lifecycle of the product, not the delivery of a single milestone. The interface decisions we make in wireframing affect the design decisions we make in visual detailing, which affect the implementation decisions the developers make in integration. We stay engaged across all three stages rather than handing off at each one and hoping the intent survives the translation."
      },
      {
        title: "Tailored Solutions for Your Needs",
        description: "A puzzle game HUD and an FPS HUD are solved by completely different UX logic. A mobile casual menu and a PC RPG inventory system have nothing in common beyond the fact that both need to be navigable. We brief every game UI project against the specific genre, platform, and player behavior the game requires, rather than applying a standard approach and calling it tailored."
      },
      {
        title: "Cutting-Edge Technology",
        description: "UI/UX tooling has advanced. Figma for design and prototyping, Unity UI Toolkit and Unreal UMG for implementation, and the integration testing that confirms the designed interface works in the engine before it is built in the engine. We use tools that produce designs the developer can implement accurately, rather than designs that approximate what the engine will actually render."
      },
      {
        title: "Rigorous Quality Standards",
        description: "Every UI/UX deliverable is reviewed against the player-facing requirement it serves, not the design brief it responded to. A UI element that is visually polished but fails to meet the player's information needs has not passed quality review."
      },
      {
        title: "Reliable and Responsive Team",
        description: "UI/UX design is a communication-intensive discipline involving the game designer, the art director, the developer, and the project manager simultaneously. Our team is structured to maintain that communication without becoming the bottleneck in it."
      },
      {
        title: "Industry Expertise You Can Count On",
        description: "Our UI/UX team has shipped game interfaces across mobile, PC, and console. They have seen what happens when the inventory system is designed without consulting the item count the designers planned, when the tutorial overlay is added after the HUD is locked, and when the settings menu is the last thing designed. They do not make those decisions in that order."
      }
    ]
  }
};

// ============================================================
// GAME UI/UX - PLATFORMS (passed as props to Platform)
// ============================================================
const gameUIUXPlatforms = [
  {
    title: "PC Games",
    description: "PC game UI for mouse-and-keyboard navigation with controller support. Screen-distance-appropriate text sizes and the information density that PC players expect from the platform.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "VR Games",
    description: "VR UI is designed for world-space placement and the reading distances that a headset's interpupillary distance determines. UI that does not make the player take the headset off to navigate it.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Mobile Games",
    description: "Mobile UI for touch navigation, one-handed play, and the screen sizes and brightness conditions that mobile players actually use. Designed for the hardware range the target market runs, not the flagship.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// GAME UI/UX - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const gameUIUXTeam = [
  {
    id: 'uiux-team-1',
    title: 'Concept Artists',
    number: '01',
    description: 'Visual style exploration for UI themes and icon systems.'
  },
  {
    id: 'uiux-team-2',
    title: '3D Artists',
    number: '02',
    description: '3D UI elements and dimensional interface components where the brief requires them.'
  },
  {
    id: 'uiux-team-3',
    title: '2D Artists',
    number: '03',
    description: 'Icon sets, button states, illustrated UI elements, and the visual language layer of the interface.'
  },
  {
    id: 'uiux-team-4',
    title: 'Character Artists',
    number: '04',
    description: 'Character-based UI elements: portrait art, avatar systems, and character-driven interface components.'
  },
  {
    id: 'uiux-team-5',
    title: 'Environment Artists',
    number: '05',
    description: 'Diegetic UI elements are embedded in the game environment rather than overlaid on it.'
  },
  {
    id: 'uiux-team-6',
    title: 'UI/UX Designers',
    number: '06',
    description: 'Information architecture, wireframing, UX flow design, visual UI design, and implementation documentation.'
  }
];

// ============================================================
// GAME UI/UX - REVIEWS (passed as props to Reviews)
// ============================================================
const gameUIUXReviews = [
  {
    id: 'uiux-review-1',
    text: "Our HUD design had been iterated on by four different designers over two years of production. It communicated information, but it did not help the player find information. Cobweb audited it in two days and told us specifically what the player could not find and why. The redesigned HUD was approved by our playtest group in the first session. Our previous iterations had never cleared the first playtest. The difference was in the UX thinking, not the visual design.",
    name: 'Karen Roberts',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'uiux-review-2',
    text: "We needed a mobile UI for a title targeting a Southeast Asian casual market where thumb reach zones, data connection speeds affecting load screens, and localization expansion for four languages were all design constraints. Cobweb asked about all three in the first brief session. Studios that had not shipped mobile games in that market asked about visual style first. Cobweb asked about the player. That order of priorities produced a UI that works.",
    name: 'Kevin Fernandes',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'uiux-review-3',
    text: "We redesigned our PC RPG inventory system based on Cobweb's UX audit. The audit identified that players were abandoning item management rather than completing it. The redesigned system reduced player time-in-inventory by 40% and increased inventory-action completion rate from 62% to 89%. The UI is not simpler than the previous one. It is better organized. The data reflects that.",
    name: 'Barbara Creel',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// GAME UI/UX - FAQS (passed as props to Faqs)
// ============================================================
const gameUIUXFaqs = [
  {
    id: 1,
    question: 'What are game UI/UX design services?',
    answer: 'Game UI design covers the visual design of in-game interfaces: HUDs, menus, inventories, and all on-screen elements. Game UX design covers the information architecture, navigation flow, and player behavior systems that determine whether those elements serve the player\'s needs. Both are required. One without the other produces interfaces that either work but look poor or look good but do not work.'
  },
  {
    id: 2,
    question: 'What is the difference between game UI and UX?',
    answer: 'UI is what the player sees. UX is how the player navigates and what the player can find. Good UX is invisible. The player gets what they need without thinking about it. Good UI makes the UX visible in the right way at the right moment.'
  },
  {
    id: 3,
    question: 'What makes good UX design for games?',
    answer: 'Player-first information architecture. The player\'s question at each moment is answered by what the player sees at that moment. Navigation that does not require the player to remember a path. Feedback that confirms the player\'s action without interrupting the gameplay is part of it.'
  },
  {
    id: 4,
    question: 'Do you work with different game genres?',
    answer: 'Yes. Every genre has different UI/UX requirements. The information hierarchy in an FPS HUD and the information hierarchy in a strategy game\'s map overlay solve completely different player problems. We brief to the genre.'
  },
  {
    id: 5,
    question: 'Do you create interfaces for both mobile and desktop platforms?',
    answer: 'Yes. Mobile and desktop UI/UX are different disciplines with different navigation paradigms, different input affordances, and different player behavioral contexts. We design for both and treat them as distinct briefs rather than adapting one to the other.'
  },
  {
    id: 6,
    question: 'What tools do you use for UI/UX design in gaming?',
    answer: 'Figma for wireframing, prototyping, and component library design. Unity UI Toolkit and Unreal UMG for implementation. PureRef for UI reference collection. Integration testing in the target engine confirms the design works in the build.'
  },
  {
    id: 7,
    question: 'Can you redesign the UI/UX of an existing game?',
    answer: 'Yes. UX audit and UI redesign for existing games is a specific service. We audit the current interface against specific player behavior data or playtest findings, identify the friction points, and propose and execute the redesign.'
  },
  {
    id: 8,
    question: 'How do you ensure the UI supports gameplay and player immersion?',
    answer: 'By designing from the gameplay requirement outward rather than from visual preferences inward. The UI element serves a player\'s information need. If we cannot identify the information needed, the element does not belong in the interface.'
  },
  {
    id: 9,
    question: 'Can you work on partial UI/UX tasks or only full projects?',
    answer: 'Yes. Partial engagements for specific systems, screen redesigns, or UX audit and recommendation without full production are available.'
  },
  {
    id: 10,
    question: 'Can you integrate UI/UX assets directly into my development pipeline?',
    answer: 'Yes. Implementation support for Unity UI Toolkit and Unreal UMG is available alongside design production.'
  },
  {
    id: 11,
    question: 'Why is UI/UX design important in game development?',
    answer: 'Because the player\'s ability to find what they need and do what they want is the surface through which every other system in the game is experienced. Great gameplay behind a confusing interface is not experienced as great gameplay.'
  },
  {
    id: 12,
    question: 'How do you approach mobile game UI design?',
    answer: 'Thumb reach zones first. Text readability at real-world screen brightness is second. One-handed play scenarios third. The visual design last. That order ensures the design works for the player before it looks good for the screenshot.'
  },
  {
    id: 13,
    question: 'How do you conduct UX research for games?',
    answer: 'Playtest observation, heat map analysis where available, player interview data, and competitive analysis of UI/UX decisions in comparable titles. We want to know what the player is actually doing, not what the designer expected them to do.'
  },
  {
    id: 14,
    question: 'How does your UI/UX design process guide players through the game?',
    answer: 'By establishing an information hierarchy that surfaces the right information at the moment the player needs it, and by designing navigation flows that match the mental model the player already has about how the game works.'
  },
  {
    id: 15,
    question: 'How do you ensure consistency across different screen sizes and devices?',
    answer: 'Responsive design systems are built from the most constrained target device outward. The 375-point mobile screen determines the design baseline. The PC version expands from there rather than contracting from a PC design that was never going to fit.'
  },
  {
    id: 16,
    question: 'Do you perform usability testing before final implementation?',
    answer: 'Yes. Prototype testing before visual design is committed and playtest review of the implemented interface before the build is locked are standard stages in our UI/UX process.'
  },
  {
    id: 17,
    question: 'What role does art direction play in UI/UX design?',
    answer: 'Art direction establishes the visual language in which the UI exists. The UI needs to be visually consistent with the game\'s world without competing with it for the player\'s attention at the wrong moment. The art direction brief and the UX brief are reviewed simultaneously.'
  },
  {
    id: 18,
    question: 'Do you design interfaces for similar games or genres I can reference?',
    answer: 'Yes. Portfolio examples available by genre and platform. Ask during the brief session.'
  },
  {
    id: 19,
    question: 'What types of games and platforms do you specialize in?',
    answer: 'PC, mobile, and VR games across action, RPG, strategy, casual, and competitive genres. The UI/UX requirements of each are treated as distinct disciplines.'
  },
  {
    id: 20,
    question: 'What makes Cobweb Games stand out among UI/UX design companies?',
    answer: 'We start every UI/UX brief from the gameplay requirement and the player\'s information needs, not from visual references the art director found compelling. That starting point produces interfaces that serve players rather than interfaces that look like they serve players.'
  }
];

// ============================================================
// GAME UI/UX - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const gameUIUXTechnologies = [
  {
    id: 'tech-1',
    name: 'Figma',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Wireframing, prototyping, and component library design.'
  },
  {
    id: 'tech-2',
    name: 'Unity UI Toolkit',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Implementation and integration testing in Unity.'
  },
  {
    id: 'tech-3',
    name: 'Unreal UMG',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Implementation and integration testing in Unreal Engine.'
  },
  {
    id: 'tech-4',
    name: 'PureRef',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'UI reference collection and visual research organization.'
  }
];

// ============================================================
// GAME UI/UX - CTA DATA
// ============================================================
const gameUIUXCtaData = {
  heading: 'Bring Your Ideas to <b class="c-green">Playable Reality!</b>',
  headingHighlight: 'Playable Reality!',
  description: 'A game idea is not a game interface requirement. The interface requirements emerge from the gameplay systems, the player\'s information needs at each moment, and the platform context in which the game runs. We brief the UX from the gameplay first and design the UI from the UX second. Studios that brief UI from wireframes they drew before the gameplay was designed are doing these steps in the wrong order and will produce interfaces that look designed but do not function as designed.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function GameUIUX() {
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
    <div className="game-ui-ux-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/game-ui-ux-design",
  "url": "https://www.cobwebgames.com/game-ui-ux-design",
  "name": "Game UI/UX Design Services Geared Toward Your Players",
  "description": "Game UI/UX design that serves gameplay rather than decorating it. Cobweb Games builds wireframes, mobile UI, video game UI, and UX systems for PC, VR, and mobile.",
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
      "name": "What are game UI/UX design services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Game UI design covers the visual design of in-game interfaces: HUDs, menus, inventories, and all on-screen elements. Game UX design covers the information architecture, navigation flow, and player behavior systems that determine whether those elements serve the player's needs. Both are required. One without the other produces interfaces that either work but look poor or look good but do not work."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between game UI and UX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UI is what the player sees. UX is how the player navigates and what the player can find. Good UX is invisible. The player gets what they need without thinking about it. Good UI makes the UX visible in the right way at the right moment."
      }
    },
    {
      "@type": "Question",
      "name": "What makes good UX design for games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Player-first information architecture. The player's question at each moment is answered by what the player sees at that moment. Navigation that does not require the player to remember a path. Feedback that confirms the player's action without interrupting the gameplay is part of it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with different game genres?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every genre has different UI/UX requirements. The information hierarchy in an FPS HUD and the information hierarchy in a strategy game's map overlay solve completely different player problems. We brief to the genre."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create interfaces for both mobile and desktop platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile and desktop UI/UX are different disciplines with different navigation paradigms, different input affordances, and different player behavioral contexts. We design for both and treat them as distinct briefs rather than adapting one to the other."
      }
    },
    {
      "@type": "Question",
      "name": "What tools do you use for UI/UX design in gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Figma for wireframing, prototyping, and component library design. Unity UI Toolkit and Unreal UMG for implementation. PureRef for UI reference collection. Integration testing in the target engine confirms the design works in the build."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign the UI/UX of an existing game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. UX audit and UI redesign for existing games is a specific service. We audit the current interface against specific player behavior data or playtest findings, identify the friction points, and propose and execute the redesign."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure the UI supports gameplay and player immersion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By designing from the gameplay requirement outward rather than from visual preferences inward. The UI element serves a player's information need. If we cannot identify the information needed, the element does not belong in the interface."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work on partial UI/UX tasks or only full projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Partial engagements for specific systems, screen redesigns, or UX audit and recommendation without full production are available."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate UI/UX assets directly into my development pipeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Implementation support for Unity UI Toolkit and Unreal UMG is available alongside design production."
      }
    },
    {
      "@type": "Question",
      "name": "Why is UI/UX design important in game development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because the player's ability to find what they need and do what they want is the surface through which every other system in the game is experienced. Great gameplay behind a confusing interface is not experienced as great gameplay."
      }
    },
    {
      "@type": "Question",
      "name": "How do you approach mobile game UI design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thumb reach zones first. Text readability at real-world screen brightness is second. One-handed play scenarios third. The visual design last. That order ensures the design works for the player before it looks good for the screenshot."
      }
    },
    {
      "@type": "Question",
      "name": "How do you conduct UX research for games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Playtest observation, heat map analysis where available, player interview data, and competitive analysis of UI/UX decisions in comparable titles. We want to know what the player is actually doing, not what the designer expected them to do."
      }
    },
    {
      "@type": "Question",
      "name": "How does your UI/UX design process guide players through the game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By establishing an information hierarchy that surfaces the right information at the moment the player needs it, and by designing navigation flows that match the mental model the player already has about how the game works."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure consistency across different screen sizes and devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Responsive design systems are built from the most constrained target device outward. The 375-point mobile screen determines the design baseline. The PC version expands from there rather than contracting from a PC design that was never going to fit."
      }
    },
    {
      "@type": "Question",
      "name": "Do you perform usability testing before final implementation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Prototype testing before visual design is committed and playtest review of the implemented interface before the build is locked are standard stages in our UI/UX process."
      }
    },
    {
      "@type": "Question",
      "name": "What role does art direction play in UI/UX design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Art direction establishes the visual language in which the UI exists. The UI needs to be visually consistent with the game's world without competing with it for the player's attention at the wrong moment. The art direction brief and the UX brief are reviewed simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "Do you design interfaces for similar games or genres I can reference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Portfolio examples available by genre and platform. Ask during the brief session."
      }
    },
    {
      "@type": "Question",
      "name": "What types of games and platforms do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PC, mobile, and VR games across action, RPG, strategy, casual, and competitive genres. The UI/UX requirements of each are treated as distinct disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Cobweb Games stand out among UI/UX design companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We start every UI/UX brief from the gameplay requirement and the player's information needs, not from visual references the art director found compelling. That starting point produces interfaces that serve players rather than interfaces that look like they serve players."
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
      "name": "Game UI/UX Design",
      "item": "https://www.cobwebgames.com/game-ui-ux-design"
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
              <h5>Game UI/UX Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Game UI/UX Design Services <br/> Geared Toward Your <b>Players</b>` }} />
              <p>Game UI design that the player never consciously notices is game UI design that is working. The health bar communicates its value at a peripheral glance. The inventory that the player navigates without reading a single label. The tutorial prompt answers the question the player was already asking. None of that invisibility is accidental. It is the result of UX thinking that prioritizes the player&apos;s cognitive load over the art director&apos;s aesthetic preferences, and UI design that communicates through visual hierarchy rather than hoping the player reads the interface before they need to act on it. At Cobweb Games, our game UI/UX design services are built around one principle: the interface exists to serve the gameplay, not to demonstrate that an interface exists. We wire, prototype, and design game UI for PC, mobile, and VR across every genre, with the UX discipline that treats every screen as a question the player is trying to answer and every element as information the player is trying to find.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game UI/UX Design <b>*</b> Game UI/UX Design <b>*</b></span>
          <span>Game UI/UX Design <b>*</b> Game UI/UX Design <b>*</b></span>
          <span>Game UI/UX Design <b>*</b> Game UI/UX Design <b>*</b></span>
          <span>Game UI/UX Design <b>*</b> Game UI/UX Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/ui-ux-design/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Game UI/UX Design <b class="c-green">Services</b>` }} />
              <p>UI/UX design across every format and discipline a game production requires.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/wireframe.webp" alt="*" width={122} height={131} />
                  <h3>Wireframing and Prototyping</h3>
                </div>
                <p>Information architecture is established in wireframes before visual design begins. The wireframe answers where everything lives and how the player navigates between them. The prototype confirms the navigation flow works before the design investment is committed. These stages exist because discovering that the HUD layout is wrong at the wireframe stage costs a day. Discovering it after the UI assets are built costs a sprint and the art director&apos;s goodwill.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-detailing.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Design and Visual Detailing</h3>
                </div>
                <p>Full visual UI design from the approved wireframe: style frames, component libraries, icon sets, animation states, and the visual hierarchy that guides the player&apos;s eye to the right information at the right moment. UI that matches the game&apos;s visual identity without competing with the environment art for attention at the wrong moment.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/mobile-game.webp" alt="*" width={122} height={131} />
                  <h3>Mobile Game UI Design</h3>
                </div>
                <p>Mobile game UI designed for the thumb reach zones, screen sizes, and one-handed play contexts that mobile players actually use. Button targets sized for fingers, not cursors. Text is readable at the brightness the player&apos;s screen is actually set to. UI that works at 375-point width before it works at anything else.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/video-game.webp" alt="*" width={122} height={131} />
                  <h3>Video Game and App UI Design</h3>
                </div>
                <p>PC and console game interface design with the navigation logic and visual fidelity that the platform&apos;s input method and screen distance require. Controller-navigable menus designed for the couch distance, not the monitor distance. PC interfaces that acknowledge the player has a mouse without assuming they want to use it for everything.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-design.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Design Consulting</h3>
                </div>
                <p>UX audit of existing game interfaces: what the player cannot find, what the player clicks on accidentally, and what the player gives up on instead of understanding. We document the specific friction points and propose solutions grounded in player behavior rather than design preferences.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/support-maintenance.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Support and Maintenance</h3>
                </div>
                <p>Ongoing UI support for live games: new feature UI, seasonal content interfaces, platform update compliance, and the ongoing design work that a live game generates continuously.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={gameUIUXCtaData.heading}
        description={gameUIUXCtaData.description}
        imageSrc={gameUIUXCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Platforms We Design "
        highlightText="Games"
        subheading=" For"
        platforms={gameUIUXPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameUIUXData.section1.slides}
        smHeading={gameUIUXData.section1.smHeading}
        mainHeading={gameUIUXData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-uiux-1"
        autoplaySpeed={4000}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Dynamic Projects That Push <b class='c-green'>Boundaries</b>"
        images={gameUIUXPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Trusted Experts Behind <b class='c-green'>Every Project</b>"
        teamMembers={gameUIUXTeam}
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
      <TechnologiesNew techItems={gameUIUXTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Testimonials"
        mainHeading='What Our <b class="c-green">Clients</b> Say'
        reviews={gameUIUXReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={gameUIUXFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Looking for a Game Development Team?"
        description="Tell us the game, the platform, and the UX problem you are trying to solve. We will tell you the approach and what it costs."
        formTitle="Discuss Your UI/UX Needs"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

