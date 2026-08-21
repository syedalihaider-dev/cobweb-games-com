'use client';

import { useState } from 'react';
import { defaultFaqs } from '@/components/Faqs';
import styles from './FounderFaqs.module.css';

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

      <div className="marquee" aria-hidden="true">
        <span>COBWEB <b>*</b> COBWEB <b>*</b></span>
        <span>COBWEB <b>*</b> COBWEB <b>*</b></span>
        <span>COBWEB <b>*</b> COBWEB <b>*</b></span>
        <span>COBWEB <b>*</b> COBWEB <b>*</b></span>
      </div>
    </section>
  );
}
