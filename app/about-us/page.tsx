import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Platform from '@/components/Platform';
import Reviews from '@/components/Reviews';
import Faqs from '@/components/Faqs';
import FooterForm from '@/components/FooterForm';
import Counter from '@/components/Counter';
import BannerBadgesSlider from '@/components/BannerBadgesSlider';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './AboutUs.module.css';

export const metadata = createPageMetadata('/about-us');

export default function AboutUs() {
  return (
    <>
      <section
        className={`about-banner d-flex relative next-image-background-host ${styles.hero}`}

      >
        <Image className="next-image-background" src="/assets/images/about/about-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        <div className={`container align-self-center ${styles.heroContent}`}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>About Us</h5>
              <h1>TOP-RATED GAME DEVELOPMENT <b>COMPANY</b></h1>
              <p>We have the proven talent and production capabilities to deliver high-quality games.</p>
              <ul className={`btn-wrap d-flex align-items-center justify-content-center mt-4 ${styles.heroActions}`}>
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
        <div className="banner-badges old-about-slider">
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-01.webp" alt="*" width={148} height={109} />
            </li>
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-02.webp" alt="*" width={149} height={109} />
            </li>
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-03.webp" alt="*" width={148} height={109} />
            </li>
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-04.webp" alt="*" width={149} height={109} />
            </li>
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-05.webp" alt="*" width={128} height={128} />
            </li>
            <li>
              <Image className="lazy" src="/assets/images/logos/logo-06.webp" alt="*" width={148} height={109} />
            </li>
          </ul>
        </div>        {/* Banner Badges - Slider on mobile/tablet, static on desktop */}
        <BannerBadgesSlider />
      </section>

      <section className="about-sec2 next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/about/about-sec2-bg.webp" alt="" fill sizes="100vw" />
        <div className="marquee about-marquee">
          <span>ABout Us <b>*</b> ABout Us <b>*</b></span>
          <span>ABout Us <b>*</b> ABout Us <b>*</b></span>
          <span>ABout Us <b>*</b> ABout Us <b>*</b></span>
          <span>ABout Us <b>*</b> ABout Us <b>*</b></span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="main-heading">Who we <b className="c-green">are</b></h2>
              <p>
                Cobweb Games has been in the game art and game development industry for several years, building
                engaging gaming experiences for audiences worldwide. Our team of expert game developers are
                leaders in their fields, with deep experience across genres, platforms and devices.
                <br /> <br />
                Whether you need a full game built from scratch or enhancements & upgrades to an existing title,
                Cobweb Games has everything it takes to deliver high-quality results on time and within the
                budget. Contact our team today to discuss how we can help bring your gaming vision to life.
              </p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li>
                  <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                </li>
                <li>
                  <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="img-wrap">
                <Image className="lazy" src="/assets/images/about/sec2-img.webp" alt="*" width={656} height={620} />
                <Image className="shape lazy" src="/assets/images/about/shape-01.webp" alt="*" width={135} height={135} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="counter-wrap text-center">
                <div className="wrap">
                  <Counter end={25} duration={3000} />
                  <span className="sign">+</span>
                </div>
                <p>Team Members</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-wrap text-center">
                <div className="wrap">
                  <Counter end={60} duration={3000} />
                  <span className="sign">+</span>
                </div>
                <p>Successful Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-wrap text-center">
                <div className="wrap">
                  <Counter end={5} duration={3000} />
                  <span className="sign">+</span>
                </div>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-wrap text-center">
                <div className="wrap">
                  <Counter end={100} duration={3000} />
                  <span className="sign">+</span>
                </div>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec3">
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
              <h2 className="main-heading">Our Core <b className="c-green">Statements</b></h2>
              <p>Cobweb Games is dedicated to finding new ways to innovate and showcase the most thrilling gaming
                worlds. We always go the extra mile to create exceptional game projects and colorful art,
                recognized and highlighted by top-tier video game companies.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="box-wrap">
                <h3>Cobweb Mission</h3>
                <p>
                  Our mission is to consistently understand client needs and industry trends, utilizing our
                  gaming expertise to meaningfully connect people through innovative & next-gen gaming
                  experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="box-wrap">
                <h3>Cobweb Vision</h3>
                <p>
                  Our vision is to build a reputation as a trusted gaming advisor and game development agency,
                  consistently delivering value through games that outlast innovation, creativity and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec4 next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/about/about-sec4-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Meet The Team</h4>
              <h2 className="main-heading">Partners In <b className="c-green">Creating</b> Your <b
                className="c-green">Ideal</b> Game</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="img-wrap">
                <Image className="char-gif lazy" src="/assets/images/mens-charc.gif" alt="*" width={315} height={612} unoptimized />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mob-slider">
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Game Designer</h3>
                      <span>01</span>
                    </div>
                    <p>Our game designers oversee all design aspects, from mechanical systems and rules to
                      interactive levels and worlds. Their job is to ensure the cohesive design vision is
                      realized across a game and facilitate discussions between departments.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>3D Artist</h3>
                      <span>02</span>
                    </div>
                    <p>Our 3D artists generate immersive, photorealistic digital worlds, including textures,
                      rigging, lighting, and animations, bringing these virtual assets to life. 3D artists
                      must collaborate closely with other roles to capture the aesthetic style set out by
                      concept art.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Concept Artist</h3>
                      <span>03</span>
                    </div>
                    <p>Our concept artists imagine numerous ideas and options early on through sketches and
                      paintings. They guide the overall artistic direction by establishing a visual
                      language to communicate ideas before 3D production begins.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Programmer</h3>
                      <span>04</span>
                    </div>
                    <p>Our programmers implement the technical infrastructure and code that combines the
                      various designs, assets, and systems into an interactive experience. They work
                      closely with designers to realize technical specifications and ensure cohesive
                      integration.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>UI/UX Designer</h3>
                      <span>05</span>
                    </div>
                    <p>Our UI/UX designers create intuitive user interfaces that allow players to navigate
                      through menus, heads-up displays, and other screen elements effortlessly. They
                      carefully consider the player experience and usability when designing how systems
                      will be displayed and interacted with.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Audio Designer</h3>
                      <span>06</span>
                    </div>
                    <p>Our audio designers are responsible for creating intricate soundscapes that bring
                      games to life. They aim to establish an audio identity as cohesive as the visual
                      style to fully immerse players. Varied music sets the right mood and tones, while
                      realistic sound effects provide authentic feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Platform />
      <Reviews />
      <Faqs />
      <FooterForm />
    </>
  );
} 
