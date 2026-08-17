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
    title: 'Homepage | Cob Web',
    description: 'Homepage',
  },
  '/2d-animation': {
    title: '2D Animation | Cob Web',
    description: '2D Animation',
  },
  '/2d-art': {
    title: '2D Game Art Development | Cob Web',
    description: '2D Game Art Development',
  },
  '/3d-animation': {
    title: '3D Animation | Cob Web',
    description: '3D Animation',
  },
  '/3d-art': {
    title: '3D Art | Cob Web',
    description: '3D Art',
  },
  '/3d-character-modeling': {
    title: '3D Character Modeling Design | Cob Web',
    description: '3D Character Modeling Design',
  },
  '/3d-environment-design': {
    title: '3D Environment Design | Cob Web',
    description: '3D Environment Design',
  },
  '/3d-game-development': {
    title: '3D Game Development | Cob Web',
    description: '3D Game Development',
  },
  '/3d-game-modeling': {
    title: '3D Game Modeling | Cob Web',
    description: '3D Game Modeling',
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
    title: 'Character Design | Cob Web',
    description: 'Character Design',
  },
  '/contact-us': {
    title: 'Contact Us | Cob Web',
    description: 'Contact Us',
  },
  '/environment-design': {
    title: 'Environment Design | Cob Web',
    description: 'Environment Design',
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
    title: 'Game Development | Cob Web',
    description: 'Game Development',
  },
  '/game-level-design': {
    title: 'Game Level Design | Cob Web',
    description: 'Game Level Design',
  },
  '/game-prototyping': {
    title: 'Game Prototyping | Cob Web',
    description: 'Game Prototyping',
  },
  '/game-testing': {
    title: 'Game Testing Services | Cob Web',
    description: 'Game Testing Services',
  },
  '/game-ui-ux-design': {
    title: 'UI/UX Design Services | Cob Web',
    description: 'UI/UX Design Services',
  },
  '/mobile-game-development': {
    title: 'Mobile Game Development | Cob Web',
    description: 'Mobile Game Development',
  },
  '/our-process': {
    title: 'Our process | Cob Web',
    description: 'Our process',
  },
  '/play-to-earn-game': {
    title: 'Play To Earn Game Development | Cob Web',
    description: 'Play To Earn Game Development',
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
    title: 'Unity Game Development | Cob Web',
    description: 'Unity Game Development',
  },
  '/unreal-engine-game-development': {
    title: 'Unreal Engine Game Development | Cob Web',
    description: 'Unreal Engine Game Development',
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
