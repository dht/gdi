import { Id } from '../components/Base.style';
import allBoards from './allBoards.json';
import allFeatures from './allFeatures.json';

export const allData: any = {
  workshop: {
    title: 'Join our first GDI workshop | March 5th',
    description:
      'Book your spot for our first workshop on the 5th of May. We will be covering the basics of using GDI to supercharge your digital realm.',
    cta: 'Save a seat →',
    ctaUrl: 'https://forms.gle/1JDWakSjCP1zrfrY6',
  },
  pillars: {
    id: 'pillars',
    title: 'The *3 Pillars* of AI Efficiency',
    description:
      'The three pillars of charging your work with AI are knowledge, productivity, and content creation. GDI is the first platform to put all these three pillars under one roof, offering a user-centric AI experience',
  },
  schema: {
    id: 'schema',
    title: '*Everything* is a Schema',
    description:
      'GDI is built on the idea that everything is defined by a JSON. This means that every piece of data, every interface, every content, and every workflow can be represented as a JSON. This means anything can be versioned and improved.',
  },
  community: {
    id: 'community',
    title: 'The *GDI Integrators*',
    description:
      'A Community of AI-empowered creators and developers working together to explore the most efficient ways to use AI in our daily work. Gdi is open-source and community-driven. Every interface or content can be forked and improved by anyone.',
  },
  realm: {
    id: 'realm',
    title: 'Your new *Digital Realm*',
    description:
      "GDI is more than a tool; it's your command center for the digital age. Generate tutorials, animations, analyze data, write TDD tests, and beyond. With GDI, task management, content creation, and knowledge acquisition are not just simplified—they're amplified. Our platform redefines human-AI collaboration, propelling your productivity into a new stratosphere.",
  },
  gpt: {
    id: 'gpt',
    title: 'Take your *ChatGPT Experience* to the next level',
    description:
      "Be at the center of a 21st century mission control doing work for you. It’s not just about working alongside AI; It's about a flow of collaboration.",
  },
  data: {
    id: 'data',
    title: 'Your data. *Your machine.*',
    description:
      'Your data is central to everything you do. GDI is the hive, a single, centralized platform that continuously cultivates your data. No more copy/pasting or using Zapier to move your data around the cloud. Your data on your machine.',
  },
  features: {
    id: 'features',
    items: [...allFeatures].splice(0, 3),
    flavour: 'triple',
    imageWidth: '50%',
  },
  agnostic: {
    id: 'agnostic',
    title: 'Use it *Anywhere*',
    description:
      "Your workflows cover various tools. That's why GDI is designed to be client agnostic, ensuring seamless integration with your favorite tools like VSCode, Chrome, ITerm, Raycast, and more.",
  },
  capabilities: {
    id: 'capabilities',
    items: allBoards,
    flavour: 'long',
  },
  demo: {
    id: 'demo',
    color: 'pink',
    icon: 'edit',
    title: 'Contextual UIs',
    description:
      "Whenever you need to do something that GPT can't do, it will open a UI for you. Anything from creating a 3d animation to analyzing the transcript of a youtube video. The right UI for the right task.",
    cta: 'Browse Boards',
    ctaUrl: '/boards',
  },
  'ai-runner': {
    id: 'ai-runner',
    color: 'purple',
    icon: 'terminal',
    title: 'AI Runner',
    description:
      'When you run GDI on your machine, all your data and assets are saved locally. You can create a git repository to track versioning of your personal data. Moreover, all the API calls to AI models originate from your machine.',
    cta: 'Install AI runner',
    ctaUrl: 'https://github.com/dht/gdi',
  },
  'dynamic-content': {
    id: 'dynamic-content',
    color: 'cyan',
    icon: 'database',
    title: 'Dynamic Content',
    description:
      "Who said videos must be static? GDI allows you to create dynamic content that can be updated in real-time. It's like a live website, but for any type of content.",
    cta: 'View Examples',
  },
  'apple-vision': {
    id: 'apple-vision',
    color: 'purple',
    icon: '360',
    title: 'Own a Vision Pro?',
    description:
      'GDI is AR/VR ready. You can use your VR headset to interact with the GDI interface. It’s like a 3D command center for your digital realm.',
    cta: 'See Possibilities',
  },
};
