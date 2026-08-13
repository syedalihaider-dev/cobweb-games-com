import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Platform from '@/components/Platform';
import Reviews from '@/components/Reviews';
import Faqs from '@/components/Faqs';
import FooterForm from '@/components/FooterForm';
import ProcessSlider from '@/components/ProcessSlider';
import LiveChatButton from '@/components/LiveChatButton';

export const metadata = createPageMetadata('/our-process');

export default function OurProcess() {
  return (
    <>
      <section 
        className="game-banner about-banner d-flex relative next-image-background-host"
        
      >
        <Image className="next-image-background next-image-background--top" src="/assets/images/process/main-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>Our Process</h5>
              <h1>Process with a Human<b> Touch</b></h1>
              <p>See how our personalized and careful approach molds bold concepts into games people love.</p>
              <ul className="btn-wrap d-flex align-items-center justify-content-center mt-5">
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
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
        </div>
      </section>

      <ProcessSlider />

      <section className="about-sec3 process-offer next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/process/offer-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading">Why We&apos;re Your <b className="c-green">Best Choice</b></h2>
              <p>Choosing Cobweb Games means partnering with a dedicated team that excels in transforming your
                vision into engaging, high-quality games.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Expertise and Experience</h3>
                <p>With years of experience in the gaming industry, our team brings unparalleled expertise to
                  every project. We have a proven track record of delivering successful games across various
                  platforms.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Creative Excellence</h3>
                <p>Our artists and designers are renowned for their creativity and attention to detail. We craft
                  visually stunning and immersive gaming experiences that captivate players.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Client-Centric Approach</h3>
                <p>We prioritize our client&apos;s needs and maintain transparent communication throughout
                  development. Our focus on building long-term relationships ensures your project receives
                  personalized attention and support.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Comprehensive Services</h3>
                <p>From concept to launch, we offer a full suite of game development services. Our holistic
                  approach ensures a seamless and cohesive development process tailored to your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec4 process-team next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/about/about-sec4-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Our Team</h4>
              <h2 className="main-heading">The Talent Behind <br /> <b className="c-green">Our Games</b></h2>
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
                    <p>Our Game designers oversee all design aspects, from mechanical systems and rules to
                      interactive levels and worlds. Their job is to ensure the cohesive design vision is
                      realized across a game and facilitate discussions between departments. <br /><br /> They
                      translate ideas into captivating gameplay designs that balance challenge,
                      progression, and fun. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>3D Artist</h3>
                      <span>02</span>
                    </div>
                    <p>Our 3D Artists generate the immersive, photorealistic digital worlds built within
                      games. Textures, rigging, lighting, and animations are added to truly bring these
                      virtual assets to life. <br /><br />3D Artists must collaborate closely with other roles
                      to capture the aesthetic style set out by concept art. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Concept Artist</h3>
                      <span>03</span>
                    </div>
                    <p>Our concept Artists imagine numerous ideas and options early on through sketches and
                      paintings. They guide the overall artistic direction by establishing a visual
                      language to communicate ideas before 3D production begins. <br /><br /> Concept Artists
                      channel their creativity and descriptive skills to convey the intended atmosphere
                      effectively. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Programmer</h3>
                      <span>04</span>
                    </div>
                    <p>Our programmers implement the technical infrastructure and code that combines the
                      various designs, assets, and systems into an interactive experience. <br /><br /> They
                      work closely with designers to realize technical specifications and ensure cohesive
                      integration. Their code serves as the foundation that binds all elements. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>UI/UX Designer</h3>
                      <span>05</span>
                    </div>
                    <p>Our UI/UX designers create intuitive user interfaces that allow players to navigate
                      through menus, heads-up displays, and other screen elements effortlessly. <br /><br />
                      They carefully consider the player experience and usability when designing how
                      systems will be displayed and interacted with. Graphic implementation is then led
                      into the game under their direction. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Audio Designer</h3>
                      <span>06</span>
                    </div>
                    <p>Our Audio designers are responsible for creating intricate soundscapes that bring
                      games to life. <br /><br /> They aim to establish an audio identity as cohesive as the
                      visual style to fully immerse players. Varied music sets the right mood and tones,
                      while realistic sound effects provide authentic feedback. </p>
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
