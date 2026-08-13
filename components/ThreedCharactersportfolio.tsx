'use client';

import Image from 'next/image';

// Replace with your actual image paths
const images = {
    port01: '/assets/images/3d-character/port-01.webp',
    port02: '/assets/images/3d-character/port-02.webp',
    port03: '/assets/images/3d-character/port-03.webp',
    port04: '/assets/images/3d-character/port-04.webp',
    port05: '/assets/images/3d-character/port-05.webp',
    port06: '/assets/images/3d-character/port-06.webp',
    port07: '/assets/images/3d-character/port-07.webp',
};

const  ThreedCharactersportfolio= () => {
    return (
        <section className="inner-portfolio">
    <div className="container">
        {/* Heading */}
        <div className="row">
            <div className="col-lg-12 text-center">
                <h4>Our Projects</h4>
                <h2 className="main-heading">
                    3D Game Art <b className="c-green">Portfolio</b>
                </h2>
            </div>
        </div>

        {/* Image Grid */}
        <div className="row g-0 portfolio-grid">
            {/* Left Column */}
            <div className="col-lg-6">
                <div className="row g-0">
                    {/* Image 1 - Game Character Models */}
                    <div className="col-lg-12">
                        <a
                            href={images.port01}
                            className="port-img h-1"
                            data-fancybox="gallery"
                        >
                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={images.port01} alt="Game Character Models" width={552} height={505} />
                            <div className="overlay">
                                <span className="icon">+</span>
                                <h3>Game Character Models</h3>
                                <p>Production-shipped characters across mobile, PC, and console.</p>
                            </div>
                        </a>
                    </div>
                    {/* Image 2 - Stylized Character Projects */}
                    <div className="col-lg-6">
                        <a
                            href={images.port02}
                            className="port-img h-2"
                            data-fancybox="gallery"
                        >
                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={images.port02} alt="Stylized Character Projects" width={267} height={331} />
                            
                        </a>
                    </div>
                    {/* Image 3 - Creature Design Projects */}
                    <div className="col-lg-6">
                        <a
                            href={images.port03}
                            className="port-img h-2"
                            data-fancybox="gallery"
                        >
                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={images.port03} alt="Creature Design Projects" width={570} height={331} />
                            
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="row">
                            {/* Image 4 - Realistic Character Projects */}
                            <div className="col-lg-12">
                                <a
                                    href={images.port06}
                                    className="port-img h-3"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port06} alt="Realistic Character Projects" width={301} height={253} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Realistic Character Projects</h3>
                                        <p>Semi-realistic and photorealistic modeling for high-fidelity productions.</p>
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
                                    <Image src={images.port05} alt="Portfolio 5" width={301} height={242} />
                                    <div className="overlay">
                                <span className="icon">+</span>
                                <h3>Stylized Character Projects</h3>
                                <p>Cartoon and stylized work for mobile-casual and indie PC titles.</p>
                            </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image 6 - No overlay */}
                    <div className="col-lg-6">
                        <a
                            href={images.port04}
                            className="port-img h-1"
                            data-fancybox="gallery"
                        >
                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            <Image src={images.port04} alt="Portfolio 6" width={248} height={505} />
                            <div className="overlay">
                                <span className="icon">+</span>
                                <h3>Creature Design Projects</h3>
                                <p>Creature and monster modeling across horror, fantasy, and sci-fi.</p>
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
                            <Image src={images.port07} alt="Portfolio 7" width={267} height={331} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default ThreedCharactersportfolio;