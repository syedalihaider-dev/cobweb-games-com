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
// 3D GAME DEVELOPMENT - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const threeDGameDevelopmentPortfolioImages = [
  {
    id: 'dev-port-1',
    src: '/assets/images/3d-game-development/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Project 1',
    title: 'Project 1',
    description: 'Shipped title details here.',
    heightClass: 'h-1'
  },
  {
    id: 'dev-port-2',
    src: '/assets/images/3d-game-development/port-02.webp',
    width: 301,
    height: 242,
    alt: 'Project 2',
    title: 'Project 2',
    description: 'Shipped title details here.',
    heightClass: 'h-2'
  },
  {
    id: 'dev-port-3',
    src: '/assets/images/3d-game-development/port-03.webp',
    width: 248,
    height: 505,
    alt: 'Project 3',
    title: 'Project 3',
    description: 'Shipped title details here.',
    heightClass: 'h-2'
  },
  {
    id: 'dev-port-4',
    src: '/assets/images/3d-game-development/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Project 4',
    title: 'Project 4',
    description: 'Shipped title details here.',
    heightClass: 'h-3'
  },
  {
    id: 'dev-port-5',
    src: '/assets/images/3d-game-development/port-05.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 5',
    title: '',
    description: '',
    heightClass: 'h-3'
  },
  {
    id: 'dev-port-6',
    src: '/assets/images/3d-game-development/port-06.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 6',
    title: '',
    description: '',
    heightClass: 'h-1'
  },
  {
    id: 'dev-port-7',
    src: '/assets/images/3d-game-development/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const threeDGameDevelopmentData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>3D Game Development</b> Services",
    slides: [
      {
        title: "Full-Cycle 3D Game Development",
        description: "End-to-end 3D game development from design document through platform submission and post-launch support. One team, one pipeline, one production relationship that spans the entire lifecycle of the project. The brief goes in. A certified shipping game comes out. The scope, the timeline, and the budget are established in a design document before production begins, and we hold ourselves to all three."
      },
      {
        title: "3D Art and Animation",
        description: "3D character modeling, environment art, asset production, and character animation produced by artists who understand that art exists in service of the game build, not the portfolio render. Topology decisions made for the animation rig. Draw call budgets respected from the first asset. LOD chains are built into the production spec rather than added after the GPU profiler becomes a meeting agenda item."
      },
      {
        title: "Game Development",
        description: "Game systems, physics, AI, networking, and the code that makes a 3D world interactive. Unity and Unreal Engine as primary platforms, with the engine choice made on the basis of the project requirements rather than studio comfort. Multiplayer architecture designed in week one. Live ops infrastructure planned before launch. The technical decisions that are expensive to reverse are made deliberately and early."
      },
      {
        title: "QA and Testing",
        description: "Structured QA throughout the production cycle, not accumulated at the end. Functional testing, performance testing across the target hardware range, platform certification testing, and the regression testing that catches the bug that yesterday's fix introduced. Certification requirements are known before development begins, not discovered during the submission process."
      },
      {
        title: "Post-Launch Support",
        description: "Launch is not the end of the production relationship. The first week of live data tells you things the entire QA process did not. Live ops, content updates, bug fixes, platform recertification, and the ongoing development that keeps a game generating revenue past the launch window are all available as a continuing engagement. We structure this before launch, not after the first review score arrives."
      }
    ]
  },
  section2: {
    smHeading: "Our Process",
    mainHeading: "Our 3D Game Development <b>Process</b>",
    slides: [
      {
        title: "Discovery and Planning",
        description: "A game design document, technical specification, platform requirements, scope estimate, and milestone plan are produced before a line of code is written. The production plan is the first deliverable. Everything else is execution of the plan."
      },
      {
        title: "Game Design",
        description: "Core loop validation, systems design, level design documentation, narrative architecture, and the UX decisions that determine whether the game is fun before the production investment is committed. Prototype where the core loop is unproven."
      },
      {
        title: "Development",
        description: "Parallel development tracks: art, code, and design advancing simultaneously against the milestone plan, with integration reviews that catch the point where they are no longer talking to each other before it becomes a rebuild."
      },
      {
        title: "Testing and QA",
        description: "Structured QA at every milestone, not accumulated at the end. Platform certification testing is confirmed against the current certification requirements of the target platform before the submission date is scheduled."
      },
      {
        title: "Launch and Support",
        description: "Platform submission, launch day monitoring, first-week bug response, and the live ops infrastructure that turns a shipped game into a sustaining commercial product."
      }
    ]
  },
  section3: {
    smHeading: "Why Choose Cobweb",
    mainHeading: "Why Choose <b>Cobweb Games</b> for 3D Game Development",
    slides: [
      {
        title: "Proven Experience",
        description: "We have shipped 3D games across mobile, PC, and console platforms. This does not mean we have started projects. It means we have gone through certification, survived first-week launch bugs, managed live ops pipelines, and learned what separates a game that reaches players from one that almost did."
      },
      {
        title: "Full-Cycle Production",
        description: "From design document through platform submission and post-launch support. One team, one pipeline, one production relationship that spans the entire lifecycle of the project."
      },
      {
        title: "Technical Excellence",
        description: "Unity and Unreal Engine as primary platforms, with the engine choice made on the basis of project requirements rather than studio comfort. Multiplayer architecture designed in week one."
      },
      {
        title: "Quality Assurance",
        description: "Structured QA throughout the production cycle, not accumulated at the end. Certification requirements are known before development begins."
      },
      {
        title: "Post-Launch Support",
        description: "Live ops, content updates, bug fixes, platform recertification, and ongoing development that keeps a game generating revenue past the launch window."
      }
    ]
  }
};

