'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type SiteScrollSmoother = {
  kill(): void;
  scrollTo(position: number, smooth?: boolean): void;
  scrollTop(position: number): void;
};

type SiteWindow = Window & {
  __siteScrollSmoother?: SiteScrollSmoother;
};

export default function ClientInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const frame = window.requestAnimationFrame(() => {
      const smoother = (window as SiteWindow).__siteScrollSmoother;
      if (smoother) {
        smoother.scrollTo(0, false);
        smoother.scrollTop(0);
      }

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;
    let lazyLoad: { destroy(): void } | undefined;
    let smoother: SiteScrollSmoother | undefined;

    const initialize = async () => {
      const jqueryModule = await import('jquery');
      const $ = jqueryModule.default;

      window.$ = $;
      window.jQuery = $;

      await Promise.all([
        import('slick-carousel'),
        import('@fancyapps/fancybox'),
      ]);

      const [gsapModule, scrollTriggerModule, scrollSmootherModule, wowModule, lazyLoadModule] =
        await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('gsap/ScrollSmoother'),
          import('wowjs'),
          import('vanilla-lazyload'),
        ]);

      if (cancelled) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      const ScrollSmoother = scrollSmootherModule.ScrollSmoother;
      const LazyLoad = lazyLoadModule.default;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      lazyLoad = new LazyLoad({ elements_selector: '.lazy' });

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollSmoother.get()?.kill();
      if (!prefersReducedMotion) {
        ScrollTrigger.config({ ignoreMobileResize: true });
        smoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 0.72,
          smoothTouch: 0.1,
          speed: 1,
          effects: true,
        }) as SiteScrollSmoother;
        (window as SiteWindow).__siteScrollSmoother = smoother;
      }

      new wowModule.WOW({ mobile: false, live: false }).init();

      const swfItems = $('[data-fancybox="swf-file"]');
      swfItems.fancybox({
        iframe: { css: { width: '336px', height: '280px' } },
      });

      const videoItems = $('[data-fancybox="video-file"]');
      videoItems.fancybox({
        iframe: { css: { width: '580px', height: '340px' } },
      });
    };

    const yearElement = document.getElementById('year');
    if (yearElement) yearElement.textContent = new Date().getFullYear().toString();

    void initialize().catch((error: unknown) => {
      console.error('Client plugin initialization failed:', error);
    });

    return () => {
      cancelled = true;
      lazyLoad?.destroy();
      smoother?.kill();
      delete (window as SiteWindow).__siteScrollSmoother;
    };
  }, []);

  return null;
}
