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

export default function GameAnimation() {
  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;

        // Initialize mob slider
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });

        // Services slider
        $('.services-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });

      } else {
        slickTimer = setTimeout(initSlick, 100);
      }
    };

    initSlick();

    return () => {
      clearTimeout(slickTimer);
    };
  }, []);

  return (
    <div className="game-animation-page">
      <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <h5>Game Animation</h5>
              <h1>Game <b>Animation</b></h1>
              <p>We offer end-to-end game art production services ranging from casual 2D characters to breathtaking 3D environments, masterfully crafted to convey your game vision.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
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
        <div className="marquee">
          <span>Game Animation <b>*</b> Game Animation <b>*</b></span>
          <span>Game Animation <b>*</b> Game Animation <b>*</b></span>
          <span>Game Animation <b>*</b> Game Animation <b>*</b></span>
          <span>Game Animation <b>*</b> Game Animation <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1]'>
          <video playsInline muted loop preload="auto" autoPlay className='h-full w-full object-cover object-right opacity-[0.5]'>
            <source src="/assets/images/game-animation/animation-page-banner.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="game-sec2">
        <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_234_493)">
            <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213" stroke="#5339F8" strokeWidth="55" />
          </g>
          <defs>
            <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_493" />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <figure className="img-wrap">
                <Image className="lazy" src="/assets/images/game-animation/sec2-img.webp" alt="*" width={425} height={552} />
              </figure>
            </div>
            <div className="col-lg-6">
              <h2 className="main-heading">Game Art And <strong className="c-green">Design</strong> <b>Services</b></h2>
              <p>Starloop Studios has end-to-end art support with multiple game art solutions to back the project on all production stages, securing synergy between teams and completing milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and our understanding of how great games should sound, feel, and look.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="game-category">
        <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_234_493)">
            <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213" stroke="#5339F8" strokeWidth="55" />
          </g>
          <defs>
            <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_493" />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Categories</h4>
              <h2 className="main-heading">Our Game <b className="c-green">Animations</b> <br /> Categories</h2>
            </div>
          </div>
          <div className="row mob-slider">
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/2d-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>2D Animation</h3>
                    <p>We bring your game&apos;s story characters to life with vibrant, expressive 2D visuals. We craft every frame with attention, ensuring smooth, engaging game animations that will make your game stand out.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/3d-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>3D Animation</h3>
                    <p>Step into the realm of three-dimensional excellence. Our 3D game animator specialists create engaging, realistic experiences, enhancing your game with detailed character movements and dynamic environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/character-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>Character Animation</h3>
                    <p>Characters are the heart of your game. Therefore, we focus on making every game character alive, infusing each model with depth so that every movement and expression feels authentic and alive.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/environment-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>Game Trailers and NFT Game Teasers</h3>
                    <p>Create hype around your game before it is released with our game trailers and NFT game teasers. We create compelling previews that highlight your game&apos;s best features, stirring anticipation among target audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/props-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>AR/VR Animation</h3>
                    <p>Reveal the full gaming potential of AR/VR with our top-notch game animation. We enhance the interactive AR/VR feature with advanced visuals that immerse players deeper into virtual dimensions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy" src="/assets/images/game-animation/slot-machine-animation.webp" alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>VFX Animation</h3>
                    <p>Our VFX animation services add a layer of polish and spectacle to your game. From cool effects to epic visual feast, we ensure every scene is visually stunning and memorable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />

      <section className="inner-portfolio mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Our Projects</h4>
              <h2 className="main-heading">Dynamic Works That Push <b className="c-green">Boundaries</b></h2>
              <p>Browse some diverse games and applications our talented teams have helped shape. We&apos;ve played an integral role in delivering groundbreaking interactive experiences to enthusiastic audiences worldwide.</p>
            </div>
          </div>
          <div className="row g-0">
            {/* Left column */}
            <div className="col-lg-6">
              <div className="row g-0">
                <div className="col-lg-12">
                  <a href="/assets/images/portfolio/2d-art/port-01.webp" className="port-img h-1" data-fancybox tabIndex={0}>
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src="/assets/images/portfolio/2d-art/port-01.webp" alt="*" width={552} height={505} />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="/assets/images/portfolio/2d-art/port-02.webp" className="port-img h-2" data-fancybox tabIndex={0}>
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src="/assets/images/portfolio/2d-art/port-02.webp" alt="*" width={267} height={331} />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="/assets/images/portfolio/2d-art/port-03.webp" className="port-img h-2" data-fancybox tabIndex={0}>
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src="/assets/images/portfolio/2d-art/port-03.webp" alt="*" width={266} height={331} />
                  </a>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="col-lg-6">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <a href="/assets/images/portfolio/2d-art/port-04.webp" className="port-img h-4" data-fancybox tabIndex={0}>
                        <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                        <Image src="/assets/images/portfolio/2d-art/port-04.webp" alt="*" width={301} height={242} />
                      </a>
                    </div>
                    <div className="col-lg-12 pt-3">
                      <a href="/assets/images/portfolio/2d-art/port-05.webp" className="port-img h-5" data-fancybox tabIndex={0}>
                        <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                        <Image src="/assets/images/portfolio/2d-art/port-05.webp" alt="*" width={301} height={242} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <a href="/assets/images/portfolio/2d-art/port-06.webp" className="port-img h-1" data-fancybox tabIndex={0}>
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src="/assets/images/portfolio/2d-art/port-06.webp" alt="*" width={248} height={505} />
                  </a>
                </div>
                <div className="col-lg-12">
                  <a href="/assets/images/portfolio/2d-art/port-07.webp" className="port-img h-2" data-fancybox tabIndex={0}>
                    <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                    <Image src="/assets/images/portfolio/2d-art/port-07.webp" alt="*" width={570} height={331} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5"></div>
      </section>

      <Platform />

      <section className="services-slider-sec next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/game-art/services-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="sm-head">Why Choose Us</h3>
              <h2 className="main-heading">What is in it <b className="c-green">For you</b></h2>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-12">
              <ul className="services-slider">
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
