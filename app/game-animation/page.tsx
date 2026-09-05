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

const gameAnimationFaqs = [
  ['How much do game animation services cost?', 'Simple 2D cycle sets start around $2,000 to $8,000. Full 3D character animation libraries run $10,000 to $60,000 depending on move count and fidelity. Cinematics and trailers get quoted per second of final footage, since that is what actually drives the cost.'],
  ['Do you handle both 2D and 3D game animation?', 'Yes, under one roof. Your 2D sprite and rig-based animation and your full 3D character, creature, and cinematic work run through the same pipeline, which matters the moment your game or your marketing needs both to visually match.'],
  ['Can I hire game animators for an ongoing project?', 'Yes. Game animators for hire through Cobweb can embed with your team on a dedicated or retainer basis, following a quick audit of your existing rigs and pipeline so nobody spends week one guessing at your conventions.'],
  ['Which engines do you animate for?', 'Unity and Unreal Engine primarily, covering Mecanim, Animation Blueprints, Control Rig, and Sequencer. You get deliverables in engine-native formats, tested inside your actual build, never just inside the animation software.'],
  ['Do you work with motion capture?', 'Yes. We provide motion capture animation services for games including capture cleanup, retargeting, and polish passes. Raw mocap always needs a human hand afterward, and that polish stage is where most of the real quality actually comes from.'],
  ['Can you animate characters you did not originally design?', 'Yes. We regularly animate client-supplied characters after a technical review of the rig and topology. If your existing rig will fight the animation you need, we flag it honestly and fix it before a single keyframe gets set.'],
  ['What does a game animation outsourcing engagement actually look like?', 'You get a small pilot batch first, a few clips to confirm style match, communication rhythm, and pipeline fit. Then milestone-based production with structured feedback rounds. Most clients start with one character set and scale from there once trust is established.'],
  ['Do you produce game trailers too?', 'Yes. Full game trailer production services from script and storyboard through animation, edit, and final render. Trailers built by the same team that animates your game hold a visual consistency that stitched-together vendor work never quite manages to match.'],
].map(([question, answer], index) => ({ id: index + 1, question, answer }));

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
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cobwebgames.com/game-animation",
  "url": "https://www.cobwebgames.com/game-animation",
  "name": "Game Animation Services | 2D and 3D Studio",
  "description": "Game animation services engineered for engines, not showreels. 2D, 3D, character, cinematic, VFX, and mocap. Hire game animators who know how immersive visuals work.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.cobwebgames.com#website",
    "url": "https://www.cobwebgames.com",
    "name": "Cobweb Games",
    "description": "Play exciting free online games at Cobweb Games. Discover action, puzzle, arcade, racing, strategy, and many more games to enjoy anytime.",
    "inLanguage": "en-US"
  }
}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do game animation services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple 2D cycle sets start around $2,000 to $8,000. Full 3D character animation libraries run $10,000 to $60,000 depending on move count and fidelity. Cinematics and trailers get quoted per second of final footage, since that is what actually drives the cost."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle both 2D and 3D game animation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, under one roof. Your 2D sprite and rig-based animation and your full 3D character, creature, and cinematic work run through the same pipeline, which matters the moment your game or your marketing needs both to visually match."
      }
    },
    {
      "@type": "Question",
      "name": "Can I hire game animators for an ongoing project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Game animators for hire through Cobweb can embed with your team on a dedicated or retainer basis, following a quick audit of your existing rigs and pipeline so nobody spends week one guessing at your conventions."
      }
    },
    {
      "@type": "Question",
      "name": "Which engines do you animate for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unity and Unreal Engine primarily, covering Mecanim, Animation Blueprints, Control Rig, and Sequencer. You get deliverables in engine-native formats, tested inside your actual build, never just inside the animation software."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with motion capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide motion capture animation services for games including capture cleanup, retargeting, and polish passes. Raw mocap always needs a human hand afterward, and that polish stage is where most of the real quality actually comes from."
      }
    },
    {
      "@type": "Question",
      "name": "Can you animate characters you did not originally design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly animate client-supplied characters after a technical review of the rig and topology. If your existing rig will fight the animation you need, we flag it honestly and fix it before a single keyframe gets set."
      }
    },
    {
      "@type": "Question",
      "name": "What does a game animation outsourcing engagement actually look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get a small pilot batch first, a few clips to confirm style match, communication rhythm, and pipeline fit. Then milestone-based production with structured feedback rounds. Most clients start with one character set and scale from there once trust is established."
      }
    },
    {
      "@type": "Question",
      "name": "Do you produce game trailers too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Full game trailer production services from script and storyboard through animation, edit, and final render. Trailers built by the same team that animates your game hold a visual consistency that stitched-together vendor work never quite manages to match."
      }
    }
  ]
}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.cobwebgames.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Game Animation",
      "item": "https://www.cobwebgames.com/game-animation"
    }
  ]
}) }} />
      <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <h5>Top Rated Game Animation Studio</h5>
              <h1>Game Animation Services Built for the Engine, <b>Not the Reel.</b></h1>
              <p>Your characters deserve rigs that survive combat, cinematics that sell the moment, and clips that import clean the first time. Cobweb Games delivers game animation services for studios and founders who need motion that actually performs inside Unity or Unreal, not just inside a showreel.</p>
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
              <h2 className="main-heading">A Game Animation Studio That Gets Judged Inside the Build.</h2>
              <p>Send us a character, and you get back a rig built for your actual animation state machine, weight painting, joint limits, and blend-ready clips that hold up under real gameplay, not just in a turntable render. Rigging, animation, and engine integration all run through the same pipeline here, so what looks right in review still looks right at sixty frames per second in your build. <br /><br /> Cobweb Games works as your game animation outsourcing company for indie developers, AA studios, and publishers who need video game animation services at production scale, not a single freelancer juggling three other clients on the side. One team, one pipeline, and every clip formatted for Unity or Unreal before you ever have to ask.</p>
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
              <h2 className="main-heading">Video Game <b className="c-green">Animations</b> Services for Every Frame Immersion.</h2>
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
                    <p>Get <Link href="/2d-animation">2D game animation services</Link> covering movement cycles, attack sequences, idles, and the transition frames that decide whether motion reads as fluid or mechanical. As a 2D game animation company, we hand back correctly packed sprite sheets built to the exact atlas specs your engine expects.</p>
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
                    <p>Get 3D game animation services engineered for the animation state machine: weight painting, joint limits, and blend-ready clips that move like living things instead of a glitchy mess of vertices. A 3D game animation company that has actually shipped, and the rigs prove it on delivery.</p>
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
                    <p>Get game character animation services covering dialogue performance, combat systems, and the secondary motion that makes a character look inhabited instead of operated by remote control. Every clip is built to loop, blend, and interrupt cleanly the moment your player takes control back.</p>
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
                    <h3>Cinematic and Cutscene Animation</h3>
                    <p>Get game cinematic animation services and game cutscene animation services that hold the quality bar your gameplay already set. Story beats staged, lit, and animated to land emotionally without a single dropped frame breaking the spell.</p>
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
                    <h3>VFX Animation</h3>
                    <p>Get game VFX animation services from impact hits to full spellwork: particles, shaders, and timing tuned so every strike feels like it actually costs the target something. Spectacle that reinforces gameplay clarity instead of burying it under noise.</p>
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
                    <h3>Trailer Animation and Production</h3>
                    <p>Get a game trailer animation company embedded inside your animation partner. Announcement teasers, launch trailers, and store-page video built to sell the feeling of playing your game. Full game trailer production services from script through final render, no separate vendor required.</p>
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
                    <h3>Sprite and Cycle Animation</h3>
                    <p>Get sprite animation services and game cycle animation services covering walk, run, idle, and the full movement library your character needs to exist believably in real time. Delivered pivot-correct, properly sized, and production-ready on the first pass.</p>
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
                    <h3>Motion Capture Animation</h3>
                    <p>Get motion capture animation services for games that need human weight and nuance at scale: capture cleanup, retargeting, and hand-polished passes that keep raw mocap data from looking like raw mocap data on screen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo heading={'Reimagine Your Characters To A New <b class="c-green">Playable Reality.</b>'} description="Tell us the style, the engine, and the deadline, and we will tell you exactly what it takes to ship it, whether you need to hire game animator support for a single character or bring on a dedicated game animator for hire across an entire production." />

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

      <Platform heading="Key Devices &amp; Platforms" highlightText=" We Animate Games" subheading=" For." platforms={[{ title: 'PC Game', description: 'High-fidelity animation with scalable LOD systems tuned to the full hardware range your PC players actually run.', image: '/assets/images/h-sec-4-img-01.webp', width: 352, height: 359 }, { title: 'VR Game', description: 'Comfort-calibrated motion for Quest, Vive, Valve Index, and PS VR, where a dropped frame is a health issue, never just a footnote.', image: '/assets/images/h-sec-4-img-02.webp', width: 353, height: 360 }, { title: 'Mobile Game', description: 'Bone-count-disciplined animation that stays smooth on the mid-range device your median player actually owns, battery included.', image: '/assets/images/h-sec-4-img-03.webp', width: 354, height: 359 }]} />

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
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>Bespoke 2D Character Design</h4>
                      <p>Are you confused about what the heck your analytics are telling you? Not sure if youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢re actually can help decode your data for you. <br /><br /> Working with Numerique Digital with the digital presence.</p>
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
      <Faqs faqs={gameAnimationFaqs} />
      <FooterForm />
    </div>
  );
}
