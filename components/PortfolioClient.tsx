'use client';

import Image from 'next/image';

import { useState } from 'react';
import Link from 'next/link';
import { gameArtItems, gameDevItems } from './portfolioData';

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<'first_tab' | 'second_tab'>('first_tab');
  const [artLimit, setArtLimit] = useState(6);
  const [devLimit, setDevLimit] = useState(4);

  return (
    <section className="portfolio_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="tabs">
              <li 
                className={`btn-size btn-purple ${activeTab === 'first_tab' ? 'current' : ''}`}
                onClick={() => setActiveTab('first_tab')}
              >
                Game Art
              </li>
              <li 
                className={`btn-size btn-purple ${activeTab === 'second_tab' ? 'current' : ''}`}
                onClick={() => setActiveTab('second_tab')}
              >
                Game Development
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            {activeTab === 'first_tab' && (
              <div className="my-tabs first_tab current">
                <div className="container serv-bg next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/game-art-bg.webp" alt="" fill sizes="100vw" />
					<Image className="next-service-edge" src="/assets/images/cta-shape-02.webp" alt="" width={28} height={306} />
                  <div className="outline-head">
                    <h3>Game</h3>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="img-wrap">
                        <Image className="img-01 lazy" src="/assets/images/game-art-img-01.webp" alt="*" width={461} height={615} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-wrap">
                        <h2 className="main-heading">Game <b className="c-green">Art</b></h2>
                        <div className="video">
                          <video className="img-02 lazy" playsInline muted loop preload="auto" autoPlay poster="#">
                            <source src="/assets/images/game-art-video.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="game-art-portfolio">
                  <div className="container">
                    <div className="row">
                      {gameArtItems.slice(0, artLimit).map((item) => (
                        <div key={item.id} className="col-sm-12 col-md-6 loadservice-2">
                          <div className="box">
                            <Image src={item.img} alt="" width={item.width} height={item.height} />
                            <a className="play_btn" data-fancybox href={item.videoOrFull}>
                              <Image src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            </a>
                            <div className="info">
                              <ul className="links">
                                {item.links.map((link, idx) => (
                                  <li key={idx}>
                                    <a target="_blank" href={link.url} rel="noreferrer">
                                      <Image src={link.icon} alt="" width={link.width} height={link.height} />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                              <Link href={item.learnMore} className="btn-size btn-green d-inline-block portfolio-green-button">
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {artLimit < gameArtItems.length && (
                      <div className="col-lg-12 text-center pt-5">
                        <a 
                          href="javascript:;" 
                          className="btn-size btn-green load-more d-inline-block portfolio-green-button"
                          onClick={() => setArtLimit(gameArtItems.length)}
                        >
                          Load More
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'second_tab' && (
              <div className="my-tabs second_tab current">
                <div className="container serv-bg next-image-background-host" >
        <Image className="next-image-background" src="/assets/images/game-art-bg.webp" alt="" fill sizes="100vw" />
					<Image className="next-service-edge" src="/assets/images/cta-shape-02.webp" alt="" width={28} height={306} />
                  <div className="outline-head">
                    <h3>Game</h3>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="img-wrap">
                        <Image className="img-01 lazy" src="/assets/images/game-art-img-01.webp" alt="*" width={461} height={615} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-wrap">
                        <h2 className="main-heading">Game <b className="c-green">Development</b></h2>
                        <div className="video">
                          <video className="img-02 lazy" playsInline muted loop preload="auto" autoPlay poster="#">
                            <source src="/assets/images/game-art-video.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="game-art-portfolio">
                  <div className="container">
                    <div className="row">
                      {gameDevItems.slice(0, devLimit).map((item) => (
                        <div key={item.id} className="col-sm-12 col-md-6 loadservice-2">
                          <div className="box">
                            <Image src={item.img} alt="" width={item.width} height={item.height} />
                            <a className="play_btn" data-fancybox href={item.videoOrFull}>
                              <Image src="/assets/images/port-arrow.webp" alt="" width={187} height={187} unoptimized />
                            </a>
                            <div className="info">
                              <a href={item.learnMore} target="_blank" className="btn-size btn-green d-inline-block portfolio-green-button" rel="noreferrer">
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {devLimit < gameDevItems.length && (
                      <div className="col-lg-12 text-center pt-5">
                        <a 
                          href="javascript:;" 
                          className="btn-size btn-green load-more d-inline-block portfolio-green-button"
                          onClick={() => setDevLimit(gameDevItems.length)}
                        >
                          Load More
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
