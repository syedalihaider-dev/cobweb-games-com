'use client';

import Image from 'next/image';

import React from 'react';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';
import styles from './CtaTwo.module.css';

interface CtaTwoProps {
  sectionClass?: string;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  chatButtonText?: string;
  showChatButton?: boolean;
}

const CtaTwo: React.FC<CtaTwoProps> = ({
  sectionClass = 'cta-02',
  imageSrc = '/assets/images/cta-car.gif',
  imageAlt = '*',
  heading = 'Bring Your Ideas to <b class="c-green">Playable Reality!</b>',
  description = "Most games that fail do not fail because the idea was bad. They fail because the production did not have the right team or the right partner. The idea is the starting point. The production is where it becomes a game.",
  buttonText = 'Get Started',
  buttonLink = 'contact-us',
  chatButtonText = 'Live Chat',
  showChatButton = true
}) => {
  return (
    <section className={`${sectionClass} ${styles.section}`}>
      <Image className={`cta-bg ${styles.background}`} src="/assets/images/cta-02-bg.webp" alt="" width={1379} height={308} sizes="100vw" />
      <div className={`container ${styles.container}`}>
        <div className="row align-items-center">
          <div className={`col-lg-5 ${styles.visualColumn}`}>
            <div className="img-wrap">
              <Image
                className="lazy"
                src={imageSrc}
                data-src={imageSrc}
                alt={imageAlt}
                width={585}
                height={362}
                unoptimized
              />
            </div>
          </div>
          <div className={`col-lg-7 ${styles.contentColumn}`}>
            <h2
              className={`main-heading ${styles.heading}`}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className={styles.description}>{description}</p>
            <ul className={`btn-wrap d-flex align-items-center ${styles.actions}`}>
              <li>
                <Link href={buttonLink.startsWith('/') ? buttonLink : `/${buttonLink}`} className={`btn-size btn-white popup ${styles.whiteButton}`}>
                  {buttonText}
                </Link>
              </li>
              {showChatButton && (
                <li>
                  <LiveChatButton className="chat btn-size btn-green">
                    {chatButtonText}
                  </LiveChatButton>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
