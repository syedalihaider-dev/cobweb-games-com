import Image from 'next/image';
import Link from 'next/link';
import LiveChatButton from './LiveChatButton';
import styles from './CtaOne.module.css';

export default function CtaOne() {
	return (
		<>
			<section className={`cta-sec-n next-image-background-host ${styles.section}`}>
				<Image
					className="next-image-background"
					src="/assets/images/cta1-bg.webp"
					alt=""
					fill
					sizes="100vw"
					aria-hidden="true"
				/>
				<div className="container-fluid">
					<Image
						className="next-cta-shape next-cta-shape--top"
						src="/assets/images/cta-shape-01.webp"
						alt=""
						width={180}
						height={66}
						sizes="180px"
						aria-hidden="true"
					/>
					<Image
						className="next-cta-shape next-cta-shape--side"
						src="/assets/images/cta-shape-02.webp"
						alt=""
						width={28}
						height={306}
						sizes="28px"
						aria-hidden="true"
					/>
					<div className={`row ${styles.row}`}>
						<div className={`col-lg-6 ${styles.content}`}>
							<h4 className="sm-head">Cobweb Studios</h4>
							<h2 className="main-heading">
								Have A Great Idea? <b className="c-green">Let&apos;s Begin!</b>
							</h2>
							<p>Ready to take your game to the next level? Contact us now, and let&apos;s get started!</p>
							<ul className="btn-wrap d-flex align-items-center">
								<li>
									<LiveChatButton className="chat btn-size btn-white">Live Chat</LiveChatButton>
								</li>
								<li>
									<Link href="/contact-us" className="btn-size btn-green popup">Get Started</Link>
								</li>
							</ul>
						</div>
						<div className={`col-lg-6 ${styles.visualColumn}`}>
							<div className={`img-wrap ${styles.visual}`}>
								<video
									className={`lazy ${styles.character}`}
									width={1146}
									height={1005}
									autoPlay
									loop
									muted
									playsInline
									preload="auto"
									aria-hidden="true"
								>
									<source src="/assets/images/cta-char-01.webm" type="video/webm" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
