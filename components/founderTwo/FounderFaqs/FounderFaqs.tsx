'use client';

import { useState } from 'react';
import { defaultFaqs } from '@/components/Faqs';
import styles from './FounderFaqs.module.css';
import journeyStyles from '../FounderJourney/FounderJourney.module.css';

const founderFaqs = defaultFaqs.slice(0, 6);

export default function FounderFaqs() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className={styles.section} aria-labelledby="founder-faq-title">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="founder-faq-title">
            <span className={styles.outlineText}>FREQUENTLY</span>
            <span className={styles.solidText}>ASKED QUESTION</span>
          </h2>
        </div>

        <div className={styles.accordion}>
          {founderFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `founder-faq-answer-${faq.id}`;

            return (
              <article className={styles.item} key={faq.id}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>
                <div
                  id={contentId}
                  className={`${styles.answerWrap} ${isOpen ? styles.open : ''}`}
                  aria-hidden={!isOpen}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Marquee */}
      <div className={journeyStyles.marqueeContainer}>
        <div className={journeyStyles.marqueeTrack}>
          {[
            'End-to-End Development',
            'Faster Time-To-Market',
            'Cross-Platform Expertise',
            'Scalable Game Solutions',
            'Launch-Ready Games',
          ].flatMap((item, index, arr) => [
            <span key={`${item}-${index}`} className={journeyStyles.marqueeItem}>
              {item}
            </span>,
            <span key={`${item}-star-${index}`} className={journeyStyles.marqueeStar} aria-hidden="true">
              *
            </span>,
            ...(index === arr.length - 1 ? [] : []),
          ])}
        </div>
      </div>
    </section>
  );
}
