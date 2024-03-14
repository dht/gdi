import { IApiProviders } from './types';

export const apiProviders: IApiProviders = {
  openAI: {
    id: 'openAI',
    name: 'OpenAI',
    description: 'OpenAI is a leading provider of AI models and APIs.',
    providerType: 'AI',
    imageUrl: '/docs/20.png',
    models: [
      'text-generation',
      'text-to-speech',
      'text-to-image',
      'text-to-audio',
      'text-to-video',
      'speech-to-text',
    ],
  },
  elevenLabs: {
    id: 'elevenLabs',
    name: 'ElevenLabs',
    description: 'ElevenLabs  specializes in Speech and Audio AI models and APIs.',
    providerType: 'NON-AI',
    imageUrl: '/docs/19.png',
    models: ['text-to-speech', 'text-to-audio', 'speech-to-text', 'speech-to-speech'],
  },
};
