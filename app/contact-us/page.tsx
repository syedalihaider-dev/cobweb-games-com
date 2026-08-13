import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import FooterForm from '@/components/FooterForm';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './ContactUs.module.css';

export const metadata = createPageMetadata('/contact-us');

export default function ContactUs() {
  return (
    <>
      <section 
        className={`contact-banner d-flex next-image-background-host ${styles.hero}`} 
        
      >
        <Image className="next-image-background" src="/assets/images/contact-banner.webp" alt="" fill sizes="100vw" fetchPriority="high" loading="eager" />
        <Image src="/assets/images/contact-character.webp" alt="*" width={1440} height={734} loading="eager" />
        <div className="container align-self-end text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <h1>Contact Us</h1>
                <p>Are you ready to bring your game concept to life? We&apos;d love to discuss your project goals and vision. Simply fill out the form, and we will get back to you.</p>
                <ul className="btn-wrap d-flex align-items-center justify-content-center mt-4">
                  <li>
                    <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                  </li>
                  <li>
                    <LiveChatButton className="chat btn-size btn-green">Live Chat</LiveChatButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterForm />
    </>
  );
}
