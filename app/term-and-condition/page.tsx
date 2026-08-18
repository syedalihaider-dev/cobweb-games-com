import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './TermsAndCondition.module.css';

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions | Cobweb Games' },
  description: 'Read the terms and conditions for Cobweb Games services.',
  alternates: { canonical: '/term-and-condition' },
};

const terms = [
  ['Introduction', 'Welcome to Cobweb Games. By accessing or using our website and services, you agree to comply with the following terms and conditions. Please read them carefully.'],
  ['Services', 'We provide game development, game design, and game animation services to clients worldwide. All services are subject to the terms outlined in this agreement.'],
  ['Ownership and Portfolio Display', 'While we showcase various projects and assets in our portfolio, we do not own some of the materials displayed. These items may be client-owned or developed through partnerships. If you are the rightful owner and wish to have any material removed, we will comply with the request within 24 hours upon receiving notice.'],
  ['Client Responsibilities', 'Clients are responsible for providing accurate project requirements and feedback throughout the development process. Any delay in providing necessary materials or approvals may result in project delays.'],
  ['Intellectual Property', 'All intellectual property rights related to the games, designs, animations, and other materials we create will be transferred to the client upon full payment unless otherwise agreed in writing. However, we reserve the right to showcase the work in our portfolio unless otherwise specified in the contract.'],
  ['Payments and Fees', 'Clients agree to pay the fees as outlined in the project agreement. Late payments may incur additional charges or result in project suspension.'],
  ['Refund Policy', 'Refunds will be handled on a case-by-case basis. If a project is canceled before completion, a partial refund may be provided based on the amount of work completed.'],
  ['Limitation of Liability', 'We are not responsible for any direct or indirect damages resulting from the use of our services, including but not limited to project delays, loss of data, or third-party disputes.'],
  ['Termination', 'We reserve the right to terminate any project or service if the client fails to comply with these terms or engages in illegal or unethical practices.'],
  ['Changes to Terms', "We may update these terms and conditions from time to time. Any changes will be posted on this page, and it is the client's responsibility to review them periodically."],
  ['Governing Law', 'These terms are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from this agreement will be subject to the exclusive jurisdiction of the courts in [Jurisdiction].'],
] as const;

export default function TermsAndConditionPage() {
  return <>
    <section className={`next-image-background-host ${styles.hero}`}>
      <Image className="next-image-background" src="/assets/images/contact-banner.webp" alt="" fill sizes="100vw" priority />
      <div className={`container ${styles.heroContent}`}>
        <p className={styles.eyebrow}>Cobweb Games</p>
        <h1>Terms &amp; <b>Conditions</b></h1>
        <p>Our agreement for creating exceptional gaming experiences together.</p>
        <div className={styles.heroActions}>
          <Link href="/contact-us" className="btn-size btn-purple">Get Started</Link>
          <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
        </div>
      </div>
    </section>

    <section className={styles.termsSection}>
      <div className="container">
        <div className={styles.intro}>
          <span>Legal information</span>
          <h2>Terms built for <b>clear collaboration.</b></h2>
        </div>
        <div className={styles.termsGrid}>
          {terms.map(([title, content], index) => <article className={styles.termCard} key={title}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{content}</p></div>
          </article>)}
          <article className={`${styles.termCard} ${styles.contactCard}`}>
            <span className={styles.number}>12</span>
            <div><h3>Contact Us</h3><p>For any questions regarding these terms or to request removal of a portfolio item, please contact us at <a href="mailto:info@cobwebgames.com">info@cobwebgames.com</a>.</p></div>
          </article>
        </div>
      </div>
    </section>
  </>;
}
