'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PlatformData {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

interface PlatformProps {
  heading?: string;
  highlightText?: string;
  subheading?: string;
  platforms?: PlatformData[];
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
        arrows?: boolean;
      };
    }>;
  };
}

const defaultPlatforms: PlatformData[] = [
  {
    title: "PC Game",
    description: "Steam, Epic Games Store, and proprietary distribution. Scalable graphics settings for the hardware range that PC players actually run.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "VR Game",
    description: "Oculus Quest, HTC Vive, Valve Index, and PS VR. The frame budget is sacred.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Mobile Game",
    description: "iOS and Android. Performance-calibrated for the mid-range device the median player actually owns.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

const defaultSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        arrows: false
      }
    }
  ]
};

export default function Platform({ 
  heading = "Key Devices",
  highlightText = " We Develop ",
  subheading = " Games For",
  platforms = defaultPlatforms,
  sliderSettings = defaultSliderSettings
}: PlatformProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    isMounted.current = true;

    const initSlider = () => {
      if (!isMounted.current) return;
      
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        
        if (sliderElement) {
          const slider = $(sliderElement);
          
          // Only initialize if not already initialized
          if (!slider.hasClass('slick-initialized')) {
            try {
              slider.slick(sliderSettings);
            } catch (error) {
              console.warn('Slick slider initialization error:', error);
            }
          }
        }
      } else {
        setTimeout(initSlider, 100);
      }
    };

    const timer = setTimeout(initSlider, 200);

    return () => {
      isMounted.current = false;
      clearTimeout(timer);

      // Safely destroy slick slider
      try {
         
        const $ = window.$;
        if ($ && Reflect.has($.fn, 'slick')) {
          const slider = $(sliderElement);
          if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
          }
        }
      } catch {
        // Ignore cleanup errors
      }
    };
  }, [sliderSettings]);

  return (
    <>
      <section className="h-sec-3">
        <svg className="bg" width="1440" height="2194" viewBox="0 0 1440 2194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "color-dodge" }} opacity="0.8" filter="url(#filter0_f_12_1176)">
            <path
              d="M1539 597.872C1335.12 878.653 962.175 979.363 576.834 1047.61C95.1584 1132.91 -168.31 1524.42 -146.5 1651.5"
              stroke="#5339F8" strokeWidth="265" />
          </g>
          <defs>
            {/* <filter id="filter0_f_12_1176" x="-800.244" y="0.0192871" width="2966.46" height="2193.89"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="260" result="effect1_foregroundBlur_12_1176" />
            </filter> */}
          </defs>
        </svg>
        <div className="container">
		  <Image className="next-platform-decoration" src="/assets/images/logo-elemnt.webp" alt="" width={384} height={438} />
          <div className="row">
            <div className="col-lg-12 text-center relative">
              <div className="text-outline">
                {/* <svg className="txt">
                  <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Cobweb
                  </text>
                </svg> */}
              </div>
              <h6>PLATFORMS</h6>
              <h2 className="main-heading">
                <span dangerouslySetInnerHTML={{ __html: heading }} />
                <b className="c-green" dangerouslySetInnerHTML={{ __html: highlightText }} />
                <span dangerouslySetInnerHTML={{ __html: subheading }} />
              </h2>
            </div>
          </div>
          <div className="row platform-slider" ref={sliderRef}>
            {platforms.map((platform, index) => (
              <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <div className="box-wrap">
                  <div className="img-wrap">
                    <Image className="lazy"
                      src={platform.image}
                      data-src={platform.image} alt="*"
                      width={platform.width}
                      height={platform.height} />
                  </div>
                  <div className="content">
                    <h3>{platform.title}</h3>
                    <p>{platform.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
