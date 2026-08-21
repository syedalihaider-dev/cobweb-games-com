'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FounderJourney.module.css';

const journeyData = [
  { id: 1, year: '2022', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2022.' },
  { id: 2, year: '2023', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2023.' },
  { id: 3, year: '2024', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2024.' },
  { id: 4, year: '2025', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2025.' },
  { id: 5, year: '2009', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry' },
  { id: 6, year: '2012', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2012.' },
  { id: 7, year: '2015', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2015.' },
  { id: 8, year: '2017', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2017.' },
  { id: 9, year: '2018', content: 'Aquamare Marine was established in Plymouth, UK, providing sales and support to the marine industry in 2018.' },
];

/* 
 * Arc positioning: years sit along the top of a large invisible circle.
 * Each year is rotated from center. Angles spread evenly from -50deg to +50deg.
 * Edge years (2022, 2018) fade out as they go off-screen.
 */
const arcAngles = [-50, -37.5, -25, -12.5, 0, 12.5, 25, 37.5, 50];
const arcOpacities = [0.25, 0.55, 0.85, 1, 1, 1, 0.85, 0.55, 0.25];

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
          src="/assets/images/founder/logo-vector.png"
          alt=""
          width={400}
          height={400}
          className={styles.logoVectorImage}
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className={styles.mainHeading}>
              <span className={styles.outlineText}>BESPOKE DETAIL-DRIVEN YACHT EXPERTISE WITH</span>
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
