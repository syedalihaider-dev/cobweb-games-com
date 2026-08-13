'use client';

import Image from 'next/image';

import { useEffect } from 'react';

export default function Technologies() {
	useEffect(() => {
		let slickTimer: NodeJS.Timeout;
		let cancelled = false;

		const initSlick = () => {
			if (cancelled) return;
			 
			if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
				 
				const $ = window.$;
				$(".tech-mob-slider").not('.slick-initialized').slick({
					arrows: false,
					dots: true,
					autoplay: true,
					adaptiveHeight: true,
					responsive: [
						{
							breakpoint: 10000,
							settings: "unslick"
						},
						{
							breakpoint: 900,
							settings: {
								unslick: true,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 700,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
			} else {
				slickTimer = setTimeout(initSlick, 100);
			}
		};

		initSlick();

		return () => {
			cancelled = true;
			clearTimeout(slickTimer);

			const $ = window.$;
			if ($ && Reflect.has($.fn, 'slick')) {
				$('.tech-mob-slider.slick-initialized').slick('unslick');
			}
		};
	}, []);

	return (
		<>
			<section className="tech-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h4>Technologies</h4>
							<h2 className="main-heading">Our <b className="c-green">Technology</b> Stack</h2>
						</div>
					</div>
					<div className="row mob-slider tech-mob-slider">
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-01.webp" data-src="/assets/images/techs/logo-01.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-02.webp" data-src="/assets/images/techs/logo-02.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-03.webp" data-src="/assets/images/techs/logo-03.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-04.webp" data-src="/assets/images/techs/logo-04.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-05.webp" data-src="/assets/images/techs/logo-05.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-09.webp" data-src="/assets/images/techs/logo-09.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-07.webp" data-src="/assets/images/techs/logo-07.webp" alt="*" width={263} height={263} />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<Image className="lazy" src="/assets/images/techs/logo-08.webp" data-src="/assets/images/techs/logo-08.webp" alt="*" width={263} height={263} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
