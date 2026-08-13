'use client';

import Image from 'next/image';

// Game Level Design Portfolio images
const images = {
    port01: '/assets/images/game-level/port-01.webp',
    port02: '/assets/images/game-level/port-02.webp',
    port03: '/assets/images/game-level/port-03.webp',
    port04: '/assets/images/game-level/port-04.webp',
    port05: '/assets/images/game-level/port-05.webp',
    port06: '/assets/images/game-level/port-06.webp',
    port07: '/assets/images/game-level/port-07.webp',
};

const GameLevelPortfolio = () => {
    return (
        <section className="inner-portfolio">
            <div className="container">
                {/* Heading */}
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4>Our Projects</h4>
                        <h2 className="main-heading">
                            Dynamic Works That Push <b className="c-green">Boundaries</b>
                        </h2>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="row g-0 portfolio-grid">
                    {/* Left Column */}
                    <div className="col-lg-6">
                        <div className="row g-0">
                            {/* Image 1 */}
                            <div className="col-lg-12">
                                <a
                                    href={images.port01}
                                    className="port-img h-1"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port01} alt="Level Design Portfolio 1" width={570} height={331} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Combat Level Design</h3>
                                        <p>Encounter-driven levels designed for tension and player engagement.</p>
                                    </div>
                                </a>
                            </div>
                            {/* Image 2 */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port02}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port02} alt="Level Design Portfolio 2" width={301} height={242} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Puzzle Level Design</h3>
                                        <p>Spatial puzzles and environmental challenges.</p>
                                    </div>
                                </a>
                            </div>
                            {/* Image 3 */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port03}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port03} alt="Level Design Portfolio 3" width={301} height={242} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>Open World Level Design</h3>
                                        <p>Large-scale environments with discovery-driven design.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="row">
                                    {/* Image 4 */}
                                    <div className="col-lg-12">
                                        <a
                                            href={images.port04}
                                            className="port-img h-3"
                                            data-fancybox="gallery"
                                        >
                                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                            <Image src={images.port04} alt="Level Design Portfolio 4" width={267} height={331} />
                                            <div className="overlay">
                                                <span className="icon">+</span>
                                                <h3>Multiplayer Map Design</h3>
                                                <p>Competitive maps designed for balanced gameplay.</p>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Image 5 */}
                                    <div className="col-lg-12 pt-3">
                                        <a
                                            href={images.port05}
                                            className="port-img h-3"
                                            data-fancybox="gallery"
                                        >
                                          <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                            <Image src={images.port05} alt="Level Design Portfolio 5" width={267} height={331} />
                                            <div className="overlay">
                                                <span className="icon">+</span>
                                                <h3>Mobile Level Design</h3>
                                                <p>Short-form levels designed for mobile platforms.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Image 6 */}
                            <div className="col-lg-6">
                                <a
                                    href={images.port06}
                                    className="port-img h-1"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port06} alt="Level Design Portfolio 6" width={248} height={505} />
                                    <div className="overlay">
                                        <span className="icon">+</span>
                                        <h3>VR Level Design</h3>
                                        <p>Immersive environments designed for VR platforms.</p>
                                    </div>
                                </a>
                            </div>
                            {/* Image 7 */}
                            <div className="col-lg-12">
                                <a
                                    href={images.port07}
                                    className="port-img h-2"
                                    data-fancybox="gallery"
                                >
                                  <Image className="next-port-arrow" src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                                    <Image src={images.port07} alt="Level Design Portfolio 7" width={552} height={505} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameLevelPortfolio;