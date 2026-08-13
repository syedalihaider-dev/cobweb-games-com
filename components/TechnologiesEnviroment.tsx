'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TechnologiesEnviroment.module.css';

interface PortfolioImage {
  id?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  heightClass?: string;
}

interface ThreeDEnvironmentPortfolioProps {
  sectionClass?: string;
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  images?: PortfolioImage[];
  portfolioGridClass?: string;
}

const defaultImages: PortfolioImage[] = [
  {
    id: 'port-1',
    src: '/assets/images/environment-design/port-01.webp',
    width: 570,
    height: 331,
    alt: 'Open World Environment Projects',
    title: 'Open World Environment Projects',
    description: 'Large-scale environments with streaming and LOD systems.',
    heightClass: 'h-1'
  },
  {
    id: 'port-2',
    src: '/assets/images/environment-design/port-02.webp',
    width: 301,
    height: 242,
    alt: 'Stylized Environment Projects',
    title: 'Stylized Environment Projects',
    description: 'Hand-crafted visual style across mobile and PC platforms.',
    heightClass: 'h-2'
  },
  {
    id: 'port-3',
    src: '/assets/images/environment-design/port-03.webp',
    width: 248,
    height: 505,
    alt: 'Realistic Environment Projects',
    title: 'Realistic Environment Projects',
    description: 'Photorealistic and semi-realistic art for high-fidelity titles.',
    heightClass: 'h-2'
  },
  {
    id: 'port-4',
    src: '/assets/images/environment-design/port-04.webp',
    width: 552,
    height: 505,
    alt: 'Interior and Exterior Scenes',
    title: 'Interior and Exterior Scenes',
    description: 'Closed interior spaces and open exterior environments.',
    heightClass: 'h-3'
  },
  {
    id: 'port-5',
    src: '/assets/images/environment-design/port-05.webp',
    width: 301,
    height: 242,
    alt: 'VR and AR Environment Projects',
    title: 'VR and AR Environment Projects',
    description: 'Immersive environment design for VR and AR platforms.',
    heightClass: 'h-3'
  },
  {
    id: 'port-6',
    src: '/assets/images/environment-design/port-06.webp',
    width: 267,
    height: 331,
    alt: 'Fantasy and Sci-Fi Worlds',
    title: 'Fantasy and Sci-Fi Worlds',
    description: 'Genre environments with consistent internal visual logic.',
    heightClass: 'h-1'
  },
  {
    id: 'port-7',
    src: '/assets/images/environment-design/port-07.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

const ThreeDEnvironmentPortfolio: React.FC<ThreeDEnvironmentPortfolioProps> = ({
  sectionClass = 'inner-portfolio',
  badgeText = 'Our Projects',
  heading = '3D Environment Design <b class="c-green">Portfolio</b>',
  images = defaultImages,
  portfolioGridClass = 'row g-0 portfolio-grid'
}) => {
  // Split images into left and right columns based on position
  const leftColumnImages = images.slice(0, 3);
  const rightColumnImages = images.slice(3);

  return (
    <section className={`${sectionClass} ${styles.portfolio}`}>
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>{badgeText}</h4>
            <h2 
              className="main-heading"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>
        </div>

        {/* Image Grid */}
        <div className={portfolioGridClass}>
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="row g-0">
              {leftColumnImages.map((image, index) => (
                <div 
                  className={index === 0 ? 'col-lg-12' : 'col-lg-6'} 
                  key={image.id || `left-${index}`}
                >
                  <a
                    href={image.src}
                    className={`port-img ${image.heightClass || 'h-2'}`}
                    data-fancybox="gallery"
                  >
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    {image.title && (
                      <div className="overlay">
                        <span className="icon">+</span>
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="row g-0">
              {rightColumnImages.map((image, index) => {
                // Special layout for right column
                if (index === 0) {
                  // First image in right column - goes in col-lg-6 with nested row
                  return (
                    <div className="col-lg-6" key={image.id || `right-${index}`}>
                      <div className="row">
                        <div className="col-lg-12">
                          <a
                            href={image.src}
                            className={`port-img ${image.heightClass || 'h-3'}`}
                            data-fancybox="gallery"
                          >
                            <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                            {image.title && (
                              <div className="overlay">
                                <span className="icon">+</span>
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                              </div>
                            )}
                          </a>
                        </div>
                        {/* Next image in right column (index 1) */}
                        {rightColumnImages[index + 1] && (
                          <div className="col-lg-12 pt-3">
                            <a
                              href={rightColumnImages[index + 1].src}
                              className={`port-img ${rightColumnImages[index + 1].heightClass || 'h-3'}`}
                              data-fancybox="gallery"
                            >
                              <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                              <Image src={rightColumnImages[index + 1].src} alt={rightColumnImages[index + 1].alt} width={rightColumnImages[index + 1].width} height={rightColumnImages[index + 1].height} />
                              {rightColumnImages[index + 1].title && (
                                <div className="overlay">
                                  <span className="icon">+</span>
                                  <h3>{rightColumnImages[index + 1].title}</h3>
                                  <p>{rightColumnImages[index + 1].description}</p>
                                </div>
                              )}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                // Skip index 1 as it's rendered above
                if (index === 1) return null;
                // Image at index 2 (third in right column)
                if (index === 2) {
                  return (
                    <div className="col-lg-6" key={image.id || `right-${index}`}>
                      <a
                        href={image.src}
                        className={`port-img ${image.heightClass || 'h-1'}`}
                        data-fancybox="gallery"
                      >
                        <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        {image.title && (
                          <div className="overlay">
                            <span className="icon">+</span>
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                          </div>
                        )}
                      </a>
                    </div>
                  );
                }
                // Image at index 3 (fourth in right column)
                if (index === 3) {
                  return (
                    <div className="col-lg-12" key={image.id || `right-${index}`}>
                      <a
                        href={image.src}
                        className={`port-img ${image.heightClass || 'h-2'}`}
                        data-fancybox="gallery"
                      >
                        <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        {image.title && (
                          <div className="overlay">
                            <span className="icon">+</span>
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                          </div>
                        )}
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDEnvironmentPortfolio;
