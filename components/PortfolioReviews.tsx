'use client';

import Image from 'next/image';

import { useEffect } from 'react';

export default function PortfolioReviews() {
  useEffect(() => {
  const init = () => {
    const $ = window.$;

    if (!$ || !Reflect.has($.fn, 'slick')) {
      setTimeout(init, 100);
      return;
    }

    const slider = $('.review-slider');

    if (!slider.length) return;

    if (!slider.hasClass('slick-initialized')) {
      slider.slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              dots: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: true,
            },
          },
        ],
      });
    }
  };

  const timer = setTimeout(init, 100);

  return () => {
    clearTimeout(timer);

    const $ = window.$;

    if ($ && Reflect.has($.fn, 'slick')) {
      const slider = $('.review-slider');

      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
    }
  };
}, []);

  return (
    <section className="review-sec">
      <svg width="1440" height="1481" viewBox="0 0 1440 1481" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_234_1175)">
          <path d="M1483 207C1348.47 441.749 872.655 572.048 579.785 657.156C213.699 763.541 -25.3582 1180.29 2.14835 1277" stroke="#5339F8" strokeWidth="25" />
        </g>
        <defs>
          <filter id="filter0_f_234_1175" x="-212.5" y="0.784668" width="1906.34" height="1479.63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_1175" />
          </filter>
        </defs>
      </svg>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>Testimonials</h4>
            <h2 className="main-heading">What Our <b className="c-green">Clients</b> Say <b className="c-green">About</b> Us!</h2>
          </div>
          <ul className="review-slider">
            <li>
              <div className="box-wraper">
                <div className="box-child">
                  <p>Cobweb Games delivered stunning 2D art for our project. Their team captured our vision perfectly, creating vibrant and detailed artwork that brought our game to life. We couldn&apos;t be happier with the results.</p>
                  <div className="bottom">
                    <span>
                      <Image src="/assets/images/avatar-01.webp" alt="*" width={58} height={58} />
                    </span>
                    <span>
                      <h5>Emily Fernandes</h5>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="box-wraper">
                <div className="box-child">
                  <p>The 2D art development by Cobweb Games was exceptional. Their artists have a keen eye for detail and style. The quality of the final artwork was worth it.</p>
                  <div className="bottom">
                    <span>
                      <Image src="/assets/images/avatar-01.webp" alt="*" width={58} height={58} />
                    </span>
                    <span>
                      <h5>Mark Keith</h5>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="box-wraper">
                <div className="box-child">
                  <p>We were blown away by the 2D art created by Cobweb Games. The characters and backgrounds are visually stunning and have received great feedback from our players. Their professionalism and talent are unmatched.</p>
                  <div className="bottom">
                    <span>
                      <Image src="/assets/images/avatar-01.webp" alt="*" width={58} height={58} />
                    </span>
                    <span>
                      <h5>Harry Yates</h5>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="box-wraper">
                <div className="box-child">
                  <p>Cobweb Games did a fantastic job with our 2D art assets. There was never any communication gap, and everything went smoothly. Overall, the artwork exceeded our expectations and truly enhanced our game&apos;s appeal.</p>
                  <div className="bottom">
                    <span>
                      <Image src="/assets/images/avatar-01.webp" alt="*" width={58} height={58} />
                    </span>
                    <span>
                      <h5>Larry Kevin</h5>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="box-wraper">
                <div className="box-child">
                  <p>Working with Cobweb Games on our 2D art was a delightful experience. Their artists are incredibly talented and were able to bring our concepts to life beautifully. We highly recommend their services to anyone needing top-notch game art.</p>
                  <div className="bottom">
                    <span>
                      <Image src="/assets/images/avatar-01.webp" alt="*" width={58} height={58} />
                    </span>
                    <span>
                      <h5>Otto Parish</h5>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
