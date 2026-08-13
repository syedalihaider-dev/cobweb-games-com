'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import TechnologiesNew from '../../components/TechnologiesNew';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import { WhyChooseUsSection } from '@/components/WhyChooseAbout';
import TwoDArtTeam from '@/components/TwoDteam';
import ThreeDEnvironmentPortfolio from '@/components/TechnologiesEnviroment';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

// ============================================================
// PLAY TO EARN - PORTFOLIO (passed as props to ThreeDEnvironmentPortfolio)
// ============================================================
const playToEarnPortfolioImages = [
  {
    id: 'p2e-port-1',
    src: '/assets/images/blockchain/port-01.webp',
    width: 552,
    height: 505,
    alt: 'NFT RPG Project',
    title: 'NFT RPG Project',
    description: 'Character-driven P2E RPGs with utility-first NFT design.',
    heightClass: 'h-1'
  },
  {
    id: 'p2e-port-2',
    src: '/assets/images/blockchain/port-02.webp',
    width: 301,
    height: 242,
    alt: 'Blockchain Strategy Game',
    title: 'Blockchain Strategy Games',
    description: 'On-chain territory and resource titles.',
    heightClass: 'h-2'
  },
  {
    id: 'p2e-port-3',
    src: '/assets/images/blockchain/port-03.webp',
    width: 267,
    height: 331,
    alt: 'Metaverse Experience',
    title: 'Metaverse Experiences',
    description: 'Virtual worlds with land and creator economies.',
    heightClass: 'h-2'
  },
  {
    id: 'p2e-port-4',
    src: '/assets/images/blockchain/port-04.webp',
    width: 301,
    height: 242,
    alt: 'GameFi Platform',
    title: 'GameFi Platforms',
    description: 'Staking and yield ecosystems built around live games.',
    heightClass: 'h-3'
  },
  {
    id: 'p2e-port-5',
    src: '/assets/images/blockchain/port-05.webp',
    width: 570,
    height: 331,
    alt: 'Web3 Multiplayer Game',
    title: 'Web3 Multiplayer Games',
    description: 'Competitive titles with on-chain stakes.',
    heightClass: 'h-3'
  },
  {
    id: 'p2e-port-6',
    src: '/assets/images/blockchain/port-06.webp',
    width: 248,
    height: 505,
    alt: 'Tokenized Gaming Ecosystem',
    title: 'Tokenized Gaming Ecosystems',
    description: 'Multi-game economies under unified token infrastructure.',
    heightClass: 'h-1'
  },
  {
    id: 'p2e-port-7',
    src: '/assets/images/blockchain/port-07.webp',
    width: 267,
    height: 331,
    alt: 'Portfolio 7',
    title: '',
    description: '',
    heightClass: 'h-2'
  }
];

