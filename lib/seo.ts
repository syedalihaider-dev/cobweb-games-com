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
    title: '2D Game Animation Services | Cobweb Games',
    description: 'Hire a 2D game animation studio for fluid character movement, combat cycles, sprite animation, effects, and engine-ready assets for mobile, PC, and console.',
  },
  '/2d-art': {
    title: '2D Game Art Studio & Outsourcing Services | Cobweb Games',
    description: 'Cobweb Games creates production-ready 2D game art, including characters, environments, UI, props, and animation for mobile, PC, console, and VR titles.',
  },
  '/3d-animation': {
    title: '3D Game Animation Services | Cobweb Games',
    description: 'Get engine-ready 3D game animation for characters, creatures, combat, cinematics, and gameplay cycles, built for Unity, Unreal Engine, PC, mobile, and console.',
  },
  '/3d-art': {
    title: '3D Game Art Studio & Outsourcing Services | Cobweb Games',
    description: 'Cobweb Games delivers game-ready 3D characters, environments, props, and hard-surface models with clean topology and optimized assets for Unity and Unreal.',
  },
  '/3d-character-modeling': {
    title: 'Professional 3D Character Modeling Services | Cobweb Games',
    description: 'Cobweb Games creates animation-ready 3D characters with clean topology, UVs, textures, and rig-friendly geometry for games built in Unity and Unreal Engine.',
  },
  '/3d-environment-design': {
    title: '3D Environment Design Services for Games | Cobweb Games',
    description: 'Build immersive, optimized 3D game environments for Unity and Unreal with environment modeling, texturing, lighting, LODs, and performance-ready delivery.',
  },
  '/3d-game-development': {
    title: '3D Game Development Services | Cobweb Games',
    description: 'Cobweb Games provides full-cycle 3D game development for mobile, PC, and console, from concept and prototyping through Unity or Unreal production and launch.',
  },
  '/3d-game-modeling': {
    title: '3D Game Modeling Services & Custom Assets | Cobweb Games',
    description: 'Get custom 3D game models, characters, props, vehicles, and environments with optimized topology, UVs, and textures for Unity, Unreal, mobile, PC, and console.',
  },
  '/3d-illustration-services': {
    title: '3D Illustration Services for Games | Cobweb Games',
    description: 'Create polished 3D illustrations for game marketing, key art, pitch decks, store pages, and campaigns, with custom characters, environments, lighting, and rendering.',
  },
  '/about-us': {
    title: 'About Cobweb Games | Game Development & Art Studio',
    description: 'Meet Cobweb Games, a US game development and art studio helping indie and AA teams build games, characters, environments, animation, and production-ready assets.',
  },
  '/character-design': {
    title: 'Game Character Design Services | Cobweb Games',
    description: 'Design memorable, production-ready game characters from concept art and expression sheets to 2D or 3D assets prepared for rigging, animation, and real-time engines.',
  },
  '/contact-us': {
    title: 'Contact Cobweb Games | Start Your Game Project',
    description: 'Contact Cobweb Games to discuss game development, art, animation, characters, environments, or asset production. Share your scope, platform, budget, and timeline.',
  },
  '/environment-design': {
    title: 'Game Environment Design Services | Cobweb Games',
    description: 'Create distinctive game worlds with environment concept art, visual development, world-building, level mood, and production-ready design documentation for any genre.',
  },
  '/game-animation': {
    title: 'Game Animation Services | 2D and 3D Studio | Cobweb Games',
    description: 'Hire a game animation studio for engine-ready 2D and 3D character motion, gameplay cycles, cinematics, VFX, and mocap cleanup across Unity and Unreal projects.',
  },
  '/game-art': {
    title: 'Game Art Outsourcing Studio & Services | Cobweb Games',
    description: 'Outsource 2D and 3D game art to Cobweb Games for concept art, characters, environments, props, UI, animation, and engine-ready assets built for your pipeline.',
  },
  '/game-development': {
    title: 'Game Development Company in the USA | Cobweb Games',
    description: 'Cobweb Games is a full-cycle game development company building mobile, PC, console, VR, Unity, and Unreal titles from concept and prototyping through launch.',
  },
  '/game-level-design': {
    title: 'Game Level Design Services | Cobweb Games',
    description: 'Create engaging game levels with blockouts, encounter design, pacing, environment art, balancing, and engine-ready implementation for mobile, PC, console, and VR.',
  },
  '/game-prototyping': {
    title: 'Game Prototyping Services & Playable MVPs | Cobweb Games',
    description: 'Validate your core game loop with a playable prototype, vertical slice, or MVP built to test mechanics, technical feasibility, player response, budget, and scope.',
  },
  '/game-testing': {
    title: 'Game Testing Services by Gamers | Cobweb Games',
    description: 'Find bugs before players do with functional, compatibility, performance, usability, and certification game testing across mobile, PC, console, web, AR, and VR.',
  },
  '/game-ui-ux-design': {
    title: 'Game UI/UX Design Services for Players | Cobweb Games',
    description: 'Design clear, responsive game interfaces with HUDs, menus, wireframes, interaction flows, and usability testing for mobile, PC, console, and VR players.',
  },
  '/mobile-game-development': {
    title: 'Mobile Game Development Services | Cobweb Games',
    description: 'Build, test, launch, and maintain high-performing iOS and Android games with full-cycle mobile game development, Unity or Unreal production, and device optimization.',
  },
  '/our-process': {
    title: 'Our Game Development Process | Cobweb Games',
    description: 'See how Cobweb Games moves projects from discovery and concept through art, prototyping, development, testing, launch, and post-release support.',
  },
  '/play-to-earn-game': {
    title: 'Play to Earn Game Development Services | Cobweb Games',
    description: 'Build sustainable play-to-earn games with GameFi systems, tokenomics, NFTs, smart contracts, wallets, and scalable blockchain architecture designed around gameplay.',
  },
  '/portfolio': {
    title: 'Game Development, Art & Animation Portfolio | Cobweb Games',
    description: 'Explore Cobweb Games projects across full-cycle development, 2D and 3D art, characters, environments, animation, UI/UX, and production-ready game assets.',
  },
  '/resource-packs': {
    title: '3D Game Asset Packs & Environment Kits | Cobweb Games',
    description: 'Browse 3D game asset packs for characters, vehicles, interiors, cities, seasonal scenes, and environments designed for fast integration into real-time projects.',
  },
  '/term-and-condition': {
    title: 'Terms & Conditions | Cobweb Games',
    description: 'Read the terms and conditions for Cobweb Games services.',
  },
  '/ui-ux-design': {
    title: 'Game Interface Design Services | Cobweb Games',
    description: 'Create intuitive game interfaces, HUDs, menus, onboarding flows, and responsive screen systems designed around player behavior across mobile, PC, console, and VR.',
  },
  '/unity-game-development': {
    title: 'Unity Game Development Company | Cobweb Games',
    description: 'Hire Unity developers for 2D, 3D, multiplayer, mobile, PC, console, AR, and VR games with cross-platform builds, optimization, and full source code ownership.',
  },
  '/unreal-engine-game-development': {
    title: 'Unreal Engine Game Development Company | Cobweb Games',
    description: 'Hire Unreal Engine developers for UE5 games, multiplayer systems, porting, optimization, Lumen, Nanite, and full-cycle production across PC, console, mobile, and VR.',
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
