import React from 'react';
import Link from 'next/link';
import LiveChatButton from '../../LiveChatButton';
import styles from './FounderHero.module.css';
import Image from 'next/image';

const FounderHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgimage}>
        <Image
          src="/assets/images/founder/founder-bg.png"
          width={1920}
          height={1080}
          alt="Founder Image"
          className="img-fluid bg-img"
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          fetchPriority='high'
          loading='eager'
        />
      </div>
      {/* <div className={styles.overlay}></div> */}
    </section>
  );
};

export default FounderHero;
