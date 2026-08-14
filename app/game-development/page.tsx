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
import { bindSlickNavHighlight } from '@/components/slickNavHighlight';

export default function GameDevelopment() {
  useEffect(() => {
    let slickTimer: NodeJS.Timeout;
    let destroyHighlights = () => {};

    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;

        const serviceHighlight = bindSlickNavHighlight($, '.slider-rht', '.slider-lft');
        const processHighlight = bindSlickNavHighlight($, '.process-slider-rht', '.process-slider-lft');
        destroyHighlights = () => {
          serviceHighlight.destroy();
          processHighlight.destroy();
        };

        // Initialize left slider
        $('.slider-lft').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 6,
          centerMode: true,
          arrows: false,
          vertical: true,
          autoplay: true,
          verticalSwiping: true,
          focusOnSelect: true
        });

        // Initialize right slider
        $('.slider-rht').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          fade: true,
          asNavFor: '.slider-lft'
        });

        $('.slider-lft.slick-initialized').slick('slickSetOption', 'asNavFor', '.slider-rht', false);

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

        // Process slider
        $('.process-slider-rht').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          fade: true
        });

        $('.process-slider-lft').not('.slick-initialized').slick({
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
          asNavFor: '.process-slider-rht'
        });

        $('.process-slider-rht.slick-initialized').slick('slickSetOption', 'asNavFor', '.process-slider-lft', false);

        serviceHighlight.refresh();
        processHighlight.refresh();

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
      destroyHighlights();
    };
  }, []);

  return (
    <div className="game-development-page">
      <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <h5>Game Development</h5>
              <h1>Development <br /><b>COMPANY</b></h1>
              <p>We offer end-to-end game art production services ranging from casual 2D characters to
                breathtaking 3D environments, masterfully crafted to convey your game vision</p>
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
          <span>Game Development <b>*</b> Game Development <b>*</b></span>
          <span>Game Development <b>*</b> Game Development <b>*</b></span>
          <span>Game Development <b>*</b> Game Development <b>*</b></span>
          <span>Game Development <b>*</b> Game Development <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/game-development/main-banner.gif" alt="*" width={1316} height={740} unoptimized />
        </div>
      </section>

      <section className="game-sec2">
        <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_234_493)">
            <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213"
              stroke="#5339F8" strokeWidth="55" />
          </g>
          <defs>
            <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                <Image className="lazy"
                  src="/assets/images/game-development/sec2-img.webp" alt="*" width={512} height={549} />
                <Image className="shape lazy"
                  src="/assets/images/about/shape-01.webp" alt="*" width={135} height={135} />
              </figure>
            </div>
            <div className="col-lg-6">
              <h2 className="main-heading">Game Art And <strong className="c-green">Design</strong> <b>Services</b></h2>
              <p>Starloop Studios has end-to-end art support with multiple game art solutions to back the project
                on all production stages, securing synergy between teams and completing milestones on time and
                budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and our understanding of how great games
                should sound, feel, and look.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="game-slider-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="slider-lft">
                <li><h3>Unity Game </h3></li>
                <li><h3>Unreal Engine Game </h3></li>
                <li><h3>Mobile Game </h3></li>
                <li><h3>3D Game </h3></li>
                <li><h3>Play to Earn Games</h3></li>
                <li><h3>AI Game</h3></li>
                <li><h3>Game Testing</h3></li>
                <li><h3>Game Prototyping</h3></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="slider-rht">
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-01.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Unity Game</h3>
                  <p>Whether 2D or 3D, our Unity expertise brings creative visions to life from concept
                    through completion. Cobweb Studios raises the bar for game production services,
                    empowering partners with industry-leading solutions.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/unity-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-02.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Unreal Engine Game</h3>
                  <p>By leveraging Unreal&apos;s powerful tools, our specialists craft engrossing games according
                    to client specifications. Our dedicated professionals steer projects through each
                    milestone. Our partners benefit from our skilled guidance and industry knowledge to
                    achieve commercial success.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/unreal-engine-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-03.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Mobile Game</h3>
                  <p>With expertise across all mobile genres, from casual to immersive simulations, we
                    transform concepts into compelling games. Through market analysis and idea refinement,
                    our proven process delivers high quality. </p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/mobile-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-04.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Game</h3>
                  <p>We specialize in creating immersive 3D game experiences that captivate players. Our
                    talented team leverages cutting-edge technology and creative design to bring your vision
                    to life, ensuring stunning visuals and engaging gameplay.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-05.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Play to Earn Games</h3>
                  <p>We are at the forefront of the Play to Earn revolution, designing games that entertain
                    and offer players the opportunity to earn real-world value. Our expertise in blockchain
                    technology allows us to integrate secure and scalable Play-to-earn mechanisms seamlessly
                    into our games.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/play-to-earn-game" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-06.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>AI Game</h3>
                  <p>We harness the power of artificial intelligence to create smarter, more responsive, and
                    immersive gaming experiences. Our AI-driven solutions enhance gameplay by providing
                    dynamic environments, intelligent NPCs, and personalized player experiences.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/ai-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-07.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Game Testing</h3>
                  <p>Our comprehensive game testing services ensure your game is polished and ready for
                    market. We conduct rigorous testing across multiple devices and platforms to identify
                    and resolve issues, delivering a smooth and enjoyable player experience.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/game-testing" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-08.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Game Prototyping</h3>
                  <p>We work closely with you to develop playable prototypes that capture the essence of your
                    game idea. Our iterative process allows for rapid feedback and adjustments, ensuring
                    your final product meets and exceeds expectations.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/game-prototyping" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />

      <section className="game-category">
        <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_234_493)">
            <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213"
              stroke="#5339F8" strokeWidth="55" />
          </g>
          <defs>
            <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
              <h2 className="main-heading">Our Game <b className="c-green">Development</b> <br /> Categories</h2>
            </div>
          </div>
          <div className="row mob-slider">
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-01.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>2D Animation</h3>
                    <p>We bring your game&apos;s story characters to life with vibrant, expressive 2D visuals. We
                      craft every frame with attention, ensuring smooth, engaging game animations that
                      will make your game stand out.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-02.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>3D Animation</h3>
                    <p>Step into the realm of three-dimensional excellence. Our 3D game animator specialists
                      create engaging, realistic experiences, enhancing your game with detailed character
                      movements and dynamic environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-03.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>Character Animation</h3>
                    <p>Characters are the heart of your game. Therefore, we focus on making every game
                      character alive, infusing each model with depth so that every movement and
                      expression feels authentic and alive.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-04.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>Game Trailers and NFT Game Teasers</h3>
                    <p>Create hype around your game before it is released with our game trailers and NFT
                      game teasers. We create compelling previews that highlight your game&apos;s best
                      features, stirring anticipation among target audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-05.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>AR/VR Animation</h3>
                    <p>Reveal the full gaming potential of AR/VR with our top-notch game animation. We
                      enhance the interactive AR/VR feature with advanced visuals that immerse players
                      deeper into virtual dimensions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-wrap">
                <div className="child-box">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src="/assets/images/game-development/category-img-06.webp"
                      alt="*" width={356} height={225} />
                  </div>
                  <div className="content">
                    <h3>VFX Animation</h3>
                    <p>Our VFX animation services add a layer of polish and spectacle to your game. From
                      cool effects to epic visual feast, we ensure every scene is visually stunning and
                      memorable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec4 next-image-background-host"
        >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Our Team</h4>
              <h2 className="main-heading">The Team for <b className="c-green">Creating</b> Your <b
                className="c-green">Ideal</b> Art</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="img-wrap">
                <Image className="char-gif lazy"
                  src="/assets/images/mens-charc.gif" alt="*" width={315} height={612} unoptimized />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mob-slider">
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>01</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>02</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>03</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>04</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>05</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D 3D Artists</h3>
                      <span>06</span>
                    </div>
                    <p>Are you confused about what the heck your analytics are telling you? Not sure if
                      youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br />Working with Numerique
                      Digital with the digital presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Platform />

      <section className="process-sec">
        <div className="marquee">
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h6>Our Process</h6>
              <h2 className="main-heading">Video Game Art <b className="c-green">Process</b></h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="process-slider-lft">
                <li><h4>Character Design</h4></li>
                <li><h4>Casual Art</h4></li>
                <li><h4>Slots Games Art</h4></li>
                <li><h4>Concept Art</h4></li>
                <li><h4>Environment Design</h4></li>
                <li><h4>Hidden Objects</h4></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="process-slider-rht">
                <li>
                  <div className="box-wrap">
                    <span>01</span>
                    <h2>Character Design</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>02</span>
                    <h2>Casual Art</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>03</span>
                    <h2>Slots Games Art</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>04</span>
                    <h2>Concept Art</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>05</span>
                    <h2>Environment Design</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>06</span>
                    <h2>Hidden Objects</h2>
                    <p>Starloop Studios has end-to-end art support with multiple game art solutions to back
                      the project on all production stages, securing synergy between teams and completing
                      milestones on time and budget. <br /><br /> WeÃ¢â‚¬â„¢re driven by our passion for gaming and
                      our understanding of how great games should sound, feel, and look.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-slider-sec next-image-background-host"
        >
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
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if
                        youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with
                        Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if
                        youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with
                        Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if
                        youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with
                        Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if
                        youÃ¢â‚¬â„¢re actually can help decode your data for you. <br /><br /> Working with
                        Numerique Digital with the digital presence.</p>
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
