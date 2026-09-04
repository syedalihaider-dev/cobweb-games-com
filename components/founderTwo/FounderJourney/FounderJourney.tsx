'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FounderJourney.module.css';

const journeyData = [
  { id: 1, year: '2022', content: 'Entered a major growth phase, expanding the team, capabilities, and international client base.' },
  { id: 2, year: '2023', content: 'Built a strong track record of delivering high-quality games for studios, publishers, and brands worldwide.' },
  { id: 3, year: '2024', content: 'Scaled further with larger productions, stronger partnerships, and an increasingly global footprint.' },
  { id: 4, year: '2025', content: 'Reached new levels of scale, experience, and production maturity across the gaming industry.' },
  { id: 5, year: '2009', content: 'Founded with a vision to build exceptional games and create a studio driven by creativity and innovation.' },
  { id: 6, year: '2012', content: 'Grew the team, expanded the project portfolio, and began establishing a strong presence in the industry.' },
  { id: 7, year: '2015', content: 'Took on larger projects and built long-term relationships with clients and creative partners.' },
  { id: 8, year: '2017', content: 'Scaled operations, strengthened production, and expanded into increasingly ambitious game projects.' },
  { id: 9, year: '2018', content: 'Expanded globally, reaching new markets and taking on more complex cross-platform projects.' },
];

/* 9 items — center item (2009) sits at 0°, others fan out symmetrically */
const arcAngles = [-48, -36, -24, -12, 0, 12, 24, 36, 48];
const arcOpacities = [0.25, 0.45, 0.7, 0.9, 1, 0.9, 0.7, 0.45, 0.25];

const FounderJourney = () => {
  const [activeId, setActiveId] = useState(5);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(5);

  const activeContent = journeyData.find(item => item.id === activeId)?.content || '';

  const toggleAccordion = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className={styles.journeySection}>
      {/* Background Vector Line */}
      <div className={styles.vectorBgWrapper}>
        <Image
          src="/assets/images/founder/vector-line.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.vectorBgImage}
          aria-hidden="true"
        />
      </div>

      {/* Top Left Logo Vector */}
      <div className={styles.logoVectorWrapper}>
        <Image
          src="/assets/images/founder/logo-vector-left.png"
          alt=""
          width={516}
          height={605}
          className={styles.logoVectorImage}
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className={styles.mainHeading}>
              <span className={styles.outlineText}>A Journey of Game Development, Growth and Innovation</span>
              <span className={styles.solidText}>EXCEPTIONAL RESULTS</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Desktop Arc Timeline - Hidden on lg and smaller */}
      <div className={`d-none d-xl-block ${styles.arcArea}`}>
        <div className={styles.arcContainer}>
          <div className={styles.arcCircle}>
            {journeyData.map((item, index) => {
              const isActive = item.id === activeId;
              const angle = arcAngles[index];
              const baseOpacity = arcOpacities[index];

              return (
                <div
                  key={item.id}
                  className={styles.yearSlot}
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className={`${styles.yearInner} ${isActive ? styles.yearActive : ''}`}
                    style={{ opacity: isActive ? 1 : baseOpacity }}
                    onClick={() => setActiveId(item.id)}
                  >
                    <span className={styles.yearLabel}>{item.year}</span>
                    <span className={`${styles.yearDot} ${isActive ? styles.dotActive : ''}`}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-11">
              <div className={styles.contentArea}>
                <p className={styles.journeyPara} key={activeId}>
                  {activeContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Accordion - Hidden on xl and larger */}
      <div className={`d-xl-none container ${styles.accordionArea}`}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className={styles.accordionList}>
              {journeyData.map((item) => {
                const isOpen = openAccordionId === item.id;
                const contentId = `journey-accordion-${item.id}`;

                return (
                  <article className={styles.accordionItem} key={item.id}>
                    <button
                      type="button"
                      className={`${styles.accordionTrigger} ${isOpen ? styles.active : ''}`}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <div className={styles.accordionHeaderLeft}>
                        <span className={`${styles.accordionDot} ${isOpen ? styles.dotActive : ''}`}></span>
                        <span className={styles.accordionYear}>{item.year}</span>
                      </div>
                      <span className={styles.accordionIcon} aria-hidden="true" />
                    </button>
                    <div
                      id={contentId}
                      className={`${styles.accordionContentWrap} ${isOpen ? styles.open : ''}`}
                      aria-hidden={!isOpen}
                    >
                      <p className={styles.accordionContent}>{item.content}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[
            'End-to-End Development',
            'Faster Time-To-Market',
            'Cross-Platform Expertise',
            'Scalable Game Solutions',
            'Launch-Ready Games',
          ].flatMap((item, index, arr) => [
            <span key={`${item}-${index}`} className={styles.marqueeItem}>
              {item}
            </span>,
            <span key={`${item}-star-${index}`} className={styles.marqueeStar} aria-hidden="true">
              *
            </span>,
            ...(index === arr.length - 1 ? [] : []),
          ])}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
