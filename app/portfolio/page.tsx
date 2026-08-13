import { createPageMetadata } from '@/lib/seo';
import PortfolioClient from '@/components/PortfolioClient';
import PortfolioReviews from '@/components/PortfolioReviews';
import Faqs from '@/components/Faqs';
import FooterForm from '@/components/FooterForm';

export const metadata = createPageMetadata('/portfolio');

export default function Portfolio() {
  return (
    <>
      <section className="game-portfolio game-banner game-inner-banner d-flex">
        <video playsInline muted loop preload="auto" autoPlay poster="#">
          <source src="/assets/images/portfolio-banner.mp4" type="video/mp4" />
        </video>
        <div className="container align-self-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h5>Our Portfolio</h5>
              <h1>Game Art & Game Development <b>Portfolio</b></h1>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Our Portfolio <b>*</b> Our Portfolio <b>*</b></span>
          <span>Our Portfolio <b>*</b> Our Portfolio <b>*</b></span>
          <span>Our Portfolio <b>*</b> Our Portfolio <b>*</b></span>
          <span>Our Portfolio <b>*</b> Our Portfolio <b>*</b></span>
        </div>
      </section>

      <PortfolioClient />
      
      <PortfolioReviews />
      <Faqs />
      <FooterForm />
    </>
  );
}
