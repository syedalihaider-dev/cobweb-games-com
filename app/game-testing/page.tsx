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
// GAME TESTING - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const gameTestingPortfolioImages = [
  {
    id: 'testing-port-1',
    src: '/assets/images/game-testing/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Mobile Game Testing Project',
    title: 'Mobile Game Testing',
    description: 'Comprehensive QA for iOS and Android mobile game titles.',
    heightClass: 'h-1'
  },
  {
    id: 'testing-port-2',
    src: '/assets/images/game-testing/port-02.webp',
    width: 301,
    height: 242,
    alt: 'PC Game Testing Project',
    title: 'PC Game Testing',
    description: 'Full compatibility and performance testing across PC hardware configurations.',
    heightClass: 'h-2'
  },
  {
    id: 'testing-port-3',
    src: '/assets/images/game-testing/port-03.webp',
    width: 267,
    height: 331,
    alt: 'Console Game Testing Project',
    title: 'Console Game Testing',
    description: 'Platform certification testing for PlayStation and Xbox.',
    heightClass: 'h-2'
  },
  {
    id: 'testing-port-4',
    src: '/assets/images/game-testing/port-04.webp',
    width: 570,
    height: 331,
    alt: 'AR/VR Testing Project',
    title: 'AR/VR Testing',
    description: 'Comfort and performance testing for immersive platforms.',
    heightClass: 'h-3'
  },
  {
    id: 'testing-port-5',
    src: '/assets/images/game-testing/port-05.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 5',
    title: '',
    description: '',
    heightClass: 'h-3'
  },
  {
    id: 'testing-port-6',
    src: '/assets/images/game-testing/port-06.webp',
    width: 248,
    height: 505,
    alt: 'Portfolio 6',
    title: '',
    description: '',
    heightClass: 'h-1'
  },
  {
    id: 'testing-port-7',
    src: '/assets/images/game-testing/port-07.webp',
    width: 301,
    height: 242,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// GAME TESTING - WHY CHOOSE US CONTENT (3 sections including Business Models)
// ============================================================
const gameTestingData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Hire Game QA Testers From <b>Cobweb Games</b>?",
    slides: [
      {
        title: "Reliable On-Time Delivery",
        description: "QA timelines are production timelines. A QA report that arrives after the submission deadline is not a QA report. It is evidence that the QA partner did not treat your launch date as a constraint."
      },
      {
        title: "Proven Testing Quality",
        description: "The quality of a QA delivery is measured by what does not make it into the shipped build. Bugs that our QA process should have caught and did not catch are our failure, not the developer's. We track that accountability."
      },
      {
        title: "Long-Term Collaborative Relationships",
        description: "QA partners who have worked on a game through multiple build cycles know where the bugs tend to live and which systems generate the most regression risk. That institutional knowledge improves QA efficiency and coverage over time."
      },
      {
        title: "Skilled Middle and Senior Specialists",
        description: "Senior QA specialists who have tested shipped titles and know the difference between a bug that will affect one in ten thousand players and a bug that will affect one in ten. That prioritization judgment is not in a test case. It is in the specialist."
      },
      {
        title: "Support at Every Testing Stage",
        description: "QA from the first playable build through to post-launch maintenance. Not just pre-submission certification. The entire QA lifecycle."
      },
      {
        title: "Advanced Hardware Resources",
        description: "Device lab covering the mobile hardware range the target market runs, console hardware, including recent SKU variants, and the PC configurations from minimum to ultra spec."
      }
    ]
  },
  section2: {
    smHeading: "Our Workflow",
    mainHeading: "Our Game Testing <b>Workflow</b>",
    slides: [
      {
        title: "In-Depth Business Analysis",
        description: "Game brief, target platforms, genre, existing QA documentation, and launch timeline are reviewed before the test plan is written. The test coverage is shaped by what the game is and when it needs to ship, not by a standard template."
      },
      {
        title: "Creating a Tailored Test Plan",
        description: "Test plan built to the game's specific requirements: platforms to test, device configurations to cover, features to validate, and the edge cases the genre and game design generate. Coverage is documented before testing begins, so the client knows exactly what is being tested."
      },
      {
        title: "Efficient Task Distribution",
        description: "Test cases distributed across the QA team by platform specialization and feature expertise. The mobile tester tests the mobile. The console tester tests the console. Specialization produces faster and more accurate bug identification than generalist rotation."
      },
      {
        title: "Rigorous Test Execution",
        description: "Test cases executed systematically and reproducibly. Every bug is documented with reproduction steps specific enough to fix: platform, build version, steps to reproduce, expected behavior, actual behavior, and severity. Not 'it crashed.' The exact sequence that caused the crash."
      },
      {
        title: "Gathering and Analyzing Feedback",
        description: "Bug triage with severity and priority assignment. Client-facing bug report in the format the development team's project management system uses. Regression confirmation after fixes are implemented."
      },
      {
        title: "Continuous Improvements and Iterations",
        description: "Regression testing after every significant build update. The bug that was fixed last sprint and broken by this sprint's change is caught in QA, not in the launch review queue."
      }
    ]
  },
  section3: {
    smHeading: "Business Models",
    mainHeading: "Tailored Business Models to <b>Fit Your Needs</b>",
    slides: [
      {
        title: "Fixed Cost",
        description: "Defined test scope, defined deliverables, and defined cost. For teams with a specific build and a specific platform that need a QA pass with a confirmed price."
      },
      {
        title: "Time and Resources",
        description: "QA capacity billed on time is used for teams with evolving scope or ongoing build cycles, where the test volume is not fully predictable."
      },
      {
        title: "Dedicated Team",
        description: "A dedicated QA team is assigned to the project for the production duration. Same testers building institutional knowledge of the game across every build cycle."
      }
    ]
  }
};

