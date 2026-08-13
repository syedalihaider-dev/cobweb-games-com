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
// UNITY GAME - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const unityGamePortfolioImages = [
  {
    id: 'unity-port-1',
    src: '/assets/images/unity-game/port-01.webp',
    width: 267,
    height: 331,
    alt: 'Unity Game Project 1',
    title: 'Unity Game Project',
    description: 'Stable 60fps on hardware three years older than tested.',
    heightClass: 'h-1'
  },
  {
    id: 'unity-port-2',
    src: '/assets/images/unity-game/port-02.webp',
    width: 248,
    height: 505,
    alt: 'Unity Game Project 2',
    title: 'Console Port Success',
    description: 'Switch certification passed on the first attempt.',
    heightClass: 'h-2'
  },
  {
    id: 'unity-port-3',
    src: '/assets/images/unity-game/port-03.webp',
    width: 552,
    height: 505,
    alt: 'Unity Game Project 3',
    title: 'Multiplayer Title',
    description: 'Photon Fusion after Mirror plan was outgrown.',
    heightClass: 'h-2'
  },
  {
    id: 'unity-port-4',
    src: '/assets/images/unity-game/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Unity Game Project 4',
    title: 'Mobile Game',
    description: 'iOS and Android tuned for mid-range hardware.',
    heightClass: 'h-3'
  },
  {
    id: 'unity-port-5',
    src: '/assets/images/unity-game/port-05.webp',
    width: 301,
    height: 242,
    alt: 'Unity Game Project 5',
    title: 'VR Game',
    description: 'Quest and PC VR titles holding frame rate.',
    heightClass: 'h-3'
  },
  {
    id: 'unity-port-6',
    src: '/assets/images/unity-game/port-06.webp',
    width: 267,
    height: 331,
    alt: 'Unity Game Project 6',
    title: 'AR Game',
    description: 'ARKit and ARCore with tracking stability.',
    heightClass: 'h-1'
  },
  {
    id: 'unity-port-7',
    src: '/assets/images/unity-game/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Unity Game Project 7',
    title: 'Casual Game',
    description: 'Fast-loop titles with rapid iteration pipeline.',
    heightClass: 'h-2'
  }
];

