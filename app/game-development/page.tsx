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

const gameDevelopmentFaqs = [
  ['How much does game development cost?', 'Simple 2D or casual games typically run $25,000 to $80,000. Mid-tier titles with custom systems land between $80,000 and $250,000. Feature-complete multiplayer or AAA-grade productions start around $500,000, with scope deciding the final number during discovery.'],
  ['How long does it take to develop a game?', 'Simple mobile games take three to six months. Mid-tier mobile or PC titles run eight to eighteen months. VR titles or larger-scope productions can stretch from twelve to thirty-six months, with content volume moving the timeline more than any single feature.'],
  ['What makes Cobweb different from a typical game development agency?', 'A typical game development agency introduces talent and steps back once the match is made. Cobweb runs the production itself, with art, engineering, and QA operating inside one pipeline under a single point of contact, removing the coordination tax that quietly eats into most outsourced budgets.'],
  ['Can I hire dedicated game developers for a project that is already underway?', 'Yes. You can hire dedicated game developers as an embedded extension of your existing team, following a technical audit of your current codebase and pipeline. We will tell you honestly what already exists and what shipping actually requires before agreeing to scope.'],
  ['Are you a game development company in the USA, or do you work with international teams too?', 'Both. Cobweb Games operates as a game development company in the USA market while running a delivery pipeline built for remote collaboration worldwide, with structured overlap hours and documented milestone reviews that hold up across time zones.'],
  ['Which engine do you recommend, Unity or Unreal?', 'Whichever one the project actually calls for. Unity tends to suit mobile, 2D, and mid-scope 3D work best, with faster builds and a lighter footprint. Unreal earns its overhead when console-grade fidelity, Lumen, or Nanite genuinely matter to the game being built.'],
  ['I need a game developer but do not have a full brief ready yet. What do you need from me?', 'A game concept, target platform, core feature list, reference titles, target audience, and a rough timeline get you most of the way there. If you have less than that, our discovery session builds the brief with you from scratch.'],
  ['What happens after my game launches?', 'The live phase begins. Player feedback starts arriving immediately, platforms update their requirements, and content updates keep the audience you worked to acquire actually engaged. Post-launch support and development retainers get scoped before launch, so nothing stalls once the game is live.'],
].map(([question, answer], index) => ({ id: index + 1, question, answer }));

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
              <h5>Top Rated Game Development Company</h5>
              <h1>Game Development <br /><b>Company &amp; Studio in the USA.</b></h1>
              <p>You have a game worth building. Cobweb Games is considered to be the best game development company in the USA that builds it, ships it, and keeps supporting it after launch. Our game development services cover mobile, PC, VR, and web, for founders, AA studios, and gaming brands who need a production partner ready to move now, not another quote to file away.</p>
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
              <h2 className="main-heading">A Full-Cycle Game <strong className="c-green">Development</strong> Company.</h2>
              <p>Working with Cobweb Games puts one production team on your project, handling design, art, engineering, and QA under a single brief and a single deadline. Your prototype, your art pipeline, and your test builds move through that same team on the same milestone schedule, so nothing gets lost in a handoff between people who have never spoken to each other. <br /><br /> We work with indie developers shipping their first commercial title, AA studios juggling several builds at once, and gaming brands that need a full-cycle game development company able to plug straight into their existing workflow. As a video game development company and game development studio, we cover end-to-end game development services in USA from your first prototype through your store submission, with nothing handed off to a third party along the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="game-slider-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="slider-lft">
                <li><h3>Mobile Game Development</h3></li>
                <li><h3>3D Game Development</h3></li>
                <li><h3>Play-to-Earn Games</h3></li>
                <li><h3>AI Game Development</h3></li>
                <li><h3>Game Testing</h3></li>
                <li><h3>Game Prototyping</h3></li>
                <li><h3>Unity Game Development</h3></li>
                <li><h3>Unreal Engine Game Development</h3></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="slider-rht">
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-01.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Mobile Game Development</h3><p>Your mobile game needs to run great on the phone most players actually carry, not just the flagship sitting on a developer's desk. We <Link href="/mobile-game-development">build mobile games</Link> to provide monetization, app store submission, and post-launch support into the project from day one, so your game is actually finished when it hits the store, not just when the code compiles.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/unity-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-02.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>3D Game Development</h3><p>Your <Link href="/3d-game-development">3D game</Link> gets modeled, rigged, and engine-integrated inside one pipeline, so the art never blows past the frame budget your engineers have to hit. What you see in review is what ships, running the way it was designed to run on the hardware your players actually own.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/unreal-engine-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-03.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Play-to-Earn Games</h3><p>We <Link href="/play-to-earn-game">build your play-to-earn game</Link> the way we build any other title, starting with a loop players actually want to return to, then layering in smart contract integration and token design. A P2E economy only works once there is a real game underneath it, and that is exactly the order we build in.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/mobile-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-04.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>AI Game Development</h3><p>If you want AI in your game, we build NPC behavior, procedural content generation, and adaptive difficulty that change how your game actually plays, not a feature that just pads out a pitch deck. Every AI system we add has to make the game better to play, or it does not go in.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/3d-game-development" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-05.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Unity Game Development</h3><p>We build in Unity across 2D, 3D, AR, VR, and mobile, using the engine's full feature set on your project instead of a stock template. Our <Link href="/unity-game-development">certified Unity developers</Link> know where the engine moves fast on its own and where it needs real discipline to keep performing at scale.</p>
                  <ul className="btn-wrap d-flex align-items-center mt-4">
                    <li><Link href="/play-to-earn-game" className="btn-size btn-purple">Learn More</Link></li>
                    <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
                  </ul>
                </li>
                <li>
                  <figure className="img-wrap h-100">
                    <Image src="/assets/images/game-development/port-06.webp" alt="*" width={600} height={338} />
                  </figure>
                  <h3>Unreal Engine Game Development</h3><p>When your project needs Lumen, Nanite, or true console-grade fidelity, we build it in <Link href="/unreal-engine-game-development">Unreal Engine with developers</Link> who have shipped inside it under deadline pressure, not developers who just explored it in a tutorial.</p>
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

      <CtaTwo heading={'Bring Your Wildest Ideas to <b class="c-green">Playable Reality.</b>'} description="Tell us your game, your platform, and your deadline, and we will tell you exactly what it takes to ship it, whether you need a game developer to fill one gap on your roster or want to hire remote game developers for the entire build." />

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
              <h2 className="main-heading">Our Game Development Gamut.</h2>
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
                    <h3>2D Game Development</h3><p>Get sprite-based games for mobile, PC, and browser, with animation timing and physics tuned to feel right from the very first jump or swing, so no shaky mechanic gets a place to hide.</p>
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
                    <h3>3D Game Development</h3><p>Get three-dimensional worlds built with LOD chains and draw call budgets that hold up on the hardware your players actually own, not just the development kit in the studio.</p>
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
                    <h3>Cross-Platform Development</h3><p>Get one codebase shipped across iOS, Android, and PC, maintained as a single build instead of three separate games slowly drifting apart from each other.</p>
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
                    <h3>AR/VR Game Development</h3><p>Get immersive titles for Quest, Vive, and PS VR, designed around the frame budget that real comfort in virtual reality demands, since a dropped frame in VR gets felt in the body, not just noticed on screen.</p>
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
                    <h3>Web3 and Blockchain Games</h3><p>Get on-chain ownership and NFT integration built into a game designed to be played first, with trading built in as an extension of that experience, not the entire point of it.</p>
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
                    <h3>HTML5 and Web Games</h3><p>Get browser games that load in seconds and play the moment a link is clicked, with no install and no app store gatekeeper standing between your player and the game itself.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec4 next-image-background-host">
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>The Game Development Studio Behind Every Shipped Build.</h4>
              <h2 className="main-heading">The Game Development Studio Behind Every Shipped Build.</h2>
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
                      <h3>Game Programmers</h3></div><p>Hire game programmers who write code meant for production rather than a demo reel, building gameplay systems, networking, and performance-critical code that holds up once real players start putting weight on it.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Game Designers</h3></div><p>Designers who treat the core loop as a technical document long before it becomes a pitch, specifying mechanics, economies, and progression systems in enough detail that production never has to guess at intent.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>2D and 3D Artists</h3></div><p>Production artists who deliver assets already matched to your poly count and your naming convention, so nothing needs to be reformatted or renamed before it can actually be used.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>QA Engineers</h3></div><p>Testers whose entire job is finding the crash before your players do, running device matrices and certification passes well ahead of the week the launch actually happens.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Technical Artists</h3></div><p>The people standing between art and engineering, handling shaders, optimization, and pipeline tooling so that detailed assets keep running at full frame rate instead of quietly dragging performance down.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Project Managers</h3></div><p>One point of contact and milestone-based reporting, so when you hire dedicated game developers through Cobweb, you always know exactly what last week's budget actually produced.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Platform heading="Key Devices &amp; Platforms" highlightText=" We Develop Games" subheading=" For." platforms={[{ title: 'PC Games', description: 'Steam, Epic, and proprietary distribution, with graphics settings scaled across the wide range of hardware PC players are actually running.', image: '/assets/images/h-sec-4-img-01.webp', width: 352, height: 359 }, { title: 'VR Games', description: 'Quest, Vive, Valve Index, and PS VR, where the frame budget stays non-negotiable from the very first prototype through to final ship.', image: '/assets/images/h-sec-4-img-02.webp', width: 353, height: 360 }, { title: 'Mobile Games & Apps', description: 'iOS and Android, performance-calibrated for the mid-range device that the median player is most likely holding.', image: '/assets/images/h-sec-4-img-03.webp', width: 354, height: 359 }]} />

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
              <h6>A Power-Packed Game Development Process.</h6>
              <h2 className="main-heading">A Power-Packed Game Development Process.</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="process-slider-lft">
                <li><h4>Discovery and Production Brief</h4></li>
                <li><h4>Prototyping</h4></li>
                <li><h4>Pre-Production and Design</h4></li>
                <li><h4>Full Production</h4></li>
                <li><h4>Testing and Certification</h4></li>
                <li><h4>Launch and LiveOps</h4></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="process-slider-rht">
                <li>
                  <div className="box-wrap">
                    <span>01</span>
                    <h2>Discovery and Production Brief</h2>
                    <p>Your idea gets turned into a technical document covering platform, audience, core loop, scope, and budget, laid out clearly enough that if the concept cannot survive this stage as pitched, we can say so while the fix still costs nothing.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>02</span>
                    <h2>Prototyping</h2>
                    <p>A rough, playable build tests whether the mechanic has actually earned full production, and that decision gets made by watching how it plays in real hands, not by how convincing it sounds in a meeting.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>03</span>
                    <h2>Pre-Production and Design</h2>
                    <p>Design documents, art direction, and technical architecture get locked alongside a milestone schedule everyone can see, so the expensive decisions happen here on paper instead of later inside a half-built engine.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>04</span>
                    <h2>Full Production</h2>
                    <p>Art, code, and systems move forward together inside one pipeline, with weekly builds and milestone reviews that show playable progress instead of a status update dressed up as one.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>05</span>
                    <h2>Testing and Certification</h2>
                    <p>Functionality, compatibility, performance, and platform certification testing run across the actual device matrix your audience uses, not a curated shortlist that happens to make the build look stable.</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>06</span>
                    <h2>Launch and LiveOps</h2>
                    <p>Store submission, launch-day support, and a post-launch content calendar come together to decide whether opening day turns into a lasting audience or just a brief spike that fades within a week.</p>
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
              <h3 className="sm-head">What You Get From Us As A Full-Cycle Partner?</h3>
              <h2 className="main-heading">What You Get From Us As A Full-Cycle Partner?</h2>
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
                      <h4>Full IP Ownership</h4><p>Every asset and every line of code transfers to you the moment final payment clears, with an NDA already signed before a single detail of the project was shared.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>One Pipeline, No Translation Loss</h4><p>Art, development, and QA operate under one roof, so there is no vendor relay race and no mismatched deliverables between teams that never actually spoke to each other.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Milestones You Can Play</h4><p>Every milestone arrives as a working build rather than a slide deck, so you always know precisely what last month's budget turned into.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Post-Launch Partnership</h4><p>Live ops, content updates, and platform recertification get planned before launch instead of negotiated afterward, once the game is already live and the clock is already running.</p>
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
      <Faqs faqs={gameDevelopmentFaqs} />
      <FooterForm />
    </div>
  );
}
