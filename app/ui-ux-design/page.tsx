'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

export default function UiUxDesign() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
          ]
        });
      } else {
        timer = setTimeout(initSlick, 100);
      }
    };
    initSlick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ui-ux-design-page">
       <section className="game-banner d-flex relative">
       <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>UI/UX Design Services</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Designs Geared Toward Your <b>Players</b>` }} />
              <p>Want players to be hooked? We&apos;ll design an interface that&apos;s as immersive as the game, keeping them playing for hours.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
          <span>UI/UX Design Services <b>*</b> UI/UX Design Services <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/ui-ux-design/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>

      
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our UI/UX Design <b class="c-green">services</b>` }} />
              <p>Whatever style you want your game to be in and whatever requirements you set before us, we can pull it off with excellent results.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/wireframe.webp" alt="*" width={122} height={131} />
                  <h3>Wireframe and Prototype</h3>
                </div>
                <p>We design and create simple plans and detailed models to visualize and plan future interfaces. Ensuring every element serves a purpose and meets specific goals.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-detailing.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Detailing and Design</h3>
                </div>
                <p>We design intuitive interfaces that are both visually appealing and easy to use. We implement the latest methods and tools to enhance user experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/mobile-game.webp" alt="*" width={122} height={131} />
                  <h3>Mobile Game UI Design</h3>
                </div>
                <p>We craft layouts, controls, and interactions tailored for mobile gaming, optimizing for touch-based usability and seamless navigation on smaller screens.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/video-game.webp" alt="*" width={122} height={131} />
                  <h3>Game App and Video Game UI</h3>
                </div>
                <p>We design immersive interfaces for gaming apps across platforms, focusing on user engagement and fluid interactions from login to in-app functionalities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/ux-design.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Design Consulting</h3>
                </div>
                <p>We provide expert guidance to align design strategies with brand goals. Offering tailored solutions to optimize user satisfaction and business objectives.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/ui-ux-design/support-maintenance.webp" alt="*" width={122} height={131} />
                  <h3>Support and Maintenance</h3>
                </div>
                <p>After your game has launched, we provide ongoing assistance with keeping it running smoothly, including updates, bug fixes, and performance enhancements to guarantee an engaging gaming experience for players.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />
      <Platform />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      <Reviews />
      <Faqs />
      <FooterForm />
    </div>
  );
}
