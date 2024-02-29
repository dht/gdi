import { initialState as initialStateIso } from '@gdi/store-iso';
import { initialStateAssets } from './initialState.assets';
import { board } from './initialState.board';
import { messages } from './initialState.messages';
import { flow } from './initialState.nodes';
import { initialStateTags } from './initialState.tags';
import { initialStateTodos } from './initialState.todos';
import { IGdiStore } from './types';
import { removeId } from './utils/id';
import { sagas } from './initialState.sagas';
import { voices } from './initialState.voices';
import { apiProviders } from './initialState.apiProviders';
import { capabilities } from './initialState.capabilities';

export const initialState: IGdiStore = {
  appState: {
    version: '0.0.0',
    assetsRootUrl: '/',
    boardsRootUrl: '/boards',
    docsRootUrl: '/',
    socketsUrl: '',
    adapter: 'no adapter',
    flavour: 'default',
    flavourColumnIndex: 0,
    prompt: '',
    promptRevised: '',
    promptOriginal: '',
    promptPlaceholder: '',
    promptParams: {},
    transcriptId: '',
    lineIndex: -1,
    lineDuration: -1,
    storageUrl: '',
    isMac: true,
    cmdKey: '⌘',
    is24Hours: false,
    showLog: false,
    screenWidth: 1920,
    screenHeight: 1080,
    imageUrl: '',
    voiceUrl: '',
    isDataReady: false,
    isEmulator: false,
    isAuthenticated: false,
    isApiKeyOk: null,
    isLocalInstance: false,
    localInstanceUrl: '',
    isFetchingSuggestions: false,
    isFocusLeft: true,
    isLoadingMyBoards: true,
    boardHeader: '',
    q: '',
    filter: '',
    firstDayOfWeek: 0,
    suggestedFileName: '',
    source: 'none',
    tags: ['project-tutorial'],
    root: 'mux',
    showRoot: false,
    tsStart: Date.now(),
    isFullScreen: true,
  },
  currentIds: {
    boardId: '',
    itemId: '',
    requestId: '',
    voiceId: 'alloy',
    assetId: '',
    leftId: '',
    rightId: '',
    modalId: '',
    muxTabId: 'home',
    editId: '',
    tabId: '',
    remoteItemId: '',
    personId: 'Albert.Einstein',
    assistantId: 'assistant-vanilla',
    capabilityId: '',
  },
  user: {
    displayName: '',
    email: '',
    emailVerified: false,
    isAnonymous: false,
    metaData: {
      creationTime: '',
      lastSignInTime: '',
    },
    providerData: [],
    photoURL: '',
    uid: '',
  },
  settings: {
    skipBoardIntro: false,
    skipBoardDetails: false,
    defaultRoot: 'apps',
  },
  board: removeId(board),
  boards: {
    'B-001': board,
  },
  myBoards: {
    'B-000': {
      id: 'B-000',
      tsLastOpened: 0,
      tsAdded: 0,
    },
  },
  playbackState: {
    startTime: Date.now(),
    playbackSpeed: 1,
    playbackStatus: 'idle',
  },
  soundState: {},
  assistants: {
    '1': {
      id: '1',
      description: '',
      instructions: '',
      model: '',
      name: '',
      tools: [],
    },
  },
  prompts: {
    '1': {
      id: '1',
      name: '',
      description: '',
      model: '',
      template: { content: '' },
      tools: [],
    },
  },
  transcriptLines: {
    '1': {
      id: '1',
      speakerName: 'Arnold',
      text: 'Hey guys, have you heard about the new Yu-Gi-Oh set that just came out?',
    },
  },
  logs: {
    1: {
      id: '1',
      message: '',
      source: '',
      timestamp: 0,
      verb: '',
    },
  },
  tags: {
    ...initialStateTags,
  },
  assets: {
    ...initialStateAssets,
  },
  messages,
  ...flow,
  ...initialStateIso,
  _lastAction: {
    type: 'INIT',
  },
  voices: {
    ...voices,
  },
  sagas: {
    ...sagas,
  },
  transcriptAudios: {
    '1': {
      audioUrl: '',
      meta: {
        duration: 1732,
        tsStart: 1701499162667,
        tsEnd: 1701499164399,
      },
      audioId: '574f',
      id: '1',
    },
  },
  ...initialStateTodos,
  remoteItems: {
    r1: {
      id: 'r1',
    },
  },
  document: {
    content: '',
    meta: {
      documentType: 'article',
      lengthInstructions: '5 paragraphs',
      styleInstructions: '',
      topicAndInstructions: '',
    },
    tsCreated: 0,
  },
  documentSuggestions: {
    s1: {
      id: 's1',
      title: 'shorten',
      prompt: 'shorten the document',
    },
  },
  adapters: {
    dbAdapter: {
      id: 'dbAdapter',
      providerType: 'fireStore',
    },
  },
  apiProviders,
  capabilities,
  muxTabs: {
    home: {
      id: 'home',
      name: 'Home',
      description: 'Welcome to Mux',
    },
  },
};
