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
// 3D ILLUSTRATION - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const threeDIllustrationData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Our <b>3D Illustration</b> Services?",
    slides: [
      {
        title: "Experienced Illustration Artists",
        description: "Our illustration team has produced game marketing artwork for shipped titles. They understand what store page art needs to do commercially, not just visually."
      },
      {
        title: "Strong Visual Storytelling Expertise",
        description: "Every illustration tells a story in a single frame. The composition, the lighting, and the character positioning all contribute to a narrative the viewer reads before they consciously process the image."
      },
      {
        title: "AAA-Quality Presentation Artwork",
        description: "The visual quality bar for game marketing artwork is set by the best artwork in the category. We brief to that bar, not to the average."
      },
      {
        title: "Flexible Outsourcing Models",
        description: "Project-based illustration for individual titles. Retainer illustration for live service games with ongoing content requirements."
      },
      {
        title: "Fast Turnaround for Marketing Campaigns",
        description: "Campaign artwork on compressed timelines is a standard requirement for live game publishing. We build rush delivery into the engagement structure rather than treating it as an exception."
      },
      {
        title: "Consistent Artistic Direction",
        description: "A named art director reviewing every piece ensures the illustration library for a title maintains a consistent visual identity across dozens of individual artworks."
      },
      {
        title: "Cross-Platform Asset Delivery",
        description: "Final artwork in every resolution and format each platform requires. One illustration brief, every storefront covered."
      },
      {
        title: "Quality Review at Every Stage",
        description: "Composition review before rendering. Lighting review before final production. Client review before delivery. Problems caught before the render farm runs."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Professional <b>3D Illustrations</b>",
    slides: [
      {
        title: "Strengthen Game Branding",
        description: "Consistent, high-quality illustration builds a visual brand identity that players recognize across platforms and marketing contexts."
      },
      {
        title: "Increase Marketing Impact",
        description: "Illustration that communicates the game's core appeal in a single image performs measurably better in paid social and organic distribution than generic promotional imagery."
      },
      {
        title: "Improve Storefront Visibility",
        description: "Store page artwork that stands out in a category list converts casual browsers to product page visitors. That is the first conversion in a game's purchase funnel."
      },
      {
        title: "Enhance Audience Engagement",
        description: "High-quality promotional artwork generates community engagement, fan sharing, and the organic reach that paid campaigns cannot fully replicate."
      },
      {
        title: "Create Memorable Visual Campaigns",
        description: "Illustration that defines a game's visual identity creates the fan art, the community discussions, and the screenshot culture that sustain a game long past launch."
      },
      {
        title: "Support Consistent Visual Identity",
        description: "A cohesive illustration style across all marketing touchpoints signals production quality and creative investment before the player has downloaded the game."
      }
    ]
  },
  section3: {
    smHeading: "Our Workflow",
    mainHeading: "Our 3D Illustration <b>Workflow</b>",
    slides: [
      {
        title: "Creative Brief and Planning",
        description: "Audience, commercial objective, platform specifications, and visual reference are established before any artwork begins."
      },
      {
        title: "Moodboards and Visual References",
        description: "Visual direction is confirmed through curated reference before composition begins. The target is approved before the production investment is committed."
      },
      {
        title: "Composition and Scene Blocking",
        description: "Scene structure, character placement, and focal point are established at the rough stage and reviewed before detailed work begins."
      },
      {
        title: "Modeling and Asset Preparation",
        description: "3D assets built or sourced for the scene at the detail level the illustration requires."
      },
      {
        title: "Lighting and Rendering",
        description: "Lighting is established for the emotional register that the brief defines. Render passes are produced at the output resolution specified."
      },
      {
        title: "Post-Processing and Effects",
        description: "Compositing, color grading, and effects were applied to bring the render to finished illustration quality."
      },
      {
        title: "Client Feedback and Revisions",
        description: "Structured revision round with every note documented. Changes are confirmed before they are made."
      },
      {
        title: "Final Artwork Delivery",
        description: "Final files in every format and resolution the brief specifies. Source files were scoped."
      }
    ]
  }
};

