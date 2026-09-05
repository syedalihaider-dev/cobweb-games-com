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
// 3D GAME MODELING - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const threeDGameModelingData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Game Studios Partner with <b>Cobweb Games</b>?",
    slides: [
      {
        title: "Production-Focused Workflows",
        description: "Every workflow decision is made in relation to the engine target and the pipeline it integrates with. Art that does not pass the import test has not been delivered yet."
      },
      {
        title: "Experienced Game Art Specialists",
        description: "Our team has shipped 3D game assets in games. They have fixed the consequences of bad topology decisions and they do not make those decisions."
      },
      {
        title: "Pipeline Compatibility with Major Engines",
        description: "Unity and Unreal Engine integration is tested before delivery. Asset specifications, import settings, and shader compatibility confirmed at the pipeline discussion stage."
      },
      {
        title: "Dedicated Project Coordination",
        description: "One project coordinator from the brief to the delivery. Every milestone is dated. Every feedback loop is structured rather than open-ended."
      },
      {
        title: "Scalable Teams for Live Projects",
        description: "Sprint-heavy production phases get more capacity. Lighter phases do not carry overhead. The team scales to the production schedule."
      },
      {
        title: "Reliable Milestone Delivery",
        description: "We commit to dates rather than estimates. A sprint that cannot accommodate a fixed delivery date is not a production-ready engagement."
      },
      {
        title: "Optimization for Real-Time Performance",
        description: "Real-time performance is built into the asset specification. LOD chains, draw call management, and polycount discipline are production decisions, not optimization afterthoughts."
      },
      {
        title: "Consistent Asset Quality Standards",
        description: "The same technical standards apply to asset number one and asset number 300. A style guide and technical spec that every team member works from maintains consistency across volume production."
      }
    ]
  },
  section2: {
    smHeading: "Advantages",
    mainHeading: "Advantages of Professional <b>3D Game Modeling</b>",
    slides: [
      {
        title: "Faster Game Production Cycles",
        description: "Assets that arrive game-ready eliminate the integration rework that most outsourcing relationships build into the schedule as a hidden cost."
      },
      {
        title: "Improved Visual Consistency",
        description: "A shared art direction document and a dedicated art director maintain visual consistency across assets produced by a team of any size."
      },
      {
        title: "Better Asset Scalability",
        description: "Modular asset systems and reusable material libraries reduce the per-asset cost of subsequent content updates."
      },
      {
        title: "Enhanced Gameplay Immersion",
        description: "Art that fits the world rather than being placed into it creates the environmental coherence that makes a player feel like they are somewhere specific."
      },
      {
        title: "Optimized Performance Across Devices",
        description: "Platform-specific asset specifications mean the game performs on the hardware range that the player base actually uses."
      },
      {
        title: "Stronger Player Retention Through Visual Quality",
        description: "Visual quality within the game's genre and platform signals production investment. Players notice when the art quality matches the gameplay quality."
      }
    ]
  },
  section3: {
    smHeading: "Our Workflow",
    mainHeading: "Our 3D Asset Development <b>Workflow</b>",
    slides: [
      {
        title: "Requirement Analysis",
        description: "Platform, engine, polycount budget, texture budget, and naming convention are established in writing before modeling begins."
      },
      {
        title: "Visual Research and Art Direction",
        description: "Reference collection and style frame development. The visual target is approved before production assets are committed."
      },
      {
        title: "Blockout and Shape Design",
        description: "The primary form is established and reviewed before surface detail is added. Changes at blockout cost nothing. Changes after texturing are expensive."
      },
      {
        title: "Detailed Modeling and Sculpting",
        description: "High-poly sculpt followed by retopology to the production mesh. Surface detail baked correctly from the high-poly source."
      },
      {
        title: "UV Layout and Baking",
        description: "UV unwrapping with appropriate texel density. Normal, occlusion, and curvature maps baked from the high-poly to the production mesh."
      },
      {
        title: "Texture Painting and Materials",
        description: "PBR texture authoring in Substance Painter. Materials are tested in the target engine renderer before delivery."
      },
      {
        title: "Engine Testing and Optimization",
        description: "Asset imported into the target engine. LODs tested. Draw call reviewed. Shader assigned. Nothing leaves without passing the engine."
      },
      {
        title: "Delivery and Production Support",
        description: "Final files in every format specified at kickoff. Integration documentation included. Post-delivery support available."
      }
    ]
  }
};

