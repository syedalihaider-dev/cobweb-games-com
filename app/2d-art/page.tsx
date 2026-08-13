'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import WhyChooseUsAbout from '@/components/WhyChooseAbout';
import TwoDPortfolio from '@/components/TwoPortfolio';
import TwoDArtTeam from '@/components/TwoDteam';
import LiveChatButton from '@/components/LiveChatButton';
import Link from 'next/link';

const platforms2D = [
  {
    title: "Mobile Game Art",
    description: "Sprite atlases optimized for texture memory. UI elements tested at 375-point width. Art direction that reads at a glance because the player does not have a manual.",
    image: "/assets/images/h-sec-4-img-01.webp",
    width: 352,
    height: 359,
  },
  {
    title: "PC Game Art",
    description: "Higher texture resolution budgets, more complex parallax layers, and art direction that rewards the player who looks closely. We scale asset specification to the actual hardware the player runs.",
    image: "/assets/images/h-sec-4-img-02.webp",
    width: 353,
    height: 360,
  },
  {
    title: "VR Game Art",
    description: "2D art for VR needs different spatial thinking than flat-screen art. UI elements readable at fixed world-space distance. Sprite art that holds up at the stereoscopic viewing distance the headset creates.",
    image: "/assets/images/h-sec-4-img-03.webp",
    width: 354,
    height: 359,
  }
];

// New reviews for 2D Art page
const twoDArtReviews = [
  {
    id: '2dart-review-1',
    text: "Our team had been through two offshore 2D art studios before Cobweb. Both delivered assets that looked fine in isolation and created problems the moment they hit the engine. Wrong anchor points, atlas bleeding, and naming that clashed with our conventions. Cobweb was the first studio that asked about our pipeline before the art brief. Assets integrated cleanly on the first import.",
    name: 'Mark Keith',
    role: 'Art Lead',
    avatar: '/assets/images/avatar-01.webp',
    width: 58,
    height: 58,
  },
  {
    id: '2dart-review-2',
    text: "We needed 200-character animation sprite sheets in six weeks for a mobile launch. Cobweb delivered on time, to spec. QA found zero integration issues across the full delivery. For that volume, that is not the expected outcome. It is what a studio that understands production pipelines rather than just art production looks like.",
    name: 'Emily',
    role: 'Producer, Mobile Studio',
    avatar: '/assets/images/avatar-02.webp',
    width: 58,
    height: 58,
  }
];

// Custom FAQs for 2D Art page
const twoDArtFaqs = [
  {
    id: 1,
    question: 'How much does 2D game art cost?',
    answer: 'Single 2D character with front and side views plus expression sheet: $300 to $800. Animation sprite sheet packages: $500 to $2,000. Environment tileset and background: $800 to $3,000 per scene. Itemized quotes within 48 hours of a project brief.'
  },
  {
    id: 2,
    question: 'How long does a 2D game art project take?',
    answer: 'Single character: five to ten business days from approved reference. Animation package: two to three weeks. Environment tileset: two to four weeks, depending on scene count. Project timelines milestone at kickoff.'
  },
  {
    id: 3,
    question: 'Can you match our existing art style?',
    answer: 'Yes. Style matching starts with a reference audit and a test asset for approval before full production begins. We establish the visual rules from your existing art before producing anything new.'
  },
  {
    id: 4,
    question: 'Do you provide source files and ownership rights?',
    answer: 'Full source files in every delivery. Full IP ownership transfers on final payment. Your assets, your rights, your pipeline.'
  },
  {
    id: 5,
    question: 'Can you create assets for Unity and Unreal Engine?',
    answer: 'Yes. Unity and Unreal Engine integration is standard in our pipeline. We deliver in the formats, at the specifications, and with the import documentation each engine requires.'
  },
  {
    id: 6,
    question: 'Do you offer dedicated 2D artists for hire?',
    answer: 'Yes. Dedicated game artists on retainer for studios needing consistent production capacity across live game content cycles.'
  },
  {
    id: 7,
    question: 'What information do you need to start a project?',
    answer: 'Art style reference, asset list, target platform, engine, resolution requirements, naming convention, and timeline. The more specific the brief, the tighter the first delivery.'
  },
  {
    id: 8,
    question: 'Can you handle both concept art and final production assets?',
    answer: 'Yes. End-to-end 2D game art production from concept through final deliverable. We can also pick up at any stage if a reference or concept already exists.'
  }
];

