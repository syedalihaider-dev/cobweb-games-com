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

export default function Page2dAnimation() {
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
    <div className="2d-animation-page">
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>2D Animation</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Fluid Animation for Seamless <b>Gameplay</b>` }} />
              <p>From the pacing of idle animations to perfectly timed combat moves, our focus is on fluidity and
						responsiveness. We eliminate choppiness to avoid breaking immersion.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
          <span>2D Animation <b>*</b> 2D Animation <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/2d-game/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>
      
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 2D Animation <b class="c-green">services</b>` }} />
              <p>At Cobweb Games, we offer a wide range of 2D animation services designed to enhance every aspect
						of your gaming project.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/character-animation.webp" alt="*" width={122} height={131} />
                  <h3>Character Animation</h3>
                </div>
                <p>Our character animation services bring your game&apos;s characters to life with fluid, expressive
							movements. We focus on creating animations that reflect each character&apos;s unique personality
							and traits, ensuring they resonate with players.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/environmental-animation.webp" alt="*" width={122} height={131} />
                  <h3>Environmental Animation</h3>
                </div>
                <p>Our environmental animation services make game worlds feel alive and immersive. We animate
							backgrounds, objects, and environmental elements to create dynamic and interactive settings.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/special-effects-animation.webp" alt="*" width={122} height={131} />
                  <h3>Special Effects Animation</h3>
                </div>
                <p>Special effects animation adds a layer of excitement and immersion to your game. Our team
							creates stunning visual effects, from magical spells to explosive actions, enhancing
							gameplay and captivating players.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/ui-animation.webp" alt="*" width={122} height={131} />
                  <h3>UI Animation</h3>
                </div>
                <p>UI animation is crucial in making user interfaces more intuitive and engaging. Our UI
							animation services include animated menus, buttons, and icons that enhance the overall user
							experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/cutscene-animation.webp" alt="*" width={122} height={131} />
                  <h3>Cutscene Animation</h3>
                </div>
                <p>Our cutscene animation services ensure they are visually compelling and emotionally
							impactful. We create high-quality animations that seamlessly blend with your game&apos;s
							narrative, enhancing key plot moments.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/promotional-animation.webp" alt="*" width={122} height={131} />
                  <h3>Promotional Animation</h3>
                </div>
                <p>Promote your game with eye-catching promotional animations. Our promotional animation
							services include trailers, teasers, and social media content that showcase your game&apos;s best
							features.</p>
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
