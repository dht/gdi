import { boardsRoot } from './main.root';

export const config = {
  boardAdapter: {
    id: 'boardAdapter',
    providerType: 'json',
    baseUrl: boardsRoot,
  },
  dbAdapter: {
    id: 'dbAdapter',
    providerType: 'fireStore',
    scope: 'userData/${uid}',
    ignoreNodes: [
      'assets',
      'appState',
      'assistants',
      'barItems',
      'board',
      'boards',
      'camera',
      'control',
      'currentIds',
      'document',
      'flowApis',
      'flowAssistants',
      'flowConfig',
      'flowNodes',
      'flowState',
      'isoState',
      'playbackState',
      'logs',
      'todos',
      'messages',
      'prompts',
      'playState',
      'prompts',
      'sceneState',
      'sceneCurrentIds',
      'sceneConfig',
      'settings',
      'soundState',
      'sagas',
      'tags',
      'transcriptAudios',
      'transcriptLines',
      'user',
    ],
    optimisticNodes: [
      'sceneBits', //
      'sceneDots',
      'sceneAudios',
      'sceneEffects',
    ],
    optimisticVerbs: [
      'add', //
      'patch',
      'delete',
    ],
  },
  flowAdapter: {
    id: 'flowAdapter',
    providerType: 'firebase',
    baseUrl: '',
  },
};
