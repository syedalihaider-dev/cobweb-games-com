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
// 3D ENVIRONMENT DESIGN - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const threeDEnvironmentData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>3D Environment Design</b> Services?",
    slides: [
      {
        title: "Experienced Environment Artists",
        description: "Our environment artists have shipped levels. They have fixed the collision mesh that did not match the visual mesh and the foliage overdraw that killed certification. They check for these things because they have seen what happens when you do not."
      },
      {
        title: "AAA-Quality Environment Assets",
        description: "The quality target is defined by the brief. AAA-visual-target projects get AAA technical treatment. Mobile projects get the optimization rigor that mobile hardware demands."
      },
      {
        title: "Optimized Production Pipelines",
        description: "Modular kit systems designed for maximum visual variety with minimum draw call cost. Performance is in the production spec, not a separate engagement afterward."
      },
      {
        title: "Flexible Outsourcing Models",
        description: "Project-based delivery, dedicated artist placement, or team augmentation. Structured around what the production requires."
      },
      {
        title: "Scalable Art Teams",
        description: "Environment push before a demo does not need the same team as ongoing content production. We staff to the schedule."
      },
      {
        title: "Fast Turnaround and Reliable Delivery",
        description: "Single interior scene: one to two weeks. Exterior environment set: two to four weeks. Dates at kickoff, not estimates."
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Environment assets are tested across the target platforms in the brief. Platform-specific export configurations documented and delivered."
      },
      {
        title: "Quality Assurance at Every Stage",
        description: "Internal QA at blockout, asset, lighting, and engine integration stages. Problems caught before they reach your pipeline."
      }
    ]
  },
  section2: {
    smHeading: "Benefits of Professional 3D Environment Design",
    mainHeading: "Benefits of Professional <b>3D Environment Design</b>",
    slides: [
      {
        title: "Create Immersive Game Worlds",
        description: "Environment art that makes a player feel like they are somewhere specific, not inside a level with geometry."
      },
      {
        title: "Improve Gameplay Atmosphere",
        description: "Lighting and environmental detail that support the emotional register the gameplay requires. Horror spaces that feel wrong. Action spaces that read quickly."
      },
      {
        title: "Strengthen Visual Storytelling",
        description: "Environmental storytelling through wear and contextual detail that communicates what happened in a space without a text log explaining it."
      },
      {
        title: "Enhance Player Engagement",
        description: "A world that looks coherent keeps players in it. Inconsistent environment art breaks the immersion that everything else is working to build."
      },
      {
        title: "Support Consistent Art Direction",
        description: "A dedicated studio with a named art director and a documented visual bible maintains consistency across years of production."
      },
      {
        title: "Optimize Performance Across Platforms",
        description: "Environment art built with performance in mind ships without a performance crisis."
      }
    ]
  },
  section3: {
    smHeading: "Our Pipeline",
    mainHeading: "Our 3D Environment Design <b>Pipeline</b>",
    slides: [
      {
        title: "Project Discovery and Planning",
        description: "Platform target, frame budget, poly budget, and art direction established before any asset production begins."
      },
      {
        title: "Concept Art and Reference Collection",
        description: "Visual direction locked before the 3D work begins. Changes at this stage cost nothing."
      },
      {
        title: "Environment Blockout and Layout",
        description: "Grey box confirming spatial relationships and gameplay flow before production art begins."
      },
      {
        title: "3D Modeling and Sculpting",
        description: "Production assets built to the approved blockout and visual reference within established technical constraints."
      },
      {
        title: "UV Mapping and Texturing",
        description: "Appropriate texel density. PBR texturing in Substance Painter. Material assignment confirmed against the engine's material system."
      },
      {
        title: "Lighting and Atmosphere Setup",
        description: "Scene lighting for the approved visual reference. Baked at a resolution appropriate for the asset's screen footprint."
      },
      {
        title: "Optimization and QA",
        description: "Draw call review, LOD validation, collision check, and engine import test. The environment passes the engine before it leaves."
      },
      {
        title: "Engine Integration and Final Delivery",
        description: "Assets packaged for integration with technical documentation. Source files included. Named to your convention."
      }
    ]
  }
};

