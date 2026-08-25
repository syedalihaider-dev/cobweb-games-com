'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FounderJourney.module.css';

const journeyData = [
  { id: 1, year: '2017', content: 'Founded with a vision to build exceptional games and create a studio driven by creativity and innovation.' },
  { id: 2, year: '2018', content: 'Grew the team, expanded the project portfolio, and began establishing a strong presence in the industry.' },
  { id: 3, year: '2019', content: 'Took on larger projects and built long-term relationships with clients and creative partners.' },
  { id: 4, year: '2020', content: 'Scaled operations, strengthened production, and expanded into increasingly ambitious game projects.' },
  { id: 5, year: '2021', content: 'Expanded globally, reaching new markets and taking on more complex cross-platform projects.' },
  { id: 6, year: '2022', content: 'Entered a major growth phase, expanding the team, capabilities, and international client base.' },
  { id: 7, year: '2023', content: 'Built a strong track record of delivering high-quality games for studios, publishers, and brands worldwide.' },
  { id: 8, year: '2024', content: 'Scaled further with larger productions, stronger partnerships, and an increasingly global footprint.' },
  { id: 9, year: '2025', content: 'Reached new levels of scale, experience, and production maturity across the gaming industry.' },
  { id: 10, year: '2026', content: 'Nine years of growth, hundreds of creative challenges, and a proven track record have shaped a leading game development partner.' },
];

/* 
 * Arc positioning: years sit along the top of a large invisible circle.
 * Each year is rotated from center. Angles spread evenly from -50deg to +50deg.
 * Edge years (2022, 2018) fade out as they go off-screen.
 */
const arcAngles = [-50, -38.9, -27.8, -16.7, -5.6, 5.6, 16.7, 27.8, 38.9, 50];
const arcOpacities = [0.25, 0.45, 0.7, 0.9, 1, 1, 0.9, 0.7, 0.45, 0.25];

const FounderJourney = () => {
  const [activeId, setActiveId] = useState(5);

  const activeContent = journeyData.find(item => item.id === activeId)?.content || '';

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
              <span className={styles.outlineText}>A Journey of Game Development, Growth gand Innovation</span>
              <span className={styles.solidText}>EXCEPTIONAL RESULTS</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Arc Timeline */}
      <div className={styles.arcArea}>
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
                {/* Year label + dot, positioned at outer edge of circle */}
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

        {/* Journey content — inside container */}
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

      {/* Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              COBWEB&nbsp;&nbsp;<span className={styles.marqueeStar}>*</span>&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