// ============================================================
// GAME TESTING - PLATFORMS (passed as props to Platform)
// ============================================================
const gameTestingPlatforms = [
  {
    title: "Mobile Game Testing Services",
    description: "Mobile game testing across iOS and Android device libraries, covering the hardware fragmentation that Android actually ships on and the OS version range that iOS maintains. Performance testing at minimum spec. Battery drain testing over a full play session. Network condition testing for the mobile connectivity environments that players actually use.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC Game Testing Services",
    description: "PC game testing across the GPU, CPU, and RAM configurations that PC gaming actually runs on. Driver compatibility. Resolution and refresh rate combinations. Minimum, recommended, and ultra spec performance. The PC testing scope is the widest of any platform because the hardware variation is the widest of any platform.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Console Game Testing Services",
    description: "Console game testing for PlayStation and Xbox with platform-specific certification requirements, performance targets, and the first-party guidelines that determine approval. We test against the actual certification checklist, not against what we remember the last version of it requiring.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "AR/VR Testing Services",
    description: "AR and VR testing for Oculus, HTC Vive, PlayStation VR, and mobile AR platforms. Frame rate testing with the understanding that dropped frames in VR have consequences that extend beyond a performance metric. Comfort and presence testing by testers who understand what simulator sickness looks like and can identify the technical causes before they become user reviews.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  }
];

// ============================================================
// GAME TESTING - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const gameTestingTeam = [
  {
    id: 'testing-team-1',
    title: 'Game Developers',
    number: '01',
    description: 'Technical understanding of the game\'s architecture informs the test coverage for systems-level bugs that surface-level testing misses.'
  },
  {
    id: 'testing-team-2',
    title: 'QA Lead',
    number: '02',
    description: 'Test plan development, tester coordination, bug triage, and accountability for what ships out of the QA process.'
  },
  {
    id: 'testing-team-3',
    title: 'Project Manager',
    number: '03',
    description: 'Timeline management, client communication, and the coordination between QA and the development team make bug fixes actually happen before the deadline.'
  },
  {
    id: 'testing-team-4',
    title: 'Game Artists',
    number: '04',
    description: 'Visual QA coverage for rendering artifacts, animation bugs, and the art-specific issues that require visual expertise to identify and document accurately.'
  },
  {
    id: 'testing-team-5',
    title: 'QA Specialists',
    number: '05',
    description: 'Platform-specialized testers with the device libraries, the test execution discipline, and the bug reporting precision that makes QA output actionable rather than descriptive.'
  },
  {
    id: 'testing-team-6',
    title: 'Tech Artist',
    number: '06',
    description: 'Technical art QA covering shader bugs, LOD pop, lighting artifacts, and the rendering issues that exist at the intersection of art and code.'
  }
];

