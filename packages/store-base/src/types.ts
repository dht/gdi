import { IElementsPerResolution } from 'igrid';
import { NoId } from './utils/id';
import type { IIsoStore } from '@gdi/store-iso';
import { IMyData } from './types.md';

export type Json = Record<string, any>;

export type IGdiStore = {
  appState: IAppState;
  adapters: IAdapters;
  user: IUser;
  currentIds: ICurrentIds;
  playbackState: IPlaybackState;
  soundState: Json;
  logs: ILogs;
  messages: IMessages;
  transcriptLines: ITranscriptLines;
  transcriptAudios: ITranscriptAudios;
  myBoards: IMyBoards;
  board: NoId<IBoard>;
  boards: IBoards;
  settings: ISettings;
  assistants: IAssistants;
  prompts: IPrompts;
  tags: ITags;
  assets: IAssets;
  document: IDocument;
  documentSuggestions: IDocumentSuggestions;
  sagas: ISagas;
  voices: IVoices;
  remoteItems: IRemoteItems;
  apiProviders: IApiProviders;
  capabilities: ICapabilities;
  muxTabs: IMuxTabs;
  _lastAction: Action;
} & IIsoStore &
  IMyData &
  IFlow;

export type IAppState = {
  version: string;
  credits: number;
  assetsRootUrl: string;
  boardsRootUrl: string;
  docsRootUrl: string;
  socketsUrl: string;
  flavour: string; // base, prepare, outcome
  flavourColumnIndex: number; // base, prepare, outcome
  prompt: string;
  promptRevised: string;
  promptOriginal: string;
  promptPlaceholder: string;
  promptParams: Json;
  boardHeader: string;
  adapter: string;
  lineIndex: number;
  lineDuration?: number;
  transcriptId?: string;
  sourceUrl?: string;
  storageUrl?: string;
  isMac: boolean;
  is24Hours: boolean;
  showLog: boolean;
  cmdKey: string;
  screenWidth: number;
  screenHeight: number;
  focusTiers: string[];
  focusProject: string;
  focusTags: string;
  imageUrl: string;
  voiceUrl: string;
  isDataReady: boolean;
  isLoadingMyBoards: boolean;
  isEmulator: boolean;
  isAuthenticated: boolean;
  isFetchingSuggestions: boolean;
  isLocalInstance: boolean;
  localInstanceUrl: string;
  isFocusLeft: boolean;
  isApiKeyOk: null | boolean;
  suggestedFileName?: string;
  q: string;
  filter: string;
  firstDayOfWeek: number;
  tags: string[];
  source: ContentSource;
  root: Root;
  showRoot?: boolean;
  isFullScreen?: boolean;
  tsStart: number;
};

export type Root = 'mux' | 'village' | 'apps';

export type ContentSource = 'none' | 'static' | 'file';

export type IUser = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  isAnonymous: boolean;
  emailVerified: boolean;
  providerData: any[];
  metaData: {
    creationTime: string;
    lastSignInTime: string;
  };
};

export type ICurrentIds = {
  boardId: string;
  requestId: string;
  assistantId: string;
  todayId: string;
  voiceId: string;
  assetId: string;
  leftId: string;
  listId: string;
  rightId: string;
  modalId: string;
  docId: string;
  weekId: string;
  projectId: string;
  tutorialId: string;
  tabId: string;
  muxTabId: string;
  newItemId: string;
  editId: string;
  itemId: string;
  personId: string;
  remoteItemId: string;
  capabilityId: string;
};

export type ISettings = {
  skipBoardIntro?: boolean;
  skipBoardDetails?: boolean;
  allowSfx?: boolean;
  defaultRoot: Root;
  startWithRoot?: boolean;
};

export type ICamera = {
  radius: number;
  alpha: number;
  beta: number;
  target: Vector;
};

export type ITag = {
  id: string;
  isProjectTag?: boolean;
  isActive: boolean;
  tsAdded: number;
  tsExpiration?: number;
};

export type ITags = Record<string, ITag>;

export type IAsset = {
  id: string;
  fileName: string;
  assetUrl: string;
  contentType: string;
  size?: number;
  tags: string[];
  tsAdded: number;
  tsExpiration?: number;
  meta?: Partial<IAssetMeta>;
  isArchived?: boolean;
  isSticky?: boolean;

  // transient
  iconName?: string;
  level?: number;
};

export type IAssetMeta = {
  fileSize: number;
  duration: number;
  length: number;
};

export type IAssets = Record<string, IAsset>;

export type ITranscriptLine = {
  id: string;
  speakerName: string;
  text: string;
  audioUrl?: string;
  textPhonetics?: string;
  timestamp?: number;
  duration?: number;
};

export type ITranscriptLines = Record<string, ITranscriptLine>;

export type ITranscriptAudio = {
  id: string;
  audioUrl: string;
  audioId: string;
  meta: any;
};

export type ITranscriptAudios = Record<string, ITranscriptAudio>;

export type ILog = {
  id: string;
  source: string;
  verb: string;
  timestamp: number;
  message: string;
  data?: Json;
};

export type ILogs = Record<string, ILog>;

export type IBarItem = {
  id: string;
  value: string;
  emoji?: string;
  modifier?: string;
  actionId?: string;
  eventId?: string;
  isHidden?: boolean;
  addClassName?: boolean;
  shortKey?: IShortKey;
};

export type IBarItems = Record<string, IBarItem>;

// ================== types ==================
export type Position = {
  x: number;
  y: number;
};

export type Vector = {
  x: number;
  y: number;
  z: number;
};

export type NodeType = 'llm' | 'api' | 'outcome';

export type IPromptTemplate = {
  content: string;
};

export type AgentMode = 'continues' | 'singular';

export type IAgent = {
  mode: AgentMode;
  system: string;
  includeContext?: boolean;
};

export type MessageRole = 'assistant' | 'user' | 'system';

export type IMessage = {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: number;
};

export type IMessages = Record<string, IMessage>;

export type IRemoteItem = {
  id: string;
} & Json;

export type IRemoteItems = Record<string, IRemoteItem>;

export type IModel = {
  modelType: 'openAI';
  modelName: string;
  temperature?: number;
  maxTokens?: number;
};

export type ApiType = 'elevenLabs' | 'dalle' | 'whisper' | 'openJourney';
export type ApiFormatInput = 'default' | 'conversation';

export type IApi = {
  apiType: ApiType;
  formatInput: ApiFormatInput;
  purpose?: string;
};

export type IApis = Record<string, IApi>;

export type IFlowEdge = {
  id: string;
  source: string;
  target: string;
};

export type IFlow = {
  flowConfig: IFlowConfig;
  flowApis: IFlowApis;
  flowAssistants: IFlowAssistants;
  flowState: IFlowState;
  flowNodes: IFlowNodes;
};

export type FlowType = 'linear' | 'continues' | 'adhoc';

export type IFlowConfig = {
  flowId: string;
  flowType: FlowType;
  name: string;
  variables: Json;
  clearVariables?: boolean;
  cumulativeThread?: boolean;
  textToSpeech?: boolean;
  fileNameInstructions?: string;
  improveAssistantId?: string;
  output?: Json;
  postFlavour?: string;
};

export type IFlowApi = {
  id: string;
  endpoint: string;
  vendor: string;
};

export type IFlowApis = Record<string, IFlowApi>;

export type IFlowAssistant = IAssistantBase & {};

export type IFlowAssistants = Record<string, IFlowAssistant>;

export type INodeType = 'llm' | 'api' | 'outcome';
export type FlowStatus = 'idle' | 'waiting' | 'running' | 'error' | 'success' | 'done';

export type IFlowNode = {
  id: string;
  name: string;
  nodeType: INodeType;
  assistantId?: string;
  apiId?: string;
  input: Json;
  variables: Json;
  parentId: string;
  completionParams: Json;
  position: Position;
  connectors: string[];
  isStart?: boolean;
  isEnd?: boolean;
  price?: number;
  duration?: number;
  tokensCount?: number;
  status: FlowStatus;
  // runtime
  tsStart?: number;
  tsEnd?: number;
  tsDuration?: number;
  runId?: string;
  threadId?: string;
  // transient
  isRunning?: boolean;
};

export type IFlowNodes = Record<string, IFlowNode>;

export type FlowMeta = {
  id: string;
  flowType: FlowType;
  variables: Json;
  flowState: IFlowState;
  nodeState: Record<string, INodeState>;
  assistantIds: Record<string, string>;
  prompt: string;
};

export type INodeState = {
  id: string;
  runId?: string;
  threadId?: string;
  status: FlowStatus;
  tsStart: number;
  tsEnd?: number;
  duration?: number;
  isError?: boolean;
  isSuccess?: boolean;
  error?: string;
  cost?: Cost;
};

export type IFlowState = {
  status: FlowStatus;
  tsStart: number;
  tsEnd?: number;
  duration?: number;
  isError?: boolean;
  isSuccess?: boolean;
  error?: string;
};

export type IMyBoard = {
  id: string;
  tsAdded: number;
  tsLastOpened: number;
};

export type IMyBoards = Record<string, IMyBoard>;

export type IAssistantBase = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  model: string;
  tools: Json[];
  isDynamic?: boolean;
};

export type IAssistant = IAssistantBase & {
  tsAdded?: number;
};

export type IAssistants = Record<string, IAssistant>;

export type IPrompt = {
  id: string;
  name: string;
  description: string;
  template: IPromptTemplate;
  model: string;
  tools: Json[];
};

export type IPrompts = Record<string, IPrompt>;

// ================== utilities ==================

export type Action = {
  type: string;
  id?: string;
  payload?: Json;
};

export type IBoard = {
  id: string; // internal id => B-001
  identifier: string; // external id => com.usegdi.chit-chat
  version: string;
  url: string;
  boardInfo: IBoardInfo;
  author: string;
  dependencies: Json;
  apis: Json;
  elements: IElementsPerResolution;
  examplesUrl?: string;
  examples?: IExamples;
  defaults: {
    exampleId?: string;
    setupId?: string;
  };
  flowUrl: string;
  flow?: IFlow & Json;
  sourceUrl: string;
  npmUrl: string;
  vscodeUrl: string;
  isActive: boolean;
  isWip?: boolean;
  mobile?: IBoardMobileConfig;
  storeNodes?: string[];

  // transient
  reviewInfo: IReviewInfo;
  tutorialPack?: ITutorialPack;
  isMyBoard?: boolean;
};

export type IBoardMobileConfig = {
  hidePrompt?: boolean;
  hideArrows?: boolean;
  darkMode?: boolean;
  columns?: number;
  flowColumnIndex?: number;
  outputColumnIndex?: number;
};

export type IDocument = {
  content: string;
  meta: Partial<IDocumentMeta>;
  tsCreated: number;
};

export type IDocumentMeta = {
  documentType: DocumentType;
  lengthInstructions: string;
  styleInstructions: string;
  topicAndInstructions: string;
  title: string;
  filePath: string;
  fileName: string;
  tags: string[];
  project: string;
  week: number;
};

export type IDocumentSuggestion = {
  id: string;
  title: string;
  prompt: string;
};

export type IDocumentSuggestions = Record<string, IDocumentSuggestion>;

export type DocumentType =
  | 'email'
  | 'article'
  | 'book'
  | 'letter'
  | 'report'
  | 'poem'
  | 'script'
  | 'video'
  | 'post'
  | 'voiceover'
  | 'other';

export type IAdapter = {
  id: string;
  providerType: string;
};

export type VoiceProvider = 'ElevenLabs' | 'OpenAI';

export type IVoice = {
  id: string;
  title: string;
  imageUrl: string;
  audioUrl: string;
  provider: VoiceProvider;
  description?: string;
};

export type IVoices = Record<string, IVoice>;

export type IAdapters = Record<string, IAdapter>;
export type IBoards = Record<string, IBoard>;

export type IBoardInfo = {
  name: string;
  index: number;
  imageUrl: string;
  videoUrl: string;
  videoThumbUrl?: string;
  logoColor?: string;
  boardType: FlowType;
  description: string;
  descriptionLong: string;
  oneLiner: string;
  oneLinerShort: string;
  header: string;
  fields: InfoField[];
  tags: string[];
  supportedResolutions: Json;
  tsVersion: number;
  forceDarkMode?: boolean;
};

