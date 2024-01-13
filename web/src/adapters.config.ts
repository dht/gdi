import { getBoolean, getString, setBoolean } from 'shared-base';
import { boardsRoot } from './main.root';

// setBoolean('USE_INSTANCE', true);

const isLocalInstance = getBoolean('USE_INSTANCE');
const localInstanceUrl = getString('INSTANCE_URL') || 'http://localhost:3005';

export const config = {
  boardAdapter: {
    id: 'boardAdapter',
    providerType: 'json',
    baseUrl: boardsRoot,
  },
  dbAdapter: {
    id: 'dbAdapter',
    providerType: isLocalInstance ? 'rest' : 'fireStore',
    scope: 'userData/${uid}',
    localInstanceUrl,
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
