import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FounderTeam.module.css';

const teamMembers = [
  {
    name: 'Carl Cahill',
    title: 'Founder & Creative Director',
    image: '/assets/images/founder/founder-landscape.png',
  },
  {
    name: 'James Brady',
    title: 'Senior UX/UI Designer',
    image: '/assets/images/founder/designer.png',
  },
  {
    name: 'Lauren Baker',
    title: 'Office Manager',
    image: '/assets/images/founder/manager.png',
  },
  {
    name: 'Kurt Stubbings',
    title: 'Senior Creative Technologist',
    image: '/assets/images/founder/technologist.png',
  },
];

const smallImages = [
  '/assets/images/founder/founder-01.png',
  '/assets/images/founder/founder-02.png',
  '/assets/images/founder/founder-03.png',
];

const FounderTeam = () => {
  return (
    <section className={styles.teamSection}>
      {/* Background Vector Line */}
      <div className={styles.vectorBgWrapper}>
        <Image
          src="/assets/images/founder/vector-line.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.vectorBgImage}
          aria-hidden="true"
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          {/* Left Column: Founder Info */}
          <div className="col-lg-6 col-xl-6 mb-5 mb-lg-0">
            <div className={styles.founderInfoBox}>
              <h2 className={styles.founderName}>CARL CAHILL</h2>
              <p className={styles.founderTitle}>Founder and Creative Director</p>

              <p className={styles.founderBio}>
                With over 15 years of agency experience and running his own businesses, Carl is passionate about delivering high-quality, high-impact digital products. Carl is an award-winning creative, boasting industry accolades such as Creative of the Year at the Wirehive Awards and Best Website at DADI Awards. He has also worked with high street brands, and large corporates and has written for Web Designer and Net magazine.
              </p>

              <Link href="#" className={styles.linkedinBtn} aria-label="LinkedIn">
                <Image
                  src="/assets/images/founder/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>

              <div className={styles.smallImagesGrid}>
                {smallImages.map((src, index) => (
                  <div key={index} className={styles.smallImageWrapper}>
                    <Image
                      src={src}
                      alt="Carl Cahill"
                      fill
                      sizes="150px"
                      className={styles.chamferedImg}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Team Grid */}
          <div className="col-lg-6 col-xl-6">
            <div className="row g-4 g-lg-5">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-sm-6">
                  <div className={styles.teamCard}>
                    <div className={styles.teamImageWrapper}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.chamferedImg}
                      />
                    </div>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberTitle}>{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderTeam;
