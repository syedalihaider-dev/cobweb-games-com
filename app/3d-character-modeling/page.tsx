'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import ThreedCharactersportfolio from '@/components/ThreedCharactersportfolio';
import { WhyChooseUsSection } from '@/components/WhyChooseAbout';
import TwoDArtTeam from '@/components/TwoDteam';
import TechnologiesNew from '@/components/TechnologiesNew';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// Define the interface for ThreeDCharacterModelingData
interface Slide {
  title: string;
  description: string;
}

interface SectionData {
  smHeading: string;
  mainHeading: string;
  slides: Slide[];
}

interface ThreeDCharacterModelingData {
  section1: SectionData;
  section2: SectionData;
  section3: SectionData;
}

// ============================================================
// 3D CHARACTER MODELING "WHY CHOOSE US" CONTENT (3 sections)
// ============================================================
const threeDCharacterModelingData: ThreeDCharacterModelingData = {
  section1: {
    smHeading: "Our Process",
    mainHeading: "Our 3D Character Modeling <b>Pipeline</b>",
    slides: [
      {
        title: "Character Concept Review",
        description: "Modeling and rigging feasibility audit before sculpting. We flag design decisions that create downstream problems and propose solutions before the model exists."
      },
      {
        title: "Character Sculpting",
        description: "High-poly sculpt in ZBrush: primary form, secondary surface detail, tertiary pore and fabric passes. Approved before retopology begins."
      },
      {
        title: "Retopology",
        description: "Production mesh over the approved high-poly. Edge loops at joint locations. Face topology for deformation or blend shapes. Poly count within the specified budget."
      },
      {
        title: "UV Mapping",
        description: "Appropriate texel density for the asset's role in the scene. Seam placement that is practical for painting and invisible in context."
      },
      {
        title: "Texturing and Materials",
        description: "PBR maps in Substance Painter. Bake maps generated from the high-poly. Material assignment confirmed against the engine's material system."
      },
      {
        title: "Optimization for Game Engines",
        description: "LOD generation, collision mesh, engine import test. The asset passes the engine before it leaves the studio."
      },
      {
        title: "Quality Assurance",
        description: "Internal QA at each stage gate: concept, high-poly, retopology, UV, texture, and engine test. Problems caught inside our pipeline rather than yours."
      },
      {
        title: "Final Delivery",
        description: "Files in the formats the engine requires. Source files included. Named to your convention. Documentation for the rigging team on joint placement and blend shape targets."
      }
    ]
  },
  section2: {
    smHeading: "Industries We Serve",
    mainHeading: "3D Character Modeling Solutions for <b>Every Industry</b>",
    slides: [
      {
        title: "Video Game Development",
        description: "Characters across every platform: mobile, PC, console, VR. Technical specs calibrated to the hardware constraints of each target."
      },
      {
        title: "Animation Studios",
        description: "High-poly character models for feature and episodic animation at the surface detail level that stand up to close camera distances."
      },
      {
        title: "Film and Entertainment",
        description: "VFX-ready character models for live-action integration. Real-world proportion and surface material calibrated for the rendering pipeline."
      },
      {
        title: "VR and AR Experiences",
        description: "Characters built within the frame budget immersive platforms require. Dropping frames in VR is not a performance warning. It is a medical problem."
      },
      {
        title: "Metaverse Projects",
        description: "Avatar and virtual world character assets built to the technical specs of the platform, which are not identical to game engine requirements."
      },
      {
        title: "Advertising and Marketing",
        description: "Brand character modeling for mascot creation and campaign animation. Characters that represent the brand and animate cleanly in the formats the campaign requires."
      }
    ]
  },
  section3: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Choose Us for 3D Character <b>Modeling Services</b>?",
    slides: [
      {
        title: "Experienced Character Artists",
        description: "Our artists have shipped characters in games. They have fixed the downstream consequences of bad topology and built to avoid those decisions in the first place."
      },
      {
        title: "AAA Quality Production Standards",
        description: "Projects with AAA targets are produced to AAA technical standards. Indie projects get right-sized specifications, not lower quality."
      },
      {
        title: "Game Engine Optimization",
        description: "Characters are tested in the target engine before delivery. Unity and Unreal Engine compatibility is confirmed, not assumed."
      },
      {
        title: "Scalable Production Teams",
        description: "The team scales to project volume. Sprint-heavy periods get more capacity. Planning phases do not carry production overhead."
      },
      {
        title: "Fast Turnaround Times",
        description: "Standard character delivery from approved concept: one to two weeks. Complex heroes: two to three weeks. Dates committed at kickoff, not estimated."
      },
      {
        title: "Transparent Communication",
        description: "Production status on a defined cadence. Blockers communicated before they become delays. Feedback loops structured rather than open-ended."
      }
    ]
  }
};

