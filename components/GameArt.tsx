'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';
import styles from './GameArt.module.css';
import { bindSlickNavHighlight } from './slickNavHighlight';

export default function GameArt() {
  const categories = [
    { 
      key: "2d_art", 
      path: "2d-art", 
      title: "2D art",
      description: "Full-service game art outsourcing across 2D art and 3D art. Concept through final deliverable, named to your convention, formatted for your pipeline."
    },
    { 
      key: "3d_art", 
      path: "3d-art", 
      title: "3D art",
      description: "Full-service game art outsourcing across 2D art and 3D art. Concept through final deliverable, named to your convention, formatted for your pipeline."
    },
    { 
      key: "3d_character", 
      path: "3d-character", 
      title: "3D Character Design",
      description: "Original character designs built with animation and rigging requirements in mind from the first sketch, not discovered to be problematic at the rig stage."
    },
    { 
      key: "3d_environment", 
      path: "3d-environment", 
      title: "3D Environment Design",
      description: "3D Game Environment art that serves gameplay, respects the draw call budget, and makes the player feel like they are somewhere specific."
    },
    { 
      key: "3d_game", 
      path: "3d-game", 
      title: "3D Game Model",
      description: "Production-ready 3D game models at the poly count, UV spec, and PBR texturing standard the brief requires."
    },
    { 
      key: "3d_illustration", 
      path: "3d-illustration", 
      title: "3D Illustration Services",
      description: "3D illustration services for marketing, pitch materials, and promotional content at a visual quality that sells the game before it ships."
    },
    { 
      key: "character_design", 
      path: "character-design", 
      title: "Character Design",
      description: "Original character designs built with animation and rigging requirements in mind from the first sketch, not discovered to be problematic at the rig stage."
    },
    { 
      key: "environment_design", 
      path: "environment-design", 
      title: "Environment design",
      description: "3D Game Environment art that serves gameplay, respects the draw call budget, and makes the player feel like they are somewhere specific."
    },
    { 
      key: "game_level", 
      path: "game-level", 
      title: "Game Level Design",
      description: "Game Level art and level design support across visual fidelity tiers. AAA blockout-to-production pipelines and 2D level design for mobile and indie."
    },
    { 
      key: "uiux", 
      path: "uiux", 
      title: "UIUX Design",
      description: "Game UI art design that communicates at a glance under active gameplay cognitive load. Tested at the screen sizes real players use."
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
        const artHighlight = bindSlickNavHighlight($, '.art-slider-content', '.art-slider-content');
        destroyHighlight = artHighlight.destroy;
        
        // Initialize art thumbnail slider
        $('.art-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.art-slider-content'
        });

        // Initialize art main slider
        $('.art-slider-content').not('.slick-initialized').slick({
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
          asNavFor: '.art-thumb-slider'
        });

        artHighlight.refresh();

        // Tabbing logic
        const tabTargetElements = $('[data-targetit]');
        tabTargetElements.off('click.gameArt').on('click.gameArt', function (this: HTMLElement) {
          $(this).siblings().removeClass('current');
          $(this).addClass('current');
          const target = $(this).data('targetit');
          $('.' + target).siblings('[class*="my-tabs"]').removeClass('current');
          $('.' + target).addClass('current');
          $('.slick-slider').slick('setPosition', 0);
        });
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
        $('[data-targetit]').off('click.gameArt');
        $('.art-thumb-slider.slick-initialized, .art-slider-content.slick-initialized').slick('unslick');
      }
    };
  }, []);

  return (
    <section className={`home-services game-art ${styles.section}`}>
      <h2 className="serv-main text-center"><span>our</span> Services</h2>
      <div className={`container serv-bg next-image-background-host ${styles.panel}`} >
        <Image className="next-image-background" src="/assets/images/game-art-bg.webp" alt="" fill sizes="100vw" />
		<Image className="next-service-edge" src="/assets/images/cta-shape-02.webp" alt="" width={28} height={306} />
        <div className={`outline-head ${styles.verticalLabel}`}>
          <h3>Game <span>Art</span></h3>
        </div>
        <div className={`row align-items-center ${styles.panelRow}`}>
          <div className={`col-lg-6 ${styles.visualColumn}`}>
            <div className="img-wrap">
              <Image className="img-01 lazy"
                src="/assets/images/game-art-img-01.webp" alt="*" width={461} height={615} />
              <Image className="img-02 lazy"
                src="/assets/images/banner-imgs-bg.gif" alt="*" width={1440} height={810} unoptimized />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.contentColumn}`}>
            <div className={`content-wrap ${styles.content}`}>
              <h2 className={`main-heading ${styles.title}`}>Cobweb Game <b className="c-green">Art</b> Services</h2>
              <p>We provide expert game art outsourcing services for video games. Our artists create vibrant 2D and detailed 3D graphics, including concept art, characters, environments, and more. Whether a match needs flashy AAA art or casual illustrations, their team delivers top-quality game assets. With experience in various styles and genres, we help indie studios and major publishers bring your visions to life through compelling visuals.</p>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <Link href="/game-art" className="btn-size btn-green popup">Read More</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content art-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider art-thumb-slider">
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
