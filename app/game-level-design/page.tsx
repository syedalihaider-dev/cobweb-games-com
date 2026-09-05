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
import GameLevelPortfolio from '@/components/GameLevelPortfolio';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// ============================================================
// GAME LEVEL DESIGN - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const gameLevelData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Cobweb Games is Considered <b>Best in Business</b>?",
    slides: [
      {
        title: "Dedicated Partnership Approach",
        description: "We are in the level design for the lifecycle of the project, not the delivery of a single milestone. The level design we produce in preproduction informs the decisions we make in production, and the production decisions inform the polish pass. Levels produced by a partner who exits after documentation delivery are not the same as levels produced by a partner who is present when the problems it did not anticipate surface."
      },
      {
        title: "Tailored Solutions for Your Needs",
        description: "There is no standard level design methodology that produces good levels across every game genre. A puzzle level and a combat level are solved by completely different design logic. A mobile level and a PC level have different spatial and temporal scales. We brief every level independently and apply the design thinking that the specific brief requires."
      },
      {
        title: "Cutting-Edge Technology Use",
        description: "Level design tools have advanced significantly. We use Unreal Engine's World Partition for large-scale open world design. Unity's DOTS for performance-sensitive mobile level architecture. Houdini for procedural level generation, where the brief calls for it. The technology recommendation follows from the production requirement."
      },
      {
        title: "Rigorous Quality Standards",
        description: "Every level goes through a structured internal playtesting pass before it reaches the client. We are looking for the same things the review team will find: navigation failures, pacing issues, encounter design problems, and visual consistency breaks. We find them inside the studio rather than in the client's playtesting session."
      },
      {
        title: "Reliable and Responsive Team",
        description: "Level design is a communication-intensive discipline. The level designer needs to be in constant contact with the gameplay programmer, the environment artist, the narrative team, and the QA team simultaneously. Our project management structure is designed to support that communication, not create friction in it."
      },
      {
        title: "Expertise You Can Count On",
        description: "Our level design team has shipped levels in games across PC, mobile, VR, and console platforms. They have encountered the encounter that was too dense for the performance budget, the level that failed navigation in user testing, and the setpiece that looked spectacular in documentation and fell flat in play. They know what to design around, and they design around it from the first document."
      }
    ]
  },
  section2: {
    smHeading: "Our Workflow",
    mainHeading: "Our Game Level Design <b>Workflow</b>",
    slides: [
      {
        title: "Project Discovery and Requirement Analysis",
        description: "Game genre, platform, core mechanics, narrative context, target player profile, and the specific emotional experience the level needs to create are all established before any spatial planning begins. Level design that is not grounded in these requirements produces levels that are technically competent and experientially wrong."
      },
      {
        title: "Level Concept and World Planning",
        description: "The level's role in the game's overall structure: where it sits in the progression, what the player knows before they enter, what they should know when they exit, and the specific emotional arc the level needs to deliver. World planning at this stage ensures the level design decisions serve the game's larger narrative and pacing structure rather than existing independently of it."
      },
      {
        title: "Gameplay Layout and Blockout",
        description: "Grey box blockout of the level's spatial structure at the scale the gameplay systems require. Every room, corridor, and open space is sized for the mechanics that will occur within it. The blockout stage is the critical creative stage where all significant design decisions are made at the lowest possible production cost. Nothing here is final. Everything here matters."
      },
      {
        title: "Environment Modeling and Asset Placement",
        description: "Production art applied to the approved blockout. Environment assets are placed to support gameplay readability while building the visual atmosphere that the level concept defines. Asset placement decisions are made in relation to gameplay function first and visual composition second."
      },
      {
        title: "Lighting, Effects, and Visual Polish",
        description: "Lighting direction, visual effects placement, and the polish layer that brings the level to its final quality standard. Lighting in a game level is not decoration. It is a gameplay information system that communicates threat, safety, navigation, and narrative simultaneously."
      },
      {
        title: "Playtesting and Quality Assurance",
        description: "Structured internal playtesting with documented findings mapped back to specific design decisions. Playtesting is the only way to discover whether the level produces the intended experience. Design intuition is a useful starting point. Playtesting is the verification. We treat the playtest findings as production information rather than subjective feedback."
      },
      {
        title: "Final Optimization and Deployment",
        description: "Performance optimization, streaming configuration, platform certification preparation, and deployment to the target build. A level that plays correctly in the level editor and breaks in the platform submission has not been completed. We treat deployment readiness as part of the level design deliverable, not a separate production stage."
      }
    ]
  },
  section3: {
    smHeading: "Our Services",
    mainHeading: "Our Game Level Design <b>Services</b>",
    slides: [
      {
        title: "Level Design Documentation",
        description: "Design documents that translate the game's vision into specific spatial decisions: the flow, the encounters, the pacing beats, and the visual affordances that guide the player through the level without UI assistance. Documentation produced at the level of specificity that a level artist and a gameplay programmer can build from independently, arrive at the same result, and have it work as intended."
      },
      {
        title: "Level Constraint Analysis",
        description: "Every level operates within constraints: platform performance limits, engine polygon budgets, memory allocation, streaming zone requirements, and the gameplay rule sets the level needs to support. Constraint analysis establishes those limits before design begins, so the creative work does not produce a level that is excellent in concept and impossible in production."
      },
      {
        title: "Preproduction Blueprint Development",
        description: "The level blueprint that answers every structural question before production resources are committed. Encounter placement, pacing diagram, spawn logic, checkpoint distribution, and the flow decisions that determine whether the level creates the intended player experience. Changes to the blueprint before production begins cost nothing. Changes discovered in playtesting cost a sprint."
      },
      {
        title: "Level Concept Art Creation",
        description: "Visual concept development for levels that establishes the aesthetic register, the environmental storytelling content, and the visual landmarks that serve navigation, before the 3D environment production begins. The concept art is the design argument. The 3D is its execution."
      },
      {
        title: "Level Progression",
        description: "Progression design that sequences encounters, reveals, and gameplay escalation across the arc of the level in a way that creates sustained engagement rather than uniform difficulty. The player should feel the level building toward something. Level progression is the design of that feeling."
      },
      {
        title: "Level Modelling",
        description: "3D level modeling from the approved blockout through to production art. Environment asset placement, scene dressing, and the visual detail layer make a game space feel inhabited rather than constructed. Level modeling is where the design decisions made in documentation become something a player can walk through."
      }
    ]
  }
};