// ============================================================
// 3D CHARACTER MODELING PLATFORMS / INDUSTRIES (passed as props to Platform)
// ============================================================
const threeDCharacterModelingPlatforms = [
  {
    title: "PC Games",
    description: "Higher poly budgets and complex material systems for monitor-class hardware.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Console Games",
    description: "Console-certified characters within PS5 and Xbox Series X pipeline constraints.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Mobile Games",
    description: "Optimized characters within mobile GPU and texture memory constraints.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "VR Games",
    description: "Characters within the frame budget VR requires. Frame drops in VR have consequences.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "AR Applications",
    description: "Characters that render correctly in AR lighting and scale correctly against real-world reference.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Animated Productions",
    description: "Film-quality character models for the camera distances and rendering pipelines for animation uses.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// ============================================================
// 3D CHARACTER MODELING REVIEWS (passed as props to Reviews)
// ============================================================
const threeDCharacterModelingReviews = [
  {
    id: '3d-character-review-1',
    text: "Cobweb is the first studio where the animator looked at the delivered rig-ready mesh and did not have to fix the joint influence maps before starting work. The topology was correct upon delivery. That is the difference between a studio that sculpts characters and a studio that models game characters.",
    name: 'Otto',
    role: 'Lead Animator, PC RPG Studio',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: '3d-character-review-2',
    text: "We needed creature characters for a mobile horror title with tight technical constraints. Cobweb asked technical questions in the brief that told us they understood both the design problem and the mobile pipeline problem. Delivered on time, within the poly budget. QA found nothing to report.",
    name: 'Mark Keith',
    role: 'Technical Art Director, Mobile Studio',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// 3D CHARACTER MODELING BUSINESS MODELS (passed as props to TwoDArtTeam)
// ============================================================
const threeDCharacterModelingBusinessModels = [
  {
    id: 'biz-model-1',
    title: 'Dedicated 3D Character Artists',
    number: '01',
    description: 'A named character artist placed on your project on retainer. The same person who knows your characters, pipeline, and art direction works on your project consistently.'
  },
  {
    id: 'biz-model-2',
    title: 'Fixed-Cost Character Modeling Projects',
    number: '02',
    description: 'Defined scope, defined deliverables, defined cost. For studios with a specific asset list and a budget that does not move.'
  },
  {
    id: 'biz-model-3',
    title: 'Team Augmentation Services',
    number: '03',
    description: 'Additional character modeling capacity alongside your existing team for sprints that exceed internal bandwidth.'
  },
  {
    id: 'biz-model-4',
    title: 'End-to-End Character Production',
    number: '04',
    description: 'Concept through final engine-ready delivery. The brief goes in, and the game-ready characters come out.'
  }
];

export default function Page3dCharacterModeling() {
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
    <div className="3d-character-modeling-page">
       <section className="game-banner d-flex relative">
       <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Character Modeling Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Professional 3D Character <b> Modeling </b> Services for All Your Needs.` }} />
              <p>
                A character model that looks right in the viewport and falls apart the moment it needs to animate is a solved problem in the wrong order. The topology decisions that determine correct deformation are not something you fix after the model is done. They are built into every edge loop placed around a shoulder, every ring of geometry around a knee, every decision about how the face mesh is structured for blend shape support. At Cobweb Games, our 3D character modeling services are built by artists who think about the animation rig before they start sculpting. Not after they have submitted the high-poly and moved on.
                We provide 3D character modeling for game developers, animation studios, VR experiences, and film productions. Stylized, realistic, creature, robot, and everything in between. The character arrives ready for the next pipeline stage, not requiring remediation before it gets there.
              </p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-character/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Character Modeling <b class="c-green">Services</b>` }} />
              <p>You are welcome to take advantage of our 3D character modeling services and enliven your product with fantastic creatures, functional robots, or realistic humans.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/stylized.webp" alt="*" width={122} height={131} />
                  <h3>Stylized 3D Character Modeling</h3>
                </div>
                <p>Stylized characters for mobile, PC, and indie game projects. Clean topology that deforms correctly. Surface detail appropriate for the style, not borrowed from a different visual register.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/sculpting.webp" alt="*" width={122} height={131} />
                  <h3>Realistic 3D Character Modeling</h3>
                </div>
                <p>Surface detail, skin topology, and anatomical accuracy for AAA-quality pipelines. Facial topology structured for blend shape support. Edge loops at joint locations designed for deformation correctness.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/cartoon.webp" alt="*" width={122} height={131} />
                  <h3>Cartoon Character Modeling</h3>
                </div>
                <p>Exaggerated proportions and clean surface topology that cartoon rigs demand. Cartoon deformation is not simpler than realistic deformation. Incorrect edge loops are more visible, not less, when the proportions are pushed.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/creatures.webp" alt="*" width={122} height={131} />
                  <h3>3D Creature Modeling</h3>
                </div>
                <p>Creature design and modeling for monsters, animals, and the things without a taxonomy. Anatomy research where the creature has biological logic. Creative problem-solving where it does not. Rig-ready joint placement regardless of limb count.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/surface.webp" alt="*" width={122} height={131} />
                  <h3>Hard Surface Robot Modeling</h3>
                </div>
                <p>Mechanical character modeling with the clean geometry that hard surface robots require. Articulation points designed for animation constraints that prevent intersection mid-motion.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/high-poly.webp" alt="*" width={122} height={131} />
                  <h3>High-Poly Character Modeling</h3>
                </div>
                <p>High-poly sculpting in ZBrush for the surface detail that bakes to normal and displacement maps. Pore detail. Fabric weave. Scar tissue. The information that makes a character read as a specific person.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game-modeling/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Low-Poly Character Modeling</h3>
                </div>
                <p>Polygon budgets respected from the first modeling decision. Surface reads are maintained through smart silhouette design rather than relying on polygon density.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/game-modelling.webp" alt="*" width={122} height={131} />
                  <h3>Game-Ready Character Models</h3>
                </div>
                <p>Correct scale, clean normals, proper UV unwrapping, poly count within spec. Game-ready is defined in the brief and confirmed in the delivery checklist, not assumed.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-art/character-animation.webp" alt="*" width={122} height={131} />
                  <h3>Character Retopology Services</h3>
                </div>
                <p>Retopology of existing high-poly sculpts. Edge loop correction, joint placement optimization. Turns a sculpt that looks correct into a mesh that deforms correctly.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-character/unwrapping.webp" alt="*" width={122} height={131} />
                  <h3>UV Unwrapping and Character Texturing</h3>
                </div>
                <p>UV unwrapping with efficient texel density and sensible seam placement. PBR texture maps in Substance Painter: albedo, roughness, metallic, normal, and emissive at the resolution the engine budget supports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThreedCharactersportfolio />

      {/* ============================================================
          PLATFORM / INDUSTRIES SECTION
          ============================================================ */}
      <CtaTwo />
      
      <Platform 
        heading="Industries We Support with"
        highlightText="Character Modeling"
        subheading="Services"
        platforms={threeDCharacterModelingPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - 3D CHARACTER MODELING CONTENT (3 sections)
          ============================================================ */}
      
      {/* Section 1 - Our 3D Character Modeling Pipeline */}
      <WhyChooseUsSection 
        slides={threeDCharacterModelingData.section1.slides}
        smHeading={threeDCharacterModelingData.section1.smHeading}
        mainHeading={threeDCharacterModelingData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-char-1"
        autoplaySpeed={4000}
      />
      
      {/* Section 2 - 3D Character Modeling Solutions for Every Industry */}
      <WhyChooseUsSection 
        slides={threeDCharacterModelingData.section2.slides}
        smHeading={threeDCharacterModelingData.section2.smHeading}
        mainHeading={threeDCharacterModelingData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-char-2"
        autoplaySpeed={4000}
      />
      
      {/* Section 3 - Why Choose Us for 3D Character Modeling Services */}
      <WhyChooseUsSection 
        slides={threeDCharacterModelingData.section3.slides}
        smHeading={threeDCharacterModelingData.section3.smHeading}
        mainHeading={threeDCharacterModelingData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-char-3"
        autoplaySpeed={4500}
      />
       <TwoDArtTeam 
        badgeText="Our Business Models"
        mainHeading="Our <b class='c-green'>Business Models</b>"
        teamMembers={threeDCharacterModelingBusinessModels}
        imageSrc="/assets/images/mens-charc.gif"
      />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <TechnologiesNew />
      <Reviews 
        badgeText="Client Testimonials"
        mainHeading='What Our Clients Say About Our <b class="c-green">Character Modeling</b> Services?'
        reviews={threeDCharacterModelingReviews}
      />
      <Faqs />
      <FooterForm />
    </div>
  );
}