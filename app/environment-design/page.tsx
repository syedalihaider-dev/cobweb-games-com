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
// ENVIRONMENT DESIGN - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const environmentDesignData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>Environmental Design</b> Services",
    slides: [
      {
        title: "Experienced Environment Designers",
        description: "Our environment designers have worked on shipped games. They understand the difference between environment art that looks good in a concept and one that serves gameplay in the final build."
      },
      {
        title: "Creative World Building Expertise",
        description: "World-building is a design discipline. The visual rules of a game world need to be internally consistent, visually distinctive, and flexible enough to sustain a full production without running out of design language."
      },
      {
        title: "Gameplay-Oriented Environment Planning",
        description: "Environment design that considers gameplay flow, player navigation, and the visual affordances that tell a player where they can and cannot go without a UI indicator."
      },
      {
        title: "Strong Visual Storytelling",
        description: "Environments that communicate narrative context through visual design rather than requiring text or dialogue to explain what has happened in this space."
      },
      {
        title: "Consistent Art Direction",
        description: "A named art director reviewing every environment design ensures the game world maintains visual coherence across every area produced over the full production timeline."
      },
      {
        title: "Collaborative Design Process",
        description: "Environment design was developed with the client's game designer and narrative team, not produced in isolation from the gameplay systems the environment needs to support."
      },
      {
        title: "Scalable Creative Teams",
        description: "Single environment concept art for a project pitch through full visual development for an open-world game. The team scales to the production requirement."
      },
      {
        title: "Quality Review at Every Stage",
        description: "Internal review at thumbnail, at rough concept, and at final design before client delivery. Visual consistency and design integrity are checked before the production investment is committed."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Professional <b>Environment Design</b>",
    slides: [
      {
        title: "Create Immersive Game Worlds",
        description: "A player who believes in the world they are in stays in the game. Environment design is the production investment that creates that belief."
      },
      {
        title: "Support Better Level Planning",
        description: "Environment concepts produced before level design begins give the level designer the visual vocabulary to plan spaces that serve gameplay and narrative simultaneously."
      },
      {
        title: "Strengthen Environmental Storytelling",
        description: "Environment design that carries narrative information reduces the load on dialogue and cutscenes and creates the ambient storytelling that players discover rather than receive."
      },
      {
        title: "Establish a Consistent Visual Identity",
        description: "A game world with a consistent visual identity creates the recognition and community around the setting that sustains a franchise beyond the first title."
      },
      {
        title: "Improve Player Immersion",
        description: "Environments that feel like real places with history and function create the immersion that keeps players engaged beyond the gameplay systems alone."
      },
      {
        title: "Accelerate Art Production",
        description: "Comprehensive environment design documentation produced at the concept stage eliminates the visual ambiguity that slows 3D production and generates expensive revision cycles."
      }
    ]
  },
  section3: {
    smHeading: "Our Workflow",
    mainHeading: "Our Environment Design <b>Workflow</b>",
    slides: [
      {
        title: "Creative Brief and Discovery",
        description: "Game genre, visual register, narrative context, and platform requirements are established before any design work begins."
      },
      {
        title: "Research and Visual References",
        description: "Reference collection that establishes the visual territory without copying from existing properties."
      },
      {
        title: "World Building Strategy",
        description: "The visual rules of the world are defined: what exists, why it looks the way it does, and how the different areas relate visually."
      },
      {
        title: "Environment Sketches and Thumbnails",
        description: "Rapid exploration of multiple design directions. The creative decision lives at the thumbnail stage."
      },
      {
        title: "Composition and Layout Planning",
        description: "Space, scale, and visual hierarchy are established in the refined concept before detail rendering begins."
      },
      {
        title: "Mood and Color Exploration",
        description: "Lighting, color, and atmospheric treatment are explored and approved before final illustration production."
      },
      {
        title: "Client Feedback and Design Iterations",
        description: "Structured feedback rounds with documented intent. Changes are confirmed before they are executed."
      },
      {
        title: "Final Environment Concept Delivery",
        description: "Final concepts, style guide documentation, and production reference packages delivered for 3D handoff."
      }
    ]
  }
};

