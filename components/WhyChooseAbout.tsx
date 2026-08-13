'use client';

import { useEffect } from 'react';

// Define TypeScript interfaces
interface Slide {
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  slides: Slide[];
  sectionClass?: string;
  sliderId?: string;
  autoplaySpeed?: number;
  smHeading?: string;
  mainHeading?: string;
}

// ============================================================
// DEFAULT 2D CONTENT (stays unchanged)
// ============================================================
const sectionData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Game Studios Choose Cobweb as Their <b> 2D Game </b> Art Studio",
    slides: [
      {
        title: "Memorable 2D Experiences",
        description: "Our team of veteran 2D artists and directors works closely with you to understand your genre and vision. We then apply our extensive experience and proven design solutions to craft artwork that polishes."
      },
      {
        title: "Unparalleled Quality",
        description: "With years of experience in the industry, our artists have contributed to dozens of titles, from casual games to major console releases. Each member of our team has a minimum of 2 years of experience. Skilled art."
      },
      {
        title: "Innovation",
        description: "While our design solutions are proven, we stay at the forefront of trends. This allows us to deliver fresh yet authentic aesthetics to the genre. More than just meeting expectations, we aim to make a lasting impression with every."
      },
      {
        title: "Flexibility",
        description: "Whether conceptualizing or finalizing assets, our artists have access to the latest software and hardware. We also adapt seamlessly to changing project needs. This scalable, optimized workflow ensures you get the highest quality."
      }
    ]
  },
  section2: {
    smHeading: "Why Choose Professional 2D Art",
    mainHeading: "Benefits of Professional <b>2D Game Art</b>",
    slides: [
      {
        title: "Create Memorable Player Experiences",
        description: "Visual consistency and clear art direction create the player experience that screenshots get taken of. Inconsistent 2D game art creates a different kind of memorable. The kind where the player notices the quality gap and writes about it."
      },
      {
        title: "Strengthen Visual Storytelling",
        description: "Environment art that communicates lore without a text dump. Character silhouettes that telegraph role and threat level without a UI indicator. The art does storytelling work that saves design budget elsewhere."
      },
      {
        title: "Improve Player Engagement",
        description: "Polish retains players. Not because players consciously notice it, but because they unconsciously relax into an experience that feels finished. Unpolished art creates friction the player cannot name but always feels."
      },
      {
        title: "Maintain Consistent Art Direction",
        description: "Games built across multiple vendor relationships develop visual inconsistency that erodes world believability. A dedicated 2D game art studio with an established style guide maintains the consistency that keeps a game world coherent across years of production."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our 2D Game Art <b>Production Process</b>",
    slides: [
      {
        title: "Discovery and Art Direction",
        description: "Art style audit, reference collection, platform review, and pipeline discussion before any asset production. We establish the visual rules and document them so every team member works from the same bible."
      },
      {
        title: "Concept Development",
        description: "Rough concepts through to approved style frames. The concept stage is locked before production assets begin. Structured feedback rounds rather than open-ended revision loops."
      },
      {
        title: "Asset Creation",
        description: "Production assets built to the approved concept and pipeline specs. Named correctly. Sized correctly. Formatted for the target engine from the first export."
      },
      {
        title: "Review and Iteration",
        description: "Structured review cycles with documented feedback addressing specific issues against the approved brief. Revision scope is defined before production starts."
      },
      {
        title: "Final Delivery and Integration",
        description: "Final deliverables packaged for engine integration with documentation for the tech team. Atlas packing notes, animation frame data, and import settings provided where applicable."
      }
    ]
  }
};

// Reusable component with props
export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ 
  slides, 
  sectionClass = '',
  sliderId = 'services-slider',
  autoplaySpeed = 4000,
  smHeading = "Why Choose Us",
  mainHeading = "Benefits of <b>Working </b>with Us"
}) => {
  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
        const $ = window.$;
        
        $(`#${sliderId}`).not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: autoplaySpeed,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px'
              }
            }
          ]
        });
      } else {
        slickTimer = setTimeout(initSlick, 100);
      }
    };

    initSlick();

    return () => {
      clearTimeout(slickTimer);
    };
  }, [sliderId, autoplaySpeed]);

  return (
    <section className={`services-slider-sec inner-services-sec relative ${sectionClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-left">
            <h3 className="sm-head">{smHeading}</h3>
            <h2 
              className="main-heading"
              dangerouslySetInnerHTML={{ __html: mainHeading }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-12">
            <ul className="services-slider" id={sliderId}>
              {slides.map((slide: Slide, index: number) => (
                <li key={index}>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>{slide.title}</h4>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main component with 3 duplicated sections (Default 2D content)
export default function WhyChooseUsAbout() {
  return (
    <>
      {/* Section 1 - Original */}
      <WhyChooseUsSection 
        slides={sectionData.section1.slides}
        smHeading={sectionData.section1.smHeading}
        mainHeading={sectionData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-1"
        autoplaySpeed={4000}
      />

      {/* Section 2 - New content */}
      <WhyChooseUsSection 
        slides={sectionData.section2.slides}
        smHeading={sectionData.section2.smHeading}
        mainHeading={sectionData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-2"
        autoplaySpeed={4000}
      />

      {/* Section 3 - New content */}
      <WhyChooseUsSection 
        slides={sectionData.section3.slides}
        smHeading={sectionData.section3.smHeading}
        mainHeading={sectionData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-3"
        autoplaySpeed={4500}
      />
    </>
  );
}
