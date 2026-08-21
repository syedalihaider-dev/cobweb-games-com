import React from 'react';
import Link from 'next/link';
import LiveChatButton from '../../LiveChatButton';
import styles from './FounderHero.module.css';

const FounderHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container h-100">
        <div className={`row h-100 align-items-end pb-5 ${styles.contentRow}`}>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className={styles.textContent}>
              <h1 className={styles.mainTitle}>
                <span className={styles.solidText}>WHERE IT</span>
                <br />
                <span className={styles.outlineText}>ALL BEGAN</span>
              </h1>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <Link href="/contact-us" className="btn-size btn-purple popup">GET STARTED</Link>
                </li>
                <li>
                  <LiveChatButton className="chat btn-size btn-green">LIVE CHAT</LiveChatButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 pb-lg-3">
            <div className={styles.rightContent}>
              <h3 className={styles.subTitle}>We are Brand Vision.</h3>
              <p className={styles.description}>
                Cobweb Games is an award-winning branding, web design, and digital consultancy, strengthening identities and digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHero;