// ============================================================
// 3D GAME DEVELOPMENT - PLATFORMS (passed as props to Platform)
// ============================================================
const threeDGameDevelopmentPlatforms = [
  {
    title: "PC Games",
    description: "PC 3D game development for Steam, Epic Games Store, and proprietary distribution. Scalable graphics settings for the hardware range that the player base actually runs. DirectX 12 and Vulkan rendering. Higher polygon budgets, complex material systems, and the visual fidelity that a monitor running at 1440p actually rewards.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Mobile",
    description: "Mobile 3D game development for iOS and Android calibrated to the hardware that the median player in the target market actually owns, not the flagship device the development team uses. Draw call budgets, texture memory limits, and battery drain are production constraints treated with the same seriousness as visual quality.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Console",
    description: "Console 3D game development for PlayStation and Xbox with the first-party certification requirements, memory constraints, and performance targets that console submission actually involves. We know what the certification checklist looks like before we start building.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const threeDGameDevelopmentTeam = [
  {
    id: 'dev-team-1',
    title: 'Project Manager',
    number: '01',
    description: 'One project manager from discovery through post-launch. Milestone accountability, communication structure, and the single point of contact that prevents the brief from fragmenting across disciplines.'
  },
  {
    id: 'dev-team-2',
    title: 'Game Designers',
    number: '02',
    description: 'Core loop design, systems architecture, level design, and the UX decisions that determine whether the game is actually enjoyable to play.'
  },
  {
    id: 'dev-team-3',
    title: '3D Artists',
    number: '03',
    description: 'Character modeling, environment art, asset production, and animation by artists who build for the engine rather than the portfolio.'
  },
  {
    id: 'dev-team-4',
    title: 'Developers',
    number: '04',
    description: 'Unity and Unreal Engine specialists in gameplay systems, AI, networking, physics, and platform-specific optimization.'
  },
  {
    id: 'dev-team-5',
    title: 'QA Specialists',
    number: '05',
    description: 'Structured QA at every milestone and platform certification testing that confirms what the submission checklist requires before the submission date.'
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - REVIEWS (passed as props to Reviews)
// ============================================================
const threeDGameDevelopmentReviews = [
  {
    id: 'dev-review-1',
    text: "Cobweb took our concept through to a shipped product in eighteen months. The production plan they produced in the first month was accurate to within two weeks. No studio we had worked with before had delivered a game on the timeline they committed to at the start.",
    name: 'Marcus Reeves',
    role: 'Game Director',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'dev-review-2',
    text: "Our previous outsourcing relationship had failed certification twice. Cobweb submitted our game and passed first time. The difference was not the quality of the code. It was the attention to the certification requirements from the first month of production rather than a submission checklist only reviewed in the final month.",
    name: 'Shannon Webb',
    role: 'Producer',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'dev-review-3',
    text: "We were skeptical about outsourcing full-cycle development because previous relationships had been high-maintenance. Cobweb's production management was the single smoothest part of our entire publishing process. They managed asset production, engineering, and QA with minimal intervention from our side. The game shipped, and we are already in preproduction on the sequel.",
    name: 'David Brooks',
    role: 'CEO, Indie Publisher',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - FAQS (passed as props to Faqs)
// ============================================================
const threeDGameDevelopmentFaqs = [
  {
    id: 1,
    question: 'What is 3D game development, and how is it different from 2D?',
    answer: '3D game development creates interactive experiences in three-dimensional space using polygonal models, real-time rendering, and depth-based physics. 2D development operates in a flat coordinate system. The production complexity, art pipeline, and technical requirements are substantially different. 3D projects require larger art teams, more complex rendering pipelines, and significantly higher hardware demands on both development infrastructure and the target player platform.'
  },
  {
    id: 2,
    question: 'What factors influence the cost of 3D game development?',
    answer: 'Scope and feature count, visual fidelity target, platform count, team size required to deliver on schedule, whether original IP is being developed, multiplayer infrastructure, and post-launch support scope. A simple mobile 3D casual game and a PC action RPG with multiplayer have different cost structures. The design document determines the cost. The quote follows from the document.'
  },
  {
    id: 3,
    question: 'Can Cobweb Games handle large-scale AAA game development?',
    answer: 'Yes, with the qualification that AAA game development at the scale of the largest published titles requires team sizes that function more like publishers than studios. We handle AA-scale productions with AAA-quality production standards and have the team depth to take on large-scale projects. The scope discussion happens before any commitment is made.'
  },
  {
    id: 4,
    question: 'Do you develop original game concepts or work from client-provided ideas?',
    answer: 'Both. We develop original IP for clients who want a complete creative and production service, and we execute client-provided concepts with the production rigor that turns a brief into a shipped game. The creative ownership structure is established in the contract before production begins.'
  },
  {
    id: 5,
    question: 'How do you ensure quality throughout the development process?',
    answer: 'Milestone-based reviews with documented criteria. QA at every stage rather than accumulated at the end. Art direction reviews that catch visual drift before it accumulates across a full asset library. Code reviews that catch architectural problems before they become rebuild conversations. Quality is a production discipline built into the process, not a final inspection.'
  },
  {
    id: 6,
    question: 'Can you integrate blockchain or NFT elements into a 3D game?',
    answer: 'Yes. Blockchain game development, NFT integration, smart contract implementation, and token economy design are active services. The technical architecture for on-chain game systems is designed in the discovery phase, not added to an existing codebase.'
  },
  {
    id: 7,
    question: 'What post-launch services do you offer?',
    answer: 'Live operations, content updates, DLC development, platform recertification, performance optimization based on live data, bug fixes, and the ongoing development that sustains a game past the launch window. Scoped and structured before launch.'
  },
  {
    id: 8,
    question: 'How do I get started with Cobweb Games\' 3D game development services?',
    answer: 'Send us the concept brief, the target platform, the genre, your timeline requirements, and a rough budget range. We review the brief, schedule a discovery session, and produce a scoped proposal. No commitment required at the brief stage.'
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const threeDGameDevelopmentTechnologies = [
  {
    id: 'tech-1',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'High-fidelity 3D game development with advanced rendering and physics systems.'
  },
  {
    id: 'tech-2',
    name: 'Unity',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'Cross-platform 3D game development with comprehensive asset pipelines.'
  },
  {
    id: 'tech-3',
    name: 'C++',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Performance-critical systems and engine-level development.'
  },
  {
    id: 'tech-4',
    name: 'C#',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Unity game development and scripting systems.'
  },
  {
    id: 'tech-5',
    name: 'Photon',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Multiplayer networking and real-time synchronization.'
  },
  {
    id: 'tech-6',
    name: 'PlayFab',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Live ops infrastructure, player management, and analytics.'
  }
];

// ============================================================
// 3D GAME DEVELOPMENT - CTA DATA
// ============================================================
const threeDGameDevelopmentCtaData = {
  heading: 'Let\'s Build <b class="c-green">Something Together</b>',
  headingHighlight: 'Something Together',
  description: 'The 3D game development company you choose is the single largest production risk on any project. A bad choice costs money. A good choice costs the same money and produces a game. Tell us what you are building, and we will tell you whether we are the right fit, what the production will cost, and how long it will take. If the answer is no on our end, we will say so before you brief a team and discover it six months in.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function Page3dGameDevelopment() {
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
    <div className="3d-game-development-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className="game-banner d-flex relative">
       <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `3D Game Development Services <br/> Turning Concepts into <b>Immersive Games</b>` }} />
              <p>The difference between a 3D game that ships and a 3D game that sits in a folder marked &quot;vertical slice&quot; is not the quality of the idea. It is the quality of the production plan behind it. 3D game development is the single most complex creative and technical undertaking in the entertainment industry. It involves hundreds of interdependent decisions made by specialists who need to be coordinated, communicated with, and kept aligned with a brief that is changing as the production advances. Most 3D game development companies take your brief, execute against it, and hand you the consequence. Cobweb Games treats the production outcome as our problem to solve, not our deliverable to hand off. We provide full-cycle 3D game development services for PC, mobile, and console, across every genre that benefits from the dimensional depth, physical realism, and visual fidelity that 3D production delivers. Custom 3D game development from concept through certification, by a team that understands the difference between a demo and a game.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-game-development/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `3D Game Development Services With <b class="c-green">Proven Experience</b>` }} />
              <p>Cobweb Games has shipped 3D games across mobile, PC, and console platforms. That sentence is worth examining before choosing a development partner. It does not mean we have started 3D game projects. It does not mean we have produced vertical slices. It means we have gone through certification, survived first-week launch bugs, managed live ops pipelines, and learned what separates a game that reaches players from one that almost did. Proven experience in 3D game development is measurable in shipped titles, not studio credentials.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/top-of-the-line.webp" alt="*" width={122} height={131} />
                  <h3>Full-Cycle 3D Game Development</h3>
                </div>
                <p>End-to-end 3D game development from design document through platform submission and post-launch support. One team, one pipeline, one production relationship that spans the entire lifecycle of the project. The brief goes in. A certified shipping game comes out.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/premium-art.webp" alt="*" width={122} height={131} />
                  <h3>3D Art and Animation</h3>
                </div>
                <p>3D character modeling, environment art, asset production, and character animation produced by artists who understand that art exists in service of the game build, not the portfolio render. Topology decisions made for the animation rig. Draw call budgets respected from the first asset.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/blockchain.webp" alt="*" width={122} height={131} />
                  <h3>Game Development</h3>
                </div>
                <p>Game systems, physics, AI, networking, and the code that makes a 3D world interactive. Unity and Unreal Engine as primary platforms, with the engine choice made on the basis of the project requirements rather than studio comfort.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/metaverse.webp" alt="*" width={122} height={131} />
                  <h3>QA and Testing</h3>
                </div>
                <p>Structured QA throughout the production cycle, not accumulated at the end. Functional testing, performance testing across the target hardware range, platform certification testing, and the regression testing that catches the bug that yesterday&apos;s fix introduced.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/animated-games.webp" alt="*" width={122} height={131} />
                  <h3>Post-Launch Support</h3>
                </div>
                <p>Launch is not the end of the production relationship. The first week of live data tells you things the entire QA process did not. Live ops, content updates, bug fixes, platform recertification, and the ongoing development that keeps a game generating revenue past the launch window.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-development/quality-testing.webp" alt="*" width={122} height={131} />
                  <h3>Quality Testing</h3>
                </div>
                <p>With years of expertise, we emphasize perfection. Our rigorous testing and quality assurance processes ensure that every game we develop meets the highest standards. Certification requirements are known before development begins, not discovered during the submission process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={threeDGameDevelopmentCtaData.heading}
        description={threeDGameDevelopmentCtaData.description}
        imageSrc={threeDGameDevelopmentCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="3D Game Development Services For "
        highlightText="Every"
        subheading=" Platform"
        platforms={threeDGameDevelopmentPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameDevelopmentData.section1.slides}
        smHeading={threeDGameDevelopmentData.section1.smHeading}
        mainHeading={threeDGameDevelopmentData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-dev-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameDevelopmentData.section2.slides}
        smHeading={threeDGameDevelopmentData.section2.smHeading}
        mainHeading={threeDGameDevelopmentData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-dev-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Why Cobweb)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameDevelopmentData.section3.slides}
        smHeading={threeDGameDevelopmentData.section3.smHeading}
        mainHeading={threeDGameDevelopmentData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-dev-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Our <b class='c-green'>Projects</b>"
        images={threeDGameDevelopmentPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="The Cobweb 3D Development Team for <b class='c-green'>Your Project</b>"
        teamMembers={threeDGameDevelopmentTeam}
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
      <TechnologiesNew techItems={threeDGameDevelopmentTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="What Our Clients Say"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={threeDGameDevelopmentReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={threeDGameDevelopmentFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Need a Game Production Team?"
        description="Tell us the game, the platform, and the timeline. We will tell you whether we are the right fit and what the production will cost to do correctly."
        formTitle="Discuss Your Project"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