// ============================================================
// PLAY TO EARN - WHY CHOOSE US CONTENT (3 sections)
// ============================================================
const playToEarnData = {
  section1: {
    smHeading: "Why Choose Us",
    mainHeading: "Why Studios Choose Cobweb P2E <b>Game Development</b> Services?",
    slides: [
      {
        title: "Experienced Web3 Game Developers",
        description: "Engineers who have shipped both traditional games and on-chain systems. The overlap is rarer than the job listings suggest."
      },
      {
        title: "Sustainable Token Economy Design",
        description: "Economies modeled and stress-tested against player behavior before launch, including the behavior of players who only want to extract."
      },
      {
        title: "Secure Smart Contract Development",
        description: "Test coverage, fuzzing, and audit discipline on every contract that touches value."
      },
      {
        title: "Scalable Blockchain Architecture",
        description: "Hybrid on-chain/off-chain design that keeps gameplay fast and costs sane at scale."
      },
      {
        title: "Cross-Platform Development Expertise",
        description: "P2E on mobile, PC, and web with wallet flows adapted to each platform's store policies."
      },
      {
        title: "Transparent Development Process",
        description: "Weekly builds, open backlogs, and honest reporting. Especially important in a sector with a trust deficit."
      },
      {
        title: "Community-Driven Development",
        description: "Feedback loops, governance tooling, and the community management infrastructure Web3 games live on."
      },
      {
        title: "Long-Term Technical Support",
        description: "Chains upgrade, standards evolve, exploits get published. We stay on retainer for all three."
      }
    ]
  },
  section2: {
    smHeading: "Benefits",
    mainHeading: "Benefits of Play-to-Earn <b>Game Development</b>",
    slides: [
      {
        title: "True Digital Asset Ownership",
        description: "Players own what they earn, provably, and can trade it without your permission. That is the point."
      },
      {
        title: "New Revenue Opportunities",
        description: "Primary sales, marketplace royalties, and token appreciation alongside traditional monetization."
      },
      {
        title: "Increased Player Retention",
        description: "Skin in the game is the strongest retention mechanic ever invented when the game underneath deserves it."
      },
      {
        title: "Decentralized In-Game Economy",
        description: "Player-driven markets that generate emergent gameplay no designer could script."
      },
      {
        title: "Transparent Transactions",
        description: "On-chain records that make drop rates, scarcity, and economy flows publicly verifiable."
      },
      {
        title: "Community Engagement & Governance",
        description: "Players who vote on the game's future defend the game's future."
      },
      {
        title: "Long-Term Ecosystem Growth",
        description: "Economies designed to compound rather than cannibalize themselves."
      },
      {
        title: "Enhanced Monetization Models",
        description: "Sustainable earn mechanics that reward play instead of subsidizing extraction."
      }
    ]
  },
  section3: {
    smHeading: "Our Process",
    mainHeading: "Our Play to Earn Game <b>Development Process</b>",
    slides: [
      {
        title: "Project Discovery & Strategy",
        description: "Concept, audience, chain selection, and regulatory context established before design begins."
      },
      {
        title: "Game Economy Planning",
        description: "Sources, sinks, and value flows mapped for the full player lifecycle, including the extractors."
      },
      {
        title: "Tokenomics Design",
        description: "Supply, emission, utility, and governance modeled and simulated before a single token exists."
      },
      {
        title: "Gameplay & Level Design",
        description: "The actual game, designed to be worth playing at token price zero."
      },
      {
        title: "Blockchain & Smart Contract Development",
        description: "Contract architecture, testing, and deployment across testnet to mainnet."
      },
      {
        title: "NFT Asset Creation & Integration",
        description: "Asset production, metadata standards, and minting infrastructure."
      },
      {
        title: "Testing & Security Audits",
        description: "Game QA, economy simulation, exploit testing, and third-party audit coordination."
      },
      {
        title: "Launch, LiveOps & Community Growth",
        description: "Mainnet launch, economy monitoring, and the community operations Web3 retention runs on."
      }
    ]
  }
};