// ============================================================
// UNITY GAME - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const unityGameData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Choose Our Unity <b>Game Development</b> Company?",
    slides: [
      {
        title: "Certified Unity Developers",
        description: "Unity-certified engineers who have also shipped, which matters more than the certificate."
      },
      {
        title: "End-to-End Development Expertise",
        description: "Every discipline under one roof: design, code, art integration, QA, and LiveOps, with no translation loss between vendors."
      },
      {
        title: "Scalable Development Teams",
        description: "Team size tracks the milestone plan. Heavy sprints staff up, quiet phases do not bill."
      },
      {
        title: "Cross-Platform Delivery",
        description: "We have already hit the platform-specific landmines. Your project routes around them."
      },
      {
        title: "Agile Development Process",
        description: "Two-week sprints, playable builds every milestone, course corrections while they are cheap."
      },
      {
        title: "Transparent Project Management",
        description: "Open backlogs, weekly builds, and problems reported when found, not when unavoidable."
      },
      {
        title: "Performance-Driven Development",
        description: "Frame, memory, and build-size budgets set at design and enforced by profiler, not hope."
      },
      {
        title: "Long-Term Technical Support",
        description: "Unity versions churn, store policies shift, devices launch. The retainer covers all of it."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Unity <b>Game Development</b>",
    slides: [
      {
        title: "Faster Development Cycles",
        description: "Mature tooling and asset ecosystem that compresses production timelines measurably."
      },
      {
        title: "Cross-Platform Deployment",
        description: "Ten platforms from one codebase when the architecture is built for it from the start."
      },
      {
        title: "Cost-Effective Game Production",
        description: "Shared code across platforms means the second platform costs a fraction of the first."
      },
      {
        title: "High-Performance Gameplay",
        description: "DOTS, Burst, and job systems available when the simulation scale demands them."
      },
      {
        title: "Flexible & Scalable Architecture",
        description: "Modular systems that let the live game grow without rewrites."
      },
      {
        title: "Rich 2D & 3D Graphics",
        description: "URP and HDRP pipelines covering everything from stylized mobile to high-end PC."
      },
      {
        title: "Strong Community & Ecosystem",
        description: "The largest engine ecosystem alive, which means solved problems stay solved."
      },
      {
        title: "Continuous Engine Updates",
        description: "An engine that keeps improving, managed by a team that knows when to upgrade and when to wait."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our Unity Game <b>Development Process</b>",
    slides: [
      {
        title: "Discovery & Game Planning",
        description: "Concept, platforms, feasibility, and budget are established before production spends."
      },
      {
        title: "Game Design Documentation",
        description: "A GDD specific enough to build from and estimate against."
      },
      {
        title: "Prototype Development",
        description: "Core loop proven playable before full production commits."
      },
      {
        title: "Gameplay Programming",
        description: "Systems built to the performance budget with clean, maintainable C#."
      },
      {
        title: "Art & Animation Integration",
        description: "Assets integrated with atlas, LOD, and compression discipline intact."
      },
      {
        title: "Multiplayer & Backend Integration",
        description: "Networking, accounts, saves, and analytics wired in where scoped."
      },
      {
        title: "QA Testing & Optimization",
        description: "Device-lab QA and profiler passes before submission."
      },
      {
        title: "Deployment & LiveOps",
        description: "Store submission and the live pipeline that follows launch."
      }
    ]
  }
};

// ============================================================
// UNITY GAME - PLATFORMS (passed as props to Platform)
// ============================================================
const unityGamePlatforms = [
  {
    title: "Android",
    description: "Full device range, tested on hardware, submitted through Google Play in scope.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "iOS",
    description: "iPhone and iPad with Metal rendering and App Store submission handled.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Windows",
    description: "Steam, Epic, and standalone distribution with the full input matrix supported.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "macOS",
    description: "Native Apple Silicon builds, notarized and store-ready.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PlayStation",
    description: "PS5 and PS4 development with first-party certification prep.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Xbox",
    description: "Series X/S and One builds through the certification gauntlet.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Nintendo Switch",
    description: "Switch development within the memory and performance envelope the hardware honestly offers.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Web Browsers (WebGL)",
    description: "Playable-in-browser builds with compression and streaming tuned for instant-ish load.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Meta Quest & VR Devices",
    description: "Quest 2/3/Pro and PC VR with the 72-90Hz floor treated as law.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// UNITY GAME - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const unityGameTeam = [
  {
    id: 'unity-team-1',
    title: 'Unity Developers',
    number: '01',
    description: 'Senior engineers with shipped titles across mobile, PC, and console.'
  },
  {
    id: 'unity-team-2',
    title: 'Gameplay Programmers',
    number: '02',
    description: 'Feel-focused systems programmers who tune until it plays right.'
  },
  {
    id: 'unity-team-3',
    title: 'Technical Artists',
    number: '03',
    description: 'Shader, VFX, and pipeline specialists bridging art and performance.'
  },
  {
    id: 'unity-team-4',
    title: 'UI/UX Designers',
    number: '04',
    description: 'Interface designers who build for the platform\'s actual input and screen.'
  },
  {
    id: 'unity-team-5',
    title: 'QA Engineers',
    number: '05',
    description: 'Device-lab testers with reproduction steps a developer can act on.'
  },
  {
    id: 'unity-team-6',
    title: 'Producers',
    number: '06',
    description: 'Milestone owners and your single point of contact.'
  }
];

// ============================================================
// UNITY GAME - REVIEWS (passed as props to Reviews)
// ============================================================
const unityGameReviews = [
  {
    id: 'unity-review-1',
    text: "Our Unity project had been through two agencies before Cobweb. Both delivered code that worked in the editor and collapsed on device. Cobweb's first act was profiling on target hardware, and their first sprint deliverable was a performance budget document. The game shipped on both stores at a stable 60fps on hardware three years older than anything the previous agencies tested on.",
    name: 'Lana Spears',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'unity-review-2',
    text: "We hired two dedicated Unity developers from Cobweb to extend our internal team through a console port. They were in our repo and our standups within a week, and they knew the Switch memory envelope better than anyone in-house. Certification passed on the first attempt. We kept them for the next project.",
    name: 'Rosabella Aaron',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'unity-review-3',
    text: "Cobweb built our multiplayer title on Photon Fusion after walking us through exactly why our original Mirror plan would not survive our player counts. That conversation happened in week one, on a whiteboard, before any code existed. That is when I knew we picked the right company.",
    name: 'Britney Fernandez',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// UNITY GAME - FAQS (passed as props to Faqs)
// ============================================================
const unityGameFaqs = [
  {
    id: 1,
    question: 'What is Unity game development?',
    answer: 'Game development using the Unity engine: a C#-based, cross-platform engine that ships to mobile, PC, console, web, and VR from a shared codebase. It powers more games than any other engine on earth.'
  },
  {
    id: 2,
    question: 'Why should I choose Unity for game development?',
    answer: 'Fastest path to multi-platform release, the largest talent and asset ecosystem, and production costs meaningfully below engine alternatives for most project profiles. For photorealistic AAA targets, we will honestly point you at Unreal instead.'
  },
  {
    id: 3,
    question: 'Which platforms does Unity support?',
    answer: 'Android, iOS, Windows, macOS, PlayStation, Xbox, Nintendo Switch, WebGL, and the full Meta Quest and PC VR range. We ship to all of them.'
  },
  {
    id: 4,
    question: 'How much does Unity game development cost?',
    answer: 'Simple mobile or 2D title: $25,000 to $80,000. Mid-tier cross-platform game: $80,000 to $250,000. Large multiplayer or console-grade production: $250,000 plus. Scope drives the number, and the GDD locks it.'
  },
  {
    id: 5,
    question: 'How long does it take to build a Unity game?',
    answer: 'Simple titles: three to six months. Mid-tier: six to twelve months. Large productions: twelve to twenty-four. Milestone plan committed in writing before production begins.'
  },
  {
    id: 6,
    question: 'Do you develop both 2D and 3D Unity games?',
    answer: 'Yes. Dedicated pipelines for both, with the engine features and optimization disciplines specific to each.'
  },
  {
    id: 7,
    question: 'Can you port my existing game to Unity?',
    answer: 'Yes, after a technical audit of the existing codebase. We tell you what survives the port, what needs rebuilding, and what it costs before agreeing to scope.'
  },
  {
    id: 8,
    question: 'Do you develop multiplayer Unity games?',
    answer: 'Yes. Photon Fusion, FishNet, or Mirror selected against your player counts, sync model, and budget, with server infrastructure and matchmaking in scope.'
  },
  {
    id: 9,
    question: 'Can you integrate AR and VR features into Unity games?',
    answer: 'Yes. ARKit, ARCore, and the Quest platform, with the frame-rate discipline immersive hardware makes mandatory.'
  },
  {
    id: 10,
    question: 'Will I own the Unity game source code?',
    answer: 'Yes. Full source code and asset ownership transfers on final payment. No license-back clauses, no reuse rights retained.'
  },
  {
    id: 11,
    question: 'Do you provide post-launch maintenance and LiveOps?',
    answer: 'Yes. Retainers cover content updates, engine and OS compatibility, store policy changes, and live economy tuning.'
  },
  {
    id: 12,
    question: 'Can you provide dedicated Unity developers?',
    answer: 'Yes. Senior Unity engineers embedded in your team and workflow, scaling from one developer to a full squad.'
  }
];

// ============================================================
// UNITY GAME - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const unityGameTechnologies = [
  {
    id: 'tech-1',
    name: 'Unity Engine',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'LTS versions in production, current versions evaluated on merit.'
  },
  {
    id: 'tech-2',
    name: 'C#',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Gameplay, tooling, and backend logic.'
  },
  {
    id: 'tech-3',
    name: 'Photon Fusion / Photon PUN',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Real-time multiplayer at scale.'
  },
  {
    id: 'tech-4',
    name: 'FishNet',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Open-source networking with server authority built in.'
  },
  {
    id: 'tech-5',
    name: 'Mirror Networking',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Proven high-level networking for dedicated server models.'
  },
  {
    id: 'tech-6',
    name: 'Addressables',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Content delivery and memory management for live games.'
  },
  {
    id: 'tech-7',
    name: 'WebGL',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Browser deployment with build-size discipline.'
  },
  {
    id: 'tech-8',
    name: 'Firebase',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Analytics, remote config, and backend services.'
  },
  {
    id: 'tech-9',
    name: 'Spine 2D',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Skeletal 2D animation integrated into Unity pipelines.'
  },
  {
    id: 'tech-10',
    name: 'Wwise',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Professional audio middleware for adaptive sound.'
  }
];

// ============================================================
// UNITY GAME - CTA DATA
// ============================================================
const unityGameCtaData = {
  heading: 'Hire a Unity <b class="c-green">Game Development</b> Company',
  headingHighlight: 'Game Development',
  description: 'Send the concept and target platforms. We will tell you what it takes and where the landmines are. Itemized estimate with milestone plan within 48 hours. One codebase. Every platform. Zero export-button optimism.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function UnityGameDevelopment() {
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
    <div className="unity-game-development-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Unity Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Unity Game Development <b>Company</b>` }} />
              <p>Unity&apos;s pitch is &quot;build once, deploy everywhere,&quot; and every studio that has actually tried it knows the honest version: build once, then spend three months discovering what &quot;everywhere&quot; really means. The engine is genuinely capable of shipping one codebase to ten platforms. What it cannot do is make the platform-specific decisions for you: the draw call budget that mobile demands, the certification hoops consoles enforce, the WebGL memory ceiling nobody warns you about. Cobweb Games is a Unity game development company that has already paid that tuition. You get the cross-platform promise without funding the learning curve. We provide full-cycle Unity game development services across 2D, 3D, mobile, PC, console, WebGL, and AR/VR, with multiplayer infrastructure, performance optimization, and LiveOps in scope. Full source code ownership transfers to you at final payment.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/unity-game/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Unity Game Development <b class="c-green">Services</b>` }} />
              <p>Unity development across every discipline a game production requires.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/custom-game.webp" alt="*" width={122} height={131} />
                  <h3>Custom Unity Game Development</h3>
                </div>
                <p>Original titles built from your concept with architecture decisions made for your platform targets from day one, not retrofitted at port time.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/prototyping.webp" alt="*" width={122} height={131} />
                  <h3>Full-Cycle Unity Game Development</h3>
                </div>
                <p>Concept, design documentation, prototype, production, QA, submission, and LiveOps. One team and one pipeline from idea to store listing.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/2d-3d-game-development.webp" alt="*" width={122} height={131} />
                  <h3>Unity 2D &amp; 3D Game Development</h3>
                </div>
                <p>2D titles built on Unity&apos;s sprite, tilemap, and 2D physics stack. 3D game development with URP or HDRP selected for the project, LOD chains built from the first mesh, and lighting that respects the frame budget.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/multiplayer.webp" alt="*" width={122} height={131} />
                  <h3>Cross-Platform Unity Game Development</h3>
                </div>
                <p>One codebase, many platforms, with per-platform optimization passes so nothing feels like the export-button afterthought.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/vr-ar-game.webp" alt="*" width={122} height={131} />
                  <h3>Multiplayer Unity Game Development</h3>
                </div>
                <p>Photon Fusion, FishNet, or Mirror selected against your player counts and sync model. Networking architecture is a week-one decision here, permanently.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/post-launch.webp" alt="*" width={122} height={131} />
                  <h3>Unity AR/VR Game Development</h3>
                </div>
                <p>Meta Quest, ARKit, and ARCore development where the frame budget is sacred, because dropped frames in a headset are a health issue, not a performance note.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/custom-game.webp" alt="*" width={122} height={131} />
                  <h3>Unity Game Testing &amp; QA</h3>
                </div>
                <p>Functional, performance, and compatibility testing on real device labs plus platform certification prep before either store or any console sees a build.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/prototyping.webp" alt="*" width={122} height={131} />
                  <h3>LiveOps &amp; Post-Launch Support</h3>
                </div>
                <p>Content updates, remote config, seasonal events, and the analytics loop that keeps a shipped Unity game earning.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/2d-3d-game-development.webp" alt="*" width={122} height={131} />
                  <h3>Unity Performance Optimization</h3>
                </div>
                <p>Profiler-driven optimization of existing Unity projects: draw calls, GC allocation spikes, shader cost, and build size, fixed at the cause.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/unity-game/multiplayer.webp" alt="*" width={122} height={131} />
                  <h3>Dedicated Unity Developers</h3>
                </div>
                <p>Senior Unity engineers embedded in your team, on your repo, in your standups, without the six-month hiring cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={unityGameCtaData.heading}
        description={unityGameCtaData.description}
        imageSrc={unityGameCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Platforms We Develop "
        highlightText="Unity"
        subheading=" Games For"
        platforms={unityGamePlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unityGameData.section1.slides}
        smHeading={unityGameData.section1.smHeading}
        mainHeading={unityGameData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-unity-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unityGameData.section2.slides}
        smHeading={unityGameData.section2.smHeading}
        mainHeading={unityGameData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-unity-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={unityGameData.section3.slides}
        smHeading={unityGameData.section3.smHeading}
        mainHeading={unityGameData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-unity-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Trusted by Game Studios &amp; <b class='c-green'>Global Brands</b>"
        images={unityGamePortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our Unity <b class='c-green'>Development Team</b>"
        teamMembers={unityGameTeam}
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
      <TechnologiesNew techItems={unityGameTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios &amp; Global Brands"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={unityGameReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={unityGameFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a Unity <b class='c-green'>Game Development</b> Company"
        description="Send the concept and target platforms. We will tell you what it takes and where the landmines are."
        formTitle="Discuss Your Unity Project"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
