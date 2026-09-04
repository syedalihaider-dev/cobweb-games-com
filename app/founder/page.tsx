import Image from 'next/image';
import FounderHero from '@/components/founder/FounderHero/FounderHero';
import FounderStory from '@/components/founder/FounderStory/FounderStory';
import FounderStats from '@/components/founder/FounderStats/FounderStats';
import FounderJourney from '@/components/founder/FounderJourney/FounderJourney';
import FounderRecognition from '@/components/founder/FounderRecognition/FounderRecognition';
import FounderDevices from '@/components/founder/FounderDevices/FounderDevices';
import FounderTestimonials from '@/components/founder/FounderTestimonials/FounderTestimonials';
import FounderFaqs from '@/components/founder/FounderFaqs/FounderFaqs';
import RouteLayout from '@/components/RouteLayout';
import Link from 'next/link';
import BannerBadgesSlider from '@/components/BannerBadgesSlider';
import LiveChatButton from '@/components/LiveChatButton';
import styles from '../about-us/AboutUs.module.css';

export const metadata = {
  title: 'Founder | Cobweb Games',
  description: 'The story behind Cobweb Games.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FounderPage() {
  return (
    <RouteLayout>
      <style>{`
        body {
          background-color: #1B1E26 !important;
        }
        .banner-badges{
          background-color: transparent !important;
        }
        .founder-marquee {
          display: flex !important;
        }
        @media (max-width: 991px) {
          .founder-marquee {
            padding-top: 20px !important;
          }
          .founder-marquee span {
            font-size: 24px !important;
            line-height: 24px !important;
          }
          .founder-marquee span b {
            font-size: 40px !important;
            width: 25px !important;
          }
        }
        @media (max-width: 575px) {
          .founder-marquee {
            padding-top: 10px !important;
          }
          .founder-marquee span {
            font-size: 16px !important;
            line-height: 16px !important;
          }
          .founder-marquee span b {
            font-size: 24px !important;
            width: 15px !important;
          }
        }
      `}</style>
      <main>
        <section className={`about-banner d-flex relative next-image-background-host ${styles.hero}`}>
          <Image className="next-image-background" src="/assets/images/about/about-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
          <div className={`container align-self-center ${styles.heroContent}`}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h5>From the Frame to the Build</h5>
                <h1>The New Frontier Of <b>Game Development</b></h1>
                <p>The story of a studio that spent years perfecting worlds on screen, then rebuilt everything for worlds people could actually play in.</p>
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
          <div className="banner-badges">
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
          </div>
        </section>
        <div className="marquee founder-marquee">
          <span>Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b></span>
          <span>Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b></span>
        </div>
        <FounderHero />
        <div className="marquee founder-marquee">
          <span>Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b></span>
          <span>Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b> Where It All Began <b>*</b></span>
        </div>
        <FounderStory />
        <FounderStats />
        {/* <FounderStatements /> */}
        {/* <section className="team-sec4 next-image-background-host" >
          <Image className="next-image-background" src="/assets/images/about/about-sec4-bg.webp" alt="" fill sizes="100vw" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="main-heading">Partners In <b className="c-green">Creating</b> Your <b className="c-green">Ideal</b> Game</h2>
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
                      <p>Our game designers oversee all design aspects, from mechanical systems and rules to interactive levels and worlds. Their job is to ensure the cohesive design vision is realized across a game and facilitate discussions between departments.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                      <div className="head">
                        <h3>3D Artist</h3>
                        <span>02</span>
                      </div>
                      <p>Our 3D artists generate immersive, photorealistic digital worlds, including textures, rigging, lighting, and animations, bringing these virtual assets to life. 3D artists must collaborate closely with other roles to capture the aesthetic style set out by concept art.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                      <div className="head">
                        <h3>Concept Artist</h3>
                        <span>03</span>
                      </div>
                      <p>Our concept artists imagine numerous ideas and options early on through sketches and paintings. They guide the overall artistic direction by establishing a visual language to communicate ideas before 3D production begins.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                      <div className="head">
                        <h3>Programmer</h3>
                        <span>04</span>
                      </div>
                      <p>Our programmers implement the technical infrastructure and code that combines the various designs, assets, and systems into an interactive experience. They work closely with designers to realize technical specifications and ensure cohesive integration.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                      <div className="head">
                        <h3>UI/UX Designer</h3>
                        <span>05</span>
                      </div>
                      <p>Our UI/UX designers create intuitive user interfaces that allow players to navigate through menus, heads-up displays, and other screen elements effortlessly. They carefully consider the player experience and usability when designing how systems will be displayed and interacted with.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                      <div className="head">
                        <h3>Audio Designer</h3>
                        <span>06</span>
                      </div>
                      <p>Our audio designers are responsible for creating intricate soundscapes that bring games to life. They aim to establish an audio identity as cohesive as the visual style to fully immerse players. Varied music sets the right mood and tones, while realistic sound effects provide authentic feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <FounderJourney />
        <FounderRecognition />
        <FounderDevices />
        <FounderTestimonials />
        <FounderFaqs />
        {/* <FooterForm /> */}
      </main>
    </RouteLayout>
  );
}

