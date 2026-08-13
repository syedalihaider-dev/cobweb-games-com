import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import Faqs from '@/components/Faqs';
import FooterForm from '@/components/FooterForm';
import ResourcePacksClient from '@/components/ResourcePacksClient';

export const metadata = createPageMetadata('/resource-packs');

export default function ResourcePacks() {
    return (
        <>
            <section className="resource-pack-wrap-1 next-image-background-host"
                >
        <Image className="next-image-background" src="/assets/images/resource-pack/banner.webp" alt="" fill sizes="100vw" />
                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h5>Asset Packs</h5>
                            <h1>Build Epic Worlds. Build Everything.</h1>
                            <p>
                                Witness the power of every pixel, every design, and powerful 3D assets for your games,
                                cinematics, and sandboxes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="marquee about-marquee">
                    <span>resource <b>*</b> resource <b>*</b></span>
                    <span>resource <b>*</b> resource <b>*</b></span>
                    <span>resource <b>*</b> resource <b>*</b></span>
                    <span>resource <b>*</b> resource <b>*</b></span>
                </div>
            </section>
            <section className="resource-pack-wrap-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-1.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Halloween Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Add chills and thrills to your scenes with our hauntingly immersive Halloween
                                                Asset Pack.
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="info">
                                                <ul className="links">
                                                    <li>
                                                        <a target="_blank"
                                                            href="https://www.fab.com/listings/d63d3739-8e82-4fa8-ba7d-71fc19f52913">
                                                            <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank"
                                                            href="https://www.cgtrader.com/3d-models/exterior/landscape/halloween-6b3f8440-76dc-4194-a25d-9859d3182ce7">
                                                            <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank"
                                                            href="https://www.turbosquid.com/3d-models/the-ultimate-halloween-3d-asset-pack-2276969">
                                                            <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.2k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-halloween" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-2.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Christmas Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Bring holiday magic to life with the Christmas Asset Pack and let your audiences
                                                feel the Christmas spirit.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/330491f3-ce62-4741-b72e-065a9e6c76f9">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/living-room/christmas-0e21ba72-5dbf-43a2-9470-2f4890937bff">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/the-festive-christmas-3d-asset-pack-2229695">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        2.1k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-christmas" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-3.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Valentine’s Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Set the mood for romance with this pack & unpack love like never before.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/4cdcd18d-3288-4c56-aa27-e6e5d1408dd9">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/bedroom/valentine-f619c946-9d83-4f85-9b42-43ba20fa585c">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/the-intimate-valentine-day-3d-asset-pack-2296912">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.8k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-valentine" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-4.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Warehouse Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Create the ultimate rugged warehouse scene with our Warehouse Asset Pack.
                                            </div>
                                        </div>


                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/34979214-1101-4a78-b0f9-d3148282264e">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/other/warehouse-88e76950-f9e3-4851-87a5-2004b889d808">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/the-industrial-grade-warehouse-3d-asset-pack-2262737">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.3k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-warehouse" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-6.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Construction Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Build a realistic construction zone with cranes, bulldozers, and scaffolding.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/ec67d81e-a962-4743-aa52-eeac007829ac">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/industrial-exterior/construction-site-bd269fe7-861c-4934-a196-ca910329770e">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/construction-site-3d-asset-pack-2276906">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-construction" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-5.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Shop Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Our shop asset pack includes every essential item, from checkout counters to
                                                aisle displays.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/ec67d81e-a962-4743-aa52-eeac007829ac">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/industrial-exterior/construction-site-bd269fe7-861c-4934-a196-ca910329770e">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/construction-site-3d-asset-pack-2276906">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        2.6k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-shop" className="btn-size btn-green">View Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-7.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Dental Pack
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Elevate your projects with Cobweb&apos;s premium dental resources and bring your
                                                virtual creations to life.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/6916b59f-241b-4fb4-afcc-9d548f174bae">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/interior-office/dental-clinic-569a08a6-db0c-44e9-9807-6a64bb898fd3">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/dental-clinic-3d-asset-pack-2262335">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        4.1k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-dental-clinic" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-8.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Military
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Fortify your gameplay with our Military Base Asset Pack, featuring bunkers,
                                                armored vehicles, and tactical props. Perfect for FPS, TPS, and sandbox games
                                                seeking ultimate realism.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/d9afed62-fd3b-4891-be22-602673e23a95">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/landscape/military-base-f02b5e67-f65a-48c2-9289-f1a36b59214b">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/military-base-3d-asset-pack-2261883">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.9k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-military-base" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-9.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Fantasy
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Step into a mystical dimension with our Fantasy Temple Asset Pack. Bring
                                                entrancing settings to life with ancient pillars, glowing lamps, and deity
                                                statues perfect for RPGs and fantasy adventures.
                                            </div>
                                        </div>


                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/3142236c-f7d9-40a0-9173-5e4fd34fd313">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/landscape/fantasy-temple-9dec9adc-5c11-4d31-b891-effe25a9767d">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/fantasy-temple-3d-asset-pack-2262117">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        2.4k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-fantasy-temple" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-10.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Class
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                From sparkling learning spaces to eerie abandoned apocalyptic classrooms, this
                                                pack delivers it all. Create realistic educational worlds or haunting dystopias
                                                with desks, blackboards, and chilling decay.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/1239ee19-3974-4977-bd98-6203ef302db5">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/other/classroom-51040ace-7a50-42f2-b6fe-9bea45e4233c">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/classroom-3d-asset-pack-2247114">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.2k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-classroom-interior" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-11.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Coffee
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Brew cozy urban vibes with our Coffee Shop Asset Pack. From plush interiors to
                                                detailed barista counters, build the perfect café setting for storytelling or
                                                slice-of-life immersive games.
                                            </div>
                                        </div>
                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/ab0447ad-4b7e-4d77-a6bb-84a86365b66e">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/other/coffee-shop-b764968b-f302-4bdf-b03b-ad32b2cc1416">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/coffee-shop-3d-asset-pack-2298882">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.7k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-coffee-shop" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-12.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Viking
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Transport players to a rugged Nordic past with the Viking Village Asset Pack.
                                                From sturdy wooden huts to towering longhouses, build an immersive medieval
                                                setting steeped in history and legend.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/681c9a85-2905-4b7e-8812-964d19e085d5">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/landscape/viking-village-7b981eb5-fedd-4bf1-b00e-5d89c0c75160">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/viking-village-asset-pack-2299431">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        1.3k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-viking-village" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-13.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Cyber
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Light up your futuristic worlds with our Cyber City Asset Pack. Neon-lit
                                                skyscrapers, holographic billboards, and bustling streets bring a dynamic,
                                                tech-infused vibe to your projects.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/9bdcec98-d0b9-4db6-955a-42d41f254711">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/cityscape/cybercity">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/cyber-city-asset-pack-2301689">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        2.8k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-cyber-city" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-14.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D House
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Design cozy or dramatic home settings with our House Interior Asset Pack. From
                                                modern living rooms to vintage kitchens, create lifelike domestic spaces perfect
                                                for storytelling and AR visualization.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/0f569eb4-431f-48e9-a806-971841da09d3">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/house-interior/house-1ef70601-7aed-4092-877d-fe881e81c7ac">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/house-interior-asset-pack-2302002">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-modern-house-interior."
                                                        className="btn-size btn-green">View Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-15.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Train
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Embark on a high-speed adventure aboard a futuristic 3D train hurtling through
                                                dynamic landscapes. Every asset pack element holds uniqueness and innovation.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/6fc19d5f-0920-47dd-89f8-66a550cf2657">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/vehicle/train/train-fda0fcb9-c27f-45fd-9b0e-34e7cface01e">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/train-asset-pack-2302323">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-3d-train." className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-16.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        3D Hybrid Car
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Take the driver’s seat in this thrilling 3D car adventure game that blends
                                                creativity and exploration. Customize your car to as per your innovation with
                                                our asset packs!
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/33811b8e-7b65-4666-8288-5cf2406b24c1">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/hybrid-3d-car-2302347">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/hybrid-3d-car-2302347">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-3d-car." className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-17.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Viking Character
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Step into the fierce world of 3D Viking warriors with our asset packs,
                                                navigating epic battles and forging alliances. Build your legacy through
                                                creative characters!
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/231959ef-947b-4b42-9f2a-e66f0a68989b">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/character/man/viking-character-pack">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/viking-character-pack-2306159">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-viking-character." className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-18.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Stylize Town
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Create and explore a vibrant, stylized town brimming with our quirky characters
                                                and asset packs.Build and decorate your dream town with us.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/7db9a072-66fb-4d1f-9f5a-13717d1eb89f">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/other/stylize-town">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.turbosquid.com/FullPreview/2303798">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-stylize-town" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-19.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Stylize Interior
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Unleash your creativity by designing stunning interiors in this immersive decor
                                                by cobweb games. From modern minimalism to vintage chic, bring your aesthetic
                                                vision to life.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/8662a2d9-3791-46da-823b-e3c80062ccd4">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/other/stylize-interior">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.turbosquid.com/FullPreview/2303932">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-stylize-interior" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-20.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Cyberpunk Characters
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                Explore high-quality cyberpunk assets, including neon environments and
                                                tech-infused characters, designed to enhance your creative projects with a
                                                gritty, futuristic vibe.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/47d06cb1-9905-4e47-8afc-1ee88a07800b">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/character/sci-fi-character/cyber-punk-characters">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/cyberpunk-characters-2334174">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-cyberpunk-characters" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--<div className="col-lg-4 col-md-6 loadservice">-->
                <!--    <div className="resource-pack-wrap-2-item">-->
                <!--        <div className="resource-pack-wrap-2-item-img">-->
                <!--            <Image className="lazy" src="/assets/images/resource-pack/item-img-21.webp"-- />
                <!--                alt="*" />-->
                <!--        </div>-->
                <!--        <div className="resource-pack-wrap-2-item-content">-->
                <!--            <div className="row">-->
                <!--                <div className="col-lg-12">-->
                <!--                    <div className="row">-->
                <!--                        <div className="col-xl-4 col-lg-5 col-md-4 col-3">-->
                <!--                            <div className="resource-pack-wrap-2-item-profile">-->
                <!--                                <Image className="lazy"-- />
                <!--                                    src="/assets/images/resource-pack/item-profile-1.webp"-->
                <!--                                    alt="*" />-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                        <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">-->
                <!--                            <h5 className="mb-0">-->
                <!--                                Muscle Car-->
                <!--                            </h5>-->
                <!--                            <p className="p-name mb-0">-->
                <!--                                <span>-->
                <!--                                    <Image className="lazy"-- />
                <!--                                        src="/assets/images/resource-pack/item-icon.webp"-->
                <!--                                        alt="*" />-->
                <!--                                </span>-->
                <!--                                Entities-->
                <!--                            </p>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!--                <div className="col-lg-12">-->
                <!--                    <div className="p-parah">-->
                <!--                        Rev up your digital world with the ultimate muscle car asset pack, a roaring tribute to the golden era of American horsepower!  -->
                <!--                    </div>-->
                <!--                </div>-->
                <!--                <div className="col-lg-12">-->
                <!--                    <div className="row align-items-center">-->
                <!--                        <div className="col-lg-4 col-md-5 col-5">-->
                <!--                            <p className="download-parah mb-0">-->
                <!--                                <span>-->
                <!--                                    <Image className="lazy"-- />
                <!--                                        src="/assets/images/resource-pack/download-icon.webp"-->
                <!--                                        alt="*" />-->
                <!--                                </span>-->
                <!--                                3.5k-->
                <!--                            </p>-->
                <!--                        </div>-->
                <!--                        <div className="col-lg-8 col-md-7 text-end col-7">-->
                <!--                            <a href="/portfolio/resource-pack-3d-muscle-car" className="btn-size btn-green">View Assets</a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</div>--> */}
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-22.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Winter Office
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                From modern desk layouts to warm lighting & realistic textures, every detail is
                                                designed to integrate seamlessly into Unreal & Blender workflows.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/bf630abc-cfb9-4c1a-81ae-f6959456dfd9">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/interior-office/christmas-office">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.turbosquid.com/FullPreview/2346674">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-winter-office" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-23.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Winter Bus Station
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                From snow-covered benches to dimly lit street lamps, this pack is built for
                                                open-world games, simulations, and cinematics.
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/a5e97fa7-4607-4d5a-862d-679b7e8e4ade">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/exterior/exterior-public/bus-stand-de2c6dcd-ce74-4e38-9809-15c882b512cf">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-models/3d-model-bus-stand-2345942">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-bus-station" className="btn-size btn-green">View
                                                        Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 loadservice">
                            <div className="resource-pack-wrap-2-item">
                                <div className="resource-pack-wrap-2-item-img">
                                    <Image className="lazy" src="/assets/images/resource-pack/item-img-24.webp"
                                        alt="*" width={360} height={229} />
                                </div>
                                <div className="resource-pack-wrap-2-item-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-4 col-3">
                                                    <div className="resource-pack-wrap-2-item-profile">
                                                        <Image className="lazy"
                                                            src="/assets/images/resource-pack/item-profile-1.webp"
                                                            alt="*" width={165} height={165} />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-8 col-9 align-self-end">
                                                    <h5 className="mb-0">
                                                        Christmas Living Room
                                                    </h5>
                                                    <p className="p-name mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/item-icon.webp"
                                                                alt="*" width={10} height={11} />
                                                        </span>
                                                        Entities
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="p-parah">
                                                From twinkling tree lights to warm fireplace glows, this pack is your
                                                go-to-choice for designing a cozy, immersive, and festive space!
                                            </div>
                                        </div>

                                        <div className="info">
                                            <ul className="links">
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.fab.com/listings/fbdf6faf-bf35-4795-ade8-4d91e59851b8">
                                                        <Image src="/assets/images/info-1.png" alt="" width={50} height={14} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.cgtrader.com/3d-models/interior/living-room/christmas-living-room-0dc946cc-a939-4480-8841-7c1adab7533b">
                                                        <Image src="/assets/images/info-2.png" alt="" width={93} height={18} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank"
                                                        href="https://www.turbosquid.com/3d-model/collections">
                                                        <Image src="/assets/images/info-3.png" alt="" width={105} height={16} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-5 col-5">
                                                    <p className="download-parah mb-0">
                                                        <span>
                                                            <Image className="lazy"
                                                                src="/assets/images/resource-pack/download-icon.webp"
                                                                alt="*" width={16} height={16} />
                                                        </span>
                                                        3.5k
                                                    </p>
                                                </div>
                                                <div className="col-lg-8 col-md-7 text-end col-7">
                                                    <Link href="/portfolio/resource-pack-christmas-living-room"
                                                        className="btn-size btn-green">View Assets</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center pt-5">
                            <a href="#" className="btn-size btn-green load-more d-inline-block">Load More</a>
                        </div>
                    </div>
                </div>
            </section>

            <ResourcePacksClient />
            <Reviews />
            <Faqs />
            <FooterForm />
        </>
    );
}