export default function Page2dArt() {
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
    <div className="2d-art-page">
       <section className="game-banner d-flex relative">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <h5>2D Game Art Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `2D Game Art Studio for High-Quality Game Assets & Design.` }} />   
              <p>We are a dedicated 2D game art development studio working across mobile, PC, and VR projects for indie developers, mid-size studios, and enterprise publishers. Custom 2D game art from concept through final deliverable, by a team that understands what game engines actually do with the files they receive.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link></li>
                <li><LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
        </div>
        <div className='w-full h-screen overflow-hidden absolute z-[-1] opacity-[0.5] banner-dev-images-res'>
          <Image className="bg-img lazy h-full w-full object-cover object-right"
            src="/assets/images/2d-art/main-banner.webp" alt="*" width={1440} height={875} />
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services next-image-background-host"
        
      >
        <Image className="next-image-background" src="/assets/images/game-art/team-bg.webp" alt="" fill sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional 2D <b class="c-green">Game Art Services</b>` }} />
              <p>Bad 2D game art outsourcing creates debt. Not the financial kind, the kind where your tech team spends three sprints fixing UV mismatches, inconsistent sprite anchor points, and style drift that appeared somewhere between asset 40 and asset 41 and nobody noticed until the build broke. Studios come to Cobweb Games because they are tired of paying twice: once for the art and once for the fixes. Our 2D game art services are built around production pipelines, not just production output. Every asset is properly named, correctly sized, export-ready for your target engine, and consistent with the style guide the project started with. Every 2D game art service we provide is production-pipeline aware. The assets are built for the build, not just the preview render.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">
            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-01.webp" alt="*" width={81} height={124} />
                  <h3>2D Concept Art for Games</h3>
                </div>
                <p>Concept art that is useful downstream. Character sheets with front, side, and three-quarter views. Environment mood boards with lighting callouts. Prop references with proportional accuracy. The downstream team does not have to interpret the concept. It gives them everything they need to build from it.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-02.webp" alt="*" width={117} height={124} />
                  <h3>2D Character Design Services</h3>
                </div>
                <p>Game character design built for the animation rig it will run on. Expression sheets. Costume variation references. Joint-friendly design decisions that mean the 2D character art does not fight the animator at the rigging stage. Stylized, realistic, and everything between.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-03.webp" alt="*" width={117} height={124} />
                  <h3>2D Environment and Background Design</h3>
                </div>
                <p>Background art with correct parallax layer separation. Tileable terrain assets that actually tile. Level art that gives the player the visual cues they need to navigate. Built for Unity and Unreal Engine integration from the first file.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-04.webp" alt="*" width={117} height={124} />
                  <h3>2D Game Asset Creation</h3>
                </div>
                <p>Props, items, collectibles, hazards, interactive objects. Our game asset creation process handles naming conventions, consistent scale, and correct pivot placement from the start. Not as an afterthought in the delivery package.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-05.webp" alt="*" width={117} height={124} />
                  <h3>Game Icons, Items and UI Art</h3>
                </div>
                <p>Game UI art design that communicates at a glance under the cognitive load of active gameplay. Icon sets with consistent visual language. Inventory item design with a clear read hierarchy. HUD elements that are visible at 40% screen brightness on a phone in direct sunlight. If that last one has never occurred to you, your UI artist has not shipped mobile.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <Image className="lazy" src="/assets/images/2d-art/service-icon-06.webp" alt="*" width={117} height={124} />
                  <h3>2D Game Animation Services</h3>
                </div>
                <p>Frame-by-frame animation built to the frame count and sprite sheet specifications your engine requires. Walk cycles, run cycles, idle animations, attack animations, and the transition frames that determine whether motion feels fluid or mechanical. Sprite sheets delivered with correct atlas packing and margin settings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />
      <Platform 
        heading="Custom 2D Game Art <br> For"
        highlightText=" Every "
        subheading="Genre and Platform"
        platforms={platforms2D}
      />
      <WhyChooseUsAbout />
      <TwoDPortfolio />
      <TwoDArtTeam />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      
      {/* Reviews with custom content for 2D Art page */}
      <Reviews 
        badgeText="Client Success Stories"
        mainHeading="Trusted by <b class='c-green'>Game Studios</b> Worldwide"
        reviews={twoDArtReviews}
      />
      
      {/* FAQs with custom content for 2D Art page */}
      <Faqs faqs={twoDArtFaqs} />
      
      {/* Footer Form with custom content for 2D Art page */}
      <FooterForm 
        heading="Looking to Hire a Game Development Team?"
        description="Game art and development under one roof. If the production needs extend beyond 2D art, the teams are here."
        formTitle="Let's Discuss"
        formSubtitle="Your Project."
        showAwards={true}
        showForm={true}
      />
    </div>
  );
}