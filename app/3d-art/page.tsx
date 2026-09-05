'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import { WhyChooseUsSection } from '@/components/WhyChooseAbout';
import ThreeDPortfolio from '@/components/ThreeDportfolio';
import TwoDArtTeam from '@/components/TwoDteam';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// Define the interface for ThreeDArtData
interface Slide {
  title: string;
  description: string;
}

interface SectionData {
  smHeading: string;
  mainHeading: string;
  slides: Slide[];
}

interface ThreeDArtData {
  section1: SectionData;
  section2: SectionData;
  section3: SectionData;
}

// Custom platforms for 3D Art page
const threeDArtPlatforms = [
  {
    title: "Mobile Game Art",
    description: "Low-poly character and environment models within the draw call and texture memory constraints of mobile hardware. PBR materials that approximate correctly on mobile rendering paths. LOD chains starting from a tighter budget than the PC equivalent.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC Game Art",
    description: "Higher polygon budgets, denser normal map detail, and material complexity that a PC GPU can actually render at the frame rate the game targets. We calibrate the asset spec to the minimum hardware spec listed in the brief.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "VR Game Art",
    description: "VR 3D art requires a tighter frame budget than flat-screen games because the cost of dropped frames is simulator sickness rather than a performance warning. We model VR assets with the frame budget in mind from the polycount decision onward.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// 3D ART "WHY CHOOSE US" CONTENT (3 sections with your content)
// ============================================================
const threeDArtData: ThreeDArtData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>3D Game Art</b> Services?",
    slides: [
      {
        title: "Experienced 3D Artists and Modelers",
        description: "Our team has built 3D game assets for shipped titles. They have encountered the problems that experienced artists have encountered: texture seams visible in the final build, normal map artifacts from incorrect cage settings, and LOD pop that makes it into the shipped game because nobody checked the transition distance. They know what to check for because they have seen what happens when you do not."
      },
      {
        title: "Production-Ready Game Assets",
        description: "Game-ready is in the brief and in the delivery. Not as a goal but as a technical specification. Engine-importable, poly-budget compliant, correctly scaled, correctly pivoted, and documented for the tech team."
      },
      {
        title: "Flexible Outsourcing Models",
        description: "Project-based delivery for studios with a defined asset list. Dedicated 3D artist placement for studios managing long-term content pipelines. Team augmentation for in-house art departments with capacity gaps in specific disciplines."
      },
      {
        title: "Scalable Art Teams",
        description: "Environment art push for the six weeks before Beta does not require the same team size as the first pass concepting. We scale up and down with the production schedule."
      },
      {
        title: "Fast Turnaround and Reliable Delivery",
        description: "Standard 3D character delivery: one to two weeks for production assets from approved concept reference. Environment asset sets: two to four weeks, depending on complexity. We date the milestones at kickoff."
      },
      {
        title: "Quality Assurance at Every Stage",
        description: "Internal QA review at concept approval, high-poly review, retopology review, and final delivery. Problems caught before they leave the studio rather than after they arrive in your engine."
      }
    ]
  },
  section2: {
    smHeading: "Why Choose Professional 3D Art",
    mainHeading: "Benefits of Professional <b>3D Game Art</b>",
    slides: [
      {
        title: "Create Immersive Game Worlds",
        description: "3D environment design and world-building art that makes a player feel like they are somewhere specific rather than inside a level. The difference is in the material variation, the environmental storytelling, and the light response of surfaces that were built for the game's lighting model."
      },
      {
        title: "Enhance Character Realism",
        description: "Realistic 3D character modeling with the topology, blend shape support, and texture fidelity that make a character feel like it belongs in the world rather than being placed into it."
      },
      {
        title: "Improve Visual Storytelling",
        description: "3D art that carries narrative information through model design, texture wear, and environmental details rather than requiring the game's writing to explain what the player can already see."
      },
      {
        title: "Strengthen Player Engagement",
        description: "Visual quality that matches the gameplay quality keeps players invested. An excellent game with weak art loses players who would have stayed with it. A technically solid art pipeline makes the game available to be judged on its merits."
      },
      {
        title: "Maintain Consistent Art Direction",
        description: "A 3D game art studio with a named art director and a documented visual bible maintains consistency across a production that spans years and multiple vendor relationships."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our <b>3D Art</b> Production Process",
    slides: [
      {
        title: "Project Discovery and Planning",
        description: "Pipeline audit, poly budget review, texture budget discussion, and engine target confirmation before any asset production. We establish the technical constraints and document them before the first model is opened."
      },
      {
        title: "Concept and Reference Collection",
        description: "Concept review or concept development, reference collection, and style frame approval before modeling begins. The 3D model is built to an approved visual target, not toward an approximation of what the art director might want."
      },
      {
        title: "Modeling and Sculpting",
        description: "High-poly sculpt in ZBrush or Maya, then retopology to the production poly budget. The high-poly is the information source. The production mesh is what the engine runs."
      },
      {
        title: "Texturing and Material Creation",
        description: "PBR texture maps created in Substance Painter and delivered at the resolution the engine budget supports. Material assignment confirmed against the engine's material system before final export."
      },
      {
        title: "Optimization and QA",
        description: "LOD chain generation, collision mesh creation, import testing in the target engine, and QA review against the technical spec established in discovery. Nothing leaves without passing the engine import."
      },
      {
        title: "Final Delivery and Engine Integration",
        description: "Final assets delivered in the formats the engine requires with technical documentation for the integration team. Source files included. Named according to your convention."
      }
    ]
  }
};

// ============================================================
// 3D ART TEAM CONTENT (passed as props to TwoDArtTeam)
// ============================================================
const threeDArtTeamMembers = [
  {
    id: 'team-3d-1',
    title: 'Art Director',
    number: '01',
    description: 'Creative and technical direction across all 3D game art projects. The visual standard and the technical standard both run through Ali who is our Art Director.'
  },
  {
    id: 'team-3d-2',
    title: 'Concept Artists',
    number: '02',
    description: 'Visual development that gives the 3D team an unambiguous production target.'
  },
  {
    id: 'team-3d-3',
    title: 'Character Artists',
    number: '03',
    description: 'Character modeling, sculpting, retopology, and texturing specialists.'
  },
  {
    id: 'team-3d-4',
    title: 'Environment Artists',
    number: '04',
    description: '3D environment design, modular asset production, and level art specialists.'
  },
  {
    id: 'team-3d-5',
    title: '3D Modelers',
    number: '05',
    description: 'Hard surface, prop, and vehicle modeling specialists across game-ready production.'
  },
  {
    id: 'team-3d-6',
    title: 'Technical Artists',
    number: '06',
    description: 'Rigging prep, LOD generation, engine integration, and pipeline tooling.'
  }
];

const threeDArtFaqs = [
  {
    id: 1,
    question: 'How much does 3D game art cost?',
    answer: 'A production-ready 3D character from concept through textured and engine-ready delivery typically runs $800 to $3,000, depending on complexity and poly tier. Environment assets range from $200 to $1,500 per prop or modular set. Itemized quotes within 48 hours.'
  },
  {
    id: 2,
    question: 'How long does a 3D modeling project take?',
    answer: 'Single character: one to two weeks from approved concept. Environment asset set: two to four weeks. Complex vehicles or hero props: one to three weeks, depending on detail level.'
  },
  {
    id: 3,
    question: 'Can you match our existing art style?',
    answer: 'Yes. Style match starts with an audit of your existing assets and a test piece before full production begins. We build to the approved visual target, not an approximation.'
  },
  {
    id: 4,
    question: 'Do you create game-ready assets for Unity and Unreal Engine?',
    answer: 'Yes. Unity and Unreal Engine are our primary delivery targets. Asset specs, import settings, and file formats are confirmed at the pipeline discussion before production starts.'
  },
  {
    id: 5,
    question: 'Do you provide source files and ownership rights?',
    answer: 'Full source files delivered with every project. Full IP ownership transfers on final payment.'
  },
  {
    id: 6,
    question: 'Can I hire dedicated 3D artists?',
    answer: 'Yes. Dedicated 3D game artists on a retainer basis for studios managing long-term content pipelines or live game operations.'
  },
  {
    id: 7,
    question: 'What file formats do you deliver?',
    answer: 'FBX and OBJ for meshes. PNG and TGA for textures at the resolution specified in the brief. SBSAR for Substance materials where applicable. Source files in the native application format.'
  },
  {
    id: 8,
    question: 'Do you create both stylized and realistic 3D art?',
    answer: 'Yes. Our team works across the full style range, from mobile-casual stylized through semi-realistic to AAA-adjacent photorealistic. Style direction is established in the concept approval stage.'
  },
  {
    id: 9,
    question: 'Can you handle large-scale game art production?',
    answer: 'Yes. We have managed large-scale 3D game art production runs. The team scales to the volume, and the production management process scales with it.'
  }
];

export default function Page3dArt() {
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
    <div className="3d-art-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/3d-art",
  "url": "https://www.cobwebgames.com/3d-art",
  "name": "3D Game Art Studio for Custom Models, Characters & Environments | Cobweb Games",
  "description": "Need a 3D game art studio that delivers game-ready assets without the topology problems? Cobweb Games builds 3D characters, environments, and hard surface models for Unity and Unreal.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.cobwebgames.com#website",
    "url": "https://www.cobwebgames.com",
    "name": "Cobweb Games",
    "description": "We craft extraordinary, immersive games that captivate and inspire.",
    "inLanguage": "en-US"
  }
}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does 3D game art cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A production-ready 3D character from concept through textured and engine-ready delivery typically runs $800 to $3,000, depending on complexity and poly tier. Environment assets range from $200 to $1,500 per prop or modular set. Itemized quotes within 48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a 3D modeling project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Single character: one to two weeks from approved concept. Environment asset set: two to four weeks. Complex vehicles or hero props: one to three weeks, depending on detail level."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match our existing art style?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Style match starts with an audit of your existing assets and a test piece before full production begins. We build to the approved visual target, not an approximation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create game-ready assets for Unity and Unreal Engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Unity and Unreal Engine are our primary delivery targets. Asset specs, import settings, and file formats are confirmed at the pipeline discussion before production starts."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide source files and ownership rights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full source files delivered with every project. Full IP ownership transfers on final payment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I hire dedicated 3D artists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dedicated 3D game artists on a retainer basis for studios managing long-term content pipelines or live game operations."
      }
    },
    {
      "@type": "Question",
      "name": "What file formats do you deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FBX and OBJ for meshes. PNG and TGA for textures at the resolution specified in the brief. SBSAR for Substance materials where applicable. Source files in the native application format."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create both stylized and realistic 3D art?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our team works across the full style range, from mobile-casual stylized through semi-realistic to AAA-adjacent photorealistic. Style direction is established in the concept approval stage."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle large-scale game art production?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We have managed large-scale 3D game art production runs. The team scales to the volume, and the production management process scales with it."
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
      "name": "3D Art",
      "item": "https://www.cobwebgames.com/3d-art"
    }
  ]
}) }} />
      {/* Hero Section */}
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Game Art Studio</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `3D Game Art Studio for Custom Models, Characters and <b>Environments</b>` }} />
              <p>Cobweb Games is a dedicated 3D game art studio building custom characters, environments, hard surface models, vehicles, and props for game projects across Unity, Unreal Engine, and proprietary pipelines. Our 3D game art services cover the full technical stack: high-poly sculpting, retopology, UV mapping, PBR texturing, rigging readiness, and engine integration. Production-ready means the asset works in the engine, not just in Marmoset.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Game Art <b>*</b> 3D Game Art <b>*</b></span>
          <span>3D Game Art <b>*</b> 3D Game Art <b>*</b></span>
          <span>3D Game Art <b>*</b> 3D Game Art <b>*</b></span>
          <span>3D Game Art <b>*</b> 3D Game Art <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-art/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>
      {/* Services Section - ONLY 3 SERVICES */}
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional 3D <b class="c-green">Game Art Services</b>` }} />
              <p>Topology is not a post-processing problem. It is a design decision made at the beginning of a model and one that determines whether the asset performs cleanly in the game engine or becomes the thing your tech artist is debugging at midnight before ship. Most 3D game art outsourcing studios think about topology after they are done making the asset look good. We think about it before we start, because a high-poly sculpt that cannot be retopologized for real-time use without restarting is not a game asset. It is a ZBrush portfolio piece. Every 3D asset Cobweb Games produces is built with the game engine as the final destination, not an afterthought.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">
            {/* Service Card 1 - 3D Character Modeling */}
            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/hard-surface.webp" alt="*" width={122} height={131} />
                  <h3>3D Character Modeling</h3>
                </div>
                <p>Character modeling for games from concept reference to engine-ready delivery. Stylized and realistic characters with topology designed for animation deformation, not just surface quality. We handle the edge loops around joints that determine whether the character moves like a character or like a mesh that is being stretched. Facial topology for blend shape support, where the brief requires it.</p>
              </div>
            </div>
            
            {/* Service Card 2 - 3D Environment Design */}
            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/environment-design.webp" alt="*" width={122} height={131} />
                  <h3>3D Environment Design</h3>
                </div>
                <p>3D environment art that fills a game world with the level of detail the gameplay actually needs at the distances the player encounters it. LOD chains built from the start, not added later when the GPU profiler causes a meeting. Modular environment design where the brief calls for it. Bespoke hero assets where it does not.</p>
              </div>
            </div>
            
            {/* Service Card 3 - 3D Hard Surface Modeling */}
            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/hard-surface.webp" alt="*" width={122} height={131} />
                  <h3>3D Hard Surface Modeling</h3>
                </div>
                <p>Weapons, vehicles, machinery, architecture, and the geometric precision that hard surface modeling requires. Clean edge flow, controlled bevels, and surface details that bake correctly from high-poly to low-poly without artifacts in the normal map.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />
      
      <Platform 
        heading="Custom 3D Art for "
        highlightText="Every"
        subheading=" Game Platform"
        platforms={threeDArtPlatforms}
      />
      
      {/* ============================================================
          WHY CHOOSE US - ONLY 3D CONTENT (3 sections)
          ============================================================ */}
      
      {/* Section 1 - Why Studios Choose Our 3D Game Art Services */}
      <WhyChooseUsSection 
        slides={threeDArtData.section1.slides}
        smHeading={threeDArtData.section1.smHeading}
        mainHeading={threeDArtData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-3d-1"
        autoplaySpeed={4000}
      />
      
      {/* Section 2 - Benefits of Professional 3D Game Art */}
      <WhyChooseUsSection 
        slides={threeDArtData.section2.slides}
        smHeading={threeDArtData.section2.smHeading}
        mainHeading={threeDArtData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-3d-2"
        autoplaySpeed={4000}
      />
      
      {/* Section 3 - Our 3D Art Production Process */}
      <WhyChooseUsSection 
        slides={threeDArtData.section3.slides}
        smHeading={threeDArtData.section3.smHeading}
        mainHeading={threeDArtData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-3d-3"
        autoplaySpeed={4500}
      />
      
      <ThreeDPortfolio />
      
      {/* ============================================================
          3D ART TEAM - with custom content passed as props
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our <b class='c-green'>3D Art</b> Team"
        teamMembers={threeDArtTeamMembers}
        imageSrc="/assets/images/mens-charc.gif"
      />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      <Reviews 
        badgeText="Client Success Stories"
        mainHeading='Trusted by <b class="c-green">Game Studios</b> Worldwide.'
        reviews={[
          {
            id: '3d-review-1',
            text: "We outsourced 3D character modeling to three studios before Cobweb. Every previous engagement had the same problem: the high-poly looked right, and the game-ready version had topology that made the animator's life difficult. Cobweb asked about our animation state machine requirements before they started modeling. The characters came back with edge loops in the right places. That is the difference between a studio that makes models and a studio that makes game assets.",
            name: 'Harry Yates',
            role: 'Technical Art Director'
          },
          {
            id: '3d-review-2',
            text: "We needed 40 game-ready environment assets in four weeks for a vertical slice. Cobweb delivered 38 in week three and two in week four. Every asset passed our engine import QA. The poly counts were within budget. The naming was clean. We had never had a delivery that clean from an external studio. We have worked with them on two projects since.",
            name: 'Larry Kevin',
            role: 'Art Producer'
          }
        ]}
      />
      <Faqs faqs={threeDArtFaqs}/>
       <FooterForm 
        heading="Hire a 3D Game Art Studio for Your Next Project!"
        description="Brief us on the asset list, the engine, the poly budget, and the timeline. We scope the production and come back with a specific plan and a specific cost."
        formTitle="Discuss Your 3D Art Requirements"
        formSubtitle="Your Project."
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}