// ============================================================
// GAME LEVEL DESIGN - PLATFORMS (passed as props to Platform)
// ============================================================
const gameLevelPlatforms = [
  {
    title: "PC Game",
    description: "PC level design for Steam and Epic distribution. Scalable visual detail. Higher spatial complexity and encounter density than mobile equivalents. Mouse-and-keyboard navigation design.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "VR Game",
    description: "VR level design for Oculus, HTC Vive, and Valve Index. The spatial scale of VR levels is determined by the physical movement constraints of the headset context. We design for the actual play space, not the theoretical one.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Mobile Game",
    description: "Mobile level design for iOS and Android. Shorter sessions. Touch navigation. Performance constraints that determine the spatial scale and the visual complexity level that the level can contain. Designed for the 20-minute play window, not the 4-hour session.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// GAME LEVEL DESIGN - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const gameLevelTeam = [
  {
    id: 'level-team-1',
    title: 'Concept Artist',
    number: '01',
    description: 'Visual development and level concept art that establishes the aesthetic register and environmental storytelling content of the level before 3D production begins.'
  },
  {
    id: 'level-team-2',
    title: '3D Artist',
    number: '02',
    description: '3D environment modeling and asset production from the approved blockout through to production-quality level geometry.'
  },
  {
    id: 'level-team-3',
    title: '2D Artist',
    number: '03',
    description: 'UI elements, HUD components, minimap assets, and 2D level art for mobile and stylized game productions.'
  },
  {
    id: 'level-team-4',
    title: 'Character Artist',
    number: '04',
    description: 'NPC and enemy character assets are placed within the level design context and scaled correctly to the level\'s spatial dimensions.'
  },
  {
    id: 'level-team-5',
    title: 'Environment Artist',
    number: '05',
    description: 'Scene dressing, prop placement, terrain painting, and the environmental detail layer that makes the level feel inhabited.'
  },
  {
    id: 'level-team-6',
    title: 'UI/UX Designer',
    number: '06',
    description: 'In-level UI systems, waypoint design, and the on-screen information hierarchy that supports navigation without breaking immersion.'
  }
];

// ============================================================
// GAME LEVEL DESIGN - REVIEWS (passed as props to Reviews)
// ============================================================
const gameLevelReviews = [
  {
    id: 'level-review-1',
    text: "Cobweb redesigned a level we had built internally and spent three sprints trying to fix. They identified the core navigation failure in the first hour of the brief review and proposed a structural solution we had not considered. The redesigned level cleared user testing on the first pass. Our version had failed three consecutive rounds. The difference was in the design methodology, not the assets.",
    name: 'Harrison',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'level-review-2',
    text: "Our mobile game needed levels that were completable in 20 minutes but still felt satisfying. Most level designers we approached treated the time constraint as a creative limitation. Cobweb treated it as a design specification. Every level came back within the time window with the satisfaction loop intact.",
    name: 'Eresas Ricardo',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'level-review-3',
    text: "We hired Cobweb to design the multiplayer maps for a competitive shooter. They asked for the win conditions and the ability kit before they asked about the visual style. The maps were reviewed by our competitive design team and approved without structural revision. They understood that a competitive map is a gameplay problem, not an environment art opportunity.",
    name: 'Kevin',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'level-review-4',
    text: "Our open-world level was failing in user testing because players were not discovering the content we had placed in it. Cobweb audited the level and identified that our sightline design was preventing the environmental storytelling from working as navigation. The solution was spatial, not UI. Three weeks of focused rework cleared the discovery problems completely.",
    name: 'Ibrahim Massrie',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// GAME LEVEL DESIGN - FAQS (passed as props to Faqs)
// ============================================================
const gameLevelFaqs = [
  {
    id: 1,
    question: 'How does high-quality level design affect my game?',
    answer: 'Level design is where game systems become player experiences. A well-designed level makes the gameplay feel more responsive, the combat feel more tense, and the exploration feel more rewarding, because the spatial decisions that surround those systems were made in service of the intended experience.'
  },
  {
    id: 2,
    question: 'What\'s involved in level design?',
    answer: 'Spatial planning, encounter design, pacing management, navigation design, visual affordance design, environmental storytelling, blockout production, asset placement, lighting direction, and playtesting. Every stage is a production discipline in itself.'
  },
  {
    id: 3,
    question: 'How does Cobweb Games deliver exceptional level design?',
    answer: 'By briefing every level on the specific experience it needs to create before making any spatial decisions. The experience requirement drives the design. The design drives the production. That order of operations is not universal, and it is the difference our clients consistently note.'
  },
  {
    id: 4,
    question: 'How does level concept art creation contribute to game development?',
    answer: 'Level concept art locks the visual and narrative direction of a level before the 3D production investment is committed. It gives the environment art team, the gameplay programmer, and the narrative designer a shared visual reference so they are all building toward the same level.'
  },
  {
    id: 5,
    question: 'What is the purpose of level progression in game design?',
    answer: 'Level progression sequences the player\'s experience across the arc of the level so that tension builds, understanding deepens, and the resolution the player earns at the end feels proportionate to the journey. It is the design of the emotional arc, not just the placement of the encounters.'
  },
  {
    id: 6,
    question: 'What is involved in level modeling?',
    answer: 'Translating the approved blockout into production-quality 3D environments: environment asset placement, scene dressing, terrain, lighting, and the visual detail that makes the designed space feel like a real place rather than a grey box with textures applied.'
  },
  {
    id: 7,
    question: 'How do you ensure art style and mechanics blend seamlessly?',
    answer: 'By keeping both requirements in the same brief. The level designer, the environment artist, and the gameplay programmer all work from the same level design document. When the spatial decisions serve both the visual design and the gameplay system, the blend is structural rather than cosmetic.'
  },
  {
    id: 8,
    question: 'What sets your game level design services apart?',
    answer: 'We brief on the experience before we design the space. Most level design processes start with the layout. We start with what the player needs to feel. The layout follows from that requirement.'
  },
  {
    id: 9,
    question: 'What is covered in your game level design services?',
    answer: 'Documentation, blockout, concept art, full 3D production, playtesting, optimization, and deployment preparation. From design brief to platform-ready level.'
  },
  {
    id: 10,
    question: 'Are there specific genres for which you provide bespoke level design?',
    answer: 'Action, combat, puzzle, open world, RPG, horror, strategy, multiplayer competitive, mobile casual, and VR. Each genre has specific level design requirements, and we brief accordingly.'
  },
  {
    id: 11,
    question: 'What is the average timeframe to design a game level?',
    answer: 'Documentation and blockout for a single level: one to two weeks. Full production, including 3D modeling, asset placement, lighting, and playtesting: three to six weeks, depending on scale and complexity.'
  },
  {
    id: 12,
    question: 'Are you able to optimize the levels I have already built?',
    answer: 'Yes. Level audit and optimization is a specific service. We assess the existing level, identify the specific problems, and propose structural and technical solutions before agreeing on the scope of the remediation.'
  },
  {
    id: 13,
    question: 'How much does it cost to develop a game level design?',
    answer: 'A single mobile level from documentation through production typically starts at $5,000 to $15,000. A PC or console level at full production quality runs $15,000 to $40,000. Open world zone design and large-scale multiplayer maps are scoped individually. Detailed quotes within 48 hours of a brief.'
  },
  {
    id: 14,
    question: 'How do you ensure levels enhance player engagement?',
    answer: 'By testing the intended experience against the actual experience through structured playtesting at every production stage, not once at the end. Player engagement is verified, not assumed.'
  }
];

// ============================================================
// GAME LEVEL DESIGN - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const gameLevelTechnologies = [
  {
    id: 'tech-1',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'World Partition for large-scale open world design. Level streaming and lighting systems.'
  },
  {
    id: 'tech-2',
    name: 'Unity',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'DOTS for performance-sensitive mobile level architecture. HDRP and URP rendering.'
  },
  {
    id: 'tech-3',
    name: 'Houdini',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Procedural level generation and environment creation where the brief calls for it.'
  },
  {
    id: 'tech-4',
    name: 'Maya',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Level modeling, blockout production, and environment asset creation.'
  },
  {
    id: 'tech-5',
    name: 'Blender',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Open pipeline level modeling and asset production.'
  },
  {
    id: 'tech-6',
    name: 'Substance Painter',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'PBR texture authoring for environment assets.'
  },
  {
    id: 'tech-7',
    name: 'ZBrush',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'High-poly sculpting for environment props and terrain features.'
  },
  {
    id: 'tech-8',
    name: 'Perforce / Git',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Version control and pipeline integration for level production.'
  }
];

// ============================================================
// GAME LEVEL DESIGN - CTA DATA
// ============================================================
const gameLevelCtaData = {
  heading: 'Bring Your Ideas to <b class="c-green">Playable Reality!</b>',
  headingHighlight: 'Playable Reality!',
  description: 'The gap between a game idea and a game level is where most game projects stall. The idea is clear. The gameplay is designed. The assets are planned. And then the level design process begins, and it becomes apparent that nobody has made the decisions that determine whether any of those assets will produce an experience worth having. At Cobweb Games, we make those decisions as a production discipline with a documented methodology, not as a creative exercise that happens to also produce a level. Brief us on the game. We will produce the level.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function GameLevelDesign() {
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
    <div className="game-level-design-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/game-level-design",
  "url": "https://www.cobwebgames.com/game-level-design",
  "name": "Game Level Design",
  "description": "Game Level Design",
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
      "name": "How does high-quality level design affect my game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level design is where game systems become player experiences. A well-designed level makes the gameplay feel more responsive, the combat feel more tense, and the exploration feel more rewarding, because the spatial decisions that surround those systems were made in service of the intended experience."
      }
    },
    {
      "@type": "Question",
      "name": "What's involved in level design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial planning, encounter design, pacing management, navigation design, visual affordance design, environmental storytelling, blockout production, asset placement, lighting direction, and playtesting. Every stage is a production discipline in itself."
      }
    },
    {
      "@type": "Question",
      "name": "How does Cobweb Games deliver exceptional level design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By briefing every level on the specific experience it needs to create before making any spatial decisions. The experience requirement drives the design. The design drives the production. That order of operations is not universal, and it is the difference our clients consistently note."
      }
    },
    {
      "@type": "Question",
      "name": "How does level concept art creation contribute to game development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level concept art locks the visual and narrative direction of a level before the 3D production investment is committed. It gives the environment art team, the gameplay programmer, and the narrative designer a shared visual reference so they are all building toward the same level."
      }
    },
    {
      "@type": "Question",
      "name": "What is the purpose of level progression in game design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level progression sequences the player's experience across the arc of the level so that tension builds, understanding deepens, and the resolution the player earns at the end feels proportionate to the journey. It is the design of the emotional arc, not just the placement of the encounters."
      }
    },
    {
      "@type": "Question",
      "name": "What is involved in level modeling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Translating the approved blockout into production-quality 3D environments: environment asset placement, scene dressing, terrain, lighting, and the visual detail that makes the designed space feel like a real place rather than a grey box with textures applied."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure art style and mechanics blend seamlessly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By keeping both requirements in the same brief. The level designer, the environment artist, and the gameplay programmer all work from the same level design document. When the spatial decisions serve both the visual design and the gameplay system, the blend is structural rather than cosmetic."
      }
    },
    {
      "@type": "Question",
      "name": "What sets your game level design services apart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We brief on the experience before we design the space. Most level design processes start with the layout. We start with what the player needs to feel. The layout follows from that requirement."
      }
    },
    {
      "@type": "Question",
      "name": "What is covered in your game level design services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Documentation, blockout, concept art, full 3D production, playtesting, optimization, and deployment preparation. From design brief to platform-ready level."
      }
    },
    {
      "@type": "Question",
      "name": "Are there specific genres for which you provide bespoke level design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Action, combat, puzzle, open world, RPG, horror, strategy, multiplayer competitive, mobile casual, and VR. Each genre has specific level design requirements, and we brief accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average timeframe to design a game level?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Documentation and blockout for a single level: one to two weeks. Full production, including 3D modeling, asset placement, lighting, and playtesting: three to six weeks, depending on scale and complexity."
      }
    },
    {
      "@type": "Question",
      "name": "Are you able to optimize the levels I have already built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Level audit and optimization is a specific service. We assess the existing level, identify the specific problems, and propose structural and technical solutions before agreeing on the scope of the remediation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to develop a game level design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single mobile level from documentation through production typically starts at $5,000 to $15,000. A PC or console level at full production quality runs $15,000 to $40,000. Open world zone design and large-scale multiplayer maps are scoped individually. Detailed quotes within 48 hours of a brief."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure levels enhance player engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By testing the intended experience against the actual experience through structured playtesting at every production stage, not once at the end. Player engagement is verified, not assumed."
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
      "name": "Game Level Design",
      "item": "https://www.cobwebgames.com/game-level-design"
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
              <h5>Game Level Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Game Level Design Services <br/> Gripping Levels That Keep Players <b>Hooked</b>` }} />
              <p>A bad level is invisible when it is working. The player moves through it, engages with the gameplay, and emerges from the other side without once thinking about the space they were in. A bad level is highly visible when it is not working. The player gets lost not because they are exploring but because the space gives them no navigational logic. They get bored not because the mechanics are weak but because the level gave them nothing to respond to. At Cobweb Games, our game level design services are built around one question: what does the player need to feel at each moment in this level, and how do the spatial decisions we make create that feeling? Tension is built with level architecture before a single enemy is placed. Discovery is created through sightlines and pacing before a single collectible is positioned. Satisfaction is engineered into the layout before the audio team adds the reward sound. Levels are not a canvas for game systems. They are a system in themselves.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/game-level/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Game Level Design <b class="c-green">Services</b>` }} />
              <p>Level design documentation and production across every phase of the game development pipeline.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/level-design.webp" alt="*" width={122} height={131} />
                  <h3>Level Design Documentation</h3>
                </div>
                <p>Design documents that translate the game&apos;s vision into specific spatial decisions: the flow, the encounters, the pacing beats, and the visual affordances that guide the player through the level without UI assistance. Documentation produced at the level of specificity that a level artist and a gameplay programmer can build from independently, arrive at the same result, and have it work as intended.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/level-constraint.webp" alt="*" width={122} height={131} />
                  <h3>Level Constraint Analysis</h3>
                </div>
                <p>Every level operates within constraints: platform performance limits, engine polygon budgets, memory allocation, streaming zone requirements, and the gameplay rule sets the level needs to support. Constraint analysis establishes those limits before design begins, so the creative work does not produce a level that is excellent in concept and impossible in production.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/preproduction.webp" alt="*" width={122} height={131} />
                  <h3>Preproduction Blueprint Development</h3>
                </div>
                <p>The level blueprint that answers every structural question before production resources are committed. Encounter placement, pacing diagram, spawn logic, checkpoint distribution, and the flow decisions that determine whether the level creates the intended player experience. Changes to the blueprint before production begins cost nothing. Changes discovered in playtesting cost a sprint.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/level-concept.webp" alt="*" width={122} height={131} />
                  <h3>Level Concept Art Creation</h3>
                </div>
                <p>Visual concept development for levels that establishes the aesthetic register, the environmental storytelling content, and the visual landmarks that serve navigation, before the 3D environment production begins. The concept art is the design argument. The 3D is its execution.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/level-progression.webp" alt="*" width={122} height={131} />
                  <h3>Level Progression</h3>
                </div>
                <p>Progression design that sequences encounters, reveals, and gameplay escalation across the arc of the level in a way that creates sustained engagement rather than uniform difficulty. The player should feel the level building toward something. Level progression is the design of that feeling.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/game-level/level-modelling.webp" alt="*" width={122} height={131} />
                  <h3>Level Modelling</h3>
                </div>
                <p>3D level modeling from the approved blockout through to production art. Environment asset placement, scene dressing, and the visual detail layer make a game space feel inhabited rather than constructed. Level modeling is where the design decisions made in documentation become something a player can walk through.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={gameLevelCtaData.heading}
        description={gameLevelCtaData.description}
        imageSrc={gameLevelCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Key Devices We "
        highlightText="Develop"
        subheading=" Games For"
        platforms={gameLevelPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameLevelData.section1.slides}
        smHeading={gameLevelData.section1.smHeading}
        mainHeading={gameLevelData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-level-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameLevelData.section2.slides}
        smHeading={gameLevelData.section2.smHeading}
        mainHeading={gameLevelData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-level-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Services)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={gameLevelData.section3.slides}
        smHeading={gameLevelData.section3.smHeading}
        mainHeading={gameLevelData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-level-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <GameLevelPortfolio />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Trusted Experts Behind <b class='c-green'>Every Project</b>"
        teamMembers={gameLevelTeam}
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
      <TechnologiesNew techItems={gameLevelTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Testimonials"
        mainHeading='What Our <b class="c-green">Clients</b> Say About Us!'
        reviews={gameLevelReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={gameLevelFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Looking for a Game Development Team?"
        description="Brief us on the level and the experience it needs to create. We will tell you the design approach, the production timeline, and what it costs."
        formTitle="Let's Discuss"
        formSubtitle="Your Project."
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

