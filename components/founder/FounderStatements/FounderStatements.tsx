import React from 'react';
import Image from 'next/image';
import styles from './FounderStatements.module.css';

const FounderStatements = () => {
  return (
    <section className={styles.statementsSection}>
      {/* Decorative Vector Line Background */}
      <div className={styles.vectorLineWrapper}>
        <Image 
          src="/assets/images/founder/vector-line.png" 
          alt="Decorative Background" 
          width={800} 
          height={800}
          className={styles.vectorLineImage}
          aria-hidden="true"
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h2 className={styles.mainTitle}>
              <span className={styles.outlineText}>OUR</span>{' '}
              <span className={styles.solidText}>CORE</span>{' '}
              <span className={styles.outlineText}>STATEMENTS</span>
            </h2>
            <p className={styles.mainDescription}>
              Cobweb Games is dedicated to finding new ways to innovate and showcase the most thrilling gaming worlds. We always go the extra mile to create exceptional game projects and colorful art, recognized and highlighted by top-tier video game companies.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Mission Card */}
          <div className="col-lg-6 col-md-10">
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src="/assets/images/founder/mission.png" 
                  alt="Cobweb Mission" 
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>COBWEB MISSION</h3>
                <div className={styles.titleDivider}></div>
                <p className={styles.cardDescription}>
                  Our mission is to consistently understand client needs and industry trends, utilizing our gaming expertise to meaningfully connect people through innovative & next-gen gaming experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-6 col-md-10">
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src="/assets/images/founder/vision.png" 
                  alt="Cobweb Vision" 
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>COBWEB VISION</h3>
                <div className={styles.titleDivider}></div>
                <p className={styles.cardDescription}>
                  Our vision is to build a reputation as a trusted gaming advisor and game development agency, consistently delivering value through games that outlast innovation, creativity and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStatements;
