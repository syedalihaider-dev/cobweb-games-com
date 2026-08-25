'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LiveChatButton from '@/components/LiveChatButton';
import styles from './FooterForm.module.css';

interface FooterFormProps {
  sectionClass?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  chatButtonText?: string;
  awardsTitle?: string;
  formTitle?: string;
  formSubtitle?: string;
  formPlaceholders?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  badgeImages?: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
    link: string;
    label?: string;
  }>;
  showAwards?: boolean;
  showForm?: boolean;
}

const defaultBadges = [
  {
    src: '/assets/images/badges-03.png',
    width: 548,
    height: 213,
    alt: 'Badge',
    link: 'https://www.bark.com/en/us/company/cobweb-games/LeAebK/'
  },
  {
    src: '/assets/images/agency.png',
    width: 382,
    height: 99,
    alt: 'Design Rush',
    link: 'https://www.designrush.com/agency/software-development/gaming',
    label: 'Design Rush'
  },
  {
    src: '/assets/images/good-firms.png',
    width: 548,
    height: 213,
    alt: 'Good Firms',
    link: 'https://www.goodfirms.co/company/cobweb-games'
  },
  {
    src: '/assets/images/clutch.png',
    width: 382,
    height: 99,
    alt: 'Clutch',
    link: 'https://clutch.co/profile/cobweb-games#reviews',
    label: 'Clutch'
  },
  {
    src: '/assets/images/thumbtack.png',
    width: 548,
    height: 213,
    alt: 'Thumbtack',
    link: 'https://www.thumbtack.com/ny/springfield-gardens/freelance-web-designers/cobweb-games-mobile-app-game-dev-company/service/578864202924269574?utm_medium=web&utm_source=txt&surface=sp'
  }
];

const services = [
  'Mobile App Development',
  'Web App Development',
  'SaaS Platform',
  'MVP Development',
  'Game Development',
  'Blockchain Solutions',
  'Business Proposal',
];

const standardBudgets = [
  '$3,000 to $5,000',
  '$5,000 to $10,000',
  '$10,000 to $25,000',
  '$25,000 to $50,000',
  'Request a custom quote',
];

const proposalBudgets = [
  '$999 – Starter Proposal',
  '$2,499 – Investor Ready Proposal',
  '$4,900 – Corporate Proposal Pack',
  'Request a custom quote (Corporate / Enterprise)',
];

