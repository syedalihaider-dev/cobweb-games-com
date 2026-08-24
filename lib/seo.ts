import type { Metadata } from 'next';

export const SITE_NAME = 'Cobweb Games';
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.cobwebgames.com').replace(/\/$/, '');
export const DEFAULT_DESCRIPTION =
  'Cobweb Games is a USA-based game development and game art studio delivering Unity, Unreal Engine, 2D, 3D, animation, QA, UI/UX, and full-cycle production services.';
export const DEFAULT_OG_IMAGE = '/assets/images/main-banner.webp';
export const LEGACY_SOCIAL_TITLE = 'Cobweb Games | Play Free Online Games Anytime';
export const LEGACY_SOCIAL_DESCRIPTION =
  'Play exciting free online games at Cobweb Games. Discover action, puzzle, arcade, racing, strategy, and many more games to enjoy anytime.';
export const LEGACY_SOCIAL_IMAGE = '/assets/images/logo.svg';

export const LEGACY_RESOURCE_PACK_SEO: Record<string, { title: string; description: string }> = {
  'resource-pack-3d-car': {
    title: '3D Car Adventure with Speed, Strategy & Style | Cobweb Games',
    description: 'Hit the road in this exhilarating car adventure! Customize your ride, conquer terrains, and race to victory with speed and strategy.',
  },
  'resource-pack-shop': {
    title: 'Stylish Shop Asset Pack – Design Vibrant Game Stores with Cobweb Games',
    description: 'Stylish Shop Asset Pack – Design Vibrant Game Stores with Cobweb Games',
  },
  'resource-pack-christmas': {
    title: 'Festive Christmas Asset Pack – Enhance Your Games with Cobweb Games',
    description: 'Festive Christmas Asset Pack – Enhance Your Games with Cobweb Games',
  },
  'resource-pack-winter-office': {
    title: 'Winter Office Asset Pack | Cozy 3D Office Environment',
    description: 'Create a warm and immersive winter-themed office with this 3D asset pack. Includes seasonal décor, cozy lighting, and snow-covered details.',
  },
  'resource-pack-coffee-shop': {
    title: 'Cozy Coffee Shop Asset Packs | Cobweb Games',
    description: 'Craft cozy and stylish café scenes with the Coffee Shop Resource Pack from Cobweb Games. Great for life simulation and urban-themed games.',
  },
  'resource-pack-halloween': {
    title: 'Spooktacular Halloween Asset Pack – Game Assets by Cobweb Games',
    description: 'About Us',
  },
  'resource-pack-military-base': {
    title: 'Build Realistic Military Bases | Cobweb Games',
    description: 'Create realistic and immersive military bases with Cobweb Games',
  },
  'resource-pack-modern-house-interior': {
    title: 'Modern House Interior Resource Pack For Sleek Home Designs | Cobweb Games',
    description: 'Design sleek and contemporary homes with Cobweb Games',
  },
  'resource-pack-cyberpunk-characters': {
    title: 'Cyberpunk Asset Pack of Futuristic Characters | Cobweb Games',
    description: 'Elevate your projects with a stunning cyberpunk asset pack featuring neon-drenched cityscapes and detailed futuristic characters. Perfect for games, art, and design.',
  },
  'resource-pack-classroom-interior': {
    title: 'Detailed School Settings with Classroom Interior Resource Pack | Cobweb Games',
    description: 'Design authentic classroom settings with Cobweb Games',
  },
  'resource-pack-stylize-interior': {
    title: 'Create Stunning Spaces | Cobweb Games',
    description: 'Design breathtaking interiors in this immersive asset packs. Showcase your creativity and get exciting design from us!',
  },
  'resource-pack-bus-station': {
    title: 'Bus Station Asset Pack | Realistic 3D Public Transport Assets',
    description: 'Build a lifelike bus station with this 3D asset pack featuring benches, shelters, ticket machines, and urban props for detailed environments.',
  },
  'resource-pack-viking-character': {
    title: 'Viking Saga Game and Build Your Legacy | Cobweb Games',
    description: 'Step into the world of Vikings! Engage in epic battles, forge alliances, and conquer mythical quests to create your own legendary Viking legacy.',
  },
  'resource-pack-christmas-living-room': {
    title: 'Christmas Living Room 3D | Festive Holiday Interior Pack',
    description: 'Design the perfect Christmas scene with a cozy 3D living room, featuring a decorated tree, stockings, gifts, and warm holiday lighting.',
  },
  'resource-pack-3d-train': {
    title: 'Train Adventure Games | Cobweb Games',
    description: 'Embark on a thrilling train adventure! Solve mysteries, outsmart rivals, and uncover treasures as you journey through dynamic landscapes in this high-speed strategy game.',
  },
  'resource-pack-3d-muscle-car': {
    title: '3D Muscle Car Model | High-Quality Classic Car Asset',
    description: 'Add a sleek and powerful American muscle car to your 3D projects. Featuring detailed textures, realistic curves, and a high-performance design.',
  },
  'resource-pack-cyber-city': {
    title: 'Futuristic Cityscapes by Our Platform | Cobweb Games',
    description: 'Build futuristic cityscapes with the Cyber City Resource Pack by Cobweb Games. Ideal for sci-fi and action-packed game environments.',
  },
  'resource-pack-construction': {
    title: 'Ultimate Construction Asset Pack – Build Your Game with Cobweb Games',
    description: 'Ultimate Construction Asset Pack – Build Your Game with Cobweb Games',
  },
  'resource-pack-viking-village': {
    title: 'Viking Village Resource Pack | Cobweb Games',
    description: 'Transport players to epic Norse landscapes with Cobweb Games',
  },
  'resource-pack-fantasy-temple': {
    title: 'Fantasy Temple Resource Pack | Cobweb Games',
    description: 'Build enchanting and mystical worlds with the Fantasy Temple Resource Pack by Cobweb Games. Ideal for fantasy and adventure settings.',
  },
  'resource-pack-dental-clinic': {
    title: 'Spooktacular Dental Clinic Asset Pack – Game Assets by Cobweb Games',
    description: 'Spooktacular Dental Clinic Asset Pack – Game Assets by Cobweb Games',
  },
  'resource-pack-stylize-town': {
    title: 'Create Your Dream World | Cobweb Games',
    description: 'Build, decorate, and explore a vibrant town! Shape its evolution and uncover stories with our asset packs',
  },
  'resource-pack-valentine': {
    title: 'Romantic Valentine’s Asset Pack – Game Assets by Cobweb Games',
    description: 'Romantic Valentine’s Asset Pack – Game Assets by Cobweb Games',
  },
  'resource-pack-warehouse': {
    title: 'Detailed Warehouse Asset Pack – Realistic Game Assets by Cobweb Games',
    description: 'Detailed Warehouse Asset Pack – Realistic Game Assets by Cobweb Games',
  },
};

