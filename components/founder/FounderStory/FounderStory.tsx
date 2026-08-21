import React from 'react';
import Image from 'next/image';
import styles from './FounderStory.module.css';

const FounderStory = () => {
  return (
    <section className={styles.storySection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 mb-5 mb-lg-0">
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                <span className={styles.outlineText}>A GAME STUDIO</span>
                <br />
                <span className={styles.solidText}>WITHOUT BOUNDS</span>
              </h2>
              
              <div className={styles.paragraphs}>
                <p>
                  For years, we told stories inside an animation studio. We built characters from sketches into personalities, turned ideas into movement, & created entire worlds for global brands. Our work was made to be watched, felt, & reme-mbered. The frame was our canvas, and we became very good at knowing exactly what should happen inside it.
                </p>
                <p>
                  Then we walked into GDC. Standing outside Moscone Center in San Francisco, surrounded by an industry built around interactive worlds, something clicked. We were looking at everything we had spent years perfecting from a completely different angle. <span className={styles.textHighlight}>Character design. Environment building. Animation. Cinematic storytelling. Visual development. World creation.</span>
                </p>
                <p>
                  But here, the audience wasn't sitting on the other side of the screen. They were inside it. They could move through the world, challenge it, reshape it, fail in it, discover it, and come back to it differently every time. The story no longer had to end where the director placed the camera. The player could decide what happened next.
                </p>
                <p>
                  That changed the question for us. What if everything we had learned about creating worlds for the screen could be rebuilt for worlds people could actually enter?
                </p>
                <p>
                  Cobweb Games was born from that question. We took years of animation and visual storytelling experience and turned it toward game development, building a team capable of creating not just what players see, but what they experience, and what they can actually play.
                </p>
                <p>
                  Today, game development sits at the center of everything we do. That means full mobile and cross-platform game builds, game design, game art, character and environment design, 2D and 3D game assets, animation, and cinematic game trailers, all working toward the same goal: shipping games people can step into, not just look at. The visual storytelling is still there. It just serves the build now, not the other way around.
                </p>
                <p>
                  The transition wasn't about leaving animation behind. It was about taking everything we had learned from it and putting it to work inside a game engine.
                </p>
                <p>
                  We came from a world where we controlled the frame. Now, we build games where the player controls what happens inside it. We haven't looked back since.
                </p>
              </div>

              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>Zain Khan</h4>
                <p className={styles.authorTitle}>Head of Cobweb Games</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-12">
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/founder/founder-img.png" 
                alt="Zain Khan - Head of Cobweb Games" 
                width={800} 
                height={800} 
                className={styles.portraitImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
