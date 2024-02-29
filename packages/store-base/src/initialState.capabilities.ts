import { ICapabilities } from './types';

export const capabilities: ICapabilities = {
  animation_3d: {
    id: 'animation_3d',
    identifier: 'com.usegdi.animation_3d',
    name: 'Create a 3D Animation',
    description: 'Create a 3D animation using various AI-powered sources',
    iconName: '',
    pilar: 'content',
    verb: 'create',
    ingredients: [
      {
        id: 'script',
        name: 'Script',
      },
      {
        id: 'voiceover',
        name: 'Voiceover',
      },
      {
        id: '3D assets',
        name: '3D assets',
      },
    ],
    instructions: [
      {
        id: 'generate_script',
        name: 'Generate a script',
        boardId: 'B-007',
      },
      {
        id: 'upload_3D_assets',
        name: 'Upload 3D assets',
        boardId: 'B-001',
      },
      {
        id: 'generate_voiceover',
        name: 'Generate voiceover',
        boardId: 'B-002',
      },
      {
        id: 'create_scene',
        name: 'Create a scene',
        boardId: 'B-001',
      },
      {
        id: 'animate_scene',
        name: 'Animate scene',
        boardId: 'B-001',
      },
    ],
  },
  prepare_meeting: {
    id: 'prepare_meeting',
    identifier: 'com.usegdi.prepare_meeting',
    name: 'Prepare for a Meeting',
    description: 'Prepare for a meeting using AI-powered tools',
    pilar: 'productivity',
    verb: 'analyze',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
  build_a_website: {
    id: 'build_a_website',
    identifier: 'com.usegdi.build_a_website',
    name: 'Build a website',
    description: 'Build a website using AI-powered tools',
    pilar: 'content',
    verb: 'create',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
  write_a_post: {
    id: 'write_a_post',
    identifier: 'com.usegdi.write_a_post',
    name: 'Write a post',
    description: 'Write a post using AI-powered tools',
    pilar: 'content',
    verb: 'create',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
  manage_finances: {
    id: 'manage_finances',
    identifier: 'com.usegdi.manage_finances',
    name: 'Manage Finances',
    pilar: 'productivity',
    verb: 'manage',
    description: 'Manage your finances using AI-powered tools',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
  rhetoric: {
    id: 'rhetoric',
    identifier: 'com.usegdi.rhetoric',
    name: 'Rhetoric',
    description: 'Build an argument using AI-powered tools',
    pilar: 'knowledge',
    verb: 'other',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
  debug_express: {
    id: 'debug_express',
    identifier: 'com.usegdi.debug_express',
    name: 'Debug an Express App',
    description: 'Debug an Express app using AI-powered tools',
    pilar: 'productivity',
    verb: 'analyze',
    iconName: '',
    ingredients: [],
    instructions: [],
  },
};
