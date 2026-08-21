'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './FounderRecognition.module.css';

type Recognition = {
  year: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  description: string;
};

const recognitions: Recognition[] = [
  {
    year: '2024',
    image: '/assets/images/founder/outlook-busniess.png',
    imageWidth: 253,
    imageHeight: 38,
    alt: 'Outlook Business Spotlight recognition',
    description: 'Recognised by Outlook Business for our impact and innovation.',
  },
  {
    year: '2024',
    image: '/assets/images/founder/Group 104267.png',
    imageWidth: 268,
    imageHeight: 145,
    alt: 'India CSR Award',
    description: 'Honoured for making a meaningful impact through exceptional work.',
  },
  {
    year: '2026',
    image: '/assets/images/founder/india-times.png',
    imageWidth: 267,
    imageHeight: 250,
    alt: "TIME India's Fastest-Growing Companies 2026",
    description: "The India's Fastest-Growing Companies 2026 Recognised by TIME and Statista",
  },
  {
    year: '2026',
    image: '/assets/images/founder/financial-times.png',
    imageWidth: 252,
    imageHeight: 115,
    alt: 'Financial Times High-Growth Companies Asia-Pacific 2026',
    description: 'Named among Asia-Pacific’s high-growth companies by the Financial Times.',
  },
  {
    year: '2025',
    image: '/assets/images/founder/et-industry.png',
    imageWidth: 282,
    imageHeight: 56,
    alt: 'ET Industry Change Maker recognition',
    description: 'Celebrated as an industry change maker for forward-thinking digital work.',
  },
];

export default function FounderRecognition() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;

    const initialize = () => {
      if (disposed || !sliderElement) return;

      const $ = window.$;
      if (!$ || !Reflect.has($.fn, 'slick')) {
        retryTimer = setTimeout(initialize, 100);
        return;
      }

      const slider = $(sliderElement);
      if (!slider.hasClass('slick-initialized')) {
        slider.slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3600,
          centerMode: true,
          centerPadding: '0px',
          draggable: true,
          infinite: true,
          pauseOnFocus: true,
          pauseOnHover: true,
          slidesToScroll: 1,
          slidesToShow: 4,
          speed: 650,
          swipe: true,
          touchMove: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, centerPadding: '24px' },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, centerPadding: '18vw' },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, centerPadding: '11vw' },
            },
          ],
        });
        slider.slick('slickGoTo', 2, true);
      }
    };

    initialize();

    return () => {
      disposed = true;
      if (retryTimer) clearTimeout(retryTimer);

      const $ = window.$;
      if ($ && sliderElement && Reflect.has($.fn, 'slick')) {
        const slider = $(sliderElement) as unknown as JQuery;
        if (slider.hasClass('slick-initialized')) slider.slick('unslick');
      }
    };
  }, []);

  const moveSlider = (direction: 'slickPrev' | 'slickNext') => {
    const $ = window.$;
    const sliderElement = sliderRef.current;
    if (!$ || !sliderElement) return;
    const slider = $(sliderElement) as unknown as JQuery;
    if (slider.hasClass('slick-initialized')) slider.slick(direction);
  };

  return (
    <section className={styles.recognitionSection} aria-labelledby="recognition-title">
      <div className={styles.decorativeMark} aria-hidden="true" />

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9 text-center">
            <h2 id="recognition-title" className={styles.heading}>
              <span className={styles.outlineText}>RECOGNITION ROOTED</span>
              <span className={styles.solidText}>IN RESULTS</span>
            </h2>
            <p className={styles.introduction}>
              Every award we receive is a testament to our commitment to excellence. These honors confirm that our work makes a real difference and push us to raise the bar again. They remind us that trust is earned one project at a time.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.carouselBreakout}>
        <div className={styles.carousel} ref={sliderRef}>
          {recognitions.map((recognition) => (
            <article className={styles.slide} key={`${recognition.year}-${recognition.image}`}>
              <div className={styles.card}>
                <span className={styles.year}>{recognition.year}</span>
                <span className={styles.plus} aria-hidden="true">+</span>
                <div className={styles.logoWrap}>
                  <Image
                    src={recognition.image}
                    alt={recognition.alt}
                    width={recognition.imageWidth}
                    height={recognition.imageHeight}
                    className={styles.logo}
                  />
                </div>
                <p className={styles.cardDescription}>{recognition.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={`${styles.control} ${styles.previous}`} onClick={() => moveSlider('slickPrev')} aria-label="Show previous recognition">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className={`${styles.control} ${styles.next}`} onClick={() => moveSlider('slickNext')} aria-label="Show next recognition">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
