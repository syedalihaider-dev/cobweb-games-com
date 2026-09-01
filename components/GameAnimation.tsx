'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';
import { bindSlickNavHighlight } from './slickNavHighlight';

export default function GameAnimation() {
  const categories = [
    { 
      key: "2d_animation", 
      path: "2d-animation", 
      title: "2D Animation Services",
      description: <>Our <Link href="/2d-animation">2D Animation Services</Link> includes everything from character movement cycles, idle animations, attack sequences, and the transition frames that determine whether motion reads as fluid or mechanical. Delivered as correctly-packed sprite sheets.
</>
    },
    { 
      key: "3d_animation", 
      path: "3d-animation", 
      title: "3D Animation Services",
      description: <><Link href="/3d-animation">3D animation services</Link> engineered for the animation state machine. Weight painting and joint limits handled so your character moves like a character and not a glitchy mess of vertices.
</>
    },
    { 
      key: "cycle_animations", 
      path: "2d-animation", 
      title: "Cycle Animations Services",
      description: "Walk cycles, run cycles, idle cycles, and the full movement library a character needs to exist believably in a real-time environment."
    },
    { 
      key: "environment_animation", 
      path: "3d-animation", 
      title: "Environment Animation Services",
      description: "Foliage, water, atmospheric effects, and interactive world elements. The ambient motion that makes a world feel alive rather than rendered."
    },
    { 
      key: "game_trailer", 
      path: "2d-animation", 
      title: "Game Trailer Animation Services",
      description: "Cinematic trailer animation for announcements and launch campaigns. Built to create the feeling of playing the game rather than listing its features."
    },
    { 
      key: "vfx_cutscene", 
      path: "3d-animation", 
      title: "Visual Effects and Cutscene Animation Services",
      description: "VFX and cutscene animation that holds the visual quality standard that the rest of the production has established. Not the place to cut the budget."
    },
    { 
      key: "character_animation", 
      path: "2d-animation", 
      title: "Character Animation Services",
      description: "Full character animation, including dialogue performance, combat systems, and the secondary motion that separates an inhabited character from one that appears to be operated."
    }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;
    let cancelled = false;
    let destroyHighlight = () => {};

    const initSlick = () => {
      if (cancelled) return;
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        const animationHighlight = bindSlickNavHighlight($, '.anim-slider-content', '.anim-slider-content');
        destroyHighlight = animationHighlight.destroy;
        
        // Initialize anim thumbnail slider
        $('.anim-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true
        });

        // Initialize anim main slider
        $('.anim-slider-content').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          arrows: false,
          vertical: true,
          autoplay: true,
          verticalSwiping: true,
          focusOnSelect: true,
          asNavFor: '.anim-thumb-slider'
        });

        $('.anim-thumb-slider.slick-initialized').slick('slickSetOption', 'asNavFor', '.anim-slider-content', false);

        animationHighlight.refresh();
      } else {
        slickTimer = setTimeout(initSlick, 100);
      }
    };

    initSlick();

    return () => {
      cancelled = true;
      clearTimeout(slickTimer);
      destroyHighlight();

      const $ = window.$;
      if ($ && Reflect.has($.fn, 'slick')) {
        $('.anim-thumb-slider.slick-initialized, .anim-slider-content.slick-initialized').slick('unslick');
      }
    };
  }, []);

  return (
    <section className="home-services game-develp">
      <div className="container serv-bg next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/game-art-bg.webp" alt="" fill sizes="100vw" />
		<Image className="next-service-edge" src="/assets/images/cta-shape-02.webp" alt="" width={28} height={306} />
        <div className="outline-head">
          <h3>Game <span>Animation</span></h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-wrap">
              <Image className="lazy img-01"
                src="/assets/images/game-development-img-01.gif" alt="*" width={1222} height={780} unoptimized />
              <Image className="lazy img-02"
                src="/assets/images/game-development-img-02.gif" alt="*" width={379} height={647} unoptimized />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-wrap">
              <h2 className="main-heading">Cobweb Game <b className="c-green">Animation</b> Services</h2>
             <>Let our Game animation expertise bring your game vision to life. As a leading <Link href="/game-animation">Game animation studio</Link>, we can design breathtaking visual effects and animate characters with fluid realism. Whether you need 2D or 3D art, our professional animators will craft optimized animations to enhance gameplay and fulfill your creative goals. Outsource to our studio for top-quality character motions and spectacular scenes that captivate players from start to finish.
             </>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <Link href="/game-animation" className="btn-size btn-green popup">Read More</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content anim-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider anim-thumb-slider">
              {categories.map((cat, i) => (
                <li key={i} className={`${cat.key} my-tabs ${i === 0 ? "current" : ""}`}>
                  <div className="h-serv-inner-port">
                    <div className="row">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="col-md-4">
                          <a href={`/assets/images/portfolio/home-sliders/${cat.path}/${num}.webp`}
                            data-fancybox="" tabIndex={0}>
                              <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={`/assets/images/portfolio/home-sliders/${cat.path}/${num}.webp`}
                              alt="*" width={num === 2 ? 729 : 726} height={570} />
                          </a>
                        </div>
                      ))}
                    </div>
                    {/* Description added here */}
                    <div className="category-description mt-3 p-3" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '8px', borderLeft: '3px solid #00ff88' }}>
                      <p className="text-white" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '0' }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="fixed-content">
              <h3>Our Works</h3>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                </li>
                <li>
                  <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
