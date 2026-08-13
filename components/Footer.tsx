import Image from 'next/image';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.main}`}>
            <div className={`row ${styles.grid}`}>
                <div className={`col-lg-4 ${styles.brandColumn}`}>
                    <div className="logo-wraper">
                        <Image className={`img-03 lazy ${styles.logo}`}
                            src="/assets/images/logo-f.svg" alt="Cobweb Games" width={228} height={51} sizes="228px" />
                        <p className={styles.description}>We craft extraordinary, immersive games that captivate and inspire.</p>
                        <ul className={`ssm-icons d-flex align-items-center ${styles.socials}`}>
                            <li><a href="https://www.youtube.com/@cobweb-games" className="icon-dri"><SocialIcon name="youtube" /></a></li>
                            <li><a href="javascript:;" className="icon-twt"><Image
                                        src="/assets/images/twitterx.svg" alt="*" width={90} height={90} /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=61563748882713" className="icon-fb"
                                    target="_blank"><SocialIcon name="facebook" /></a></li>
                            <li><a href="https://www.linkedin.com/company/cobweb-games1" className="icon-link"
                                    target="_blank"><SocialIcon name="linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/cobweb.games/" className="icon-inst" target="_blank"><SocialIcon name="instagram" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className={`row ${styles.navigationRow}`}>
                        <div className="col-lg-3 offset-lg-1 col-md-6">
                            <h3 className={styles.heading}>Quick Links</h3>
                            <ul className={`f-menu ${styles.links}`}>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/our-process">Our Process</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                                <li><Link href="/resource-packs">Resource Packs</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h3 className={styles.heading}>Services</h3>
                            <ul className={`f-menu ${styles.links}`}>
                                <li><Link href="/game-art">Game Art</Link></li>
                                <li><Link href="/game-development">Game Development</Link></li>
                                <li><Link href="/game-animation">Game Animation</Link></li>
                            </ul>
                        </div>
                        <div className={`col-lg-4 ${styles.contactColumn}`}>
                            <h3 className={styles.heading}>Contact Info</h3>
                            <ul className={`contact-info ${styles.contactList}`}>
                                <li>
                                    <i className="fas fa-phone-volume"></i>
                                    <a href="tel:(855) 773-1064">Call Now</a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:support@cobwebgames.com">support@cobwebgames.com</a>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span className={`addres ${styles.address}`}>580 California Street San Francisco CA 94104</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`container copy-rights ${styles.copyRights}`}>
            <div className={`row ${styles.copyRow}`}>
                <div className="col-lg-6 col-md-6">
                    <p className={styles.copyrightText}>&#169;{currentYear} Cobweb Games. All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <ul className={`terms-menu d-flex align-items-center justify-content-end ${styles.terms}`}>
                        <li><Link href="/term-and-condition">Terms & Conditions</Link></li>
                        <li>-</li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}
