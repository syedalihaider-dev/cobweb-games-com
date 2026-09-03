import React from 'react';
import Image from 'next/image';
import Counter from '../../Counter';
import styles from './FounderStats.module.css';

const FounderStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={`container-fluid px-0 ${styles.statsContainer}`}>
        <div className={styles.gridWrapper}>
          <div className="row g-0">
            {/* Row 1 */}
            <div className="col-lg-3 col-md-6 col-6">
              <div className={`${styles.gridBox} ${styles.boxGames}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={50} />+
                  </h2>
                  <p className={styles.statLabel}>Games Developed</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <div className={`${styles.gridBox} ${styles.boxYears}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textGreen}`}>
                    <Counter end={10} />+
                  </h2>
                  <p className={styles.statLabel}>Years <br />Experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className={`${styles.gridBox} ${styles.imageBox} ${styles.boxImage}`}>
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
            <div className="col-lg-3 d-none d-lg-block">
              <div className={`${styles.gridBox} ${styles.patternBox} ${styles.boxPattern}`}>
                {/* Empty with diagonal lines */}
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className={`${styles.gridBox} ${styles.boxClients}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={30} />+
                  </h2>
                  <p className={styles.statLabel}>Global<br />Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className={`${styles.gridBox} ${styles.boxPlatforms}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textGreen}`}>
                    <Counter end={15} />+
                  </h2>
                  <p className={styles.statLabel}>Platforms</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className={`${styles.gridBox} ${styles.boxPlayers}`}>
                <div className={styles.statItem}>
                  <h2 className={`${styles.statNumber} ${styles.textPurple}`}>
                    <Counter end={10} />M+
                  </h2>
                  <p className={styles.statLabel}>Players <br />Reached</p>
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
