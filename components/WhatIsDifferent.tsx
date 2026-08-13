import Image from 'next/image';
import Link from 'next/link';
export default function WhatIsDifferent() {
  return (
    <section className="h-sec-2">
      <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_234_493)">
          <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213"
            stroke="#5339F8" strokeWidth="55" />
        </g>
        <defs>
          <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_493" />
          </filter>
        </defs>
      </svg>
      <div className="text-outline">
        <svg className="txt">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Cobweb
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="main-heading">What is Different About Cobweb Games?</h2>
          </div>
          <div className="col-lg-4">
            {/* <p>Cobweb Games excels in crafting thrilling gaming worlds with exceptional projects and vibrant
              art, acclaimed by top-tier video game companies.</p> */}
          </div>
          <div className="col-lg-2">
            <Link href="/about-us" className="h-sec-2-read-more">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
        <div className="row mob-slider">
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <Image className="lazy"
                  src="/assets/images/long-term.webp" alt="*" width={262} height={231} />
              </div>
              <div className="content">
                <h3>Long-Term Partnership</h3>
                <p>Game development does not end at launch. Live ops, content updates, and sequel production are where most studio relationships should continue and most vendor relationships terminate. We structure every engagement with the long view in mind. The studios that work with us for the first project rarely brief a new partner for the second.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <Image className="lazy"
                  src="/assets/images/holistic.webp" alt="*" width={262} height={231} />
              </div>
              <div className="content">
                <h3>All-Range Solutions</h3>
                <p>Art, development, and animation under one roof means the animator knows the poly budget the modeler is working to, the environment artist knows the LOD thresholds the tech artist has established, and the developer knows the asset naming convention the art team is using. No translation layer between disciplines.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <Image className="lazy"
                  src="/assets/images/pro-team.webp" alt="*" width={262} height={231} />
              </div>
              <div className="content">
                <h3>Pro 3D Modelers</h3>
                <p>Our 3D team has shipped assets in games. They have encountered the normal map artifact from a bad cage setting and the LOD pop that appears at exactly the wrong camera distance. They check for these things because they have seen what happens when you do not.
</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <Image className="lazy"
                  src="/assets/images/premium.webp" alt="*" width={262} height={231} />
              </div>
              <div className="content">
                <h3>Premium Edition Games</h3>
                <p>Quality is calibrated to the brief. AAA-scale briefs get AAA-scale treatment. Tight indie projects get the focused production discipline that ships a polished game on a sensible budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
