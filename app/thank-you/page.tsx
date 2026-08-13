import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Thank You | Cob Web Games',
  description: 'Thank you for contacting us. We will get back to you shortly.',
};

export default function ThankYou() {
  return (
    <section 
      className="contact-banner d-flex next-image-background-host align-items-center justify-content-center"
      style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden', padding: '100px 0' }}
    >
      <Image 
        className="next-image-background" 
        src="/assets/images/contact-banner.webp" 
        alt="" 
        fill 
        sizes="100vw" 
        style={{ objectFit: 'cover' }}
        fetchPriority="high" 
        loading="eager" 
      />
      <div className="container text-center" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="content" 
              style={{
                background: 'rgba(20, 10, 35, 0.75)',
                backdropFilter: 'blur(10px)',
                padding: '50px 30px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div 
                style={{ 
                  fontSize: '80px', 
                  color: '#28a745', 
                  marginBottom: '20px',
                  animation: 'pulse 2s infinite' 
                }}
              >
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <h1 
                className="main-heading" 
                style={{ 
                  color: '#ffffff', 
                  fontSize: '48px', 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '20px'
                }}
              >
                Thank You!
              </h1>
              <p 
                style={{ 
                  color: '#dddddd', 
                  fontSize: '18px', 
                  lineHeight: '1.6', 
                  marginBottom: '30px' 
                }}
              >
                Your submission has been received successfully. Our game development experts are reviewing your requirements and will reach out to you shortly.
              </p>
              <div className="btn-wrap d-flex align-items-center justify-content-center">
                <Link href="/" className="btn-size btn-purple">
                  Back To Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
