'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.css';

interface Review {
  id?: string;
  text: string;
  name: string;
  role?: string;
  avatar?: string;
  width?: number;
  height?: number;
}

interface ReviewsProps {
  sectionClass?: string;
  badgeText?: string;
  mainHeading?: string;
  reviews?: Review[];
  sliderSettings?: {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll?: number;
        dots?: boolean;
        centerMode?: boolean;
        centerPadding?: string;
      };
    }>;
  };
  svgElement?: React.ReactNode;
}

const defaultReviews: Review[] = [
  {
    id: 'review-1',
    text: "Cobweb was the first studio that asked about our pipeline before they asked about the brief. Every asset they delivered integrated cleanly on the first import. That had not happened before on an outsourced production.",
    name: 'Harry',
    role: 'Game Director',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'review-2',
    text: "The environment art they delivered had zero performance issues in the build, and the visual quality matched the concept art exactly. No notes from the art director on the first submission. For an external team working from a reference they had not produced, that is not the typical outcome.",
    name: 'Otto',
    role: 'Art Producer, AA Game Studio',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'review-3',
    text: "From early prototyping through worldwide launch, Cobweb Game drove our indie game from idea to finished product. Their development expertise and detailed feedback helped refine our game design at every stage. Moreover, their professional project management and programming allowed us to realize our vision on an expedited timeline and budget. We could not be happier with the development services or the successful final product.",
    name: 'Linda Harris',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'review-4',
    text: "Cobweb Games has been an absolute pleasure to work with! Their creativity and attention to detail are unmatched. The team was highly responsive to our feedback and delivered a game that exceeded our expectations. We can't wait to collaborate on our next project.",
    name: 'Thomas Riley',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

const defaultSliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
      },
    },
  ],
};

const defaultSvg = (
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
);

const Reviews: React.FC<ReviewsProps> = ({
  sectionClass = 'review-sec',
  badgeText = 'Testimonials',
  mainHeading = 'What Our <b class="c-green">Clients</b> Say <b class="c-green">About</b> Us!',
  reviews = defaultReviews,
  sliderSettings = defaultSliderSettings,
  svgElement = defaultSvg
}) => {
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
        slider.slick(sliderSettings);
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
  }, [sliderSettings]);

  return (
    <section className={sectionClass}>
      {svgElement}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className={styles.eyebrow}>{badgeText}</h4>
            <h2 
              className="main-heading"
              dangerouslySetInnerHTML={{ __html: mainHeading }}
            />
          </div>
          <ul className="review-slider">
            {reviews.map((review, index) => (
              <li key={review.id || `review-${index}`}>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>{review.text}</p>
                    <div className="bottom">
                      <span>
                        <Image src={review.avatar || '/assets/images/avatar-01.webp'} alt={review.name} width={58} height={58} />
                      </span>
                      <span>
                        <h5>{review.name}</h5>
                        {review.role && (
                          <span>
                            <i>{review.role}</i>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
