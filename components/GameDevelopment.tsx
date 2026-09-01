'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';
import { bindSlickNavHighlight } from './slickNavHighlight';

export default function GameDevelopment() {
  const categories = [
    { 
      key: "3d-game", 
      path: "3d-game-developmnt", 
      title: "Mobile Game Development Services",
      description: <> <Link href="/mobile-game-development">Mobile game development</Link> for iOS and Android, performance-calibrated from the first line of code. App store submission and post-launch support are included in scope.
      </>
    },
    { 
      key: "ai_game", 
      path: "ai-game", 
      title: "Play-to-Earn Games Development",
      description: <><Link href="/play-to-earn-game">Play-to-earn game development</Link> with smart contract integration, token economy design, and the technical architecture that separates functional P2E from vaporware.

      </>
    },
    { 
      key: "blockchain_game", 
      path: "blockchain-game", 
      title: "Unity Game Development Services",
      description: <><Link href="/unity-game-development">Unity game development</Link> across 2D, 3D, AR, VR, and mobile platforms. Custom Unity3D game development with the full engine feature set applied to your project.
      </>
    },
    { 
      key: "game_prototyping", 
      path: "game-prototyping", 
      title: "Unreal Engine Game Development Services",
      description: <> <Link href="/unreal-engine-game-development">Unreal Engine game development</Link> for projects where Lumen, Nanite, or the Unreal pipeline's advantages justify the engine choice. We recommend the engine that fits the project.


      </>
    },
    { 
      key: "game_testing", 
      path: "game-testing", 
      title: "3D Game Development",
      description: <><Link href="/3d-game-development">Three-dimensional game development</Link> across PC, console, and VR. Full production pipeline from design through platform-ready build.
      </>
    },
    { 
      key: "mobile_game", 
      path: "mobile-game", 
      title: "AI Game Development Company",
      description: <>AI game development for NPC behavior, procedural content generation, adaptive difficulty, and AI-driven game systems that change the player experience.
      </>
    },
    { 
      key: "earn_game", 
      path: "earn-games", 
      title: "Blockchain Game Development",
      description: <>Blockchain game development and web3 game development for on-chain ownership, NFT integration, and the infrastructure that makes decentralized game economies work at scale.
      </>
    },
    { 
      key: "unity_game", 
      path: "unity-game", 
      title: "Game Prototyping Service",
      description: <>Rapid <Link href="/game-prototyping">game prototyping</Link> to validate the core loop before full production investment. The prototype answers whether the game is fun. Everything else is implementation.
      </>
    },
    { 
      key: "unreal_game", 
      path: "unreal-game", 
      title: "Game Testing Provider",
      description: <> <Link href="/game-testing">QA and game testing</Link> across platforms and devices. Manual, automated, and platform certification testing for approved listings.
      </>
    }

    // { 
    //   key: "unreal_game", 
    //   path: "unreal-game", 
    //   title: "Android Game Development Services",
    //   description: <> Android game development calibrated for the device fragmentation Android actually ships on, not the flagship your dev team uses.
    //   </>
    // },
    // { 
    //   key: "unreal_game", 
    //   path: "unreal-game", 
    //   title: "iOS Game Development Services",
    //   description: <> iOS game development and App Store submission for mobile games targeting Apple's platform and hardware range.
    //   </>
    // },
    // { 
    //   key: "unreal_game", 
    //   path: "unreal-game", 
    //   title: "Web3 Game Development Services",
    //   description: <> Experience Web3 game development, integrating decentralized infrastructure, wallet connectivity, and on-chain mechanics into playable experiences.
    //   </>
    // },
    // { 
    //   key: "unreal_game", 
    //   path: "unreal-game", 
    //   title: "2D Game Development Services",
    //   description: <> 2D game development for mobile, PC, and browser-based platforms. Full production from design through release.
    //   </>
    // },
    // { 
    //   key: "unreal_game", 
    //   path: "unreal-game", 
    //   title: "VR Game Development Services",
    //   description: <> VR game development for Oculus, HTC Vive, PS VR, and standalone headsets, built to the frame budget VR demands. Dropped frames in VR are not a performance note. They are a health issue.
    //   </>
    // }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;
    let cancelled = false;
    let destroyHighlight = () => {};

    const initSlick = () => {
      if (cancelled) return;
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        const developmentHighlight = bindSlickNavHighlight($, '.dev-slider-content', '.dev-slider-content');
        destroyHighlight = developmentHighlight.destroy;
        
        // Initialize dev thumbnail slider
        $('.dev-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true
        });

        // Initialize dev main slider
        $('.dev-slider-content').not('.slick-initialized').slick({
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
          asNavFor: '.dev-thumb-slider'
        });

        $('.dev-thumb-slider.slick-initialized').slick('slickSetOption', 'asNavFor', '.dev-slider-content', false);

        developmentHighlight.refresh();
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
        $('.dev-thumb-slider.slick-initialized, .dev-slider-content.slick-initialized').slick('unslick');
      }
    };
  }, []);

  return (
    <section className="home-services game-animation">
      <div className="container serv-bg next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/game-animation-bg.webp" alt="" fill sizes="100vw" />
		<Image className="next-service-edge" src="/assets/images/cta-shape-02.webp" alt="" width={28} height={306} />
        <div className="outline-head">
          <h3>Game <span>Development</span></h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-wrap">
              <h2 className="main-heading">Cobweb Game <b className="c-green">Development</b> Services</h2>
              <p className="w-100 custom-height-scroll">
                  We offer <Link href="/game-development">full-service game development services</Link> from initial concept to worldwide launch. Our skilled teams have the expertise to bring any vision to life, whether it be for console, mobile, VR/AR, or other platforms. Through collaborative prototyping and an iterative polishing process, we focus on crafting immersive experiences that truly engage players.
              </p>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <Link href="/game-development" className="btn-size btn-green popup">Read More</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-wrap">
              <Image className="lazy img-01"
                src="/assets/images/game-animation-img.gif" alt="*" width={535} height={596} unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content dev-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider dev-thumb-slider">
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
