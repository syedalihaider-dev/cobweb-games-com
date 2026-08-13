'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface TechItem {
  id?: string;
  name?: string;
  title?: string;
  image: string;
  width: number;
  height: number;
  description?: string;
}

interface TechnologiesNewProps {
  sectionClass?: string;
  badgeText?: string;
  mainHeading?: string;
  subHeading?: string;
  techItems?: TechItem[];
  technologies?: TechItem[]; // Add this to accept both prop names
  showOverlay?: boolean;
}

const defaultTechItems: TechItem[] = [
  {
    id: 'tech-1',
    name: 'ZBrush',
    image: '/assets/images/techs/zbrush.webp',
    width: 2000,
    height: 2000,
    description: 'High-poly sculpting for character surface detail and creature anatomy.'
  },
  {
    id: 'tech-2',
    name: 'Autodesk Maya',
    image: '/assets/images/techs/autodesk.webp',
    width: 176,
    height: 137,
    description: 'Production modeling, rigging-ready mesh prep, animation-targeted topology.'
  },
  {
    id: 'tech-3',
    name: 'Blender',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Open pipeline modeling and rigging for Blender-native productions.'
  },
  {
    id: 'tech-4',
    name: 'Substance Painter',
    image: '/assets/images/techs/substance painter.png',
    width: 320,
    height: 320,
    description: 'PBR texture authoring at production resolution.'
  },
  {
    id: 'tech-5',
    name: 'Unreal Engine',
    image: '/assets/images/techs/unreal.webp',
    width: 175,
    height: 142,
    description: 'Asset integration testing, material validation, and LOD review.'
  },
  {
    id: 'tech-6',
    name: 'Unity',
    image: '/assets/images/techs/unity.webp',
    width: 127,
    height: 140,
    description: 'Import testing, shader compatibility, and prefab assembly.'
  }
];

const TechnologiesNew: React.FC<TechnologiesNewProps> = ({
  sectionClass = 'tech-sec',
  badgeText = 'Technologies',
  mainHeading = 'Our <b class="c-green">Technology</b> Stack',
  subHeading = 'Our Technology Expertise in 3D Character Modeling.',
  techItems = defaultTechItems,
  technologies, // Accept both prop names
  showOverlay = true
}) => {
  // Use technologies if provided, otherwise use techItems
  const items = technologies || techItems;

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        $(".tech-mob-slider").not('.slick-initialized').slick({
          arrows: false,
          dots: true,
          autoplay: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 900,
              settings: {
                unslick: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1
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
  }, []);

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>{badgeText}</h4>
            <h2 
              className="main-heading"
              dangerouslySetInnerHTML={{ __html: mainHeading }}
            />
            {subHeading && <p className="tech-sub-heading">{subHeading}</p>}
          </div>
        </div>
        <div className="row mob-slider tech-mob-slider">
          {items.map((tech, index) => (
            <div className="col-lg-3 col-md-4" key={tech.id || `tech-${index}`}>
              <div className="tech-logo-box-wrap">
                <div className="tech-logo-inner">
                  <Image 
                    className="lazy tech-logo-img" 
                    src={tech.image} 
                    data-src={tech.image} 
                    alt={tech.name || tech.title || 'Technology'} 
                    width={tech.width}
                    height={tech.height}
                  />
                  {showOverlay && (
                    <div className="tech-overlay">
                      <h4 className="tech-overlay-title">{tech.name || tech.title || 'Technology'}</h4>
                      {tech.description && (
                        <p className="tech-overlay-desc">{tech.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesNew;
