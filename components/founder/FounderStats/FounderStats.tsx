import React from 'react';
import Image from 'next/image';
import Counter from '../../Counter';
import styles from './FounderStats.module.css';

const FounderStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={`container-fluid px-0 ${styles.statsContainer}`}>
        <div className={styles.topTextWrapper}>
          <div className="container">
            <h3 className={styles.mainText}>
              <span className={styles.solidText}>
                We are a digital engineering powerhouse trusted by<br />
                enterprise & Fortune 500s to transform their boldest visions into
              </span>
              <br />
              <span className={styles.outlineText}>
                market-leading realities. Armed with top-tier talent, deep AI expertise<br />
                and battle-tested frameworks, we don't just build solutions-we<br />
                architect competitive advantages that scale.
              </span>
            </h3>
          </div>
        </div>

        <div className={styles.gridWrapper}>
          <div className="row g-0">
            {/* Row 1 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.gridBox} ${styles.borderRight} ${styles.borderBottom}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={35} />+
                  </h2>
                  <p className={styles.statLabel}>INDUSTRIES MASTERED</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.gridBox} ${styles.borderRight} ${styles.borderBottom}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textGreen}`}>
                    <Counter end={15} />+
                  </h2>
                  <p className={styles.statLabel}>GLOBAL RECOGNITIONS<br />AND AWARDS</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12">
              <div className={`${styles.gridBox} ${styles.imageBox} ${styles.borderBottom}`}>
                <Image 
                  src="/assets/images/founder/founder-office.png" 
                  alt="Office setup" 
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className={styles.officeImage}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.gridBox} ${styles.borderRight} ${styles.patternBox}`}>
                {/* Empty with diagonal lines */}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.gridBox} ${styles.borderRight}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={70} />+
                  </h2>
                  <p className={styles.statLabel}>COUNTRIES POWERED<br />BY TECH INNOVATION</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`${styles.gridBox} ${styles.borderRight}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textGreen}`}>
                    <Counter end={5} />+
                  </h2>
                  <p className={styles.statLabel}>GLOBAL EXCELLENCE<br />CENTERS</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.gridBox}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={1400} />+
                  </h2>
                  <p className={styles.statLabel}>ENGINEERS, DESIGNERS<br />& ARTISTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStats;
