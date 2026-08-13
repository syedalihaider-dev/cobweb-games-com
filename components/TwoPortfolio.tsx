'use client';

import Image from 'next/image';

// Replace with your actual image paths
const images = {
    port01: '/assets/images/2d-art/port-01.webp',
    port02: '/assets/images/2d-art/port-02.webp',
    port03: '/assets/images/2d-art/port-03.webp',
    port04: '/assets/images/2d-art/port-04.webp',
    port05: '/assets/images/2d-art/port-05.webp',
    port06: '/assets/images/2d-art/port-06.webp',
    port07: '/assets/images/2d-art/port-07.webp',
};

const TwoDPortfolio = () => {
    return (
        <section className="inner-portfolio">
            <div className="container">
                {/* Heading */}
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4>Our Projects</h4>
                        <h2 className="main-heading">
                            2D Game Art <b className="c-green">Portfolio</b>
                        </h2>
                            {/* <p>
                                Our group of 2D artists has been producing amazing graphics and captivating gaming environments.
                                Our attention to detail guarantees that every piece of art embodies the spirit of its topic,
                                whether it be a 2D character or an environment.
                            </p> */}
                    </div>
                </div>

                {/* Image Grid */}
                <div className="row g-0 portfolio-grid">
                    {/* Left Column */}
                    <div className="col-lg-6">
                        <div className="row g-0">
                            {/* Image 1 - Character Art Projects */}
                            <div className="col-lg-12">
                                <a
                                    href={images.port01}
                                    className="port-img h-1"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port01} alt="Character Art Projects" width={552} height={505} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Character Art Projects</h3>
                                        <p>2D character design across mobile casual, PC action, and VR. Full character sheets and animation-ready deliverables.</p>
                                    </div>
                                </a>
                            </div>
                            {/* Image 2 - Environment Design Projects */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port02}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port02} alt="Environment Design Projects" width={301} height={242} />
                                </a>
                            </div>
                            {/* Image 3 - Game Asset Collections */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port03}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port03} alt="Game Asset Collections" width={267} height={331} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="row">
                                    {/* Image 4 - Animation Projects */}
                                    <div className="col-lg-12">
                                        <a
                                            href={images.port04}
                                            className="port-img h-3"
                                            data-fancybox="gallery"
                                        >
                                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                            <Image src={images.port04} alt="Animation Projects" width={301} height={242} />
                                            <div className="overlay">
                                                <span className="icon">+</span>
                                                <h3>Animation Projects</h3>
                                                <p>Frame-by-frame character animation sprite sheets for mobile and PC titles.</p>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Image 5 - No overlay */}
                                    <div className="col-lg-12 pt-3">
                                        <a
                                            href={images.port05}
                                            className="port-img h-3"
                                            data-fancybox="gallery"
                                        >
                                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                            <Image src={images.port05} alt="Portfolio 5" width={267} height={331} />
                                            <div className="overlay">
                                                <span className="icon">+</span>
                                                <h3>Environment Design Projects</h3>
                                                <p>Background art, tileset design, and parallax layers across multiple visual styles.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Image 6 - No overlay */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port06}
                                    className="port-img h-1"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port06} alt="Portfolio 6" width={248} height={505} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Game Asset Collections</h3>
                                        <p>Prop, item, and UI asset libraries delivered as production-ready sprite atlases.</p>
                                    </div>
                                </a>
                            </div>
                            {/* Image 7 - No overlay */}
                            <div className="col-lg-12">
                                <a
                                    href={images.port07}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port07} alt="Portfolio 7" width={570} height={331} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoDPortfolio;