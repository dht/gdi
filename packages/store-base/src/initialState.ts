import { initialState as initialStateIso } from '@gdi/store-iso';
import { initialStateAssets } from './initialState.assets';
import { barItems } from './initialState.bar';
import { board } from './initialState.board';
import { messages } from './initialState.messages';
import { flow } from './initialState.nodes';
import { initialStateTags } from './initialState.tags';
import { initialStateTodos } from './initialState.todos';
import { IGdiStore } from './types';
import { removeId } from './utils/id';
import { sagas } from './initialState.sagas';
import { voices } from './initialState.voices';

export const initialState: IGdiStore = {
  appState: {
    assetsRootUrl: '/',
    boardsRootUrl: '/boards',
    docsRootUrl: '/',
    adapter: 'no adapter',
    flavour: 'default',
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
    isFetchingSuggestions: false,
    isFocusLeft: true,
    isLoadingMyBoards: true,
    boardHeader: '',
    q: '',
    filter: '',
    firstDayOfWeek: 0,
    tags: ['project-new'],
  },
  currentIds: {
    boardId: '',
    requestId: '',
    setupId: '',
    playbackId: '',
    voiceId: 'alloy',
    assetId: '',
    leftId: '',
    rightId: '',
    modalId: '',
    editId: '',
    assistantId: 'assistant-vanilla',
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
  barItems,
  playbackState: {
    startTime: Date.now(),
    playbackSpeed: 1,
    playbackStatus: 'idle',
  },
  camera: {
    radius: 25,
    alpha: 1,
    beta: 1,
    target: { x: 0, y: 0, z: 0 },
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
};
