import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './PrivacyPolicy.module.css';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Cobweb Games' },
  description: 'Learn how Cobweb Games collects, uses, and protects your information.',
  alternates: { canonical: '/privacy-policy' },
};

const policySections = [
  ['Introduction', 'At Cobweb Games, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This privacy policy outlines how we collect, use, and protect the information you provide when visiting our website or using our services.'],
  ['Information We Collect', 'We may collect personal information such as your name, email address, contact information, and other personally identifiable details. We may also collect non-personal information including browser type, IP address, cookies, site usage data, and details related to game development, design, or animation projects.'],
  ['How We Use Your Information', 'Your information may be used to provide and manage our services, communicate with you regarding your project, inquiries, or updates, improve our website and services, and comply with legal obligations.'],
  ['Sharing Your Information', 'We do not sell, trade, or rent your personal information to third parties. We may share your data with service providers assisting us in delivering our services, such as payment processors and cloud hosting providers, or with legal authorities when required by law or to protect our rights.'],
  ['Asset and Portfolio Disclaimer', 'Some of the assets and portfolio showcased on our website may not be owned by us. We display them to showcase our skills or collaborations. If you believe you own any displayed asset and wish to have it removed, please contact us. We will remove the content within 24 hours.'],
  ['Data Retention', 'We retain your personal data only for as long as necessary for the purposes outlined in this policy or to comply with legal requirements.'],
  ['Security', 'We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.'],
  ['Your Rights', 'You have the right to access, update, or delete your personal information; withdraw consent to the processing of your data; and request the removal of any portfolio items as outlined above.'],
  ['Third-Party Links', 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites, and we encourage you to read their privacy policies.'],
  ['Cookies', 'We use cookies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.'],
  ['Changes to This Policy', 'We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with the updated date.'],
] as const;

export default function PrivacyPolicyPage() {
  return <>
    <section className={`next-image-background-host ${styles.hero}`}>
      <Image className="next-image-background" src="/assets/images/contact-banner.webp" alt="" fill sizes="100vw" priority />
      <div className={`container ${styles.heroContent}`}>
        <p className={styles.eyebrow}>Cobweb Games</p>
        <h1>Privacy <b>Policy</b></h1>
        <p>How we responsibly collect, use, and protect your information.</p>
        <div className={styles.heroActions}>
          <Link href="/contact-us" className="btn-size btn-purple">Get Started</Link>
          <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
        </div>
      </div>
    </section>

    <section className={styles.policySection}>
      <div className="container">
        <div className={styles.intro}>
          <span>Your privacy matters</span>
          <h2>Clear information for <b>your peace of mind.</b></h2>
        </div>
        <div className={styles.policyGrid}>
          {policySections.map(([title, content], index) => <article className={styles.policyCard} key={title}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{content}</p></div>
          </article>)}
          <article className={`${styles.policyCard} ${styles.contactCard}`}>
            <span className={styles.number}>12</span>
            <div><h3>Contact Us</h3><p>For questions about this privacy policy or to exercise your rights, contact us at <a href="mailto:info@cobweb.com">info@cobweb.com</a>.</p></div>
          </article>
        </div>
      </div>
    </section>
  </>;
}