export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Game Development and Art Studio in the USA | Cobweb Games',
    description: 'Cobweb Games is a USA-based game development company and art studio delivering full-cycle game development, 3D character art, environments, and animation for indie and AA studios.',
  },
  '/2d-animation': {
    title: '2D Animation | Cob Web',
    description: '2D Animation',
  },
  '/2d-art': {
    title: '2D Game Art Studio for High-Quality Game Assets & Design | Cobweb Games',
    description: 'Need a 2D game art studio that delivers production-ready assets? Cobweb Games builds custom 2D game art for mobile, PC, and VR. Characters, environments, UI, animation.',
  },
  '/3d-animation': {
    title: '3D Animation | Cob Web',
    description: '3D Animation',
  },
  '/3d-art': {
    title: ' 3D Game Art Studio for Custom Models, Characters & Environments | Cobweb Games',
    description: 'Need a 3D game art studio that delivers game-ready assets without the topology problems? Cobweb Games builds 3D characters, environments, and hard surface models for Unity and Unreal.',
  },
  '/3d-character-modeling': {
    title: 'Professional 3D Character Modeling Services | Cobweb Games',
    description: 'Need 3D character modeling that delivers animation-ready characters without the retopology rework? Cobweb Games builds game-ready characters in ZBrush, Maya, and Blender.',
  },
  '/3d-environment-design': {
    title: '3D Environment Design Services for Immersive Game Worlds | Cobweb Games',
    description: 'Need a 3D environment design without the frame budget disaster? Cobweb Games builds performance-first environments for Unity and Unreal Engine across every genre and platform.',
  },
  '/3d-game-development': {
    title: '3D Game Development Services | Cobweb Games',
    description: 'Need a 3D game development company that ships games, not just milestones? Cobweb Games provides full-cycle 3D game development for PC, mobile, and console across Unity and Unreal Engine.',
  },
  '/3d-game-modeling': {
    title: '3D Game Modeling Services for High-Quality Game Assets | Cobweb ',
    description: 'Need 3D game modeling that ships game-ready, not portfolio-ready? Cobweb Games delivers custom 3D game models, characters, environments, and props for any platform or engine.',
  },
  '/3d-illustration-services': {
    title: '3D Illustration Services | Cob Web',
    description: '3D Illustration Services',
  },
  '/about-us': {
    title: 'About Us | Cob Web',
    description: 'About Us',
  },
  '/character-design': {
    title: ' Character Design Services for Games',
    description: 'Need character design that survives the animation rig and holds up across a 60-hour campaign? Cobweb Games builds game characters from concept through production-ready delivery.',
  },
  '/contact-us': {
    title: 'Contact Us | Cob Web',
    description: 'Contact Us',
  },
  '/environment-design': {
    title: 'Environment Design Services for Games & Interactive Worlds | Cobweb Games',
    description: ' Need an environment design that makes players believe in the world before they enter it? Cobweb Games builds game environment concept art, visual development, and world-building documentation for any genre.',
  },
  '/game-animation': {
    title: 'Game Animation | Cob Web',
    description: 'Game Animation',
  },
  '/game-art': {
    title: 'Game Art | Cob Web',
    description: 'Game Art',
  },
  '/game-development': {
    title: 'Game Development Company USA | Full Cycle Studio | Cobweb Games',
    description: 'Cobweb Games is a full-cycle game development company in the USA delivering end-to-end game development services. Hire dedicated game developers who ship titles that draw players.',
  },
  '/game-level-design': {
    title: 'Game Level Design | Cob Web',
    description: 'Game Level Design',
  },
  '/game-prototyping': {
    title: ' Game Prototyping Services for Faster Game Validation | Cobweb Games',
    description: 'Game prototyping services that answer whether your game is fun before you spend a production budget finding out. Cobweb Games builds playable prototypes, vertical slices, and MVPs for studios, publishers, and startups.',
  },
  '/game-testing': {
    title: 'Game Testing Services by Gamers | Cobweb Games ',
    description: 'Game testing services run by people who play games, not just run scripts. Cobweb Games provides QA across mobile, PC, console, AR/VR, and every platform your game ships on.',
  },
  '/game-ui-ux-design': {
    title: ' Game UI/UX Design Services Geared Toward Your Players | Cobweb Games ',
    description: 'Game UI/UX design that serves gameplay rather than decorating it. Cobweb Games builds wireframes, mobile UI, video game UI, and UX systems for PC, VR, and mobile.',
  },
  '/mobile-game-development': {
    title: 'Mobile Game Development Services for iOS & Android | Cobweb Games',
    description: ' Mobile game development services calibrated for the devices players actually own. Cobweb Games builds, optimizes, ships, and maintains iOS and Android games that survive contact with real hardware.',
  },
  '/our-process': {
    title: 'Our process | Cob Web',
    description: 'Our process',
  },
  '/play-to-earn-game': {
    title: 'Play to Earn Game Development Services | Cobweb Games',
    description: 'P2E game development services with the tokenomics discipline that separates functional Web3 games from vaporware. Cobweb Games builds NFT games, GameFi platforms, and blockchain economies that survive their own success.',
  },
  '/portfolio': {
    title: 'Portfolio | Cob Web',
    description: 'Portfolio',
  },
  '/resource-packs': {
    title: 'High-Quality Game Asset Packs – Explore Cobweb\'s Premium Collection',
    description: 'High-Quality Game Asset Packs – Explore Cobweb\'s Premium Collection',
  },
  '/term-and-condition': {
    title: 'Terms & Conditions | Cobweb Games',
    description: 'Read the terms and conditions for Cobweb Games services.',
  },
  '/ui-ux-design': {
    title: 'UI/UX Design Services | Cob Web',
    description: 'UI/UX Design Services',
  },
  '/unity-game-development': {
    title: ' Unity Game Development Company | Cobweb Games  ',
    description: ' Unity game development company that ships across ten platforms from one codebase. Cobweb Games builds 2D, 3D, multiplayer, and AR/VR Unity games with full source code ownership.',
  },
  '/unreal-engine-game-development': {
    title: 'Unreal Engine Game Development Company | Cobweb Games ',
    description: 'Unreal Engine game development company for teams that want Nanite and Lumen doing real work, not demo-reel decoration. UE5 development, multiplayer, porting, and dedicated Unreal developers.',
  },
};

export const STATIC_ROUTES = Object.keys(PAGE_SEO);

export function createPageMetadata(pathname: string): Metadata {
  const page = PAGE_SEO[pathname] ?? PAGE_SEO['/'];

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: pathname },
  };
}