// ============================================================
// PLAY TO EARN - BLOCKCHAIN NETWORKS (passed as props to Platform)
// ============================================================
const playToEarnPlatforms = [
  {
    title: "Ethereum",
    description: "Maximum security and liquidity for high-value assets, priced accordingly in gas.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Polygon",
    description: "Low-cost, high-throughput EVM chain and the default recommendation for most P2E economies.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Solana",
    description: "High-speed, low-fee architecture for games with heavy transaction volume.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "BNB Chain",
    description: "Large retail user base and cheap transactions for mass-market titles.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Avalanche",
    description: "Subnet architecture for games that want their own dedicated chain performance.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "Immutable",
    description: "Gaming-specific L2 with gas-free NFT minting and trading built for exactly this use case.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  },
  {
    title: "Arbitrum",
    description: "Ethereum L2 security with a fraction of the transaction cost.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "Base",
    description: "Coinbase-backed L2 with the smoothest fiat onramp path for mainstream players.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  }
];

// ============================================================
// PLAY TO EARN - TEAM (passed as props to TwoDArtTeam)
// ============================================================
const playToEarnTeam = [
  {
    id: 'p2e-team-1',
    title: 'Blockchain Developers',
    number: '01',
    description: 'Chain integration, infrastructure, and protocol-level engineering.'
  },
  {
    id: 'p2e-team-2',
    title: 'Smart Contract Engineers',
    number: '02',
    description: 'Solidity and Rust specialists with audit-hardened habits.'
  },
  {
    id: 'p2e-team-3',
    title: 'Game Developers',
    number: '03',
    description: 'Unity and Unreal engineers who ship actual games.'
  },
  {
    id: 'p2e-team-4',
    title: 'Game Designers',
    number: '04',
    description: 'Loop and progression designers who balance fun against economics.'
  },
  {
    id: 'p2e-team-5',
    title: 'Tokenomics Specialists',
    number: '05',
    description: 'Economy modelers who simulate before they mint.'
  },
  {
    id: 'p2e-team-6',
    title: 'QA Engineers',
    number: '06',
    description: 'Game testing plus exploit-hunting, because P2E QA is both.'
  }
];

// ============================================================
// PLAY TO EARN - REVIEWS (passed as props to Reviews)
// ============================================================
const playToEarnReviews = [
  {
    id: 'p2e-review-1',
    text: "Two studios before Cobweb pitched us art and roadmaps. Cobweb pitched us an economy simulation showing exactly where our proposed tokenomics would collapse: month four, when early adopters started net-extracting. They redesigned the sink structure before writing a line of gameplay code. We are fourteen months post-launch, and the token is within 20% of its launch price. In this market, that is a miracle with math behind it.",
    name: 'Lewis Nolan',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'p2e-review-2',
    text: "Our smart contract audit came back from the third-party firm with zero critical findings. The auditors told us that almost never happens on first submission. That is what Cobweb's internal fuzzing and test discipline bought us: an audit that confirmed instead of corrected.",
    name: 'Robin Enzo',
    role: '',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  },
  {
    id: 'p2e-review-3',
    text: "We had an existing mobile RPG and wanted NFT integration without alienating the 95% of our players who do not care about crypto. Cobweb built the Web3 layer as fully optional, with embedded wallets and fiat onramps. Adoption among existing players hit 22% in the first quarter, and our store ratings did not move a decimal.",
    name: 'Nate Ellis',
    role: '',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  }
];

// ============================================================
// PLAY TO EARN - FAQS (passed as props to Faqs)
// ============================================================
const playToEarnFaqs = [
  {
    id: 1,
    question: 'What is a Play-to-Earn (P2E) game?',
    answer: 'A P2E game rewards players with assets that hold real-world value: tokens, NFTs, or both, tradable on open markets. The player\'s time and skill produce ownable, sellable value instead of points trapped in a database.'
  },
  {
    id: 2,
    question: 'How do Play-to-Earn games work?',
    answer: 'Gameplay generates on-chain rewards through emission systems. Players hold assets in crypto wallets, trade them on marketplaces, and in well-designed economies, spend them back into the game through sinks that keep the economy circulating instead of draining.'
  },
  {
    id: 3,
    question: 'What is the difference between Play to Earn and traditional games?',
    answer: 'Ownership. In traditional games, your items belong to the publisher\'s database. In P2E they belong to your wallet, provably, and survive even if the game does not. Everything else about good game design stays identical.'
  },
  {
    id: 4,
    question: 'Which blockchain is best for P2E game development?',
    answer: 'Polygon or Immutable for most game economies: low fees, high throughput, gaming-native tooling. Solana for extreme transaction volume. Ethereum mainnet for high-value assets where security premium matters. The honest answer depends on your gas profile and audience, and we model it before recommending.'
  },
  {
    id: 5,
    question: 'How much does Play to Earn game development cost?',
    answer: 'A focused P2E title with tokenomics, contracts, and wallet integration: $80,000 to $200,000. Mid-scale titles with marketplaces and multiplayer: $200,000 to $500,000. Full GameFi ecosystems and MMO-scale economies: $500,000 plus. Audit costs are scoped separately and never skipped.'
  },
  {
    id: 6,
    question: 'How long does it take to build a P2E game?',
    answer: 'Six to nine months for a focused title including audit cycles. Twelve to twenty-four months for large-scale economies. Audits add four to eight weeks and are not compressible, by design.'
  },
  {
    id: 7,
    question: 'Do players own their in-game assets?',
    answer: 'Yes. Assets are minted to player wallets as NFTs or tokens. Ownership is on-chain and independent of our servers or yours.'
  },
  {
    id: 8,
    question: 'Can you integrate NFTs into existing games?',
    answer: 'Yes, after a technical audit of the existing codebase and economy. The integration is designed so Web3 features are additive for interested players and invisible to everyone else.'
  },
  {
    id: 9,
    question: 'Do you develop custom tokenomics?',
    answer: 'Yes. Custom token models designed, simulated, and stress-tested against extraction behavior before deployment. Copy-pasted tokenomics from a successful game is how economies die in a new context.'
  },
  {
    id: 10,
    question: 'Can you build an NFT marketplace for my game?',
    answer: 'Yes. In-game and web marketplaces with royalty enforcement, auction mechanics, and the trading UX that does not require a tutorial.'
  },
  {
    id: 11,
    question: 'Which crypto wallets can be integrated?',
    answer: 'MetaMask, WalletConnect-compatible wallets, Coinbase Wallet, Phantom for Solana, and embedded wallet solutions that onboard mainstream players without a seed phrase ceremony.'
  },
  {
    id: 12,
    question: 'Do you provide post-launch support and LiveOps?',
    answer: 'Yes. Economy monitoring, emission tuning, event operations, contract upgrades where architecture permits, and security response. A P2E game without LiveOps is a countdown timer.'
  }
];

// ============================================================
// PLAY TO EARN - TECHNOLOGIES (passed as props to TechnologiesNew)
// ============================================================
const playToEarnTechnologies = [
  {
    id: 'tech-1',
    name: 'Unity',
    image: '/assets/images/techs/logo-01.webp',
    width: 263,
    height: 263,
    description: 'Primary game client engine with Web3 SDK integration.'
  },
  {
    id: 'tech-2',
    name: 'Unreal Engine',
    image: '/assets/images/techs/logo-02.webp',
    width: 263,
    height: 263,
    description: 'High-fidelity P2E clients and metaverse experiences.'
  },
  {
    id: 'tech-3',
    name: 'Solidity',
    image: '/assets/images/techs/logo-03.webp',
    width: 263,
    height: 263,
    description: 'EVM smart contracts across Ethereum and its L2 family.'
  },
  {
    id: 'tech-4',
    name: 'Rust',
    image: '/assets/images/techs/logo-04.webp',
    width: 263,
    height: 263,
    description: 'Solana programs and performance-critical infrastructure.'
  },
  {
    id: 'tech-5',
    name: 'Ethereum Virtual Machine (EVM)',
    image: '/assets/images/techs/logo-05.webp',
    width: 263,
    height: 263,
    description: 'The contract runtime standard across most supported chains.'
  },
  {
    id: 'tech-6',
    name: 'IPFS',
    image: '/assets/images/techs/logo-09.webp',
    width: 263,
    height: 263,
    description: 'Decentralized asset and metadata storage that outlives any single server.'
  },
  {
    id: 'tech-7',
    name: 'Chainlink',
    image: '/assets/images/techs/logo-07.webp',
    width: 263,
    height: 263,
    description: 'Oracles and verifiable randomness for provably fair drops.'
  },
  {
    id: 'tech-8',
    name: 'MetaMask & WalletConnect',
    image: '/assets/images/techs/logo-08.webp',
    width: 263,
    height: 263,
    description: 'Wallet connectivity across browser, mobile, and in-game flows.'
  }
];

// ============================================================
// PLAY TO EARN - CTA DATA
// ============================================================
const playToEarnCtaData = {
  heading: 'Hire a Play-to-Earn <br/><b class="c-green">Game Development</b> <br/> Company',
  headingHighlight: 'Game Development',
  description: 'Send us the concept and the token thesis. We will tell you if the economy holds, and exactly where it breaks if it does not. Itemized estimate with chain recommendation and audit scoping within 48 hours. NDA first, always. The P2E games still standing are the ones that were games first. Build one of those.',
  imageSrc: '/assets/images/cta-car.gif',
  buttonText: 'Get Started',
  buttonLink: 'contact-us'
};

export default function PlayToEarnGame() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initSlick = () => {
       
      if (typeof window !== 'undefined' && window.$ && Reflect.has(window.$.fn, 'slick')) {
         
        const $ = window.$;
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
          ]
        });
      } else {
        timer = setTimeout(initSlick, 100);
      }
    };
    initSlick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="play-to-earn-game-page">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section
        className="play-to-earn game-banner game-inner-banner d-flex next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/2d-game/main-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Play to Earn Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Play to Earn Game Development Services <br/> Integrate Play-to-Earn in Your <b>Games!</b>` }} />
              <p>The P2E graveyard is full of games with beautiful NFTs and token economies that lasted eleven weeks. They died the same death: an economy designed for the pitch deck instead of the player base, where earning outpaced sinking, the token chart went vertical then vertical the other way, and the &quot;earn&quot; left before the &quot;play&quot; ever arrived. Cobweb Games builds play-to-earn games in the opposite order. The game has to be worth playing at token price zero. The economy has to survive both a bull run and a winter. The smart contracts have to survive people whose full-time job is breaking smart contracts. Get those three right and P2E works. Skip any one, and you built expensive confetti. We provide full-cycle P2E game development services: game design, tokenomics, smart contract engineering, NFT integration, marketplace infrastructure, and the security auditing that on-chain money makes non-negotiable.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION - INNER GAME SERVICES
          ============================================================ */}
      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional Play to Earn Game Development <b class="c-green">Services</b>` }} />
              <p>Every layer of the Web3 game stack, engineered by people who understand both halves of the phrase &quot;blockchain game.&quot;</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" width={81} height={124} />
                  <h3>Custom Play to Earn Game Development</h3>
                </div>
                <p>Original P2E titles built from your concept with the game-first design discipline that gives the token economy something worth attaching to.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" width={117} height={124} />
                  <h3>NFT Game Development</h3>
                </div>
                <p>NFT games where the assets have in-game utility, not just a JPEG and a floor price. Ownership that changes gameplay is ownership players value.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" width={117} height={124} />
                  <h3>Blockchain Game Development</h3>
                </div>
                <p>On-chain game logic where it matters, off-chain where it performs. The architecture decision of which state lives on-chain determines your gas costs, your latency, and your player experience. We make it deliberately.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" width={117} height={124} />
                  <h3>GameFi Platform Development</h3>
                </div>
                <p>Full GameFi ecosystems: staking, yield mechanics, governance, and the platform infrastructure that turns a single game into an economy.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" width={117} height={124} />
                  <h3>Tokenomics Design &amp; Consulting</h3>
                </div>
                <p>Dual-token models, emission curves, sink design, and the supply-demand math that determines your economy&apos;s lifespan. This is the discipline most failed P2E games skipped. We do not skip it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-06.webp" alt="*" width={117} height={124} />
                  <h3>Smart Contract Development</h3>
                </div>
                <p>Solidity and Rust contracts written, tested, fuzzed, and audited. On-chain code is code you cannot patch on Tuesday. It ships correct or it does not ship.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" width={81} height={124} />
                  <h3>NFT Marketplace Integration</h3>
                </div>
                <p>In-game and standalone marketplace integration with royalty enforcement, lazy minting where it saves gas, and the listing UX that does not require a Web3 tutorial to use.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" width={117} height={124} />
                  <h3>Crypto Wallet Integration</h3>
                </div>
                <p>MetaMask, WalletConnect, and embedded wallet solutions that let a mainstream player onboard without knowing what a seed phrase is until they need to.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" width={117} height={124} />
                  <h3>P2E Game Testing &amp; Quality Assurance</h3>
                </div>
                <p>Standard game QA plus economy simulation and exploit testing, because in a P2E game a bug is not a glitch. It is a bank vulnerability.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" width={117} height={124} />
                  <h3>LiveOps &amp; Post-Launch Support</h3>
                </div>
                <p>Economy monitoring, emission tuning, event cadence, and the live balancing that keeps token velocity healthy after launch.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" width={117} height={124} />
                  <h3>Security Audits &amp; Risk Management</h3>
                </div>
                <p>Internal audit passes plus third-party audit coordination before mainnet. Every exploit found before launch is a headline that never runs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CtaTwo 
        heading={playToEarnCtaData.heading}
        description={playToEarnCtaData.description}
        imageSrc={playToEarnCtaData.imageSrc}
      />

      {/* ============================================================
          PLATFORM SECTION (Blockchain Networks)
          ============================================================ */}
      <Platform 
        heading="Blockchain Networks "
        highlightText="We"
        subheading=" Support"
        platforms={playToEarnPlatforms}
      />

      {/* ============================================================
          WHY CHOOSE US - SECTION 1
          ============================================================ */}
      <WhyChooseUsSection 
        slides={playToEarnData.section1.slides}
        smHeading={playToEarnData.section1.smHeading}
        mainHeading={playToEarnData.section1.mainHeading}
        sectionClass="section-first"
        sliderId="services-slider-p2e-1"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 2 (Benefits)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={playToEarnData.section2.slides}
        smHeading={playToEarnData.section2.smHeading}
        mainHeading={playToEarnData.section2.mainHeading}
        sectionClass="section-second"
        sliderId="services-slider-p2e-2"
        autoplaySpeed={4000}
      />
      
      {/* ============================================================
          WHY CHOOSE US - SECTION 3 (Process)
          ============================================================ */}
      <WhyChooseUsSection 
        slides={playToEarnData.section3.slides}
        smHeading={playToEarnData.section3.smHeading}
        mainHeading={playToEarnData.section3.mainHeading}
        sectionClass="section-third"
        sliderId="services-slider-p2e-3"
        autoplaySpeed={4500}
      />

      {/* ============================================================
          PORTFOLIO SECTION
          ============================================================ */}
      <ThreeDEnvironmentPortfolio 
        badgeText="Our Portfolio"
        heading="Our Play-to-Earn <b class='c-green'>Game Portfolio</b>"
        images={playToEarnPortfolioImages}
      />

      {/* ============================================================
          TEAM SECTION
          ============================================================ */}
      <TwoDArtTeam 
        badgeText="Our Team"
        mainHeading="Meet Our Web3 <b class='c-green'>Game Development Team</b>"
        teamMembers={playToEarnTeam}
        imageSrc="/assets/images/mens-charc.gif"
      />

      {/* ============================================================
          MARQUEE
          ============================================================ */}
      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      {/* ============================================================
          TECHNOLOGIES SECTION
          ============================================================ */}
      <TechnologiesNew techItems={playToEarnTechnologies} />

      {/* ============================================================
          REVIEWS SECTION
          ============================================================ */}
      <Reviews 
        badgeText="Trusted by Web3 Startups &amp; Game Studios"
        mainHeading='Client <b class="c-green">Testimonials</b>'
        reviews={playToEarnReviews}
      />

      {/* ============================================================
          FAQS SECTION
          ============================================================ */}
      <Faqs faqs={playToEarnFaqs} />

      {/* ============================================================
          FOOTER FORM SECTION
          ============================================================ */}
      <FooterForm 
        heading="Hire a Play-to-Earn Game Development Company"
        description="Send us the concept and the token thesis. We will tell you if the economy holds, and exactly where it breaks if it does not."
        formTitle="Discuss Your Web3 Game Concept"
        formSubtitle="Get a Quote"
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}