// ============================================================
// 3D GAME MODELING - PLATFORMS (passed as props to Platform)
// ============================================================
const threeDGameModelingPlatforms = [
  {
    title: "Mobile Game Asset Creation",
    description: "Mobile 3D game assets within draw call limits, compressed texture formats, and the polygon budgets that mid-range Android hardware actually runs.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC and Steam Game Models",
    description: "Higher polygon density, complex material layering, and the asset quality that rewards the player running at 1440p on a dedicated GPU.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Console-Ready 3D Assets",
    description: "Console-certified assets within PS5 and Xbox Series X memory constraints. Certification requirements documented in the delivery package.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "VR and AR Interactive Models",
    description: "VR models within the frame budget, and stereoscopic rendering demands. AR models scaled and lit for real-world overlay accuracy.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Metaverse and Virtual Experience Assets",
    description: "Virtual world and metaverse asset modeling to the polygon, texture, and file size constraints each platform enforces specifically.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// 3D GAME MODELING - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const threeDGameModelingTeam = [
  {
    id: 'modeling-team-1',
    title: 'Lead Art Supervisors',
    number: '01',
    description: 'Visual direction and quality standards across all 3D production.'
  },
  {
    id: 'modeling-team-2',
    title: 'Character Modeling Experts',
    number: '02',
    description: 'Specialists in human, creature, and stylized character modeling.'
  },
  {
    id: 'modeling-team-3',
    title: 'Environment Asset Creators',
    number: '03',
    description: 'Modular and bespoke environment asset production.'
  },
  {
    id: 'modeling-team-4',
    title: 'Hard Surface Specialists',
    number: '04',
    description: 'Weapons, vehicles, architecture, and industrial asset production.'
  },
  {
    id: 'modeling-team-5',
    title: 'Texture and Shader Artists',
    number: '05',
    description: 'PBR texture authoring and shader development.'
  },
  {
    id: 'modeling-team-6',
    title: 'Technical Art Support',
    number: '06',
    description: 'Pipeline integration, LOD generation, and engine testing.'
  }
];

// ============================================================
// 3D GAME MODELING - REVIEWS (passed as props to Reviews)
// ============================================================
const threeDGameModelingReviews = [
  {
    id: 'modeling-review-1',
    text: "Cobweb was the first 3D game modeling company that asked about our polycount budget before they asked what the character should look like. The assets were integrated into Unreal without a single import warning. We had never had that from an outsourced asset delivery. Not once.",
    name: 'Elijah Cooper',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'modeling-review-2',
    text: "We needed 150 environment assets in five weeks for a vertical slice. Cobweb delivered 148 in week four. Every asset was within budget. Every UV was clean. The art director had nothing to flag. For that volume from an external team, that is not expected. It is what a studio that actually understands production pipelines delivers.",
    name: 'Amelia Mateo',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'modeling-review-3',
    text: "We had been burned by two previous 3D game modeling outsourcing relationships. Wrong pivot points, missing LODs, texture coordinates that looked fine in the DCC tool and shattered in the engine. Cobweb sent us a technical specification sheet before they sent a quote. That was the sign we needed.",
    name: 'Isabella Oscar',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// 3D GAME MODELING - FAQS (passed as props to Faqs)
// ============================================================
const threeDGameModelingFaqs = [
  {
    id: 1,
    question: 'What makes a 3D model game-ready?',
    answer: 'Game-ready means the model passes engine import without tech artist remediation: correct scale, clean normals, proper UV unwrapping with no unintended overlaps, polycount within the brief specification, and pivots in sensible locations. We test in the target engine before every delivery.'
  },
  {
    id: 2,
    question: 'How do you balance visual quality with optimization?',
    answer: 'The visual quality target is established in the brief and the optimization constraints are established alongside it. Both are defined before modeling begins. Quality and optimization are not competing requirements. They are simultaneous specifications.'
  },
  {
    id: 3,
    question: 'Can you create modular assets for large game worlds?',
    answer: 'Yes. Modular asset kit design is a specific production discipline. We design kits for maximum visual variety from minimum asset count, with snapping tolerances defined for the level design tools the production uses.'
  },
  {
    id: 4,
    question: 'Do you support co-development with internal art teams?',
    answer: 'Yes. We integrate into existing team pipelines rather than requiring studios to adapt their workflow to ours. Style guide alignment and naming convention matching are established in discovery before production begins.'
  },
  {
    id: 5,
    question: 'How do you maintain consistency across large asset libraries?',
    answer: 'A shared style guide, a named art director reviewing every stage, and a technical specification that applies uniformly across the full asset library. Consistency is a production discipline, not a quality control pass at the end.'
  },
  {
    id: 6,
    question: 'What is included in your 3D asset delivery package?',
    answer: 'Final mesh files in the formats specified at kickoff, PBR texture sets, LOD chain assets were scoped, integration documentation, and source files. All named to your convention.'
  },
  {
    id: 7,
    question: 'Can assets be adapted for multiple platforms?',
    answer: 'Yes. Multi-platform asset production with platform-specific LODs and texture resolution tiers is a standard production option. The base model is built once. The platform variants derive from it.'
  },
  {
    id: 8,
    question: 'Do you create assets based on concept art only?',
    answer: 'Yes. Concept art is the preferred starting point. We also work from reference images, technical drawings, and written descriptions. The more specific the reference, the fewer revision cycles the accuracy review requires.'
  },
  {
    id: 9,
    question: 'How do you handle revisions during production?',
    answer: 'Two structured revision rounds per milestone are standard. Every revision note is documented and confirmed before changes are made. The scope of revisions is defined before production begins.'
  },
  {
    id: 10,
    question: 'What industries besides gaming use your 3D models?',
    answer: 'Architecture and real estate visualization, film and television VFX, product marketing, VR training, and metaverse platform development. The production standards are the same regardless of the destination.'
  },
  {
    id: 11,
    question: 'Can you optimize existing assets created by another studio?',
    answer: 'Yes, after a technical audit of the existing asset library. We assess what exists, identify the specific issues, and scope the remediation before agreeing to the work.'
  },
  {
    id: 12,
    question: 'Do you provide long-term live game asset support?',
    answer: 'Yes. Live game asset production on a retainer basis for studios managing ongoing content updates, seasonal events, and DLC production. Same team, same pipeline, same quality standard.'
  }
];

// ============================================================
// 3D GAME MODELING - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const threeDGameModelingTechnologies = [
  {
    id: 'tech-1',
    name: 'Unreal Engine Pipelines',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Nanite, Lumen, and material editor. Asset integration and performance validation in Unreal.'
  },
  {
    id: 'tech-2',
    name: 'Unity Asset Integration',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'HDRP and URP material pipelines. Prefab assembly and LOD group setup in Unity.'
  },
  {
    id: 'tech-3',
    name: 'Blender Production Workflows',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Open pipeline modeling, UV unwrapping, and render production in Blender.'
  },
  {
    id: 'tech-4',
    name: 'Maya Modeling Systems',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Production modeling, rigging-ready mesh preparation, and animation-targeted topology.'
  },
  {
    id: 'tech-5',
    name: 'ZBrush Sculpting',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'High-poly organic and hard surface sculpting. Decimation and bake-source management.'
  },
  {
    id: 'tech-6',
    name: 'Substance Painter Texturing',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'PBR texture authoring, smart materials, and bake pipeline production.'
  },
  {
    id: 'tech-7',
    name: 'Houdini Procedural Tools',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Procedural asset generation, destruction simulation, and VFX asset production.'
  },
  {
    id: 'tech-8',
    name: '3ds Max Asset Production',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Architectural and hard surface modeling. Asset preparation for legacy and custom engine pipelines.'
  }
];

// ============================================================
// 3D GAME MODELING - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const threeDGameModelingPortfolioImages = [
  {
    id: 'modeling-port-1',
    src: '/assets/images/3d-game-modeling/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Hero Character Development',
    title: 'Hero Character Development',
    description: 'Production-shipped hero characters for PC and mobile titles.',
    heightClass: 'h-1'
  },
  {
    id: 'modeling-port-2',
    src: '/assets/images/3d-game-modeling/port-02.webp',
    width: 570,
    height: 331,
    alt: 'Open World Environment Assets',
    title: 'Open World Environment Assets',
    description: 'Modular environment kits and hero props for open-world game production.',
    heightClass: 'h-2'
  },
  {
    id: 'modeling-port-3',
    src: '/assets/images/3d-game-modeling/port-03.webp',
    width: 267,
    height: 331,
    alt: 'Stylized Mobile Game Art',
    title: 'Stylized Mobile Game Art',
    description: 'Low-poly stylized assets optimized for mobile performance.',
    heightClass: 'h-2'
  },
  {
    id: 'modeling-port-4',
    src: '/assets/images/3d-game-modeling/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Realistic FPS Weapon Sets',
    title: 'Realistic FPS Weapon Sets',
    description: 'First and third-person weapon models with complete LOD chains.',
    heightClass: 'h-3'
  },
  {
    id: 'modeling-port-5',
    src: '/assets/images/3d-game-modeling/port-05.webp',
    width: 301,
    height: 242,
    alt: 'Vehicles and Mechanical Designs',
    title: 'Vehicles and Mechanical Designs',
    description: 'Ground and air vehicle models with articulated components.',
    heightClass: 'h-3'
  },
  {
    id: 'modeling-port-6',
    src: '/assets/images/3d-game-modeling/port-06.webp',
    width: 248,
    height: 505,
    alt: 'Fantasy Creature Collections',
    title: 'Fantasy Creature Collections',
    description: 'Organic creature models with rig-ready topology across fantasy genres.',
    heightClass: 'h-1'
  },
  {
    id: 'modeling-port-7',
    src: '/assets/images/3d-game-modeling/port-07.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// 3D GAME MODELING - CTA DATA
// ============================================================
const threeDGameModelingCtaData = {
  heading: 'Start Your 3D <br/> Modeling Project <br> with <b class="c-green">Cobweb Games</b>',
  headingHighlight: 'Cobweb Games',
  description: 'Send the brief, the engine target, the polycount budget, and the timeline. We scope the production and come back with a specific plan. Tell us how your current pipeline works. We build the integration approach around it rather than asking you to change yours. Stop paying twice for assets that need fixing after delivery. Brief us correctly from the start.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function Page3dGameModeling() {
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
    <div className="3d-game-modeling-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/3d-game-modeling",
  "url": "https://www.cobwebgames.com/3d-game-modeling",
  "name": "3D Game Modeling Services for High-Quality Game Assets",
  "description": "Need 3D game modeling that ships game-ready, not portfolio-ready? Cobweb Games delivers custom 3D game models, characters, environments, and props for any platform or engine.",
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
      "name": "What makes a 3D model game-ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Game-ready means the model passes engine import without tech artist remediation: correct scale, clean normals, proper UV unwrapping with no unintended overlaps, polycount within the brief specification, and pivots in sensible locations. We test in the target engine before every delivery."
      }
    },
    {
      "@type": "Question",
      "name": "How do you balance visual quality with optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The visual quality target is established in the brief and the optimization constraints are established alongside it. Both are defined before modeling begins. Quality and optimization are not competing requirements. They are simultaneous specifications."
      }
    },
    {
      "@type": "Question",
      "name": "Can you create modular assets for large game worlds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Modular asset kit design is a specific production discipline. We design kits for maximum visual variety from minimum asset count, with snapping tolerances defined for the level design tools the production uses."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support co-development with internal art teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We integrate into existing team pipelines rather than requiring studios to adapt their workflow to ours. Style guide alignment and naming convention matching are established in discovery before production begins."
      }
    },
    {
      "@type": "Question",
      "name": "How do you maintain consistency across large asset libraries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A shared style guide, a named art director reviewing every stage, and a technical specification that applies uniformly across the full asset library. Consistency is a production discipline, not a quality control pass at the end."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in your 3D asset delivery package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Final mesh files in the formats specified at kickoff, PBR texture sets, LOD chain assets were scoped, integration documentation, and source files. All named to your convention."
      }
    },
    {
      "@type": "Question",
      "name": "Can assets be adapted for multiple platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multi-platform asset production with platform-specific LODs and texture resolution tiers is a standard production option. The base model is built once. The platform variants derive from it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create assets based on concept art only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Concept art is the preferred starting point. We also work from reference images, technical drawings, and written descriptions. The more specific the reference, the fewer revision cycles the accuracy review requires."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle revisions during production?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two structured revision rounds per milestone are standard. Every revision note is documented and confirmed before changes are made. The scope of revisions is defined before production begins."
      }
    },
    {
      "@type": "Question",
      "name": "What industries besides gaming use your 3D models?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Architecture and real estate visualization, film and television VFX, product marketing, VR training, and metaverse platform development. The production standards are the same regardless of the destination."
      }
    },
    {
      "@type": "Question",
      "name": "Can you optimize existing assets created by another studio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after a technical audit of the existing asset library. We assess what exists, identify the specific issues, and scope the remediation before agreeing to the work."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide long-term live game asset support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Live game asset production on a retainer basis for studios managing ongoing content updates, seasonal events, and DLC production. Same team, same pipeline, same quality standard."
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
      "name": "3D Game Modeling",
      "item": "https://www.cobwebgames.com/3d-game-modeling"
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
              <h5>3D Game Modeling</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `3D Game Modeling Services for High-Quality <b>Game Assets.</b>` }} />
              <p>Here is what game-ready actually means: not what it looks like in Marmoset Toolbag at 4K. What it means is the model passes import into the target engine without a tech artist spending a day fixing inverted normals, overlapping UV islands, and a polycount that someone decided was acceptable because it looked fine on their workstation. At Cobweb Games, our 3D game modeling services start from the technical specification of the build, not the visual ambition of the concept. Polycount budgets. Texture memory limits. Draw call targets. LOD chain requirements. All of it lives in the brief before the first polygon exists. We are a dedicated 3D game modeling company serving indie studios, AA teams, and enterprise game brands that need scalable 3D asset production without the asset quality debt that most outsourcing relationships accumulate. Every model we deliver is named to your convention, formatted for your pipeline, and tested in your engine.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-game-modeling/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `End-to-End 3D Modeling Solutions for <b class="c-green">Games</b>` }} />
              <p>3D game asset creation across every discipline the production requires.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Character Modeling</h3>
                </div>
                <p>Characters built with deformation topology from the first edge loop. Not sculpted beautifully and then handed to a rigger who has to rework the mesh.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-environment.webp" alt="*" width={122} height={131} />
                  <h3>Environment Modeling</h3>
                </div>
                <p>Environment assets with LOD chains built in, modular snapping tolerances designed for actual level design use, and draw call footprints that fit the platform budget.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-concept.webp" alt="*" width={122} height={131} />
                  <h3>Hard Surface Asset Creation</h3>
                </div>
                <p>Architectural elements, structural components, and the geometric precision of hard surface modeling demands. Clean bevels, controlled edge flow, and correct bake results.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-vehicle.webp" alt="*" width={122} height={131} />
                  <h3>Vehicle and Machinery Modeling</h3>
                </div>
                <p>Vehicles with articulation points designed for animation constraints. Machinery with panel gaps that exist in the mesh, not faked in the texture.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-weapon.webp" alt="*" width={122} height={131} />
                  <h3>Weapon and Equipment Modeling</h3>
                </div>
                <p>Weapons with first-person and third-person LODs, correct pivot placement for weapon systems, and the surface detail density that bakes correctly at the resolution the brief specifies.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-props.webp" alt="*" width={122} height={131} />
                  <h3>Prop and Collectible Design</h3>
                </div>
                <p>The supporting cast of a game world: furniture, debris, interactive objects, collectibles. Consistent scale relative to the player. Named to the project convention.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Stylized 3D Art</h3>
                </div>
                <p>Stylized 3D game modeling to the visual language and art direction. Stylized is no less demanding than realistic. It has different and equally specific requirements.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-environment.webp" alt="*" width={122} height={131} />
                  <h3>Realistic 3D Models</h3>
                </div>
                <p>Semi-realistic and photorealistic models for games where the visual fidelity is the bar the player holds everything else to.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-concept.webp" alt="*" width={122} height={131} />
                  <h3>Low-Poly Asset Development</h3>
                </div>
                <p>Low-poly game asset modeling for mobile and performance-constrained platforms where every polygon is a budget decision, not an aesthetic one.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-vehicle.webp" alt="*" width={122} height={131} />
                  <h3>High-Detail Sculpting</h3>
                </div>
                <p>High-poly sculpting in ZBrush for the surface information that bakes to normal maps. The sculpt is the information source. The production mesh is what runs in the engine.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-weapon.webp" alt="*" width={122} height={131} />
                  <h3>Retopology and Mesh Cleanup</h3>
                </div>
                <p>Retopology of existing sculpts or legacy assets that are not production-ready. Edge loop correction, joint placement optimization, and polycount reduction without visible quality loss.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-props.webp" alt="*" width={122} height={131} />
                  <h3>Texture and Material Development</h3>
                </div>
                <p>PBR texture sets in Substance Painter. Albedo, roughness, metallic, normal, and emissive. Delivered at the resolution the engine budget supports, tested in the target renderer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={threeDGameModelingCtaData.heading}
        description={threeDGameModelingCtaData.description}
        imageSrc={threeDGameModelingCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Game Art Production Across "
        highlightText="Every"
        subheading=" Platform"
        platforms={threeDGameModelingPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameModelingData.section1.slides}
        smHeading={threeDGameModelingData.section1.smHeading}
        mainHeading={threeDGameModelingData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-modeling-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Advantages)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameModelingData.section2.slides}
        smHeading={threeDGameModelingData.section2.smHeading}
        mainHeading={threeDGameModelingData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-modeling-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={threeDGameModelingData.section3.slides}
        smHeading={threeDGameModelingData.section3.smHeading}
        mainHeading={threeDGameModelingData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-modeling-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Featured 3D Modeling <b class='c-green'>Work</b>"
        images={threeDGameModelingPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="The Artists Behind Our <b class='c-green'>3D Work</b>"
        teamMembers={threeDGameModelingTeam}
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
      <TechnologiesNew techItems={threeDGameModelingTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Global Studios That Trust Our Work"
        mainHeading='Client <b class="c-green">Testimonials</b> and Reviews'
        reviews={threeDGameModelingReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={threeDGameModelingFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Start Your 3D Modeling Project with Cobweb Games"
        description="Send the brief, the engine target, the polycount budget, and the timeline. We scope the production and come back with a specific plan."
        formTitle="Request a Tailored Asset Pipeline"
        formSubtitle="Build Scalable Game Art"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}