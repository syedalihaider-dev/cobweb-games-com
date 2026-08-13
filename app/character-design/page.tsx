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
// CHARACTER DESIGN - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const characterDesignData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>Character Design</b> Services",
    slides: [
      {
        title: "Experienced Character Designers",
        description: "Our character designers have worked on shipped games. They understand the difference between a design that impresses in an art review and one that holds up across twelve hours of campaign gameplay."
      },
      {
        title: "Story-Driven Character Development",
        description: "Character design starts from who the character is, not what they look like. The visual follows from the character brief. That order of operations produces characters that feel like people, not costumes."
      },
      {
        title: "Production-Ready Design Pipeline",
        description: "Design documentation produced at the level the downstream team actually needs: turnarounds with consistent proportions, expression sheets with the full emotional range, and prop references that model artists can build from."
      },
      {
        title: "Flexible Art Style Adaptation",
        description: "We work across the full range of visual styles from mobile-casual stylized to AAA-adjacent photorealistic. Style direction is established from the brief and the game's existing visual identity."
      },
      {
        title: "Collaborative Creative Process",
        description: "Character design is developed with the client rather than presented as a finished direction. Feedback rounds are structured, and the design evolves with documented intent rather than accumulated guesses."
      },
      {
        title: "Fast Turnaround and Scalable Teams",
        description: "Single character designs to full cast development. Sprint-based character production for games with large NPC libraries. The team scales to the character volume the production requires."
      },
      {
        title: "Consistent Visual Direction",
        description: "A named art director reviewing every design ensures that the character cast of a game maintains visual coherence across dozens of individual designs produced over months of production."
      },
      {
        title: "Quality Assurance at Every Stage",
        description: "Internal review at concept, at refined design, and at final package before client delivery. Problems caught inside the studio rather than in the client's revision round."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Professional <b>Character Design</b>",
    slides: [
      {
        title: "Create Memorable Game Characters",
        description: "Characters that players form genuine attachments to are the ones whose design communicates personality before the first line of dialogue."
      },
      {
        title: "Strengthen Player Engagement",
        description: "Players invest more time in games whose characters they care about. Character design is the first variable in that investment."
      },
      {
        title: "Build a Consistent Game World",
        description: "A cast of characters that feels like it belongs to the same world, rather than being assembled from different visual registers, creates the coherence that world-building requires."
      },
      {
        title: "Support Brand Recognition",
        description: "Distinctive character design creates the visual identity that players recognize, fan artists recreate, and communities build around."
      },
      {
        title: "Improve Visual Storytelling",
        description: "Characters whose design communicates their role, their history, and their personality reduce the narrative load on dialogue and cutscenes."
      },
      {
        title: "Accelerate Game Production",
        description: "Clear, complete character documentation produced at the design stage eliminates the reinterpretation problems that slow production when the design documentation is ambiguous."
      }
    ]
  },
  section3: {
    smHeading: "Our Workflow",
    mainHeading: "Our Character Design <b>Workflow</b>",
    slides: [
      {
        title: "Creative Brief and Character Goals",
        description: "Character's role, personality, visual register, and animation requirements are established before any drawing begins."
      },
      {
        title: "Research and Visual References",
        description: "Reference collection that establishes the visual territory the character occupies without copying from existing properties."
      },
      {
        title: "Thumbnail Sketch Exploration",
        description: "Rapid silhouette exploration across multiple design directions. The thumbnail stage is where the design decision lives."
      },
      {
        title: "Character Silhouette Development",
        description: "Silhouette refined to the read quality the game's camera distances require. Recognizable at the viewport distance, the player actually sees the character from."
      },
      {
        title: "Costume, Props, and Personality Design",
        description: "Detail development: costume, equipment, props, and the visual personality markers that communicate character without words."
      },
      {
        title: "Color Exploration and Rendering",
        description: "Color palette development and full color render production at the quality level the brief requires."
      },
      {
        title: "Client Feedback and Iterations",
        description: "Structured feedback rounds with documented intent. Every change is confirmed before it is made."
      },
      {
        title: "Final Character Package Delivery",
        description: "Turnarounds, expression sheets, pose references, costume variations, prop documentation, and all design notes packaged for production handoff."
      }
    ]
  }
};