// ============================================================
// 3D ENVIRONMENT DESIGN - PLATFORMS (passed as props to Platform)
// ============================================================
const threeDEnvironmentPlatforms = [
  {
    title: "Mobile Game Environments",
    description: "Low draw count, compressed texture formats, and a design discipline that creates readable spaces within a tight polygon budget.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC Game Environments",
    description: "Higher detail density, complex material layering, and environment art that rewards the player who looks at a monitor rather than a phone screen.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "VR and AR Environment Design",
    description: "VR environments at the frame budget for stereoscopic rendering require. AR environments with the scale accuracy and real-world overlay demands.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Console Game Environments",
    description: "Console-targeted environment art within the memory budgets and certification requirements of current-generation hardware.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Metaverse and Virtual Worlds",
    description: "Virtual world environment design to platform-specific technical specifications, which differ from standard game engine requirements.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// 3D ENVIRONMENT DESIGN - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const threeDEnvironmentTeam = [
  {
    id: 'env-team-1',
    title: 'Art Director',
    number: '01',
    description: 'Visual and technical direction across all environment projects.'
  },
  {
    id: 'env-team-2',
    title: 'Environment Artists',
    number: '02',
    description: '3D environment modeling, asset production, and world-building specialists.'
  },
  {
    id: 'env-team-3',
    title: 'Level Designers',
    number: '03',
    description: 'Blockout creation and gameplay-spatial integration support.'
  },
  {
    id: 'env-team-4',
    title: 'Lighting Artists',
    number: '04',
    description: 'Scene lighting, atmosphere, and bake optimization.'
  },
  {
    id: 'env-team-5',
    title: 'Texture and Material Artists',
    number: '05',
    description: 'PBR material authoring and environment texture production.'
  },
  {
    id: 'env-team-6',
    title: 'Technical Artists',
    number: '06',
    description: 'LOD management, optimization, pipeline integration, and engine QA.'
  },
  {
    id: 'env-team-7',
    title: 'QA Specialists',
    number: '07',
    description: 'Engine import testing, performance validation, and delivery checklist.'
  }
];

// ============================================================
// 3D ENVIRONMENT DESIGN - REVIEWS (passed as props to Reviews)
// ============================================================
const threeDEnvironmentReviews = [
  {
    id: 'env-review-1',
    text: "We outsourced environment art to Cobweb for a PC open world. The first question they asked was our frame budget per scene, not what we wanted it to look like. The environment art had zero performance remediation during integration. The first time that has happened with external environment art on any project I have produced.",
    name: 'Larry',
    role: 'Executive Producer, PC Game Studio',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'env-review-2',
    text: "I needed stylized mobile environments within a tight draw call budget. Cobweb built performance into the brief from the first session. I shipped with the environment art contributing three draw calls per scene. I had budgeted eight.",
    name: 'Jonah',
    role: 'Producer',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// 3D ENVIRONMENT DESIGN - FAQS (passed as props to Faqs)
// ============================================================
const threeDEnvironmentFaqs = [
  {
    id: 1,
    question: 'What is 3D environment design in games?',
    answer: '3D environment design covers all visual elements forming a game world: terrain, buildings, props, vegetation, lighting, and atmosphere. It determines what a player sees when they look at the world they are playing in.'
  },
  {
    id: 2,
    question: 'How much does 3D environment design cost?',
    answer: 'Single interior scene: $1,500 to $5,000. Exterior environment set with terrain: $3,000 to $12,000. Full modular environment kit: $5,000 to $20,000. Itemized quotes within 48 hours.'
  },
  {
    id: 3,
    question: 'How long does it take to create a 3D game environment?',
    answer: 'Single interior scene: one to two weeks. Exterior with terrain and props: two to four weeks. Large-scale modular kit: four to eight weeks. Dates confirmed at kickoff.'
  },
  {
    id: 4,
    question: 'Do you create environments for Unreal Engine and Unity?',
    answer: 'Yes. Both are primary delivery targets. Engine-specific configurations, material documentation, and import testing are standard in every delivery.'
  },
  {
    id: 5,
    question: 'Can you optimize environments for mobile games?',
    answer: 'Yes. Mobile environment optimization is built into the production spec from day one. Draw counts, texture compression, and LOD chains designed for mobile hardware from the first mesh.'
  },
  {
    id: 6,
    question: 'Do you provide stylized and realistic environment art?',
    answer: 'Yes. Style is established in the concept approval stage and maintained through a visual bible every team member works from.'
  },
  {
    id: 7,
    question: 'What software is used for 3D environment modeling?',
    answer: 'Maya, Blender, and 3ds Max for modeling. Houdini for procedural generation. ZBrush for organic detail. Substance Painter for texturing. Unreal Engine and Unity for integration and lighting.'
  },
  {
    id: 8,
    question: 'What is the difference between environment art and level design?',
    answer: 'Level design defines spatial layout and gameplay flow. Environment art makes that structure visually complete. We provide environment art and level design support, not standalone level design.'
  },
  {
    id: 9,
    question: 'What are modular environments in games?',
    answer: 'Standardized, pre-built pieces that snap together to form varied spaces. A well-designed kit produces high visual variety from a limited asset count with minimum draw call cost.'
  },
  {
    id: 10,
    question: 'Do you provide source files and ownership rights?',
    answer: 'Full source files and full IP ownership transfer on final payment. Your world, your assets, your rights.'
  },
  {
    id: 11,
    question: 'Can you work with existing game assets and pipelines?',
    answer: 'Yes. Pipeline audit and asset library review are part of every discovery session. We integrate into established pipelines rather than asking studios to adapt to ours.'
  },
  {
    id: 12,
    question: 'Can I hire dedicated environment artists?',
    answer: 'Yes. Dedicated environment artists on retainer for studios with ongoing content production. Same artists, same pipeline, consistent output.'
  },
  {
    id: 13,
    question: 'What file formats do you deliver?',
    answer: 'FBX and OBJ for meshes. PNG and TGA for textures. SBSAR for Substance materials. Source files in native format. Specs confirmed in the brief.'
  },
  {
    id: 14,
    question: 'Can you handle large-scale environment production?',
    answer: 'Yes. Large-scale environment production is on our record. Team and production management scale to the volume.'
  }
];

// ============================================================
// 3D ENVIRONMENT DESIGN - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const threeDEnvironmentTechnologies = [
  {
    id: 'tech-1',
    name: "Unreal Engine",
    description: "Primary integration and lighting. Nanite and Lumen support where applicable.",
    image: "/assets/images/techs/logo-02.webp",
    width: 263,
    height: 263,
  },
  {
    id: 'tech-2',
    name: "Unity",
    description: "Environment integration, HDRP and URP material validation.",
    image: "/assets/images/techs/unity.webp",
    width: 127,
    height: 140,
  },
  {
    id: 'tech-3',
    name: "Blender",
    description: "Open pipeline modeling and terrain work.",
    image: "/assets/images/techs/logo-01.webp",
    width: 263,
    height: 263,
  },
  {
    id: 'tech-4',
    name: "Maya",
    description: "Production mesh preparation and UV work.",
    image: "/assets/images/techs/maya.png",
    width: 554,
    height: 554,
  },
  {
    id: 'tech-5',
    name: "3ds Max",
    description: "Architectural and hard surface environment modeling.",
    image: "/assets/images/techs/3ds-img.png",
    width: 225,
    height: 225,
  },
  {
    id: 'tech-6',
    name: "Houdini",
    description: "Procedural environment generation and destruction simulation.",
    image: "/assets/images/techs/Houdini3D_icon.png",
    width: 520,
    height: 520,
  },
  {
    id: 'tech-7',
    name: "Substance Painter",
    description: "PBR texture authoring for unique environment assets.",
    image: "/assets/images/techs/substance painter.png",
    width: 320,
    height: 320,
  },
  {
    id: 'tech-8',
    name: "ZBrush",
    description: "Organic surface detail for terrain features and hero environment props.",
    image: "/assets/images/techs/zbrush.webp",
    width: 2000,
    height: 2000,
  }
];
const threeDEnvironmentCtaData = {
  heading: 'Types of 3D Environments <br/> <b class="c-green">We Create?</b> ',
  headingHighlight: ' We Create?',
  description: 'Fantasy worlds, sci-fi environments, medieval settings, urban cities, natural landscapes, industrial spaces, interior scenes, exterior environments, post-apocalyptic worlds, and stylized game worlds across every visual register. If the game world needs it, we have built it.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};
export default function Page3dEnvironmentDesign() {
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
    <div className="3d-environment-design-page">
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Environment Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `3D Environment Design Services for Immersive <b>Game Worlds.</b>` }} />
              <p>The fastest way to discover that your 3D environment was built without performance in mind is the GPU profiler. Not the art review. Not the playtest. The profiler, at the point where fixing it is expensive, and postponing the launch is the alternative. Draw calls from non-batched static meshes. Overdraw from layered foliage that looked correct in the editor. Lightmap resolution on assets is never closer to the camera than fifty meters. At Cobweb Games, our 3D environment design services are built with the performance budget in the same document as the art direction brief. We do not produce environment art that requires a separate optimization pass. We build it optimized.</p>
              <p>We are a dedicated 3D environment art studio for game projects across Unity, Unreal Engine, and proprietary pipelines. Stylized and realistic environments, open worlds, interior scenes, and modular environment systems for mobile, PC, console, VR, and AR.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-environment/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional 3D Environment Design <b class="c-green">Services</b>` }} />
              <p>Every environment we build is designed for the gameplay it needs to support and the hardware it needs to run on.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-stylized.webp" alt="*" width={122} height={131} />
                  <h3>3D Environment Modeling</h3>
                </div>
                <p>Production-quality environment modeling built to the poly budget established in the pipeline brief. Not approximated and optimized later. Built to budget from the first mesh.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-cartoon.webp" alt="*" width={122} height={131} />
                  <h3>Stylized Environment Design</h3>
                </div>
                <p>Stylized game worlds with consistent visual language and the specific technical requirements that stylized art actually demands. Stylized is not lower quality. It is differently demanding.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-photorealistic.webp" alt="*" width={122} height={131} />
                  <h3>Realistic Environment Creation</h3>
                </div>
                <p>Realistic 3D environments with PBR material accuracy, photoreference-calibrated lighting, and surface detail appropriate to the camera distances the game uses.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-stylized.webp" alt="*" width={122} height={131} />
                  <h3>Open World Environment Design</h3>
                </div>
                <p>Open world environments with distance LOD systems, streaming region planning, and the LOD chain management that open world scale demands. Art that works when the camera is anywhere in it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/environment-props.webp" alt="*" width={122} height={131} />
                  <h3>Level Design Support</h3>
                </div>
                <p>Art implementation for level design blockouts. Production art placed to maintain the spatial relationships and gameplay affordances the level designer established.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-photorealistic.webp" alt="*" width={122} height={131} />
                  <h3>Terrain and Landscape Design</h3>
                </div>
                <p>Terrain modeling, material blending, foliage within the draw call budget, and biome transition zones that determine whether the world reads as coherent or tiled.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/object.webp" alt="*" width={122} height={131} />
                  <h3>Modular Environment Creation</h3>
                </div>
                <p>Modular environment kits designed for maximum visual variety with minimum draw call cost. The system is designed for reuse from the first piece, not discovered as inadequate on the fourth application.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/environment-props.webp" alt="*" width={122} height={131} />
                  <h3>3D Prop Modeling</h3>
                </div>
                <p>Environmental props, furniture, debris, and the supporting cast that make a game world feel inhabited. Consistent scale. Named to your convention.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Environment Texturing and Materials</h3>
                </div>
                <p>PBR material authoring in Substance Painter. Tileable texture sets for surfaces. Unique passes for hero assets. Material variants within shared atlases where the budget rewards it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-cartoon.webp" alt="*" width={122} height={131} />
                  <h3>Lighting and Atmosphere Design</h3>
                </div>
                <p>Lighting that serves gameplay readability and visual tone simultaneously. Baked at the resolution the asset&apos;s screen footprint requires, not applied as a default setting.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Environment Optimization</h3>
                </div>
                <p>Draw call reduction, occlusion setup, texture streaming configuration, and LOD chain validation. The technical layer that keeps environment art from becoming the performance conversation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-environment/object.webp" alt="*" width={122} height={131} />
                  <h3>Game-Ready Environment Assets</h3>
                </div>
                <p>Assets that pass engine import cleanly, integrate with the existing material system, and perform within the frame budget the game&apos;s minimum spec requires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo 
  heading={threeDEnvironmentCtaData.heading}
  description={threeDEnvironmentCtaData.description}
  imageSrc={threeDEnvironmentCtaData.imageSrc}
/>

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Custom 3D Environments for "
        highlightText="Every"
        subheading=" Game Platform"
        platforms={threeDEnvironmentPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - 3 SECTIONS
          ============================================================ */}
      
      {/* Section 1 - Why Studios Choose Our 3D Environment Design Services */}
      <WhyChooseUsSection 
        slides={threeDEnvironmentData.section1.slides}
        smHeading={threeDEnvironmentData.section1.smHeading}
        mainHeading={threeDEnvironmentData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-env-1"
        autoplaySpeed={4000}
      />
      
      {/* Section 2 - Benefits of Professional 3D Environment Design */}
      <WhyChooseUsSection 
        slides={threeDEnvironmentData.section2.slides}
        smHeading={threeDEnvironmentData.section2.smHeading}
        mainHeading={threeDEnvironmentData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-env-2"
        autoplaySpeed={4000}
      />
      
      {/* Section 3 - Our 3D Environment Design Pipeline */}
      <WhyChooseUsSection 
        slides={threeDEnvironmentData.section3.slides}
        smHeading={threeDEnvironmentData.section3.smHeading}
        mainHeading={threeDEnvironmentData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-env-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our <b class='c-green'>Environment Art</b> Team"
        teamMembers={threeDEnvironmentTeam}
        imageSrc="/assets/images/mens-charc.gif"
      />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      {/* ============================================================
          TECHNOLOGIES SECTION
          ============================================================ */}
     <TechnologiesNew techItems={threeDEnvironmentTechnologies} />

     <ThreeDEnvironmentPortfolio />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios Worldwide!"
        mainHeading='Client <b class="c-green">Success Stories</b>'
        reviews={threeDEnvironmentReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={threeDEnvironmentFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a 3D Environment Design Studio for Your Next Project!"
        description="Brief us on the world, the engine, the performance budget, and the timeline. We scope the production and come back with a specific plan."
        formTitle="Discuss Your Environment Art Requirements"
        formSubtitle="Request a Custom Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
