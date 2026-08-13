'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const logos = [
  { id: 1, src: '/assets/images/logos/logo-01.webp',
  width: 148,
  height: 109, alt: 'Logo 1' },
  { id: 2, src: '/assets/images/logos/logo-02.webp',
  width: 149,
  height: 109, alt: 'Logo 2' },
  { id: 3, src: '/assets/images/logos/logo-03.webp',
  width: 148,
  height: 109, alt: 'Logo 3' },
  { id: 4, src: '/assets/images/logos/logo-04.webp',
  width: 149,
  height: 109, alt: 'Logo 4' },
  { id: 5, src: '/assets/images/logos/logo-05.webp',
  width: 128,
  height: 128, alt: 'Logo 5' },
  { id: 6, src: '/assets/images/logos/logo-06.webp',
  width: 148,
  height: 109, alt: 'Logo 6' },
];

export default function BannerBadgesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2 } },
        { breakpoint: 400, settings: { slidesToShow: 2 } },
      ],
    };

    const initSlick = () => {
      const $ = window.$;
      if (!$ || !Reflect.has($.fn, 'slick')) {
        retryTimer = setTimeout(initSlick, 200);
        return;
      }

      const $slider = $(sliderElement);
      if (!$slider.hasClass('slick-initialized') && window.innerWidth < 992) {
        $slider.slick(sliderSettings);
      }
    };

    // Handle resize: destroy on desktop, init on mobile/tablet
    const handleResize = () => {
      const $ = window.$;
      if (!$ || !Reflect.has($.fn, 'slick')) return;

      const $slider = $(sliderElement);
      if (window.innerWidth >= 992 && $slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      } else if (window.innerWidth < 992 && !$slider.hasClass('slick-initialized')) {
        $slider.slick(sliderSettings);
      }
    };

    initSlick();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (retryTimer) clearTimeout(retryTimer);
      const $ = window.$;
      if ($ && Reflect.has($.fn, 'slick')) {
        const $slider = $(sliderElement);
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('unslick');
        }
      }
    };
  }, []);

  return (
    <div className="banner-badges new-about-slider">
      {/* Desktop: Static Grid */}
      <ul className="badges-desktop d-flex align-items-center justify-content-center">
        {logos.map((logo) => (
          <li key={logo.id}>
            <Image className="lazy" src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </li>
        ))}
      </ul>

      {/* Mobile/Tablet: Slider */}
      <div className="badges-mobile" ref={sliderRef}>
        {logos.map((logo) => (
          <div key={logo.id} className="badge-slide">
            <Image className="lazy" src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </div>
        ))}
      </div>
    </div>
  );
}