// ============================================================
// CHARACTER DESIGN - PLATFORMS (passed as props to Platform)
// ============================================================
const characterDesignPlatforms = [
  {
    title: "RPG Character Design",
    description: "Role-playing game character design with the narrative depth, class visual language, and customization system compatibility that RPG character design requires.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Fantasy Character Design",
    description: "Fantasy character design with the visual grammar of the genre applied to a specific world rather than borrowed from an existing property.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Sci-Fi Character Design",
    description: "Science fiction character design where the technology, the materials, and the social structure of the world are visible in the character's design.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Mobile Game Character Design",
    description: "Mobile character design with the readability, simplified surface detail, and strong silhouette that small screen sizes and casual play contexts require.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Stylized and Casual Game Characters",
    description: "Stylized character design for casual and mid-core games where the visual register is intentionally non-realistic and the design language is distinctive.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// CHARACTER DESIGN - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const characterDesignTeam = [
  {
    id: 'char-team-1',
    title: 'Character Concept Artists',
    number: '01',
    description: 'Ideation, exploration, and concept direction specialists.'
  },
  {
    id: 'char-team-2',
    title: 'Lead Character Designers',
    number: '02',
    description: 'Production-ready character design and documentation.'
  },
  {
    id: 'char-team-3',
    title: '3D Character Artists',
    number: '03',
    description: '3D character modeling, rigging prep, and texturing.'
  },
  {
    id: 'char-team-4',
    title: 'Creature Design Specialists',
    number: '04',
    description: 'Non-human character design with biological and mechanical expertise.'
  },
  {
    id: 'char-team-5',
    title: 'Art Directors',
    number: '05',
    description: 'Visual direction and quality standard across all character work.'
  },
  {
    id: 'char-team-6',
    title: 'Production Artists',
    number: '06',
    description: 'Turnarounds, expression sheets, and final documentation package production.'
  }
];

// ============================================================
// CHARACTER DESIGN - REVIEWS (passed as props to Reviews)
// ============================================================
const characterDesignReviews = [
  {
    id: 'char-review-1',
    text: "We needed a full cast of characters for a narrative RPG. Twelve unique designs across heroes, allies, and antagonists. Cobweb briefed every character on personality and role before picking up a pencil. The designs came back with the kind of visual distinctiveness that made every character immediately recognizable in gameplay. Our players named them before we did.",
    name: 'Henry Archie',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'char-review-2',
    text: "We brought Cobweb in for a creature design library for a horror mobile game. The brief was unusual. The creatures needed to be scary at the thumbnail size a mobile screen displays them at, without requiring the player to zoom in to understand the threat. Cobweb asked about the viewing distance in the brief. Nobody had ever asked us that before.",
    name: 'Sophia Arthur',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'char-review-3',
    text: "Our brand mascot went through four different design studios before Cobweb. Every previous attempt produced something that looked correct and had no personality. Cobweb started the brief by asking what the mascot would say if you called it at 2 am. That question produced a different kind of design.",
    name: 'Mathew Nathan',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// CHARACTER DESIGN - FAQS (passed as props to Faqs)
// ============================================================
const characterDesignFaqs = [
  {
    id: 1,
    question: 'What\'s the difference between 2D and 3D character design services?',
    answer: '2D character design produces flat illustration output: concept art, turnarounds, and expression sheets. 3D character design produces a dimensional model output ready for animation and engine integration. Most game productions require both stages in sequence.'
  },
  {
    id: 2,
    question: 'How long does it take to design and develop a character?',
    answer: 'A single character from brief to approved final package typically takes two to three weeks. Full cast development for a game with a large character roster is structured as a series of projects with milestone-based delivery per character group.'
  },
  {
    id: 3,
    question: 'Can you match existing art styles or character designs?',
    answer: 'Yes. Style matching and design system extension are more demanding than creating from scratch. We start with a style audit and a test character approved before the full production begins.'
  },
  {
    id: 4,
    question: 'What file formats do you deliver for characters?',
    answer: '2D designs delivered as layered PSD and flat PNG at the specified resolution. 3D characters delivered as FBX and OBJ with PBR texture sets. Source files included in the final package.'
  },
  {
    id: 5,
    question: 'Do you provide character animation or just static designs?',
    answer: 'Character design is our primary service. Character animation is a separate production stage that we also handle. The design package includes the animation documentation that makes the subsequent animation production efficient.'
  },
  {
    id: 6,
    question: 'Do you provide character turnaround and expression sheets?',
    answer: 'Yes. Turnarounds and expression sheets are standard components of every character design package. These are not optional. They are the documents that prevent the character from becoming something different every time a new team member works with the design.'
  },
  {
    id: 7,
    question: 'Can characters be prepared for Unity and Unreal Engine?',
    answer: 'Yes. Characters designed for Unity and Unreal Engine compatibility have the topology, rig-readiness documentation, and export specifications the engines require confirmed in the design brief.'
  },
  {
    id: 8,
    question: 'Can you design characters for animation as well as games?',
    answer: 'Yes. Character design for animation productions requires different documentation than game character design. Animation-specific expression sheets, action poses, and the design documentation that animators use are produced to the animation pipeline\'s requirements.'
  },
  {
    id: 9,
    question: 'Do you also create creatures, monsters, and NPCs?',
    answer: 'Yes. Creature design, monster design, and supporting NPC library development are active services. The design brief for each character type is different, and we treat the brief accordingly.'
  }
];

// ============================================================
// CHARACTER DESIGN - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const characterDesignTechnologies = [
  {
    id: 'tech-1',
    name: 'Adobe Photoshop',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: '2D character concept art, color exploration, and final illustration rendering.'
  },
  {
    id: 'tech-2',
    name: 'Blender',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: '3D character blockout and proportion visualization for design development.'
  },
  {
    id: 'tech-3',
    name: 'ZBrush',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: '3D character sculpting for detailed character surface development.'
  },
  {
    id: 'tech-4',
    name: 'Autodesk Maya',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Production-ready 3D character model development.'
  },
  {
    id: 'tech-5',
    name: 'Substance Painter',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'Character texture and material development.'
  },
  {
    id: 'tech-6',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'In-engine character visualization and lighting validation.'
  },
  {
    id: 'tech-7',
    name: 'Unity',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Character integration testing and game-context visualization.'
  },
  {
    id: 'tech-8',
    name: 'Production Art Pipelines',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Custom pipeline integration matching the client\'s existing art production workflow.'
  }
];

// ============================================================
// CHARACTER DESIGN - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const characterDesignPortfolioImages = [
  {
    id: 'char-port-1',
    src: '/assets/images/character-design/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Hero Character Concepts',
    title: 'Hero Character Concepts',
    description: 'Primary playable and main character designs across genres.',
    heightClass: 'h-1'
  },
  {
    id: 'char-port-2',
    src: '/assets/images/character-design/port-02.webp',
    width: 301,
    height: 242,
    alt: 'Creature and Monster Designs',
    title: 'Creature and Monster Designs',
    description: 'Antagonist and creature character design for action and horror games.',
    heightClass: 'h-2'
  },
  {
    id: 'char-port-3',
    src: '/assets/images/character-design/port-03.webp',
    width: 248,
    height: 505,
    alt: 'Fantasy Character Projects',
    title: 'Fantasy Character Projects',
    description: 'Fantasy race and medieval character design.',
    heightClass: 'h-2'
  },
  {
    id: 'char-port-4',
    src: '/assets/images/character-design/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Sci-Fi Character Collections',
    title: 'Sci-Fi Character Collections',
    description: 'Science fiction human and alien character design.',
    heightClass: 'h-3'
  },
  {
    id: 'char-port-5',
    src: '/assets/images/character-design/port-05.webp',
    width: 267,
    height: 331,
    alt: 'Stylized Character Artwork',
    title: 'Stylized Character Artwork',
    description: 'Mobile-casual and indie stylized character design.',
    heightClass: 'h-3'
  },
  {
    id: 'char-port-6',
    src: '/assets/images/character-design/port-06.webp',
    width: 267,
    height: 331,
    alt: 'Production Character Sheets',
    title: 'Production Character Sheets',
    description: 'Full production documentation packages for character cast development.',
    heightClass: 'h-1'
  },
  {
    id: 'char-port-7',
    src: '/assets/images/character-design/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// CHARACTER DESIGN - CTA DATA
// ============================================================
const characterDesignCtaData = {
  heading: 'Hire a Character <br/> Design Studio for <b class="c-green">Your Next Project</b>',
  headingHighlight: 'Your Next Project',
  description: 'Tell us who the character is, what they do in the game, and what the player should feel about them. The visual brief comes after. Brief us on the character type, the game genre, the visual style, and the production timeline. Itemized quote within 48 hours. Characters that players remember start with a brief that asks the right questions. We know which questions those are.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function CharacterDesign() {
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
    <div className="character-design-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
           <section className=" game-banner d-flex relative">
       <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Character Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Character Design Services for Games & <b>Interactive Entertainment.</b>` }} />
              <p>A game character succeeds or fails in two places: in the concept art review that decides whether the design goes into production, and in the player&apos;s emotional response to the character twelve hours into the campaign. Most character design processes optimize for the first of those and discover the second one too late. The silhouette that reads beautifully in a pitch document belongs to a character whose personality nobody briefed. At Cobweb Games, character design starts with who the character is before it starts with what the character looks like. The brief covers personality, role in the game&apos;s world, relationship to the player, and the animation requirements the design needs to support. The visual direction follows from those answers. We provide character design services across 2D and 3D, from initial concept sketches through production-ready delivery packages. Indie games. AA productions. Mobile casual. Narrative RPGs. The design process is calibrated to the game, not applied uniformly regardless of what the character needs to do.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/character-design/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Character Design <b class="c-green">Services</b>` }} />
              <p>Character design at every stage of the production pipeline.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/character-concept .webp" alt="*" width={122} height={131} />
                  <h3>Game Character Design</h3>
                </div>
                <p>Character design for games is built from a brief that covers personality, role, and animation requirements before the first sketch. The visual follows from the character&apos;s function, not the art director&apos;s aesthetic preference.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/2d-characters.webp" alt="*" width={122} height={131} />
                  <h3>2D Character Design</h3>
                </div>
                <p>2D character design with expression sheets, joint-aware proportions, and the animation readiness that 2D character art requires from the concept stage.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>3D Character Design</h3>
                </div>
                <p>3D character design with topology informed by the animation rig. Edge loops where the rig needs them. Surface detail calibrated to the rendering context.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/isometric-art.webp" alt="*" width={122} height={131} />
                  <h3>Character Concept Art</h3>
                </div>
                <p>Concept art that locks the visual direction before the production investment is committed. Front view, side view, three-quarter view, and the design documentation the downstream team needs to build from.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/storyboarding.webp" alt="*" width={122} height={131} />
                  <h3>Hero Character Design</h3>
                </div>
                <p>The character the player spends the most time with. The design, the personality, and the visual read that needs to hold up across every context the game places the character in.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/technical-debugging.webp" alt="*" width={122} height={131} />
                  <h3>NPC and Supporting Character Design</h3>
                </div>
                <p>Supporting cast design that serves the narrative and the world without competing with the hero. Role clarity through visual design rather than UI indicators.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/character-concept .webp" alt="*" width={122} height={131} />
                  <h3>Creature and Monster Design</h3>
                </div>
                <p>Creature design with biological or mechanical internal logic. The design communicates what the creature is and what it does before the player encounters it in combat.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/2d-characters.webp" alt="*" width={122} height={131} />
                  <h3>Mascot Character Design</h3>
                </div>
                <p>Brand character design with the personality range, expression flexibility, and cross-format versatility that a marketing mascot requires across video, digital, and print.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/3d-character.webp" alt="*" width={122} height={131} />
                  <h3>Character Turnaround Sheets</h3>
                </div>
                <p>Front, side, three-quarter, and back views with the dimensional accuracy and proportion consistency that 3D modelers and animators need to build from the design without reinterpreting it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/isometric-art.webp" alt="*" width={122} height={131} />
                  <h3>Expression and Pose Sheets</h3>
                </div>
                <p>Emotional range documentation and key pose references that establish the character&apos;s personality vocabulary for animators and writers working with the character across the production.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/storyboarding.webp" alt="*" width={122} height={131} />
                  <h3>Production-Ready Character Packages</h3>
                </div>
                <p>Complete character documentation packages: turnarounds, expressions, costume variations, prop references, and the design notes that prevent the character from becoming something different in the hands of every team member who touches it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/character-design/technical-debugging.webp" alt="*" width={122} height={131} />
                  <h3>Isometric Art</h3>
                </div>
                <p>Character design adapted for isometric games with the projection-specific proportion and silhouette decisions the format requires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={characterDesignCtaData.heading}
        description={characterDesignCtaData.description}
        imageSrc={characterDesignCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform 
        heading="Custom Character Design for "
        highlightText="Every"
        subheading=" Game Genre"
        platforms={characterDesignPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={characterDesignData.section1.slides}
        smHeading={characterDesignData.section1.smHeading}
        mainHeading={characterDesignData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-char-design-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={characterDesignData.section2.slides}
        smHeading={characterDesignData.section2.smHeading}
        mainHeading={characterDesignData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-char-design-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={characterDesignData.section3.slides}
        smHeading={characterDesignData.section3.smHeading}
        mainHeading={characterDesignData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-char-design-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Projects"
        heading="Character Design <b class='c-green'>Portfolio</b>"
        images={characterDesignPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our <b class='c-green'>Character Design</b> Team"
        teamMembers={characterDesignTeam}
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
      <TechnologiesNew techItems={characterDesignTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Game Studios and Entertainment Brands"
        mainHeading='Client <b class="c-green">Testimonials</b> and Reviews'
        reviews={characterDesignReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={characterDesignFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a Character Design Studio for Your Next Project"
        description="Tell us who the character is, what they do in the game, and what the player should feel about them. The visual brief comes after."
        formTitle="Discuss Your Character Vision"
        formSubtitle="Request a Custom Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}