// ============================================================
// 3D ILLUSTRATION - PLATFORMS (passed as props to Platform)
// ============================================================
const threeDIllustrationPlatforms = [
  {
    title: "Mobile Game Promotional Art",
    description: "App store features graphics, icon art, and promotional banners to mobile platform visual specifications and resolution requirements.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC and Console Game Artwork",
    description: "Steam store capsules, key art, and marketing visuals to the dimensions and format requirements each PC and console storefront specifies.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "VR and AR Visual Assets",
    description: "Promotional visuals for immersive platform storefronts that communicate the dimensional quality of the experience through a flat image.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Social Media and Advertising Creatives",
    description: "Platform-native promotional artwork for paid social, organic posting, and community management across all major social channels.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Steam Capsule and Store Assets",
    description: "Steam-spec capsule artwork, header images, and screenshot illustration to the Valve submission requirements and the visual standards that convert store visitors to buyers.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// 3D ILLUSTRATION - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const threeDIllustrationTeam = [
  {
    id: 'illustration-team-1',
    title: 'Art Directors',
    number: '01',
    description: 'Visual direction and quality standard across all illustration projects.'
  },
  {
    id: 'illustration-team-2',
    title: 'Concept Artists',
    number: '02',
    description: 'Early visual development and composition exploration.'
  },
  {
    id: 'illustration-team-3',
    title: '3D Illustrators',
    number: '03',
    description: 'Scene construction, lighting, and final render production specialists.'
  },
  {
    id: 'illustration-team-4',
    title: 'Lighting and Rendering Artists',
    number: '04',
    description: 'Specialists in cinematic lighting and high-quality render production.'
  },
  {
    id: 'illustration-team-5',
    title: 'Environment Artists',
    number: '05',
    description: 'Environment asset creation for illustration scene backgrounds.'
  },
  {
    id: 'illustration-team-6',
    title: 'Post-Production Specialists',
    number: '06',
    description: 'Compositing, color grading, and final image refinement.'
  }
];

// ============================================================
// 3D ILLUSTRATION - REVIEWS (passed as props to Reviews)
// ============================================================
const threeDIllustrationReviews = [
  {
    id: 'illustration-review-1',
    text: "We needed key art for a Steam launch in three weeks. Most studios said six. Cobweb delivered a final illustration in eighteen days. The Steam conversion rate for our page was in the top 15% of launches in our category that week. The art is what got people to click.",
    name: 'Jonathan Jonas',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'illustration-review-2',
    text: "We commission seasonal illustration from Cobweb for our live service mobile game. They understand that live ops artwork has a hard deadline tied to a server event, not a creative preference. Every piece has been delivered before the event window opened. The quality has been consistent across 24 individual artworks over two years.",
    name: 'Dustin Truce',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'illustration-review-3',
    text: "Our game's visual identity is built around the key art Cobweb created for the announcement. Players reference it constantly in community discussions. Fan artists recreate it. That kind of visual identity does not happen by accident. It happens when the illustration is genuinely good.",
    name: 'Xavi Kova Jr.',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// 3D ILLUSTRATION - FAQS (passed as props to Faqs)
// ============================================================
const threeDIllustrationFaqs = [
  {
    id: 1,
    question: 'What are 3D illustration services used for?',
    answer: 'Game key art, store page visuals, social media promotional content, press kit artwork, seasonal event illustration, and any marketing context where a single high-quality image needs to communicate the game\'s identity and appeal.'
  },
  {
    id: 2,
    question: 'Can you create artwork for Steam and app stores?',
    answer: 'Yes. Steam capsule artwork, header images, and screenshot illustration to Valve\'s specifications. iOS and Android feature graphics to Apple\'s and Google\'s requirements. Platform specs are confirmed at a brief stage.'
  },
  {
    id: 3,
    question: 'What is included in a 3D illustration project?',
    answer: 'Creative brief review, visual reference and moodboard development, composition draft, modeling and scene assembly, lighting and rendering, post-production, revision round, and final delivery in every specified format.'
  },
  {
    id: 4,
    question: 'Do you create cinematic-style game artwork?',
    answer: 'Yes. Cinematic 3D illustration at the production quality of feature animation marketing is a core service. The brief defines the production ambition, and the budget defines the scale of the production.'
  },
  {
    id: 5,
    question: 'Can you follow an existing art direction?',
    answer: 'Yes. Working within an established art direction is more demanding than creating from scratch, and we approach it accordingly. Style guide review and a reference alignment process happen before production begins.'
  },
  {
    id: 6,
    question: 'What resolution formats do you deliver?',
    answer: '4K standard for marketing use. Print resolution on request. Platform-specific dimensions for all major storefronts. All formats specified at the brief stage and delivered in the final package.'
  },
  {
    id: 7,
    question: 'How long does a 3D illustration take?',
    answer: 'A standard key art illustration can be completed in two to three weeks from a brief sign-off. Rush delivery for campaign deadlines is available. Timeline confirmed at kickoff with specific dates.'
  },
  {
    id: 8,
    question: 'Can you create artwork for live game events and updates?',
    answer: 'Yes. Live ops illustration with hard event deadlines is a production format we handle regularly. Delivery timelines are built backward from the server event date.'
  },
  {
    id: 9,
    question: 'Do you provide layered source files?',
    answer: 'Yes. Layered PSD source files are included in the delivery package. Format and layer organization specified at a brief stage.'
  },
  {
    id: 10,
    question: 'Can illustrations be adapted for multiple marketing channels?',
    answer: 'Yes. A master illustration can be adapted to multiple aspect ratios and channel specifications. Multi-channel adaptation is priced as a package.'
  },
  {
    id: 11,
    question: 'What industries besides gaming use your illustration services?',
    answer: 'Entertainment and media, board game and tabletop publishing, VR experience marketing, and metaverse platform brand identity. The production standards are the same regardless of the platform.'
  }
];

// ============================================================
// 3D ILLUSTRATION - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const threeDIllustrationTechnologies = [
  {
    id: 'tech-1',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Real-time rendering for cinematic illustration and environment-based promotional artwork.'
  },
  {
    id: 'tech-2',
    name: 'Blender',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: '3D modeling, scene composition, and final render production.'
  },
  {
    id: 'tech-3',
    name: 'Maya',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'Character and environment asset preparation for illustration scenes.'
  },
  {
    id: 'tech-4',
    name: 'ZBrush',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'High-detail character and creature sculpting for illustration-quality surface detail.'
  },
  {
    id: 'tech-5',
    name: 'Substance Painter',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'PBR material authoring for illustration assets.'
  },
  {
    id: 'tech-6',
    name: 'Photoshop',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Compositing, post-processing, and final illustration refinement.'
  },
  {
    id: 'tech-7',
    name: 'Houdini',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Atmospheric effects, particle systems, and procedural visual elements.'
  },
  {
    id: 'tech-8',
    name: 'Real-Time Rendering Pipelines',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Unreal Engine and Blender EEVEE for rapid lighting iteration and visualization review.'
  }
];

// ============================================================
// 3D ILLUSTRATION - CTA DATA
// ============================================================
const threeDIllustrationCtaData = {
  heading: 'Hire a 3D Illustration Studio for <b class="c-green">Your Next Project</b>',
  headingHighlight: 'Your Next Project',
  description: 'Tell us the game, the platform, the audience, and the commercial objective. We will tell you the creative approach and what it costs.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};
// ============================================================
// 3D ILLUSTRATION PORTFOLIO - DATA ARRAY
// ============================================================
const threeDIllustrationPortfolioImages = [
  {
    id: 'illustration-port-1',
    src: '/assets/images/3d-illustration/port-01.webp',
    width: 552,
    height: 505,
    alt: 'Game Key Art Projects',
    title: 'Game Key Art Projects',
    description: 'Store page key art for PC, console, and mobile titles.',
    heightClass: 'h-1'
  },
  {
    id: 'illustration-port-2',
    src: '/assets/images/3d-illustration/port-02.webp',
    width: 267,
    height: 331,
    alt: 'Cinematic Promotional Artwork',
    title: 'Cinematic Promotional Artwork',
    description: 'High-production cinematic illustration for AAA-adjacent marketing campaigns.',
    heightClass: 'h-2'
  },
  {
    id: 'illustration-port-3',
    src: '/assets/images/3d-illustration/port-03.webp',
    width: 267,
    height: 331,
    alt: 'Stylized Illustration Projects',
    title: 'Stylized Illustration Projects',
    description: 'Stylized game artwork matching diverse visual styles.',
    heightClass: 'h-2'
  },
  {
    id: 'illustration-port-4',
    src: '/assets/images/3d-illustration/port-04.webp',
    width: 301,
    height: 242,
    alt: 'Realistic Visual Campaigns',
    title: 'Realistic Visual Campaigns',
    description: 'Photorealistic promotional illustration for high-fidelity titles.',
    heightClass: 'h-3'
  },
  {
    id: 'illustration-port-5',
    src: '/assets/images/3d-illustration/port-05.webp',
    width: 248,
    height: 505,
    alt: 'Fantasy and Sci-Fi Artwork',
    title: 'Fantasy and Sci-Fi Artwork',
    description: 'Genre illustration with consistent internal visual logic.',
    heightClass: 'h-3'
  },
  {
    id: 'illustration-port-6',
    src: '/assets/images/3d-illustration/port-06.webp',
    width: 301,
    height: 242,
    alt: 'Environment Illustration Projects',
    title: 'Environment Illustration Projects',
    description: 'World-building and environmental illustration for open-world and narrative titles.',
    heightClass: 'h-1'
  },
  {
    id: 'illustration-port-7',
    src: '/assets/images/3d-illustration/port-07.webp',
    width: 570,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];
export default function Page3dIllustrationServices() {
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
    <div className="3d-illustration-services-page">
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/3d-illustration-services",
  "url": "https://www.cobwebgames.com/3d-illustration-services",
  "name": "3D Illustration Services",
  "description": "3D Illustration Services",
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
      "name": "What are 3D illustration services used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Game key art, store page visuals, social media promotional content, press kit artwork, seasonal event illustration, and any marketing context where a single high-quality image needs to communicate the game's identity and appeal."
      }
    },
    {
      "@type": "Question",
      "name": "Can you create artwork for Steam and app stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Steam capsule artwork, header images, and screenshot illustration to Valve's specifications. iOS and Android feature graphics to Apple's and Google's requirements. Platform specs are confirmed at a brief stage."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a 3D illustration project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Creative brief review, visual reference and moodboard development, composition draft, modeling and scene assembly, lighting and rendering, post-production, revision round, and final delivery in every specified format."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create cinematic-style game artwork?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cinematic 3D illustration at the production quality of feature animation marketing is a core service. The brief defines the production ambition, and the budget defines the scale of the production."
      }
    },
    {
      "@type": "Question",
      "name": "Can you follow an existing art direction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Working within an established art direction is more demanding than creating from scratch, and we approach it accordingly. Style guide review and a reference alignment process happen before production begins."
      }
    },
    {
      "@type": "Question",
      "name": "What resolution formats do you deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4K standard for marketing use. Print resolution on request. Platform-specific dimensions for all major storefronts. All formats specified at the brief stage and delivered in the final package."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a 3D illustration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard key art illustration can be completed in two to three weeks from a brief sign-off. Rush delivery for campaign deadlines is available. Timeline confirmed at kickoff with specific dates."
      }
    },
    {
      "@type": "Question",
      "name": "Can you create artwork for live game events and updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Live ops illustration with hard event deadlines is a production format we handle regularly. Delivery timelines are built backward from the server event date."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide layered source files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Layered PSD source files are included in the delivery package. Format and layer organization specified at a brief stage."
      }
    },
    {
      "@type": "Question",
      "name": "Can illustrations be adapted for multiple marketing channels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A master illustration can be adapted to multiple aspect ratios and channel specifications. Multi-channel adaptation is priced as a package."
      }
    },
    {
      "@type": "Question",
      "name": "What industries besides gaming use your illustration services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entertainment and media, board game and tabletop publishing, VR experience marketing, and metaverse platform brand identity. The production standards are the same regardless of the platform."
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
      "name": "3D Illustration Services",
      "item": "https://www.cobwebgames.com/3d-illustration-services"
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
              <h5>3D Illustration Services</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `3D Illustration Services for <b>Games.</b>` }} />
              <p>Game illustration is the first thing a potential player sees before they have ever touched your game. The Steam capsule. The app store splash. The social media post that runs the week before launch. Every one of those is a sales argument made entirely through a single image, and that argument either works or it does not in the first three seconds. Most game illustrations fail not because the artwork is technically poor but because it was treated as a production task rather than a marketing decision. At Cobweb Games, our 3D illustration services are built around the audience the image needs to convert, not the visual style the art director prefers. We produce game key art, cinematic promotional visuals, splash art, and seasonal live ops illustrations for game studios across mobile, PC, and console. The artwork is produced at the resolution, in the format, and with the platform-specific specifications that the distribution context requires.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-illustration/main-banner.webp" alt="*" width={1440} height={875} />
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
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional 3D Illustration <b class="c-green">Services</b>` }} />
              <p>3D illustration across every format and purpose a game marketing and publishing pipeline needs.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/character-concepts.webp" alt="*" width={122} height={131} />
                  <h3>3D Character Illustrations</h3>
                </div>
                <p>Hero character renders and character-centric promotional artwork at the visual quality and emotional impact that store page first impressions require.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/environmental-concepting.webp" alt="*" width={122} height={131} />
                  <h3>3D Environment Illustrations</h3>
                </div>
                <p>World-building illustration that communicates the game&apos;s setting, visual tone, and sense of place to a player who has not yet entered the world.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/ui-ux.webp" alt="*" width={122} height={131} />
                  <h3>Cinematic 3D Artwork</h3>
                </div>
                <p>Cinematic illustration at the production quality of feature animation marketing. For games whose ambition deserves promotional art that matches it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/mood-board.webp" alt="*" width={122} height={131} />
                  <h3>Game Key Art Creation</h3>
                </div>
                <p>Key art that functions as the visual identity of a title: the image that appears on every platform, every press release, and every community post associated with the game.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/scene-layouts.webp" alt="*" width={122} height={131} />
                  <h3>Splash Art and Promotional Visuals</h3>
                </div>
                <p>Character splash art, ability visuals, and promotional artwork for seasonal events, updates, and content releases in live service games.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/visual-development.webp" alt="*" width={122} height={131} />
                  <h3>Stylized 3D Illustrations</h3>
                </div>
                <p>Stylized illustration that commits to the visual language of the game&apos;s art direction rather than approximating a realistic style that the rest of the game does not match.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/character-concepts.webp" alt="*" width={122} height={131} />
                  <h3>Realistic 3D Illustrations</h3>
                </div>
                <p>Photorealistic promotional illustration for titles where visual fidelity is the commercial argument.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/environmental-concepting.webp" alt="*" width={122} height={131} />
                  <h3>Fantasy and Sci-Fi Artwork</h3>
                </div>
                <p>Genre illustration built on internal visual logic. The equipment makes sense for the world. The materials exist within the setting.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/ui-ux.webp" alt="*" width={122} height={131} />
                  <h3>3D Scene Composition</h3>
                </div>
                <p>Multi-figure and multi-element scene composition built around a visual narrative that communicates the game&apos;s tone without requiring any text to explain it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/mood-board.webp" alt="*" width={122} height={131} />
                  <h3>Lighting and Atmosphere Design</h3>
                </div>
                <p>Lighting as storytelling. The light tells the viewer what time it is, what the weather is, and what mood the game operates in.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-illustration/scene-layouts.webp" alt="*" width={122} height={131} />
                  <h3>High-Resolution Render Production</h3>
                </div>
                <p>4K and print-resolution renders for press kit distribution, physical marketing materials, and platform store submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo
        heading={threeDIllustrationCtaData.heading}
        description={threeDIllustrationCtaData.description}
        imageSrc={threeDIllustrationCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION
          ============================================================ */}
      <Platform
        heading="Custom 3D Artwork for "
        highlightText="Every"
        subheading=" Platform"
        platforms={threeDIllustrationPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection
        slides={threeDIllustrationData.section1.slides}
        smHeading={threeDIllustrationData.section1.smHeading}
        mainHeading={threeDIllustrationData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-illustration-1"
        autoplaySpeed={4000}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection
        slides={threeDIllustrationData.section2.slides}
        smHeading={threeDIllustrationData.section2.smHeading}
        mainHeading={threeDIllustrationData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-illustration-2"
        autoplaySpeed={4000}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Workflow)
          ============================================================ */}
      <WhyChooseUsSection
        slides={threeDIllustrationData.section3.slides}
        smHeading={threeDIllustrationData.section3.smHeading}
        mainHeading={threeDIllustrationData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-illustration-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio
        badgeText="Our Projects"
        heading="3D Illustration <b class='c-green'>Portfolio</b>"
        images={threeDIllustrationPortfolioImages}
      />
      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam
        badgeText="Our Team"
        mainHeading="Meet Our <b class='c-green'>3D Illustration</b> Team"
        teamMembers={threeDIllustrationTeam}
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
      <TechnologiesNew techItems={threeDIllustrationTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews
        badgeText="Trusted by Global Game Studios and Brands"
        mainHeading='Client <b class="c-green">Testimonials</b> and Reviews'
        reviews={threeDIllustrationReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={threeDIllustrationFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm
        heading="Hire a 3D Illustration Studio for Your Next Project"
        description="Tell us the game, the platform, the audience, and the commercial objective. We will tell you the creative approach and what it costs."
        formTitle="Discuss Your Creative Vision"
        formSubtitle="Request Custom Artwork Production"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