const FooterForm: React.FC<FooterFormProps> = ({
  sectionClass = 'footer-form',
  heading = 'Looking to Hire A Battle-Tested Game Development Team?',
  description = 'Tell us the game, the platform, the scope, and the timeline. We will tell you whether we are the right fit, what the production will cost, and how long it will take. If the answer is no on our end, we will tell you that too.',
  buttonText = 'Get Started',
  buttonLink = '/contact-us',
  chatButtonText = 'Live Chat',
  awardsTitle = 'Awards & Achievements',
  formTitle = 'Lets Discuss',
  formSubtitle = 'Your Project.',
  formPlaceholders = {
    name: 'Your Name',
    email: 'Email Address',
    phone: 'Phone Number',
    message: 'Message'
  },
  badgeImages = defaultBadges,
  showAwards = true,
  showForm = true
}) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    customQuote: '',
    msg: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const isBusinessProposal = form.service === 'Business Proposal';
  const budgetOptions = isBusinessProposal ? proposalBudgets : standardBudgets;
  const isCustomQuote = form.budget.startsWith('Request a custom quote');
  const customQuoteIsValid = Number(form.customQuote) >= 30000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      service: e.target.value,
      budget: '',
      customQuote: '',
    }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      budget: e.target.value,
      customQuote: '',
    }));
  };

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          estimatedBudget: form.budget,
          customQuote: isCustomQuote ? form.customQuote : '',
          formName: 'Website Contact Form',
          pageUrl: window.location.href,
          // Location enrichment is optional. Avoid client-side third-party IP
          // lookups, which browsers and privacy extensions commonly block.
          ip2loc_ip: 'not fill by user',
          ip2loc_country: 'not fill by user',
          ip2loc_region: 'not fill by user',
          ip2loc_city: 'not fill by user',
        }),
      });
      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send email');
      }

      setResult('Email sent successfully!');
      setForm({ name: '', email: '', phone: '', service: '', budget: '', customQuote: '', msg: '' });
      router.push('/thank-you');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to send email';
      setResult('Error: ' + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${sectionClass} ${styles.section}`} id="footer-form">
      <div className={`container ${styles.container}`}>
		<Image className="next-footer-form-decoration" src="/assets/images/footer-form-bg-shapes.webp" alt="" width={1319} height={691} />
        <div className={`row relative ${styles.contentRow}`}>
          <div className={`col-lg-6 ${styles.intro}`}>
            <h2 
              className="main-heading c-dark"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <span className={`text-black ${styles.description}`}>{description}</span>
            <ul className={`btn-wrap d-flex align-items-center ${styles.actions}`}>
              <li>
                <Link href={buttonLink} className={`btn-size btn-white popup ${styles.whiteButton}`}>{buttonText}</Link>
              </li>
              <li>
                <LiveChatButton className="chat btn-size btn-purple">{chatButtonText}</LiveChatButton>
              </li>
            </ul>
            
            {showAwards && (
              <>
                <h6>{awardsTitle}</h6>
                <ul className={styles.badges}>
                  {badgeImages.map((badge, index) => (
                    <li className={styles.badgeItem} key={index}>
                      <a className={styles.badgeLink} href={badge.link} target="_blank" rel="noopener noreferrer">
                        <Image className={styles.badgeImage} src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} sizes="(max-width: 575px) 28vw, (max-width: 991px) 24vw, 180px" />
                        {badge.label && badge.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          
          {showForm && (
            <div className={`col-lg-6 ${styles.formColumn}`}>
              <div className={`form-wraper ${styles.formWrapper}`}>
                <h5 className={`sm-head text-uppercase ${styles.formEyebrow}`}>{formTitle}</h5>
                <h2 className={`main-heading ${styles.formHeading}`}>{formSubtitle}</h2>
                <form onSubmit={handleSend}>
                  <div className="field-wrap">
                    <input
                      className={styles.fieldControl}
                      type="text"
                      name="name"
                      placeholder={formPlaceholders.name}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-wrap">
                    <input
                      className={styles.fieldControl}
                      type="email"
                      name="email"
                      placeholder={formPlaceholders.email}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-wrap">
                    <input
                      className={styles.fieldControl}
                      type="tel"
                      name="phone"
                      id="phone_input"
                      maxLength={11}
                      placeholder={formPlaceholders.phone}
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                    {/* <span id="phone_error" className="error-message">Invalid Phone Number</span> */}
                  </div>
                  <div className="field-wrap">
                    <select
                      className={styles.fieldControl}
                      name="service"
                      value={form.service}
                      onChange={handleServiceChange}
                      required
                    >
                      <option value="" disabled>Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field-wrap">
                    <select
                      className={styles.fieldControl}
                      name="budget"
                      value={form.budget}
                      onChange={handleBudgetChange}
                      required
                      disabled={!form.service}
                    >
                      <option value="" disabled>Estimated Budget / Scope</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div className={`${styles.customQuoteField} ${isCustomQuote ? styles.customQuoteFieldVisible : ''}`} aria-hidden={!isCustomQuote}>
                    <input
                      className={styles.fieldControl}
                      type="number"
                      name="customQuote"
                      id="custom_quote_input"
                      min="30000"
                      step="1"
                      placeholder="Enter Custom Quote (Min $30,000)"
                      value={form.customQuote}
                      onChange={handleChange}
                      required={isCustomQuote}
                      disabled={!isCustomQuote}
                    />
                    {isCustomQuote && !customQuoteIsValid && (
                      <span className={styles.quoteError} role="alert">Minimum quote amount must be $30,000 or more.</span>
                    )}
                  </div>
                  <div className="field-wrap">
                    <textarea
                      className={styles.fieldControl}
                      name="msg"
                      placeholder={formPlaceholders.message}
                      value={form.msg}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="button-wrap">
                    <button
                      type="submit"
                      className={`btn-size btn-white ${styles.submitButton}`}
                      disabled={loading || (isCustomQuote && !customQuoteIsValid)}
                      style={{ cursor: loading || (isCustomQuote && !customQuoteIsValid) ? 'not-allowed' : 'pointer' }}
                    >
                      {loading ? 'Sending...' : buttonText}
                    </button>
                    {result && (
                      <div style={{ marginTop: '15px', fontWeight: 'bold', color: result === 'Email sent successfully!' ? '#4caf50' : '#f44336' }}>
                        {result}
                      </div>
                    )}
                    <input type="hidden" name="pageurl" value="" />
                    <input type="hidden" name="ip2loc_ip" value="" />
                    <input type="hidden" name="ip2loc_isp" value="" />
                    <input type="hidden" name="ip2loc_org" value="" />
                    <input type="hidden" name="ip2loc_country" value="" />
                    <input type="hidden" name="ip2loc_region" value="" />
                    <input type="hidden" name="ip2loc_city" value="" />
                    <input type="hidden" name="Form_name" value="Popup Form" />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
