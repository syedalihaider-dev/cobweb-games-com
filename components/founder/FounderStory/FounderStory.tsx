"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './FounderStory.module.css';

const FounderStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start progress when the section's top hits a bit below the middle of the screen
      const startPoint = windowHeight * 0.7;
      
      // We want progress to reach 1 when the bottom of the section is near the middle/bottom of the viewport
      // Total scroll distance to measure
      const scrollDistance = height;
      
      let progress = (startPoint - top) / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.storySection}>
      <div className={styles.afterWrapper}>
        <Image
          src="/assets/images/founder/logo-vector.png"
          alt="Vector Logo Image"
          width={406}
          height={436}
          className={styles.afterImage}
          priority
        />
      </div>
      
      <div className="container">
        <div className="row">
          
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 mb-lg-0">
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                <span className={styles.solidText}>Here’s how it all</span>
                <span className={styles.outlineText}>unfolded</span>
              </h2>

              <div className={styles.paragraphs}>
                <p>
                  For years, we told stories inside an animation studio. We built characters from sketches into personalities, turned ideas into movement, and created entire worlds for global brands.
                </p>
                <p>
                  Our work was made to be watched, felt, and remembered. The frame was our canvas, and we became very good at knowing exactly what should happen inside it. Then we walked into GDC. Standing outside Moscone Center in San Francisco, surrounded by an industry built around interactive worlds, we felt something click.
                </p>
                <p>
                  We were looking at everything we had spent years perfecting from a completely different angle. <span className={styles.textHighlight}>Character design. Environment building. Animation. Cinematic storytelling. Visual development. World creation.</span>
                </p>
                <p>
                  But here, the audience wasn't sitting on the other side of the screen. They were inside it. They could move through the world, challenge it, reshape it, fail in it, discover it, and come back to it differently every time. The story no longer had to end where the director placed the camera. The player could decide what happened next and how the story progresses.
                </p>
                <p>
                  That changed the question for us. What if everything we had learned about creating worlds for the screen could be rebuilt for worlds people could actually enter?
                </p>
                <p>
                  Cobweb Games was born from that question. We took years of animation and visual storytelling experience and turned it toward game development, building a team capable of creating not just what players see, but what they experience, and what they can actually play.
                </p>
                <p>
                  Today, game development sits at the center of everything we do. That means full mobile and cross-platform game builds, game design, game art, character and environment design, 2D and 3D game assets, animation, and cinematic game trailers, all working toward the same goal: shipping games people can step into, not just look at.
                </p>
                <p>
                  The visual storytelling is still there. It just serves the build now, not the other way around.
                </p>
                <p>
                  The transition wasn't about leaving animation behind. It was about taking everything we had learned from it and putting it to work inside a game engine. We came from a world where we controlled the frame. Now, we build games where the player controls what happens inside it.
                </p>
              </div>

              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>We haven't looked back since.</h4>
              </div>
            </div>
          </div>

          {/* Progress Bar (Desktop only) */}
          <div className="col-lg-1 d-none d-lg-flex justify-content-center">
             <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarTrack}>
                   <div 
                     className={styles.progressBarFill} 
                     style={{ height: `${scrollProgress * 100}%` }}
                   />
                </div>
             </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-md-12">
            <div className={styles.imageScrollWrapper}>
              <div 
                className={styles.imageWrapper}
                style={{ 
                  top: `${scrollProgress * 100}%`,
                  transform: `translateY(-${scrollProgress * 100}%)`, 
                }}
              >
                <Image
                  src="/assets/images/founder/founder-vector.png"
                  alt="Zain Khan - Head of Cobweb Games"
                  width={766}
                  height={914}
                  className={styles.portraitImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
