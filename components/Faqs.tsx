'use client';

import Image from 'next/image';

import { useState } from 'react';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs?: Faq[];
  footerText?: string;
}

export const defaultFaqs = [
  {
    id: 1,
    question: 'How much budget do I need to build a mobile game?',
    answer: 'Simple casual mobile game: $25,000 to $80,000. Mid-tier mobile title with custom characters and IAP systems: $80,000 to $250,000. Feature-complete with multiplayer and AAA art: $500,000 plus. Scope drives the number.',
  },
  {
    id: 2,
    question: 'How long does it take to build a game from concept to launch?',
    answer: 'Simple mobile game: three to six months. Mid-tier mobile or PC: eight to eighteen months. VR or significant IP development: twelve to thirty-six months. The timeline is determined by the scope and content volume.',
  },
  {
    id: 3,
    question: 'I have a game idea. What is the next step?',
    answer: 'A discovery session that converts the idea into a production brief: what the game is, who it is for, which platform it targets, and what the core loop is. From the brief comes a scope estimate and a milestone plan.',
  },
  {
    id: 4,
    question: 'What platforms do you develop games for?',
    answer: 'Mobile (iOS and Android), PC, VR (Oculus, HTC Vive, PS VR), browser, and web3 platforms. Platform selection is confirmed in discovery based on audience and scope.',
  },
  {
    id: 5,
    question: 'Do you provide both game development and game art services?',
    answer: 'Yes. Both under one roof. Studios can engage for art only, development only, or both. One point of contact and one pipeline regardless of scope.',
  },
  {
    id: 6,
    question: 'What game engines do you use for development?',
    answer: 'Unity and Unreal Engine primarily. Godot for specific project types. We recommend the engine that fits the project, not the one we are most comfortable in.',
  },
  {
    id: 7,
    question: 'Can you develop multiplayer and online games?',
    answer: 'Yes. Multiplayer architecture, online infrastructure, matchmaking, and live ops back-end. Networking architecture is a week-one design decision, not a week-twenty addition.',
  },
  {
    id: 8,
    question: 'How involved will I be during the development process?',
    answer: 'As involved as the project requires. Milestone-based reviews with documented feedback. Creative decisions that affect game direction require client sign-off. Technical decisions within the established brief we handle independently.',
  },
  {
    id: 9,
    question: 'What information do you need before providing a quote?',
    answer: 'Game concept, target platform, core feature list, reference games, target audience, and timeline requirements. The more complete the brief, the more accurate the estimate.',
  },
  {
    id: 10,
    question: 'Can you take over an existing game project?',
    answer: 'Yes, after a technical audit of the existing codebase and art pipeline. We provide an honest assessment of what exists and what it takes to ship before agreeing to the scope.',
  },
  {
    id: 11,
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes. Post-launch support, live ops content updates, bug fixes, and platform recertification are available as a continuing engagement. Structure it before launch, not after.',
  },
  {
    id: 12,
    question: 'How do I choose the right game development company?',
    answer: 'Ask to see shipped games, not work in progress. Ask how they handle scope changes. Ask who your project manager will be and whether they have experience in your category. A studio that answers these specifically is ready to produce your game.',
  },
  {
    id: 13,
    question: 'How do I know if my game idea is technically feasible?',
    answer: 'The discovery session answers this. If the concept is not feasible at the stated budget, we say so and propose what is achievable. A project that fails mid-production because feasibility was assumed is expensive for everyone.',
  },
  {
    id: 14,
    question: 'How do you protect my game idea and intellectual property?',
    answer: 'NDAs are signed before any project information is shared. Full IP ownership of all assets and code produced transfers to the client on final payment. We retain no rights to reference or use client work.',
  },
  {
    id: 15,
    question: 'What happens after my game launches?',
    answer: 'The launch is the start of the live phase. Player feedback arrives, platform requirements change, and content updates retain the audience. We offer structured post-launch support and ongoing development retainers.',
  },
];

export default function Faqs({ faqs = defaultFaqs, footerText }: FaqsProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <section className="faq-sec">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <h3 className="sm-head">FAQ&apos;s</h3>
              <h2 className="main-heading">Frequently Asked <b className="c-green">Questions</b></h2>
              <div className="accordion-wrapper">
                <div className="accordion">
                  {faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                      <div className="accordion-item" key={faq.id}>
                        <button
                          id={`accordion-button-${faq.id}`}
                          aria-expanded={isOpen}
                          onClick={() => toggle(faq.id)}
                        >
                          <span className="accordion-title">{faq.question}</span>
                          <span className="icon" aria-hidden="true"></span>
                        </button>
                        <div className="accordion-content" style={{ display: isOpen ? 'block' : 'none' }}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {footerText && (
                <p className="faq-footer-text"><strong>{footerText}</strong></p>
              )}
            </div>
            <div className="col-lg-6">
              <div className="img-wrap sticky-image">
                <Image className="img-01 lazy" data-src="/assets/images/faq-img-01.webp" alt="*" src="/assets/images/faq-img-01.webp" width={513} height={663} />
                <Image className="img-02 lazy" data-src="/assets/images/faq-img-02.webp" alt="*" src="/assets/images/faq-img-02.webp" width={451} height={576} />
                <Image className="img-03 lazy" data-src="/assets/images/fire.gif" alt="*" src="/assets/images/fire.gif" width={292} height={296} unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .accordion-wrapper {
          max-height: 500px;
          overflow-y: auto;
          padding-right: 5px;
        }

        .accordion-wrapper::-webkit-scrollbar {
          width: 4px;
        }

        .accordion-wrapper::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .accordion-wrapper::-webkit-scrollbar-thumb {
          background: #00ff88;
          border-radius: 10px;
        }

        .accordion-wrapper::-webkit-scrollbar-thumb:hover {
          background: #00cc66;
        }

        .sticky-image {
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }

        @media (max-width: 991px) {
          .accordion-wrapper {
            max-height: 400px;
          }
          
          .sticky-image {
            position: relative;
            top: 0;
            margin-top: 30px;
          }
        }
      `}</style>
    </>
  );
}
