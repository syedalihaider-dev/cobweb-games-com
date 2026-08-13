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

export default function Page3dAnimation() {
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
    <div className="3d-animation-page">
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Animation</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Turn Ambitious Visions into Tangible <b>Realities</b>` }} />
              <p>Our dedication to perfection is evident in every aspect of our work, as we guarantee every
						project meets and surpasses expectations, providing players with realistic and inspirational
						gaming experiences.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Animation <b>*</b> 3D Animation <b>*</b></span>
          <span>3D Animation <b>*</b> 3D Animation <b>*</b></span>
          <span>3D Animation <b>*</b> 3D Animation <b>*</b></span>
          <span>3D Animation <b>*</b> 3D Animation <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/3d-game/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>
     

      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Animation <b class="c-green">services</b>` }} />
              <p>Step into the future of gaming visuals with Cobweb Games&apos; comprehensive 3D animation services. We
						combine technical expertise with artistic flair to deliver immersive experiences.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game/character-animation.webp" alt="*" width={122} height={131} />
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
                  <Image className="lazy" src="/assets/images/3d-game/environmental-animation.webp" alt="*" width={122} height={131} />
                  <h3>Environmental Animation</h3>
                </div>
                <p>Our environmental animation services make game worlds feel alive and immersive. We animate
							backgrounds, objects, and environmental elements to create dynamic and interactive settings.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game/cutscene-animation.webp" alt="*" width={122} height={131} />
                  <h3>Cutscene Animation</h3>
                </div>
                <p>Improve your game&apos;s narrative with our cutscene animation service. From cinematic sequences
							that drive the plot forward to dramatic reveals and emotional moments, we excel in creating
							impactful storytelling experiences.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game/ui-animation.webp" alt="*" width={122} height={131} />
                  <h3>UI/UX Animation</h3>
                </div>
                <p>Enhance user experience with intuitive and engaging UI/UX animations. We design and animate
							user interfaces, menus, and HUD elements that look visually appealing and ensure smooth
							navigation and interaction.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game/particle-effect.webp" alt="*" width={122} height={131} />
                  <h3>Particle Effects</h3>
                </div>
                <p>Transform your game&apos;s visual effects with our expertise in particle animation. Whether it&apos;s
							spellbinding magic effects, realistic explosions, or environmental phenomena like rain and
							fire, we specialize in creating dynamic particle animations that add depth and excitement.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/3d-game/motion-capture-integration.webp" alt="*" width={122} height={131} />
                  <h3>Motion Capture Integration</h3>
                </div>
                <p>Our motion capture integration service allows precise movement data capture and integration
							into your game&apos;s animations. From character actions to complex combat choreography, we
							optimize realism and fluidity, ensuring every motion feels natural and responsive.</p>
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
