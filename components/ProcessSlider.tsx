'use client';

import { useEffect } from 'react';
import { bindSlickNavHighlight } from './slickNavHighlight';

export default function ProcessSlider() {
  useEffect(() => {
    let slickTimer: NodeJS.Timeout;
    let destroyHighlight = () => {};

    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        const processHighlight = bindSlickNavHighlight($, '.process-slider-rht', '.process-slider-lft');
        destroyHighlight = processHighlight.destroy;
        
        // Initialize right slider first
        $('.process-slider-rht').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          fade: true,
          asNavFor: '.process-slider-lft'
        });

        // Initialize left slider
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

        processHighlight.refresh();

        // Ensure the main slider starts in center mode
        setTimeout(function () {
          const navigationSlider = $('.process-slider-lft');
          if (navigationSlider.hasClass('slick-initialized')) {
            const slick = navigationSlider.slick('getSlick');
            if (slick) {
              navigationSlider.slick('slickGoTo', Math.floor((slick.slideCount ?? 0) / 4));
            }
          }
        }, 500);

      } else {
        slickTimer = setTimeout(initSlick, 100);
      }
    };

    initSlick();

    return () => {
      clearTimeout(slickTimer);
      destroyHighlight();
    };
  }, []);

  return (
    <section className="process-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h6>Our Process</h6>
            <h2 className="main-heading">Our Step-by-Step <br /> Development <b className="c-green">Process</b></h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="process-slider-lft">
              <li><h4>Initial Consultation</h4></li>
              <li><h4>Pre-Production & Planning</h4></li>
              <li><h4>Production & Development</h4></li>
              <li><h4>Quality Assurance & Testing</h4></li>
              <li><h4>Launch & Post-Launch Support</h4></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="process-slider-rht">
              <li>
                <div className="box-wrap">
                  <span>01</span>
                  <h2>Initial Consultation & Conceptualization</h2>
                  <p>Our process begins with an in-depth initial consultation to understand your vision
                    and project requirements. We discuss your game concept, target audience, platform
                    preferences, and desired art style. Our team collaborates with you during this phase
                    to brainstorm ideas and refine the concept. <br /><br /> We also conduct market research
                    to ensure your game idea is unique and viable. This stage culminates in a
                    comprehensive project proposal outlining the scope, timeline, and budget. </p>
                </div>
              </li>
              <li>
                <div className="box-wrap">
                  <span>02</span>
                  <h2>Pre-Production and Planning</h2>
                  <p>In the pre-production phase, we lay the groundwork for your game by creating detailed
                    design documents and project plans. Our team develops storyboards, concept art, and
                    initial prototypes to visualize the game&apos;s look and feel. We establish a solid
                    technical foundation by selecting appropriate tools, technologies, and platforms.
                    <br /><br /> Milestones and deliverables are defined to ensure the project stays on
                    track. We also assemble a dedicated team of developers, artists, and designers
                    tailored to your project&apos;s needs. </p>
                </div>
              </li>
              <li>
                <div className="box-wrap">
                  <span>03</span>
                  <h2>Production and Development</h2>
                  <p>The production phase is where our team of skilled developers, artists, and animators
                    work collaboratively to build the game according to the design documents. We focus
                    on creating high-quality assets, coding the game mechanics, and integrating
                    features. Regular playtesting and feedback sessions are conducted to identify and
                    address issues early on. <br /><br /> This iterative process ensures that the game is
                    polished and meets your expectations. Throughout production, we maintain transparent
                    communication and provide regular updates on progress. </p>
                </div>
              </li>
              <li>
                <div className="box-wrap">
                  <span>04</span>
                  <h2>Quality Assurance and Testing</h2>
                  <p>Quality assurance is a critical phase where we rigorously test the game to ensure it
                    is bug-free and runs smoothly. Our QA team performs various types of testing,
                    including functionality, performance, and compatibility tests across different
                    devices and platforms. We gather feedback from beta testers to gain insights into
                    player experiences and make necessary adjustments. <br /><br /> Any identified issues
                    are promptly addressed by our development team. This phase helps us refine the game
                    to provide an optimal player experience. </p>
                </div>
              </li>
              <li>
                <div className="box-wrap">
                  <span>05</span>
                  <h2>Launch and Post-Launch Support</h2>
                  <p>The final phase involves preparing for the game&apos;s launch and providing post-launch
                    support. We develop a marketing strategy to promote the game and ensure a successful
                    release. Our team handles the deployment process, making the game available on
                    various platforms as planned. Post-launch, we monitor the game&apos;s performance and
                    gather player feedback to identify areas for improvement. <br /><br /> We offer ongoing
                    support and updates to keep the game engaging and address any emerging issues. This
                    commitment ensures your game remains successful and captivates players long after
                    release. </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
