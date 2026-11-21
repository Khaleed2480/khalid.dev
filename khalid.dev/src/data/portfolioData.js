export const SITE_CONFIG = {
  brand: 'khalid.dev',
  name: 'Khalid',
  role: 'Frontend Developer',
  availability: 'Available for opportunities',
  heroHeadlineStart: 'Building Digital Experiences That Make An',
  heroHeadlineGradient: 'Impact.',
  heroSubheadline:
    "I'm a Frontend Developer who transforms ideas and designs into clean, responsive, and high-performing digital products.",
  heroImage: '/hero.png',
  aboutImage: '/about.png',
  projectsCount: '4+',
 email: 'jimohkhalid70@gmail.com',
  location: 'Nigeria (UTC+1)',
  resumeLabel: 'Download Resume',
  resumeUrl: 'mailto:jimohkhalid70@gmail.com?subject=Resume%20Request',
  socials: [
    {
      label: 'WhatsApp',
      type: 'whatsapp',
      url: 'https://wa.me/2349158722146?text=Hi%20Khalid%2C%20I%20visited%20khalid.dev%20and%20would%20love%20to%20connect.',
    },
    { label: 'LinkedIn', type: 'linkedin', url: 'https://linkedin.com' },
    { label: 'GitHub', type: 'github', url: 'https://github.com' },
  ],
};

export const TECH_STACK = [
  { name: 'React', color: '#38BDF8' },
  { name: 'JavaScript', color: '#FACC15' },
  { name: 'TypeScript', color: '#60A5FA' },
  { name: 'HTML5', color: '#FB923C' },
  { name: 'CSS3', color: '#38BDF8' },
  { name: 'Tailwind CSS', color: '#2DD4BF' },
  { name: 'Next.js', color: '#E5E7EB' },
  { name: 'Bootstrap', color: '#A78BFA' },
  { name: 'Git', color: '#F87171' },
  { name: 'GitHub', color: '#E5E7EB' },
];

export const ABOUT_INFO = {
  eyebrow: 'About Me',
  headlineStart: 'Turning Ideas Into',
  headlineGradient: 'Impactful',
  headlineEnd: 'Digital Products.',
  bio: "I'm passionate about building accessible, responsive, and intuitive web experiences. I enjoy translating creative UI concepts into fast, maintainable frontend code that feels natural on every screen.",
  pillars: [
    'Clean & Maintainable Code',
    'Responsive Design',
    'Attention to Detail',
    'User-Focused Interfaces',
    'Continuous Learning',
  ],
};

// Replace these 4 objects anytime with your real project names, images, and links
export const PROJECTS = [
  {
    id: 'broken-brown',
    number: '01',
    title: 'Broken Brown (B-H-R)',
    category: 'Fashion / E-Commerce',
    description:
      'Modern streetwear storefront featuring outerwear, headwear, tees, and an editorial lookbook.',
    image: '/bhr.png',
    liveUrl: 'https://b-h-r.vercel.app',
    repoUrl: 'https://github.com/Khaleed2480/B-H-R.git',
    stack: ['React', 'CSS3', 'Responsive UI'],
    overview:
      'A dark, editorial fashion e-commerce experience built for Broken Brown (B-H-R), showcasing outerwear and essentials with clean category navigation and a slide-out shopping bag.',
    highlights: [
      'Clean multi-category filtering (Headwear, Outerwear, Tees, Accessories)',
      'Bold editorial hero layout with subtle product card framing',
      'Mobile-first shopping flow and crisp typography',
    ],
  },
  {
    id: 'travora',
    number: '02',
    title: 'Travora',
    category: 'Travel & Tourism',
    description:
      'Curated travel discovery platform for boutique stays, local tour guides, and custom itineraries.',
    image: '/travora.png',
    liveUrl: 'https://travora-lime.vercel.app', // verify full Vercel URL
    repoUrl: 'https://github.com/Khaleed2480/Travora.git',
    stack: ['React', 'JavaScript', 'CSS Grid'],
    overview:
      'An atmospheric travel planning interface helping travelers explore curated destinations like the Amalfi Coast, Kyoto, Maldives, and Santorini with guest browsing and itinerary flows.',
    highlights: [
      'Destination cards with location previews and pricing highlights',
      'Clean onboarding split between guest browsing and signed-in planning',
      'Responsive hero composition tuned for mobile and desktop',
    ],
  },
  {
    id: 'lsync',
    number: '03',
    title: 'LSync',
    category: 'EdTech / Learning',
    description:
      'Unified learning portfolio that aggregates progress from YouTube, GitHub, Coursera, and blogs.',
    image: '/lsync.png',
    liveUrl: 'https://lsync-gules.vercel.app', // verify full Vercel URL
    repoUrl: 'https://github.com/Khaleed2480/lsync.git',
    stack: ['React', 'Tailwind CSS', 'GitHub Sync'],
    overview:
      'A smart developer learning tracker built to unify scattered study work from YouTube, GitHub, Coursera, and technical blogs into one verified, shareable portfolio.',
    highlights: [
      'Designed around GitHub Sync and YouTube Chrome Extension workflows',
      'Clear sample portfolio preview for fast user evaluation',
      'High-contrast editorial hierarchy and responsive CTA layout',
    ],
  },
  {
    id: 'kestrel-roasters',
    number: '04',
    title: 'Kestrel Roasters',
    category: 'Coffee / E-Commerce',
    description:
      'Small-batch single-origin coffee storefront with an interactive brew guide and live bag counter.',
    image: '/kestrel.png',
    liveUrl: 'https://coffee-nine-dusky.vercel.app', // paste full Vercel URL (ends in -dusky.vercel.app)
    repoUrl: 'https://github.com/Khaleed2480/coffee.git',
    stack: ['React', 'JavaScript', 'E-Commerce UI'],
    overview:
      'A warm, craft-focused coffee roastery storefront highlighting seasonal micro-lots, roasting transparency, an interactive brew guide, and an instant shopping bag.',
    highlights: [
      'Interactive brew guide paired with single-origin roast exploration',
      'Live shopping bag state with clean minimalist header navigation',
      'Warm editorial serif typography and high readability on mobile',
    ],
  },
];
export const WHAT_I_BRING = [
  'Responsive Web Development',
  'Pixel-Perfect UI Implementation',
  'Interactive User Experiences',
  'Performance Optimization',
  'Cross-Device Compatibility',
];