export type IReviewInfo = {
  reviewsCount: number;
  installationCount: number;
  rating: number;
  reviews: IReviews;
};

export type IReview = {
  id: string;
  timestamp: number;
  rating: number;
  title: string;
  text: string;
  authorDisplayName: string;
  authorPhotoURL: string;
};

export type IReviews = Record<string, IReview>;

export type IExample = {
  id: string;
  title: string;
  description: string;
  dbPath: string;
  screenshotPath: string;
  dateAdded: string;
};

export type IExamples = Record<string, IExample>;

export type SagaType =
  | 'api'
  | 'entity'
  | 'customEvent'
  | 'customAction'
  | 'bootstrap'
  | 'component'
  | 'predicate'
  | 'authChange'
  | 'crud'
  | 'socket'
  | 'keys';

export type ISaga = {
  id: string;
  type: SagaType;
  isRunning?: boolean;
  tsStart?: number;
  tsEnd?: number;
  trigger?: {
    actionTypes?: string[];
    eventNames?: string[];
    nodeNames?: string[];
    keyNames?: string[];
    xpaths?: string[];
  };
  root?: any;
};

export type ISagas = Record<string, ISaga>;

export type InfoField = {
  label: string;
  content: string;
};

export type IPlaybackState = {
  startTime: number;
  playbackSpeed: number;
  playbackStatus: string;
};

export type Cost = {
  inputCount: number;
  outputCount?: number;
  inputRate: number;
  outputRate?: number;
  total: number;
};

export type IScene = {};

export type ICapabilityIngredient = {
  id: string;
  name: string;
  description?: string;
};

export type ICapabilityInstruction = {
  id: string;
  name: string;
  description?: string;
  boardId: string;
  isSilent?: boolean;
};

export type ProviderType = 'AI' | 'NON-AI';

export type ModelType =
  | 'text-generation'
  | 'text-to-speech'
  | 'text-to-audio'
  | 'text-to-image'
  | 'text-to-3D'
  | 'text-to-video'
  | 'speech-to-text'
  | 'speech-to-speech'
  | 'other';

export type IApiProvider = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  providerType: ProviderType;
  models: ModelType[];
  isApiKeyValid?: boolean;
};

export type IApiProviders = Record<string, IApiProvider>;

export type IMuxTab = {
  id: string;
  name: string;
  description: string;
  iconName?: string;
  boardId?: string;
};

export type IMuxTabs = Record<string, IMuxTab>;

export type CapabilityPilar = 'none' | 'knowledge' | 'productivity' | 'content';
export type CapabilityVerb = 'create' | 'manage' | 'analyze' | 'other';

export type ICapability = {
  id: string;
  identifier: string;
  name: string;
  description: string;
  pilar: CapabilityPilar;
  verb: CapabilityVerb;
  iconName: string;
  imageUrl?: string;
  ingredients: ICapabilityIngredient[];
  instructions: ICapabilityInstruction[];
  parameters?: IFunctionParameters;
};

export type IFunctionParameter = {
  type: string;
  description: string;
  enum?: string[];
  isRequired?: boolean;
};

export type IFunctionParameters = Record<string, IFunctionParameter>;

export type ICapabilities = Record<string, ICapability>;

export type IShortKey = {
  key: string;
  id?: string;
  withCommand?: boolean;
  withAlt?: boolean;
  withShift?: boolean;
  withCtrl?: boolean;
  description?: string;
};

export type IFilterParams = {
  focusTiers: string[];
  focusProject: string;
  focusTags: string;
  weekId: string;
  todayId: string;
  projectId: string;
  globalTags: string[];
  newItemId?: string;
};

export type IMetaParams = {
  project: string;
  tags: string[];
};

export type ITutorial = {
  id: string;
  date: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  youtubeId: string;
};

export type ITutorialPack = {
  id: string;
  title: string;
  description: string;
  tutorials: ITutorial[];
};
