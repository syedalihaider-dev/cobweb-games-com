'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './FounderTestimonials.module.css';

const testimonials = [
  {
    name: 'THOMAS RILEY',
    quote:
      'From early prototyping through worldwide launch, Cobweb Game drove our indie game from idea to finished product. Their development expertise and detailed feedback helped refine our game design at every stage. Moreover, their professional project management and programming allowed us to realize our vision on an expedited timeline and budget. We could not be happier with the development services or the successfulfinal product.',
    image: '/assets/images/founder/client-01.png',
  },
  {
    name: 'THOMAS RILEY 2',
    quote:
      'From early prototyping through worldwide launch, Cobweb Game drove our indie game from idea to finished product. Their development expertise and detailed feedback helped refine our game design at every stage. Moreover, their professional project management and programming allowed us to realize our vision on an expedited timeline and budget. We could not be happier with the development services or the successfulfinal product.',
    image: '/assets/images/founder/client-01.png',
  },
];

const marqueeItems = Array.from({ length: 8 }, (_, index) => index);
const autoplayDelay = 5000;

export default function FounderTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const autoplay = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, autoplayDelay);

    return () => window.clearInterval(autoplay);
  }, [isPaused]);

  const moveSlide = (direction: -1 | 1) => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className={styles.section} aria-labelledby="client-testimonials-title">
      <div className={styles.logoVectorWrapper}>
        <Image
          src="/assets/images/founder/logo-vector.png"
          alt=""
          width={516}
          height={605}
          className={styles.logoVectorImage}
          aria-hidden="true"
        />
      </div>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className={styles.marqueeItem} key={`${item}-${index}`}>
              COBWEB <b>*</b>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.heading}>
          <h2 id="client-testimonials-title">
            <span className={styles.outlineText}>WHAT OUR</span>
            <span className={styles.solidText}>CLIENTS SAY ABOUT US!</span>
          </h2>
        </div>

        <div
          className={styles.slider}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <article className={styles.slide} key={testimonial.name}>
                <div className={styles.copyPanel}>
                  <Image
                    src="/assets/images/founder/quotation.png"
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={32}
                    className={styles.quoteMark}
                  />
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <p className={styles.name}>{testimonial.name}</p>
                </div>
                {/* <div className={styles.imagePanel}>
                  <Image
                    src={testimonial.image}
                    alt={`Client testimonial from ${testimonial.name}`}
                    fill
                    sizes="(max-width: 991px) 100vw, 34vw"
                    className={styles.clientImage}
                  />
                </div> */}
              </article>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.previous}
            type="button"
            onClick={() => moveSlide(-1)}
            aria-label="Show previous testimonial"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className={styles.next}
            type="button"
            onClick={() => moveSlide(1)}
            aria-label="Show next testimonial"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
