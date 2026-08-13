import { SITE_URL } from '@/lib/seo';

const homeUrl = `${SITE_URL}/`;

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Cobweb Games',
    alternateName: 'Cobweb Games Studio',
    url: homeUrl,
    logo: `${SITE_URL}/assets/images/logo.svg`,
    image: `${SITE_URL}/assets/images/logo.svg`,
    description:
      'Cobweb Games is a San Francisco-based game development company founded in 2017. The company specializes in end-to-end game development, game art, game animation, AR/VR experiences, Unreal Engine development, and mobile game development for clients worldwide.',
    telephone: '+1-855-773-1064',
    email: 'support@cobwebgames.com',
    priceRange: '$$-$$$',
    foundingDate: '2017',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '580 California Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94104',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.787116,
      longitude: -122.3976582,
    },
    openingHours: 'Mo-Fr 09:30-18:00',
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: [
      'Game Development',
      'Game Art',
      'Game Animation',
      'Mobile Game Development',
      'AR Development',
      'VR Development',
      'Unreal Engine Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Game Development Services',
      itemListElement: [
        'Game Development',
        'Game Art',
        'Game Animation',
        'AR Development',
        'VR Development',
        'Unreal Engine Development',
        'Mobile Game Development',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-855-773-1064',
      contactType: 'customer support',
      email: 'support@cobwebgames.com',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/people/Cobweb-Games/61563748882713/',
      'https://www.linkedin.com/company/cobweb-games1',
      'https://www.youtube.com/@cobweb-games',
      'https://www.instagram.com/cobweb.games/',
      'https://www.trustpilot.com/review/cobwebgames.co',
      'https://clutch.co/profile/cobweb-games',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': homeUrl,
    url: homeUrl,
    name: 'Home - Cobweb Games',
    datePublished: '2017-01-01T00:00:00+00:00',
    dateModified: '2026-07-09T00:00:00+00:00',
    description:
      'Cobweb Games is a San Francisco-based game development company specializing in end-to-end game development, game art, game animation, AR/VR development, Unreal Engine development, and mobile game development.',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: homeUrl,
      name: 'Cobweb Games',
      description: 'Game Development Company',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${homeUrl}?s={search_term_string}`,
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          valueRequired: 'http://schema.org/True',
          valueName: 'search_term_string',
        },
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      ['Home', ''],
      ['About Us', '/about-us'],
      ['Game Development', '/game-development'],
      ['Game Art', '/game-art'],
      ['Game Animation', '/game-animation'],
      ['Contact Us', '/contact-us'],
    ].map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: `${SITE_URL}${path || '/'}`,
    })),
  },
];

export default function StructuredData() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          id={`cobweb-games-schema-${index + 1}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
