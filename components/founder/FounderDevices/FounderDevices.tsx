'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FounderDevices.module.css';

const slides = [
  {
    image: '/assets/images/founder/pc-game.png',
    heading: 'PC GAME',
    description: 'Steam, Epic Games Store, and proprietary distribution. Scalable graphics settings for the hardware range that PC players actually run.'
  },
  {
    image: '/assets/images/founder/pc-game.png',
    heading: 'CONSOLE GAME',
    description: 'PlayStation 5, Xbox Series X/S, and Nintendo Switch. Optimization and compliance for major console platforms.'
  },
  {
    image: '/assets/images/founder/pc-game.png',
    heading: 'MOBILE GAME',
    description: 'iOS and Android. Performance-calibrated for the mid-range device the median player actually owns.'
  }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds

export default function FounderDevices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const startTimer = () => {
    if (progressTimerRef.current) {
      cancelAnimationFrame(progressTimerRef.current);
    }
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= AUTOPLAY_DURATION) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      } else {
        progressTimerRef.current = requestAnimationFrame(animate);
      }
    };

    progressTimerRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (progressTimerRef.current) {
        cancelAnimationFrame(progressTimerRef.current);
      }
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // swipe threshold in pixels

    if (diffX > threshold) {
      // Swiped left -> next slide
      handleNext();
    } else if (diffX < -threshold) {
      // Swiped right -> prev slide
      handlePrev();
    }
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className={styles.devicesSection}>
      <div className={styles.logoVectorWrapper}>
        <Image
          src="/assets/images/founder/logo-vector-left.png"
          alt=""
          width={516}
          height={605}
          className={styles.logoVectorImage}
          aria-hidden="true"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10 col-xl-10">
            <h2 className={styles.mainTitle}>
              <span className={styles.outlineText}>Games Built </span>
              <span className={styles.solidText}>for Every Platform</span>
            </h2>
            <p className={styles.subtext}>
              From mobile and tablet to PC and console, our games are built to deliver a smooth, engaging experience across the devices players use every day. Each build is optimised for its platform, balancing performance, visuals, controls, and gameplay.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div 
              className={styles.sliderWrapper}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slide Images */}
              <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ''}`}
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      visibility: index === activeIndex ? 'visible' : 'hidden',
                      transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.heading}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className={styles.slideImage}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Bottom Overlay Info */}
              <div className={styles.overlayInfo}>
                <div className={styles.overlayContentRow}>
                  {/* Left: Slide Text */}
                  <div className={styles.slideTextCol}>
                    <h3 className={styles.slideHeading}>{currentSlide.heading}</h3>
                    <p className={styles.slideDescription}>{currentSlide.description}</p>
                  </div>

                  {/* Right: Navigation Controls */}
                  <div className={styles.navigationControls}>
                    {/* Previous Arrow */}
                    <button
                      onClick={handlePrev}
                      className={styles.navArrow}
                      aria-label="Previous Slide"
                    >
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 13L1 7L7 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Progress Dots */}
                    <div className={styles.progressDots}>
                      {slides.map((_, index) => {
                        let fillPercent = 0;
                        if (index < activeIndex) {
                          fillPercent = 100;
                        } else if (index === activeIndex) {
                          fillPercent = progress;
                        }
                        return (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={styles.dotWrapper}
                            aria-label={`Go to slide ${index + 1}`}
                          >
                            <div className={styles.dotBg}>
                              <div
                                className={styles.dotFill}
                                style={{ width: `${fillPercent}%` }}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Arrow */}
                    <button
                      onClick={handleNext}
                      className={styles.navArrow}
                      aria-label="Next Slide"
                    >
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L7 7L1 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