// ============================================================
// ENVIRONMENT DESIGN - PLATFORMS (passed as props to Platform)
// ============================================================
const environmentDesignPlatforms = [
  {
    title: "Fantasy Games",
    description: "Fantasy environment design with the internal visual logic that distinguishes a believable magical world from one that borrows its aesthetics from existing IP.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Sci-Fi Games",
    description: "Science fiction environment design where the technology, social structure, and material language of the world are visible in the design of every space the player moves through.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Action and Adventure Games",
    description: "Environment design for action games where the level layout, the visual affordances, and the lighting all contribute to gameplay readability as well as atmosphere.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Horror Games",
    description: "Horror environment design where discomfort is structural, not decorative. The space itself creates unease before anything moves in it.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Strategy Games",
    description: "Top-down environment design with the visual clarity, unit readability, and resource differentiation that strategy game environments require.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// ENVIRONMENT DESIGN - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const environmentDesignTeam = [
  {
    id: 'env-design-team-1',
    title: 'Environment Concept Artists',
    number: '01',
    description: 'Concept illustration and visual exploration specialists.'
  },
  {
    id: 'env-design-team-2',
    title: 'Environment Designers',
    number: '02',
    description: 'Space planning, visual logic, and design system development.'
  },
  {
    id: 'env-design-team-3',
    title: 'World Building Specialists',
    number: '03',
    description: 'Narrative integration and world-building documentation.'
  },
  {
    id: 'env-design-team-4',
    title: 'Art Directors',
    number: '04',
    description: 'Visual direction and quality standard across all environment work.'
  },
  {
    id: 'env-design-team-5',
    title: 'Visual Development Artists',
    number: '05',
    description: 'Atmosphere, mood, and color system development.'
  },
  {
    id: 'env-design-team-6',
    title: 'Creative Leads',
    number: '06',
    description: 'Production coordination and creative direction across the environment design team.'
  }
];

// ============================================================
// ENVIRONMENT DESIGN - REVIEWS (passed as props to Reviews)
// ============================================================
const environmentDesignReviews = [
  {
    id: 'env-design-review-1',
    text: "We hired Cobweb to develop the visual world for a new IP. No existing style guide. No reference art. A brief and a tone. They delivered a complete visual development package that our 3D team built directly without requesting a single additional concept. The world has a visual consistency that we were not confident we could achieve, starting from nothing. We were wrong to doubt them.",
    name: 'Kimmy',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'env-design-review-2',
    text: "Our horror game needed environments that were uncomfortable before anything happened in them. Most environment designers produce settings that become horror when you add the lighting and sound. Cobweb designed the space itself to be the horror. That is a completely different brief, and they understood it immediately.",
    name: 'Hazey Wick',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'env-design-review-3',
    text: "We needed environment concepts for a strategy game where clarity is a gameplay requirement. Every other environment design brief I have ever given has prioritized atmosphere. Cobweb asked which units would be using the space and designed around the tactical needs without losing the visual quality. That combination was new.",
    name: 'Mark Keith',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// ENVIRONMENT DESIGN - FAQS (passed as props to Faqs)
// ============================================================
const environmentDesignFaqs = [
  {
    id: 1,
    question: 'What are environment design services?',
    answer: 'Environment design services cover the visual development of game spaces: the concept art, mood boards, style guides, and design documentation that define what a game environment looks like before 3D production begins.'
  },
  {
    id: 2,
    question: 'What\'s the difference between environment design and 3D environment modeling?',
    answer: 'Environment design is the concept and visual development stage. Environment modeling is the 3D production stage. Design precedes modeling. A well-designed environment concept makes the 3D production faster and more accurate.'
  },
  {
    id: 3,
    question: 'Can you create environment concepts for existing games?',
    answer: 'Yes. DLC locations, seasonal environments, and expansion world areas all require environment design work within an established visual system. We brief from the existing art direction and extend it.'
  },
  {
    id: 4,
    question: 'How long does an environment design project take?',
    answer: 'A single environment concept package takes one to two weeks from brief to delivery. Full world-building development for a new IP takes four to eight weeks, depending on the scope of the visual system being established.'
  },
  {
    id: 5,
    question: 'Do you design environments for different art styles?',
    answer: 'Yes. The design process is calibrated to the visual style the game requires. Stylized, realistic, and everything in between are handled with equal production rigor.'
  },
  {
    id: 6,
    question: 'Can you create mood boards and visual references?',
    answer: 'Yes. Mood board development is a standard component of the environment design process. It is the stage where the visual direction is confirmed before the production investment is committed.'
  },
  {
    id: 7,
    question: 'Do you provide environment design documentation?',
    answer: 'Yes. Style guides, material palettes, design rules, and production documentation are standard deliverables. Documentation is what prevents the environment from becoming visually inconsistent across a production timeline.'
  },
  {
    id: 8,
    question: 'Can your concepts be used for 3D production?',
    answer: 'Yes. Our environment concepts are produced specifically as production reference: turnarounds, material callouts, proportion notes, and the design documentation the 3D team needs to build accurately from the concept.'
  },
  {
    id: 9,
    question: 'Who owns the environment artwork after project completion?',
    answer: 'Full IP ownership of all environment concepts and documentation transfers to you on final payment. We retain no rights to use, reference, or repurpose the work.'
  },
  {
    id: 10,
    question: 'Can you work with our existing art direction?',
    answer: 'Yes. Working within an established visual system is a specific design skill that requires understanding the rules before extending them. We start with a thorough art direction review before producing any new concepts.'
  },
  {
    id: 11,
    question: 'What deliverables are included in an environment design project?',
    answer: 'Final concept illustrations, mood boards, style guide documentation, material palette references, and design notes. All deliverables in the formats specified at the brief stage.'
  }
];

// ============================================================
// ENVIRONMENT DESIGN - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const environmentDesignTechnologies = [
  {
    id: 'tech-1',
    name: 'Adobe Photoshop',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Concept art production, color exploration, and final illustration rendering.'
  },
  {
    id: 'tech-2',
    name: 'Blender',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: '3D blockout and perspective reference for environment concept development.'
  },
  {
    id: 'tech-3',
    name: 'Autodesk Maya',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: '3D environment structure development and rendering reference.'
  },
  {
    id: 'tech-4',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Real-time environment visualization and lighting reference production.'
  },
  {
    id: 'tech-5',
    name: 'Unity',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Environment concept validation in the target game engine context.'
  },
  {
    id: 'tech-6',
    name: 'PureRef',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Reference collection and visual research organization.'
  },
  {
    id: 'tech-7',
    name: 'Figma',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Design documentation, style guide production, and team collaboration.'
  },
  {
    id: 'tech-8',
    name: 'Miro',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'World-building documentation and visual development planning.'
  }
];

// ============================================================
// ENVIRONMENT DESIGN - CTA DATA
// ============================================================
const environmentDesignCtaData = {
  heading: 'Bring Your Ideas to <b class="c-green">Playable Reality!</b>',
  headingHighlight: 'Playable Reality!',
  description: 'The gap between a game idea and a game level is where most game projects stall. The idea is clear. The gameplay is designed. The assets are planned. And then the level design process begins, and it becomes apparent that nobody has made the decisions that determine whether any of those assets will produce an experience worth having. At Cobweb Games, we make those decisions as a production discipline with a documented methodology, not as a creative exercise that happens to also produce a level. Brief us on the game. We will produce the level.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function EnvironmentDesign() {
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
    <div className="environment-design-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Environment Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Environment Design Services for Games & <b>Hyper-Interactive Worlds.</b>` }} />
              <p>The environment is the game&apos;s argument that the world it is set in is worth spending time in. A player who does not believe in the world exits the game. Not because the gameplay was poor. Because the space the gameplay happened in did not make them feel like they were anywhere real. Environmental design is not set dressing. It is the foundational credibility claim the game makes to the player before a single mechanic is encountered. At Cobweb Games, our environment design services are built around that claim. What does this world need to feel like? What does the lighting communicate before the player reads a single word? What does the material language tell the player about the history of this place? Those questions live in the brief before the first thumbnail is drawn.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/environment-design/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Environment Design <b class="c-green">Services</b>` }} />
              <p>Environment design at every stage, from initial visual development through production-ready documentation.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/concept-design.webp" alt="*" width={122} height={131} />
                  <h3>Game Environment Concept Art</h3>
                </div>
                <p>Environment concept art that establishes the visual rules of a game world before the 3D production begins. The concept is the design decision. The 3D model is its execution.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/art-modeling.webp" alt="*" width={122} height={131} />
                  <h3>World Building and Visual Development</h3>
                </div>
                <p>Visual development that defines the logic of a game world: what exists in this setting, why it looks the way it does, and how the different areas of the world relate to each other visually.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/modular.webp" alt="*" width={122} height={131} />
                  <h3>Level Theme Development</h3>
                </div>
                <p>Visual themes for individual levels and biomes within a game world. The aesthetic rules that make each area feel distinct from the others while belonging to the same visual system.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/lighting-materials.webp" alt="*" width={122} height={131} />
                  <h3>Environment, Mood, and Atmosphere Design</h3>
                </div>
                <p>Lighting language, color palette, and atmospheric treatment establish the emotional register of each environment before the player encounters its narrative content.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/animation-vfx.webp" alt="*" width={122} height={131} />
                  <h3>Landscape and Terrain Concepts</h3>
                </div>
                <p>Natural terrain, geological formations, and landscape design with the visual logic that distinguishes an environment that feels like a specific place from one that feels like a collection of assets.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/optimization.webp" alt="*" width={122} height={131} />
                  <h3>Architectural Environment Concepts</h3>
                </div>
                <p>Built environment design with the cultural, historical, and functional logic that makes architecture feel like it was built by people who had reasons, not assembled from a kit.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/concept-design.webp" alt="*" width={122} height={131} />
                  <h3>Interior Environment Design</h3>
                </div>
                <p>Interior space design with the lighting, material, and object language that communicates what kind of space this is and who lives or works in it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/art-modeling.webp" alt="*" width={122} height={131} />
                  <h3>Exterior Environment Design</h3>
                </div>
                <p>Open exterior environments with the scale management, distance LOD planning, and visual hierarchy that outdoor game spaces require.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/modular.webp" alt="*" width={122} height={131} />
                  <h3>Environmental Storytelling</h3>
                </div>
                <p>Visual storytelling through the environment itself: the damage that communicates what happened here, the objects that communicate who lives here, and the light that communicates what time it is in the narrative.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/lighting-materials.webp" alt="*" width={122} height={131} />
                  <h3>Visual Style Development</h3>
                </div>
                <p>The visual rules that govern every design decision in the game: what materials exist, what colors are permitted, what design language characterizes structures and objects within the world.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/animation-vfx.webp" alt="*" width={122} height={131} />
                  <h3>Environment Design Documentation</h3>
                </div>
                <p>Style guides, material palettes, design rules, and the documentation that give every team member working on the environment a clear and consistent production target.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/environment-design/optimization.webp" alt="*" width={122} height={131} />
                  <h3>Lighting and Materials</h3>
                </div>
                <p>Lighting design documentation and material library specifications that establish the visual quality standard for the 3D environment production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={environmentDesignCtaData.heading}
        description={environmentDesignCtaData.description}
        imageSrc={environmentDesignCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Custom Environment Design for "
        highlightText="Every"
        subheading=" Game Genre"
        platforms={environmentDesignPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={environmentDesignData.section1.slides}
        smHeading={environmentDesignData.section1.smHeading}
        mainHeading={environmentDesignData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-env-design-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={environmentDesignData.section2.slides}
        smHeading={environmentDesignData.section2.smHeading}
        mainHeading={environmentDesignData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-env-design-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={environmentDesignData.section3.slides}
        smHeading={environmentDesignData.section3.smHeading}
        mainHeading={environmentDesignData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-env-design-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our <b class='c-green'>Environment Design</b> Team"
        teamMembers={environmentDesignTeam}
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
      <TechnologiesNew techItems={environmentDesignTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios and Entertainment Brands"
        mainHeading='Client <b class="c-green">Testimonials</b> and Reviews'
        reviews={environmentDesignReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={environmentDesignFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire an Environment Design Studio for Your Next Project"
        description="Tell us the game genre, the narrative context, and what the world needs to feel like. The visual brief comes from those answers."
        formTitle="Discuss Your Game World Vision"
        formSubtitle="Request a Custom Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