// ============================================================
// GAME TESTING - REVIEWS (passed as props to Reviews)
// ============================================================
const gameTestingReviews = [
  {
    id: 'testing-review-1',
    text: "We submitted our mobile title for App Store review with a Cobweb QA pass behind it. First-attempt approval. We had submitted three previous titles without a professional QA pass, and none of them cleared the first review. The difference is the compliance testing. You cannot find what you do not know to look for, and Cobweb knows the checklist.",
    name: 'Janet Beau',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'testing-review-2',
    text: "We had a PC launch window and a compressed QA timeline. Cobweb staffed a dedicated team within 48 hours of our brief and delivered a prioritized bug report within the timeline we needed to hit our launch date. The critical bugs were caught. The title launched without a major day-one patch. That outcome was not guaranteed without professional QA, and we knew it.",
    name: 'Jacqueline Lincoln',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'testing-review-3',
    text: "Our VR title had comfort issues that our internal team had not identified because we had normalized to the prototype experience. Cobweb's VR testers identified specific camera movement scenarios that caused motion discomfort and documented them with reproduction steps. We fixed the issues before launch. The headset reviews did not mention comfort. That is the QA result we needed.",
    name: 'Leonardo Wyatt',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// GAME TESTING - FAQS (passed as props to Faqs)
// ============================================================
const gameTestingFaqs = [
  {
    id: 1,
    question: 'What types of game testing do you offer?',
    answer: 'Functional, compatibility, compliance, balance, localization, performance, regression, multiplayer/network, accessibility, audio, and user acceptance testing. The test plan is built to the game\'s specific requirements.'
  },
  {
    id: 2,
    question: 'How does game testing improve the player experience?',
    answer: 'By catching the bugs, the balance failures, and the UX friction points that turn a good game into a game that reviews as technically broken or unplayable. The player experience is the output that QA is protecting.'
  },
  {
    id: 3,
    question: 'What tools are used in game testing?',
    answer: 'JIRA and TestRail for test management and bug tracking. Platform-specific debugging tools (Xcode Instruments, Android Profiler, PS5, and Xbox developer kits). Device labs for hardware compatibility testing. Network condition simulators for mobile connectivity testing.'
  },
  {
    id: 4,
    question: 'What are the benefits of outsourcing game testing?',
    answer: 'Specialized expertise that the internal team does not maintain. Device library coverage that the internal team does not own. QA capacity that scales to the build cycle without permanent headcount. Platform certification knowledge that keeps current with each platform holder\'s requirement updates.'
  },
  {
    id: 5,
    question: 'How do I hire a reliable game testing company?',
    answer: 'Ask for examples of titles they have tested that shipped. Ask what their bug reporting format looks like. Ask how they handle regression testing. Ask who specifically will be working on your title and what platforms they have tested. A QA company that can answer all of those questions specifically is ready to test your game.'
  },
  {
    id: 6,
    question: 'How much does it cost to hire game testers?',
    answer: 'A dedicated mobile QA engagement for a single platform starts at $2,000 to $5,000. Full platform certification QA for console submission runs $5,000 to $15,000. Ongoing QA for a live game is structured as a monthly retainer. Specific quotes within 48 hours of a build brief.'
  },
  {
    id: 7,
    question: 'Should I choose a company that specializes only in mobile testing?',
    answer: 'Only if the title ships exclusively on mobile and will never be ported. Most titles benefit from a QA partner who has cross-platform experience, even if the current build targets a single platform.'
  },
  {
    id: 8,
    question: 'What\'s the difference between device testing and simulator testing?',
    answer: 'Device testing runs the build on actual hardware. Simulator testing runs it in a software emulation environment. Simulators catch many issues efficiently. They do not catch hardware-specific rendering artifacts, thermal throttling behavior, or the performance characteristics of specific GPU models. Device testing is required for platform compliance.'
  },
  {
    id: 9,
    question: 'How do I know if a mobile testing company is actually good?',
    answer: 'First-attempt App Store and Google Play approval rates on previous client titles. The ability to name specific compliance requirements that changed in the last two update cycles. Bug reports with reproduction steps specific enough to fix. These are the metrics that distinguish competent mobile QA from coverage theater.'
  },
  {
    id: 10,
    question: 'Do I need separate iOS and Android testing expertise?',
    answer: 'Yes. iOS and Android have different compliance requirements, different rendering behaviors, different performance profiles, and different hardware fragmentation challenges. A tester expert in one is not automatically an expert in the other. We have dedicated specialists for each platform.'
  }
];

// ============================================================
// GAME TESTING - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const gameTestingTechnologies = [
  {
    id: 'tech-1',
    name: 'JIRA',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Bug tracking and project management for QA test execution.'
  },
  {
    id: 'tech-2',
    name: 'TestRail',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Test case management and QA reporting.'
  },
  {
    id: 'tech-3',
    name: 'Xcode Instruments',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'iOS performance profiling and memory debugging.'
  },
  {
    id: 'tech-4',
    name: 'Android Profiler',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Android performance monitoring and GPU debugging.'
  },
  {
    id: 'tech-5',
    name: 'PS5/Xbox Dev Kits',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Console platform certification and performance testing.'
  },
  {
    id: 'tech-6',
    name: 'Device Labs',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Hardware compatibility testing across 50+ mobile devices.'
  },
  {
    id: 'tech-7',
    name: 'Network Condition Simulators',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Mobile connectivity testing from 5G to 2G conditions.'
  }
];

// ============================================================
// GAME TESTING - CTA DATA
// ============================================================
const gameTestingCtaData = {
  heading: 'Game With No Lags or Bugs. <b class="c-green">It\'s Possible.</b>',
  headingHighlight: 'It\'s Possible.',
  description: 'Every shipped game has bugs that the QA process did not catch. The question is whether those bugs are the game-breaking ones or the obscure edge cases that one in fifty thousand players encounters. The difference between those two outcomes is the quality of the QA process behind the build. Tell us what you are shipping and when, and we will tell you the test coverage it requires.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function GameTesting() {
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
    <div className="game-testing-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/game-testing",
  "url": "https://www.cobwebgames.com/game-testing",
  "name": "Game Testing Services by Gamers",
  "description": "Game testing services run by people who play games, not just run scripts. Cobweb Games provides QA across mobile, PC, console, AR/VR, and every platform your game ships on.",
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
      "name": "What types of game testing do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Functional, compatibility, compliance, balance, localization, performance, regression, multiplayer/network, accessibility, audio, and user acceptance testing. The test plan is built to the game's specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How does game testing improve the player experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By catching the bugs, the balance failures, and the UX friction points that turn a good game into a game that reviews as technically broken or unplayable. The player experience is the output that QA is protecting."
      }
    },
    {
      "@type": "Question",
      "name": "What tools are used in game testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JIRA and TestRail for test management and bug tracking. Platform-specific debugging tools (Xcode Instruments, Android Profiler, PS5, and Xbox developer kits). Device labs for hardware compatibility testing. Network condition simulators for mobile connectivity testing."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of outsourcing game testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Specialized expertise that the internal team does not maintain. Device library coverage that the internal team does not own. QA capacity that scales to the build cycle without permanent headcount. Platform certification knowledge that keeps current with each platform holder's requirement updates."
      }
    },
    {
      "@type": "Question",
      "name": "How do I hire a reliable game testing company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask for examples of titles they have tested that shipped. Ask what their bug reporting format looks like. Ask how they handle regression testing. Ask who specifically will be working on your title and what platforms they have tested. A QA company that can answer all of those questions specifically is ready to test your game."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire game testers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dedicated mobile QA engagement for a single platform starts at $2,000 to $5,000. Full platform certification QA for console submission runs $5,000 to $15,000. Ongoing QA for a live game is structured as a monthly retainer. Specific quotes within 48 hours of a build brief"
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose a company that specializes only in mobile testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if the title ships exclusively on mobile and will never be ported. Most titles benefit from a QA partner who has cross-platform experience, even if the current build targets a single platform."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between device testing and simulator testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Device testing runs the build on actual hardware. Simulator testing runs it in a software emulation environment. Simulators catch many issues efficiently. They do not catch hardware-specific rendering artifacts, thermal throttling behavior, or the performance characteristics of specific GPU models. Device testing is required for platform compliance."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if a mobile testing company is actually good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First-attempt App Store and Google Play approval rates on previous client titles. The ability to name specific compliance requirements that changed in the last two update cycles. Bug reports with reproduction steps specific enough to fix. These are the metrics that distinguish competent mobile QA from coverage theater."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need separate iOS and Android testing expertise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. iOS and Android have different compliance requirements, different rendering behaviors, different performance profiles, and different hardware fragmentation challenges. A tester expert in one is not automatically an expert in the other. We have dedicated specialists for each platform."
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
      "name": "Game Testing",
      "item": "https://www.cobwebgames.com/game-testing"
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
              <h5>Game Testing</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Game Testing Services <br/> Get It Right, <b>First Time.</b>` }} />
              <p>There is a category of QA report that reads like it was produced by someone who has not played a game since the console it was tested on was discontinued. It catches the crashes and the obvious functional failures. It does not catch the enemy AI behavior that is technically functional and completely unacceptable to a player who knows what the behavior was supposed to do. It does not catch the difficulty curve that causes players to quit at level three, which only becomes visible if the tester is actually playing the game rather than executing a test case against a checklist. At Cobweb Games, our game testing services are run by people who play games. That distinction is not cosmetic. It determines which bugs end up in the report. We provide game functionality testing, compatibility testing, compliance testing, balance testing, localization testing, and platform certification QA across mobile, PC, console, and AR/VR. Every test is executed by specialists who understand the platform, the genre, and the player behavior the game is designed for.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/game-testing/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Core Game Testing <b class="c-green">Solutions</b>` }} />
              <p>The full QA stack a game needs before it ships on any platform.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/functionality.webp" alt="*" width={122} height={131} />
                  <h3>Game Functionality Testing</h3>
                </div>
                <p>Complete functional coverage: every feature, every system, every edge case the game design document specifies, and every edge case the player will find that the design document did not anticipate. Not just the happy path. The path the player takes when they try to do something the designer did not expect, and the game needs to not crash when they do it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/mobile-game.webp" alt="*" width={122} height={131} />
                  <h3>Game Porting Services</h3>
                </div>
                <p>Cross-platform porting QA for games moving from a primary development platform to additional targets. Platform-specific rendering, input mapping, performance characteristics, and the certification requirements of the destination platform all tested against the ported build.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/game-compatibility.webp" alt="*" width={122} height={131} />
                  <h3>Game Compatibility Testing</h3>
                </div>
                <p>Hardware and software compatibility testing across the device range that the target audience actually uses. Not just the flagship device. The mid-range Android phone represents the median player in the target market. The PC with the integrated graphics card that runs at the minimum spec is still a valid customer.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/performance.webp" alt="*" width={122} height={131} />
                  <h3>Game Compliance Testing</h3>
                </div>
                <p>Platform compliance testing against the submission requirements of the App Store, Google Play, Steam, PlayStation certification, and Xbox certification. We know what the checklist requires before the submission date. That knowledge is the difference between a first-attempt approval and a rejection that costs a launch window.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/console.webp" alt="*" width={122} height={131} />
                  <h3>Game Balance Testing</h3>
                </div>
                <p>Difficulty curve, progression pacing, economy balance, and the competitive balance testing for multiplayer titles, where the meta needs to be healthy before the game ships. Balance testing is the QA discipline most studios treat as optional until the review score makes it mandatory.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-testing/pc-game.webp" alt="*" width={122} height={131} />
                  <h3>Level and Sound Design Testing</h3>
                </div>
                <p>Level design QA covering traversal, navigation, encounter pacing, and the environmental storytelling elements that need to work as designed. Sound design testing for audio bugs, missing triggers, and the mixing issues that studio monitor playback does not reveal because the player is using a gaming headset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={gameTestingCtaData.heading}
        description={gameTestingCtaData.description}
        imageSrc={gameTestingCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Game Testing on "
        highlightText="All"
        subheading=" Platforms"
        platforms={gameTestingPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameTestingData.section1.slides}
        smHeading={gameTestingData.section1.smHeading}
        mainHeading={gameTestingData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-testing-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameTestingData.section2.slides}
        smHeading={gameTestingData.section2.smHeading}
        mainHeading={gameTestingData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-testing-2"
        autoplaySpeed={4000}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Business Models)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameTestingData.section3.slides}
        smHeading={gameTestingData.section3.smHeading}
        mainHeading={gameTestingData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-testing-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Recent Game Testing Services <b class='c-green'>Projects</b>"
        images={gameTestingPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="The Team for <b class='c-green'>Game Testing</b>"
        teamMembers={gameTestingTeam}
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
      <TechnologiesNew techItems={gameTestingTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="What Our Clients Say"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={gameTestingReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={gameTestingFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Need a Game Testing Team?"
        description="Tell us what you are shipping and when, and we will tell you the test coverage it requires."
        formTitle="Discuss Your Testing Needs"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
