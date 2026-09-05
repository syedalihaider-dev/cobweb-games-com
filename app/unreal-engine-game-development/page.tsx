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
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// ============================================================
// UNREAL ENGINE - PORTFOLIO (Custom component inline)
// ============================================================
const UnrealPortfolio = () => {
  const images = {
    port01: '/assets/images/unreal-engine/port-01.webp',
    port02: '/assets/images/unreal-engine/port-02.webp',
    port03: '/assets/images/unreal-engine/port-03.webp',
    port04: '/assets/images/unreal-engine/port-04.webp',
    port05: '/assets/images/unreal-engine/port-05.webp',
    port06: '/assets/images/unreal-engine/port-06.webp',
    port07: '/assets/images/unreal-engine/port-07.webp',
  };

  return (
    <section className="inner-portfolio">
      <div className="container">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/unreal-engine-game-development",
  "url": "https://www.cobwebgames.com/unreal-engine-game-development",
  "name": "Unreal Engine Game Development Company",
  "description": "Unreal Engine game development company that builds high-quality 2D, 3D, multiplayer, and AR/VR games with full source code ownership.",
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
      "name": "Why choose Unreal Engine over Unity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose Unreal when the visual ceiling, open-world scale, or built-in multiplayer replication justifies the heavier engine. Choose Unity for lighter builds, faster mobile pipelines, and broader low-end device reach. We recommend the engine that fits the project, not the one we are most comfortable in."
      }
    },
    {
      "@type": "Question",
      "name": "What types of games are best suited for Unreal Engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High-fidelity 3D titles: open world, FPS, RPG, racing, horror, simulation, and any project where Lumen, Nanite, or the Unreal pipeline's advantages justify the engine choice."
      }
    },
    {
      "@type": "Question",
      "name": "Do you develop games using Unreal Engine 5?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. UE5 is our primary Unreal version, with Nanite, Lumen, World Partition, and MetaHuman in active production use."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build AAA-quality games with Unreal Engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, at AA-to-AAA production scale. AAA-scale briefs get AAA-scale treatment; the scope conversation happens honestly before any commitment."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Unreal Engine game development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focused UE title: $80,000 to $250,000. Mid-scale multiplayer or console production: $250,000 to $600,000. Open-world and AAA-adjacent scale: $600,000 plus. The GDD sets the number."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Unreal Engine game development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focused titles: six to twelve months. Mid-tier: twelve to eighteen. Large-scale productions: eighteen to thirty-six. Milestones committed in writing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you develop multiplayer Unreal games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Replication architecture, dedicated servers, EOS or Steamworks, and anti-cheat, designed in week one where it belongs."
      }
    },
    {
      "@type": "Question",
      "name": "Can you migrate my Unity game to Unreal Engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after a technical audit. Engine migration is a rebuild of systems, not a file conversion, and we scope it honestly: what ports, what gets rebuilt, what it costs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide Blueprint and C++ development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, both, in the standard production split: C++ for core systems and performance paths, Blueprint for design iteration and content logic."
      }
    },
    {
      "@type": "Question",
      "name": "Can you develop VR and AR games in Unreal Engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Meta Quest and PC VR with the frame discipline immersive platforms enforce."
      }
    },
    {
      "@type": "Question",
      "name": "Will I own the Unreal Engine source code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Full project source and asset ownership transfers on final payment. Unreal's engine licensing terms apply to the engine itself; everything we build is yours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support and LiveOps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Content updates, engine upgrades, platform recertification, and live economy support on retainer, structured before launch."
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
      "name": "Unreal Engine Game Development",
      "item": "https://www.cobwebgames.com/unreal-engine-game-development"
    }
  ]
}) }} />
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>Our Projects</h4>
            <h2 className="main-heading">
              Trusted by Game Studios & <b className="c-green">Global Brands</b>
            </h2>
          </div>
        </div>
        <div className="row g-0 portfolio-grid">
          <div className="col-lg-6">
            <div className="row g-0">
              <div className="col-lg-12">
                <a href={images.port01} className="port-img h-1" data-fancybox="gallery">
                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                  <Image src={images.port01} alt="Open World UE5 Project" width={552} height={505} />
                  <div className="overlay">
                    <span className="icon">+</span>
                    <h3>Open World UE5 Project</h3>
                    <p>Locked 60fps on Series X after optimization audit.</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href={images.port02} className="port-img h-2" data-fancybox="gallery">
                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                  <Image src={images.port02} alt="Multiplayer FPS" width={301} height={242} />
                  <div className="overlay">
                    <span className="icon">+</span>
                    <h3>Multiplayer FPS</h3>
                    <p>Replication rebuilt with Epic Online Services.</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href={images.port03} className="port-img h-2" data-fancybox="gallery">
                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                  <Image src={images.port03} alt="UE4 to UE5 Migration" width={248} height={505} />
                  <div className="overlay">
                    <span className="icon">+</span>
                    <h3>UE4 to UE5 Migration</h3>
                    <p>Deprecated APIs audited. Lighting improved.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <a href={images.port04} className="port-img h-3" data-fancybox="gallery">
                      <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                      <Image src={images.port04} alt="VR Game Development" width={301} height={242} />
                      <div className="overlay">
                        <span className="icon">+</span>
                        <h3>VR Game Development</h3>
                        <p>Meta Quest with frame discipline enforced.</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-12 pt-3">
                    <a href={images.port05} className="port-img h-3" data-fancybox="gallery">
                      <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                      <Image src={images.port05} alt="Racing Game" width={267} height={331} />
                      <div className="overlay">
                        <span className="icon">+</span>
                        <h3>Racing Game</h3>
                        <p>Vehicle physics with locked frame rates.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <a href={images.port06} className="port-img h-1" data-fancybox="gallery">
                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                  <Image src={images.port06} alt="RPG Game" width={267} height={331} />
                  <div className="overlay">
                    <span className="icon">+</span>
                    <h3>RPG Game</h3>
                    <p>Systems-deep with content tooling for long production.</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a href={images.port07} className="port-img h-2" data-fancybox="gallery">
                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                  <Image src={images.port07} alt="Horror Game" width={570} height={331} />
                  <div className="overlay">
                    <span className="icon">+</span>
                    <h3>Horror Game</h3>
                    <p>Lumen-lit dread with audio positioning.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// UNREAL ENGINE - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const unrealEngineData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Choose Our Unreal Engine <b>Game Development</b> Company?",
    slides: [
      {
        title: "Experienced Unreal Engine Developers",
        description: "Engineers who have shipped UE titles and debugged them at the GPU profiler, which is where Unreal expertise is actually earned."
      },
      {
        title: "Unreal Engine 5 Specialists",
        description: "Nanite, Lumen, World Partition, and Chaos used as production tools with budgets, not marketing bullet points."
      },
      {
        title: "AAA Quality Production",
        description: "AAA-scale briefs get AAA-scale treatment. Tight indie projects get the discipline that ships polish on a sensible budget."
      },
      {
        title: "Agile Development Process",
        description: "Two-week sprints, playable builds each milestone, corrections made while cheap."
      },
      {
        title: "Transparent Communication",
        description: "Weekly builds and honest reporting. Slipped risks get surfaced when spotted, not when terminal."
      },
      {
        title: "Scalable Development Teams",
        description: "Staffing follows the milestone plan up and down."
      },
      {
        title: "Cross-Platform Expertise",
        description: "Console cert checklists, mobile thermal limits, and PC hardware spread, all already paid for on previous projects."
      },
      {
        title: "Long-Term Technical Support",
        description: "Engine updates, platform SDK churn, and live content, covered on retainer."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Unreal Engine <b>Game Development</b>",
    slides: [
      {
        title: "Photorealistic Graphics",
        description: "The highest visual ceiling in real-time rendering, reachable when the budget discipline exists."
      },
      {
        title: "Nanite Virtualized Geometry",
        description: "Film-density meshes without manual LOD authoring, inside a memory budget we actually manage."
      },
      {
        title: "Lumen Global Illumination",
        description: "Dynamic GI without baking, tuned to the frame budget per platform."
      },
      {
        title: "Blueprint Visual Scripting",
        description: "Rapid iteration for designers, with C++ underneath where performance lives."
      },
      {
        title: "High-End Console Performance",
        description: "An engine built alongside current-gen hardware and optimized for it."
      },
      {
        title: "Advanced Physics & Animation",
        description: "Chaos physics and the animation toolchain modern character work expects."
      },
      {
        title: "Scalable Multiplayer Capabilities",
        description: "Replication and server infrastructure proven at industry scale."
      },
      {
        title: "Faster Production with Unreal Engine 5",
        description: "MetaHuman, Quixel, and marketplace pipelines that compress content timelines honestly."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our Unreal Engine Game <b>Development Process</b>",
    slides: [
      {
        title: "Discovery & Requirement Analysis",
        description: "Concept, platforms, visual target, and budget shape locked before production spends."
      },
      {
        title: "Game Design Documentation",
        description: "A GDD specific enough to build against and estimate from."
      },
      {
        title: "Prototype Development",
        description: "Core loop proven fun in grey-box before content production commits."
      },
      {
        title: "Gameplay Programming",
        description: "C++ systems with Blueprint interfaces where iteration speed matters."
      },
      {
        title: "Environment & Character Integration",
        description: "Art integrated with Nanite budgets, LOD strategy, and streaming zones intact."
      },
      {
        title: "Multiplayer & Backend Development",
        description: "Replication, dedicated servers, and platform services where scoped."
      },
      {
        title: "Testing & Performance Optimization",
        description: "Continuous profiling and platform QA before certification."
      },
      {
        title: "Launch & LiveOps Support",
        description: "Submission, launch monitoring, and the content pipeline that follows."
      }
    ]
  }
};

// ============================================================
// UNREAL ENGINE - PLATFORMS (passed as props to Platform)
// ============================================================
const unrealEnginePlatforms = [
  {
    title: "Android",
    description: "Vulkan rendering with honest device-tier scalability.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "iOS",
    description: "Metal-optimized builds through App Store submission.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Windows",
    description: "DX12 with the full scalability spread PC demands.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "macOS",
    description: "Apple Silicon native builds where the market justifies them.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PlayStation",
    description: "PS5-optimized development with certification in scope.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Xbox",
    description: "Series X/S builds through the full cert process.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Nintendo Switch",
    description: "UE on Switch, scoped honestly against the hardware envelope.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Steam",
    description: "Steamworks integration: achievements, workshop, multiplayer.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Epic Games Store",
    description: "EGS launches with Epic Online Services wired in.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Meta Quest",
    description: "Standalone VR at the frame discipline the platform enforces.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  }
];

// ============================================================
// UNREAL ENGINE - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const unrealEngineTeam = [
  {
    id: 'unreal-team-1',
    title: 'Unreal Engine Developers',
    number: '01',
    description: 'Senior UE engineers with shipped titles behind them.'
  },
  {
    id: 'unreal-team-2',
    title: 'Gameplay Programmers',
    number: '02',
    description: 'Feel-obsessed systems programmers in C++ and Blueprint.'
  },
  {
    id: 'unreal-team-3',
    title: 'Technical Artists',
    number: '03',
    description: 'Shader, VFX, and pipeline specialists guarding the frame budget.'
  },
  {
    id: 'unreal-team-4',
    title: 'Environment Artists',
    number: '04',
    description: 'World-builders fluent in Nanite-era asset discipline.'
  },
  {
    id: 'unreal-team-5',
    title: 'Character Artists',
    number: '05',
    description: 'Modelers and MetaHuman specialists with rig-aware topology habits.'
  },
  {
    id: 'unreal-team-6',
    title: 'UI/UX Designers',
    number: '06',
    description: 'UMG interface designers building for controller, mouse, and touch.'
  },
  {
    id: 'unreal-team-7',
    title: 'QA Engineers',
    number: '07',
    description: 'Platform-cert-aware testers with actionable reproduction steps.'
  },
  {
    id: 'unreal-team-8',
    title: 'Producers',
    number: '08',
    description: 'Milestone owners and your single point of contact.'
  }
];

// ============================================================
// UNREAL ENGINE - REVIEWS (passed as props to Reviews)
// ============================================================
const unrealEngineReviews = [
  {
    id: 'unreal-review-1',
    text: "Our UE5 open world ran at 22fps in the editor demo the previous vendor called 'nearly optimized.' Cobweb's audit found unbudgeted Lumen settings, a Nanite scene with no coarse representation strategy, and streaming volumes drawn by someone who had clearly never opened the profiler. Eight weeks later, we were at a locked 60 on Series X. Certification passed first attempt.",
    name: 'Aiandreas',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'unreal-review-2',
    text: "We hired three dedicated Unreal developers from Cobweb for our multiplayer FPS. They rebuilt our replication layer around Epic Online Services and cut our bandwidth per player by 40%. Our netcode complaints on Steam went from a daily flood to a rare event.",
    name: 'Kale',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'unreal-review-3',
    text: "Cobweb migrated our UE4 title to UE5 without breaking a single live system. They audited every deprecated API before touching the project, staged the migration across three test branches, and shipped it in an update our players noticed only because the lighting got better. That is what a migration is supposed to look like.",
    name: 'Liam',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// UNREAL ENGINE - FAQS (passed as props to Faqs)
// ============================================================
const unrealEngineFaqs = [
  {
    id: 1,
    question: 'Why choose Unreal Engine over Unity?',
    answer: 'Choose Unreal when the visual ceiling, open-world scale, or built-in multiplayer replication justifies the heavier engine. Choose Unity for lighter builds, faster mobile pipelines, and broader low-end device reach. We recommend the engine that fits the project, not the one we are most comfortable in.'
  },
  {
    id: 2,
    question: 'What types of games are best suited for Unreal Engine?',
    answer: 'High-fidelity 3D titles: open world, FPS, RPG, racing, horror, simulation, and any project where Lumen, Nanite, or the Unreal pipeline\'s advantages justify the engine choice.'
  },
  {
    id: 3,
    question: 'Do you develop games using Unreal Engine 5?',
    answer: 'Yes. UE5 is our primary Unreal version, with Nanite, Lumen, World Partition, and MetaHuman in active production use.'
  },
  {
    id: 4,
    question: 'Can you build AAA-quality games with Unreal Engine?',
    answer: 'Yes, at AA-to-AAA production scale. AAA-scale briefs get AAA-scale treatment; the scope conversation happens honestly before any commitment.'
  },
  {
    id: 5,
    question: 'How much does Unreal Engine game development cost?',
    answer: 'Focused UE title: $80,000 to $250,000. Mid-scale multiplayer or console production: $250,000 to $600,000. Open-world and AAA-adjacent scale: $600,000 plus. The GDD sets the number.'
  },
  {
    id: 6,
    question: 'How long does Unreal Engine game development take?',
    answer: 'Focused titles: six to twelve months. Mid-tier: twelve to eighteen. Large-scale productions: eighteen to thirty-six. Milestones committed in writing.'
  },
  {
    id: 7,
    question: 'Do you develop multiplayer Unreal games?',
    answer: 'Yes. Replication architecture, dedicated servers, EOS or Steamworks, and anti-cheat, designed in week one where it belongs.'
  },
  {
    id: 8,
    question: 'Can you migrate my Unity game to Unreal Engine?',
    answer: 'Yes, after a technical audit. Engine migration is a rebuild of systems, not a file conversion, and we scope it honestly: what ports, what gets rebuilt, what it costs.'
  },
  {
    id: 9,
    question: 'Do you provide Blueprint and C++ development?',
    answer: 'Yes, both, in the standard production split: C++ for core systems and performance paths, Blueprint for design iteration and content logic.'
  },
  {
    id: 10,
    question: 'Can you develop VR and AR games in Unreal Engine?',
    answer: 'Yes. Meta Quest and PC VR with the frame discipline immersive platforms enforce.'
  },
  {
    id: 11,
    question: 'Will I own the Unreal Engine source code?',
    answer: 'Yes. Full project source and asset ownership transfers on final payment. Unreal\'s engine licensing terms apply to the engine itself; everything we build is yours.'
  },
  {
    id: 12,
    question: 'Do you provide post-launch support and LiveOps?',
    answer: 'Yes. Content updates, engine upgrades, platform recertification, and live economy support on retainer, structured before launch.'
  }
];

// ============================================================
// UNREAL ENGINE - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const unrealEngineTechnologies = [
  {
    id: 'tech-1',
    name: 'Unreal Engine 5',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Current production versions with upgrade discipline.'
  },
  {
    id: 'tech-2',
    name: 'Blueprint Visual Scripting',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Designer-facing logic and rapid prototyping.'
  },
  {
    id: 'tech-3',
    name: 'C++',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Core systems and performance-critical code.'
  },
  {
    id: 'tech-4',
    name: 'Epic Online Services',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Cross-platform accounts, matchmaking, and social.'
  },
  {
    id: 'tech-5',
    name: 'Steamworks SDK',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Steam platform features and multiplayer.'
  },
  {
    id: 'tech-6',
    name: 'AWS Game Backend',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Scalable server infrastructure for live titles.'
  },
  {
    id: 'tech-7',
    name: 'PlayFab',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'LiveOps, economy, and player data services.'
  },
  {
    id: 'tech-8',
    name: 'Perforce',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Version control built for binary-heavy UE projects.'
  },
  {
    id: 'tech-9',
    name: 'Git',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Source control where team scale and asset profile fit it.'
  },
  {
    id: 'tech-10',
    name: 'FMOD',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Adaptive audio middleware.'
  },
  {
    id: 'tech-11',
    name: 'Wwise',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Professional audio pipeline for larger productions.'
  }
];

// ============================================================
// UNREAL ENGINE - CTA DATA
// ============================================================
const unrealEngineCtaData = {
  heading: 'Hire an Unreal Engine <b class="c-green">Game Development</b> </br> Company',
  headingHighlight: 'Game Development',
  description: 'Send the concept and the visual target. We will tell you what the production honestly requires. Itemized estimate with milestone plan within 48 hours. NDA signed first. Senior UE engineers in your repo within a week. Stop fighting the engine. Start shipping with it.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function UnrealEngineGameDevelopment() {
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
    <div className="unreal-engine-game-development-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Unreal Engine Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Unreal Engine Game Development Company <br/> Harness the Power of <b>Unreal Engine</b>` }} />
              <p>Unreal Engine 5 will happily render a photoreal canyon at cinematic fidelity, and it will just as happily let an inexperienced team ship that canyon at 14 frames per second. Nanite and Lumen are not quality settings you switch on. They are architectural decisions with budgets attached, and the studios that treat UE5 like a screenshot generator find that out at the GPU profiler, at midnight, three weeks before launch. Cobweb Games is an Unreal Engine game development company that builds with the engine&apos;s power and inside its budgets, which is the only combination that ships. We provide full-cycle Unreal Engine development: custom UE5 games, multiplayer infrastructure, porting and optimization, engine migration, AR/VR, and dedicated Unreal developers who work in C++ and Blueprint like it is one language, because in practice it is.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/unreal-engine/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Unreal Engine Game Development <b class="c-green">Services</b>` }} />
              <p>Unreal Engine development across every discipline a game production requires.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/full-cycle.webp" alt="*" width={122} height={131} />
                  <h3>Custom Unreal Engine Game Development</h3>
                </div>
                <p>Original titles built from concept in UE5, with rendering, gameplay, and content architecture decided against your platform targets from the first design review.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/xr-based.webp" alt="*" width={122} height={131} />
                  <h3>Full-Cycle Unreal Engine Game Development</h3>
                </div>
                <p>Discovery through LiveOps under one roof. The team that prototypes your core loop is the team that answers the certification checklist.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/nft-game.webp" alt="*" width={122} height={131} />
                  <h3>Unreal Engine 5 Game Development</h3>
                </div>
                <p>UE5 development where Nanite, Lumen, and World Partition are used because the project needs them, budgeted from day one, and profiled continuously rather than admired occasionally.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/multiplayer.webp" alt="*" width={122} height={131} />
                  <h3>Multiplayer Unreal Game Development</h3>
                </div>
                <p>Unreal&apos;s replication system, dedicated servers, and Epic Online Services or Steamworks integration, architected in week one. Networking retrofits in Unreal are how budgets die.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/photo-realistic.webp" alt="*" width={122} height={131} />
                  <h3>Unreal Game Porting</h3>
                </div>
                <p>Titles ported into and across Unreal platforms with the rendering pipeline, input layer, and memory budget rebuilt for the destination hardware.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/next-gen.webp" alt="*" width={122} height={131} />
                  <h3>Unreal Game Optimization</h3>
                </div>
                <p>Profiler-driven rescue work for UE projects with frame problems: draw call audits, shader complexity passes, Nanite and Lumen budget corrections, and streaming fixes at the cause.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/full-cycle.webp" alt="*" width={122} height={131} />
                  <h3>Unreal Engine Migration & Version Upgrade</h3>
                </div>
                <p>UE4 to UE5 migrations and version upgrades handled with deprecation audits and staged testing, so the upgrade improves the project instead of archaeologically destroying it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/xr-based.webp" alt="*" width={122} height={131} />
                  <h3>Unreal AR/VR Development</h3>
                </div>
                <p>Meta Quest and PC VR development where the frame budget is sacred. Dropped frames in a headset are a health issue, not a performance note.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/nft-game.webp" alt="*" width={122} height={131} />
                  <h3>Unreal Cinematics & Virtual Production</h3>
                </div>
                <p>Sequencer-driven cinematics, in-engine trailers, and virtual production workflows at the fidelity UE5 was built to deliver.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unreal-engine/multiplayer.webp" alt="*" width={122} height={131} />
                  <h3>Dedicated Unreal Developers</h3>
                </div>
                <p>Senior UE engineers embedded in your team, fluent in your codebase within the first sprint, without the half-year hiring search.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={unrealEngineCtaData.heading}
        description={unrealEngineCtaData.description}
        imageSrc={unrealEngineCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Platforms We Develop "
        highlightText="Unreal"
        subheading=" Games For"
        platforms={unrealEnginePlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unrealEngineData.section1.slides}
        smHeading={unrealEngineData.section1.smHeading}
        mainHeading={unrealEngineData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-unreal-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unrealEngineData.section2.slides}
        smHeading={unrealEngineData.section2.smHeading}
        mainHeading={unrealEngineData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-unreal-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unrealEngineData.section3.slides}
        smHeading={unrealEngineData.section3.smHeading}
        mainHeading={unrealEngineData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-unreal-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <UnrealPortfolio />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our Unreal <b class='c-green'>Development Team</b>"
        teamMembers={unrealEngineTeam}
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
      <TechnologiesNew techItems={unrealEngineTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios & Global Brands"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={unrealEngineReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={unrealEngineFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire an Unreal Engine Game Development Company"
        description="Send the concept and the visual target. We will tell you what the production honestly requires. Itemized estimate with milestone plan within 48 hours."
        formTitle="Discuss Your Unreal Project"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
