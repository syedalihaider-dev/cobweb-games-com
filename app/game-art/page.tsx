'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import FooterForm from '../../components/FooterForm';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';
import { bindSlickNavHighlight } from '@/components/slickNavHighlight';

export default function GameArt() {
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

        // Accordion
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
          const button = item.querySelector('button');
          if (button) {
            button.addEventListener('click', () => {
              const expanded = button.getAttribute('aria-expanded') === 'true' || false;

              // Close all
              accordionItems.forEach(i => {
                const btn = i.querySelector('button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
              });

              // Toggle current
              button.setAttribute('aria-expanded', (!expanded).toString());
            });
          }
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
    <div className="game-art-page">
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <h5>Cobweb Games</h5>
              <h1>Professional Game<br /> <b> Art Studio</b></h1>
              <p>We are a solutions-driven studio specializing in visual development and artistic design for games
                of all types. Our game artists craft visually compelling characters and concepts to bring game
                worlds to life.</p>
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
          <span>Game Art Service <b>*</b> Game Art Service <b>*</b></span>
          <span>Game Art Service <b>*</b> Game Art Service <b>*</b></span>
          <span>Game Art Service <b>*</b> Game Art Service <b>*</b></span>
          <span>Game Art Service <b>*</b> Game Art Service <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/game-art/main-banner.webp" alt="*" width={1440} height={858} />
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
                  src="/assets/images/game-art/sec2-img.webp" alt="*" width={680} height={648} />
              </figure>
            </div>
            <div className="col-lg-6">
              <h2 className="main-heading">Level Up Your <strong className="c-green">Game </strong> <b>Development</b>
              </h2>
              <p>Gaming is our specialty! As a full-service game development company, we offer custom solutions -
                from end-to-end project outsourcing to focused asset creation. <br /><br /> Whether you need an
                MMO strategy realized or a VR shooter launched, our proven team has the skills and dedication to
                make your gaming vision a success. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="game-slider-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="slider-lft">
                <li><h3>2D Art</h3></li>
                <li><h3>Environment Design</h3></li>
                <li><h3>Character Design</h3></li>
                <li><h3>Game Level Design</h3></li>
                <li><h3>3D Art</h3></li>
                <li><h3>3D Game Modeling</h3></li>
                <li><h3>3D Environment Design</h3></li>
                <li><h3>3D Character Modeling</h3></li>
                <li><h3>3D Illustration Services</h3></li>
                <li><h3>UI/UX Design</h3></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="slider-rht">
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-01.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>2D Art</h3>
                  <p>Our 2D art service offers a rich blend of creativity and precision, tailored to bring
                    your concepts to life with vibrant visuals and captivating designs. From concept
                    sketches to polished illustrations, we deliver high-quality 2D art assets for various
                    purposes, ensuring seamless integration into your projects.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/2d-art" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-02.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Environment Design</h3>
                  <p>By seamlessly blending artistic vision with technical expertise, we deliver environment
                    designs that perfectly balance aesthetics and functionality, ensuring a seamless
                    integration into your project&apos;s framework.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/environment-design" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-03.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Character Design</h3>
                  <p>With a focus on personality, storytelling, and visual appeal, our talented team of
                    designers creates characters that resonate with audiences across various media
                    platforms. Our character design service offers a comprehensive approach to bringing your
                    imaginative characters to life.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/character-design" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-04.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Game Level Design</h3>
                  <p>With a focus on player interaction and narrative progression, we excel in creating
                    dynamic and memorable game levels that enhance the overall gaming experience and drive
                    player engagement.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/game-level-design" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-05.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Art</h3>
                  <p>From realistic renderings to stylized animations, our team of skilled artists specializes
                    in creating 3D art assets that elevate your content&apos;s visual appeal and immersive
                    quality. We deliver 3D artworks that meet the expectations of our clients.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-art" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-06.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Game Modeling</h3>
                  <p>Whether you need characters, props, or environmental assets, we specialize in delivering
                    high-quality 3D models that enhance your game world&apos;s visual fidelity and immersion. We
                    offer a comprehensive solution for creating intricate and realistic 3D models that form
                    the backbone of your gaming experience.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-game-modeling" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-07.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Environment Design</h3>
                  <p>Our 3D environment design service specializes in crafting immersive and visually stunning
                    digital landscapes that serve as the backdrop for your interactive experiences, while
                    offering environments that look breathtaking and provide a seamless and immersive
                    experience for players.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-environment-design" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-08.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Character Modeling</h3>
                  <p>Whether you need humanoid heroes or fantastical creatures, we specialize in crafting 3D
                    character models that convey emotion, personality, and charm, enhancing the overall
                    impact of your project.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-character-modeling" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-09.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Illustration Services</h3>
                  <p>Our 3D illustration services blend artistic creativity with technical precision to
                    produce captivating visuals that communicate ideas, concepts, and narratives with
                    unparalleled depth and realism.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-illustration-services" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap">
                    <Image src="/assets/images/game-art/art-img-10.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>UI/UX Design</h3>
                  <p>By combining aesthetic sensibility with usability principles, we craft UI/UX designs that
                    look great and function seamlessly across various platforms, resulting in satisfied
                    users and increased engagement.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/ui-ux-design" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />

      <section className="team-sec4 next-image-background-host"
        >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Our Team</h4>
              <h2 className="main-heading">Trusted Experts <b className="c-green">Behind</b> Every <b
                className="c-green">Project</b></h2>
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
                      <h3>Concept Artist</h3>
                      <span>01</span>
                    </div>
                    <p>Our concept artists generate numerous ideas in their initial sketches and paintings.
                      They help communicate the overall tone and style through polished concepts. Concept
                      artists work closely with designers to refine concepts based on gameplay needs.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>3D Artist</h3>
                      <span>02</span>
                    </div>
                    <p>Using 3D software, our artists craft highly detailed 3D models and environments. They
                      bring virtual worlds to life with realistic textures, lighting, rigging, and
                      animations. Our 3D artists collaborate with other roles to match the aesthetic
                      vision.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D Artist</h3>
                      <span>03</span>
                    </div>
                    <p>Our 2D concept and design skills shine through animated sprites, characters, and
                      pixelated scenes. Polished illustrations establish recognizable styles for varied
                      genres. We breathe life into 2D worlds with fluid animations and vibrant pixel
                      palettes.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Character Artist</h3>
                      <span>04</span>
                    </div>
                    <p>From initial pitches to polished renders, our character artists make players&apos; avatars
                      come alive. Detailed modeling and texturing bring heroes and enemies to full form.
                      We bring animated personalities to each character through realistic motion capture
                      data.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Environment Artist</h3>
                      <span>05</span>
                    </div>
                    <p>Immersive backdrops start with our environment artists&apos; lavish landscapes and
                      architectural designs. We establish credible scenery that supports gameplay through
                      atmospheric visuals. Environment artists collaborate to integrate structures with
                      the terrain seamlessly.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>UIUX Designer</h3>
                      <span>06</span>
                    </div>
                    <p>Intuitive interfaces are a priority in our UX-focused designs. Clean visual
                      hierarchies optimize the player experience. We enhance accessibility and simplify
                      complexity in our polished HUDs and menus. Gameplay insights guide our UI solutions
                      to support player actions and comprehension.</p>
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
                <li><h4>Concept & Design</h4></li>
                <li><h4>Asset Creation</h4></li>
                <li><h4>Implementation</h4></li>
                <li><h4>Integration & Testing</h4></li>
                <li><h4>Polishing & Optimization</h4></li>
                <li><h4>Delivery & Integration</h4></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="process-slider-rht">
                <li>
                  <div className="box-wrap">
                    <span>01</span>
                    <h2>Concept & Design</h2>
                    <p>At Cobweb Games, our artistic process starts in the conceptual phase. Initial
                      brainstorming between our teams and clients establishes the core pillars of the
                      vision. References are discussed to nail down the intended artistic style and tone.
                      Our concept artists then visualize key settings, characters, and interfaces to bring
                      these ideas to life. A design document is drafted to map out all planned 2D and 3D
                      art assets.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>02</span>
                    <h2>Asset Creation</h2>
                    <p>Our expert 3D artists sculpt environments and characters directly from concept art
                      using complex multi-material textures. Simultaneously, 2D artists develop
                      pixel-perfect sprite sheets and design intuitive icons/UI guided by style frames.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>03</span>
                    <h2>Implementation</h2>
                    <p>Programmers smoothly integrate finalized art into the game engine through tailored
                      shaders, rigging data, and optimized formats supported by each target platform. Our
                      proprietary tools and workflows maximize productivity.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>04</span>
                    <h2>Integration & Testing</h2>
                    <p>Integration brings our testing phase into full swing. Upon the first integrated
                      builds, our multidisciplinary teams spring into action. Programmers and artists work
                      closely together to improve all facets of gameplay.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>05</span>
                    <h2>Polishing & Optimization</h2>
                    <p>Our proprietary version control systems support seamless collaboration across large,
                      divided teams. Artists and developers can check in daily work-in-progress with full
                      integration history tracking. This assembly line approach accelerates iteration.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>06</span>
                    <h2>Delivery & Integration</h2>
                    <p>Prior to launch, our integration specialists perform exhaustive QA to ensure a
                      silky-smooth workflow from build distribution to live operations. On-call support is
                      provided to resolve any unexpected anomalies.</p>
                  </div>
                </li>
              </ul>
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
      </section>

      <section className="services-slider-sec next-image-background-host"
        >
        <Image className="next-image-background" src="/assets/images/game-art/services-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="sm-head">Why Choose Us</h3>
              <h2 className="main-heading">The Best in the <b className="c-green">Business</b></h2>
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
                      <h4>Expertise You Can Count On</h4>
                      <p>Our team brings extensive experience in a variety of game genres and
                        technologies. Every project is an opportunity to expand our collective skillset,
                        and innovation is a constant focus on delivering the highest quality work.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Dedicated Partnership Approach</h4>
                      <p>We are committed to understanding your strategic goals and creative vision.
                        Frequent exchange of feedback and new discoveries aids continual refinement.
                        Joint decision-making streamlines productivity.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Tailored Solutions for Your Needs</h4>
                      <p>An initial consultation addresses your budget, timeline, and audience
                        demographics. A customized proposal is explicitly crafted for requirements. Our
                        holistic services cover all your work requirements.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Cutting-Edge Technology Use</h4>
                      <p>Our development pipeline integrates the latest industry tools and techniques.
                        Emerging platforms and capabilities are rapidly assessed. Processes and
                        pipelines are optimized based on proven best practices.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Rigorous Quality Standards</h4>
                      <p>Accuracy, polish, and optimization are embedded in our methodology. Iterative
                        development cycles with client reviews are standard. Compliance with the highest
                        security and accessibility standards is assured.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Reliable & Responsive Team</h4>
                      <p>Project managers coordinate timely milestones. Issues are addressed through
                        transparent communications. Partnerships are guided proactively to overcome any
                        foreseeable hurdles.</p>
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

      <section className="faq-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="sm-head">FAQÃ¢â‚¬â„¢s</h3>
              <h2 className="main-heading">Frequently Asked <b className="c-green">Questions</b></h2>
              <div className="accordion">
                <div className="accordion-item">
                  <button id="accordion-button-1" aria-expanded="true"><span className="accordion-title">What is
                    Cobweb Games&apos; approach to game development?</span><span className="icon"
                      aria-hidden="true"></span></button>
                  <div className="accordion-content">
                    <p>Our approach focuses on collaboration, efficiency, and quality. We emphasize strong
                      communication with clients, iterative development, and technical expertise to
                      realize creative visions within realistic budgets and schedules.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">How long
                    does it typically take to complete projects?</span><span className="icon"
                      aria-hidden="true"></span></button>
                  <div className="accordion-content">
                    <p>Project timelines vary depending on the scope of work involved. Please provide
                      details when requesting a quote for an estimate tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Do you
                    have examples of previous work I can review?</span><span className="icon"
                      aria-hidden="true"></span></button>
                  <div className="accordion-content">
                    <p>Yes, please visit our website portfolio to browse galleries highlighting our work
                      across various styles and genres. If you need to view any other specific samples,
                      please contact us directly with your request.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Do you
                    offer revisions or modifications after a project is completed?</span><span
                      className="icon" aria-hidden="true"></span></button>
                  <div className="accordion-content">
                    <p>We allocate time to integrate one round of minor changes or tweaks at no extra cost.
                      Additional revisions require approval and may incur additional charges to cover
                      staff time.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How much
                    does it cost to develop a game?</span><span className="icon"
                      aria-hidden="true"></span></button>
                  <div className="accordion-content">
                    <p>Costs vary widely based on factors like genre, platforms, technical complexity, etc.
                      For more information, contact our team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-wrap">
                <Image className="img-01 lazy"
                  src="/assets/images/faq-img-01.webp" alt="*" width={513} height={663} />
                <Image className="img-02 lazy"
                  src="/assets/images/faq-img-02.webp" alt="*" width={451} height={576} />
                <Image className="img-03 lazy"
                  src="/assets/images/fire.gif" alt="*" width={292} height={296} unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterForm />
    </div>
  );
}
