import { Id } from '../components/Base.style';
import allBoards from './allBoards.json';
import allFeatures from './allFeatures.json';

export const allData: any = {
  workshop: {
    title: 'Join Our First GDI Workshop | March 5th',
    description:
      'Book your spot for our first workshop on March 5th. We will cover the basics of using GDI to supercharge your digital realm.',
    cta: 'Save a Seat →',
    ctaUrl: 'https://forms.gle/1JDWakSjCP1zrfrY6',
  },
  pillars: {
    id: 'pillars',
    title: 'The *3 Pillars* of AI Efficiency',
    description:
      'The three pillars of charging your work with AI are knowledge, productivity, and content creation. GDI is the first platform to integrate all three pillars under one roof, offering a user-centric AI experience.',
  },
  schema: {
    id: 'schema',
    title: '*Everything* Is a Schema',
    description:
      'GDI is built on the concept that everything is defined by a schema in JSON. This means that every piece of data, interface, content, and workflow can be represented as a JSON schema, enabling versioning and improvements.',
  },
  community: {
    id: 'community',
    title: 'The *GDI Integrators*',
    description:
      'A community of AI-empowered creators and developers working together to explore the most efficient ways to use AI in our daily work. GDI is open-source and community-driven, allowing anyone to fork and improve every interface or piece of content.',
  },
  realm: {
    id: 'realm',
    title: 'Your New *Digital Realm*',
    description:
      "GDI is more than a tool; it's your command center for the digital age. Generate tutorials, animations, analyze data, write TDD tests, and more. With GDI, task management, content creation, and knowledge acquisition are not just simplified—they're amplified. Our platform redefines human-AI collaboration, propelling your productivity to new heights.",
  },
  gpt: {
    id: 'gpt',
    title: 'Elevate Your *ChatGPT Experience*',
    description:
      "Be at the center of 21st-century mission control working for you. It's not just about working alongside AI; it's about a collaborative flow where sometimes you are the driver and AI is the passenger, and at other times, it's vice versa.",
  },
  data: {
    id: 'data',
    title: 'Your Data. *Your Machine.*',
    description:
      'Your data is central to everything you do. GDI acts as the hive, a single, centralized platform that continuously cultivates your data. Forget copy/pasting or using Zapier to move your data around the cloud. Keep your data on your machine.',
  },
  features: {
    id: 'features',
    items: [...allFeatures].splice(0, 3),
    flavour: 'triple',
    imageWidth: '50%',
  },
  agnostic: {
    id: 'agnostic',
    title: 'Use It *Anywhere*',
    description:
      "Your workflows span various tools. That's why GDI is designed to be client-agnostic, ensuring seamless integration with your favorite tools like VSCode, Chrome, iTerm, Raycast, and more.",
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
      "Whenever you need to perform a task that a chat interface can't handle, it will open a UI for you. Whether it's creating a 3D animation or analyzing the transcript of a YouTube video, you'll have the right UI for the task.",
    cta: 'Browse Boards',
    ctaUrl: '/boards',
    videoUrl: 'https://raw.githubusercontent.com/dht/gdi-assets/main/videos/contextual.mp4',
    videoHeight: 570,
    controls: true,
  },
  'ai-runner': {
    id: 'ai-runner',
    color: 'purple',
    icon: 'terminal',
    title: 'AI Runner',
    description:
      'Running GDI on your machine saves all your data and assets locally. You can create a git repository to track the versioning of your personal data. Moreover, all API calls to AI models originate from your machine.',
    cta: 'Install AI Runner',
    ctaUrl: 'https://github.com/dht/gdi',
    videoUrl: 'https://raw.githubusercontent.com/dht/gdi-assets/main/videos/iterm.mp4',
    videoLoop: false,
    videoHeight: 520,
    controls: true,
  },
  'dynamic-content': {
    id: 'dynamic-content',
    color: 'cyan',
    icon: 'database',
    title: 'Dynamic Content',
    description:
      "Who said videos have to be static? GDI enables you to create dynamic content that can be updated in real-time. It's like having a live website for any type of content.",
    cta: 'View Examples',
    videoUrl: 'https://raw.githubusercontent.com/dht/gdi-assets/main/videos/dynamic.mp4',
    controls: true,
  },
  'apple-vision': {
    id: 'apple-vision',
    color: 'purple',
    icon: '360',
    title: 'Own a Vision Pro?',
    description:
      "GDI is AR/VR ready. Use your VR headset to interact with the GDI interface. It's akin to a 3D command center for your digital realm.",
    cta: 'See Possibilities',
    videoUrl:
      'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-apps/large.mp4',
    controls: true,
  },
};
