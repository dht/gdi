export type IIsoStore = {
  sceneState: ISceneState;
  sceneAssetLoader: ISceneAssetLoader;
  sceneCurrentIds: ISceneCurrentIds;
  sceneConfig: ISceneConfig;
  sceneStage?: ISceneStage;
  sceneCameras: ICameras;
  sceneLights: ILights;
  sceneBits: IBits;
  sceneMeshes: IMeshes;
  scenePacks: IPacks;
  sceneVASPs: IVASPs;
  sceneDots: IDots;
  sceneExternals: IExternals;
  sceneAudios: IAudios;
  sceneEffects: ISceneEffects;
  sceneCharacters: ISceneCharacters;
  sceneDynamics: ISceneDynamics;
};

export type LockMode = 'dot' | 'inBetween';

export type ISceneState = {
  isLoading: boolean;
  isSceneReady: boolean;
  isAudioReady: boolean;
  isPlaying: boolean;
  hideGrid: boolean;
  freeMove: boolean;
  currentTime: number;
  totalTime: number;
  lockMode: LockMode;
  cue: [number, number];
  currentAudioTimestamp: number;
  currentAttachmentUrl: string;
};

export type ISceneAssetLoader = {
  urls: string[];
  isLoading: boolean;
  fileSizes: Record<string, number>;
  completedBytes: Record<string, number>;
  isReady: boolean;

  // transient
  bytesCompleted: number;
  bytesTotal: number;
  percent: number;
};

export type ISceneAssetLoaderWithStage = ISceneAssetLoader & {
  stage: ISceneStage;
};

export type ISceneCurrentIds = {
  cameraId: string;
  meshId: string;
  elementId: string;
  groupId: string;
  dotId: string;
  virtualDotId: string;
  copiedDotId: string;
  layerId: string;
  bitId: string;
  audioId: string;
  focusedBitId: string;
  editId: string;
  modalId: string;
  familyId: string;
  trackId: string;
  effectId: string;
  dynamicTrackId: string;
  elementTypeId: string;
};

export type ISceneConfig = {
  totalDuration: number;
  backgroundColor: IVector4;
  sun: Partial<ISunConfig>;
  cameras: {
    arc: Partial<IArcConfig>;
    free: Partial<IFreeConfig>;
  };
  activeCameras: string[];
  isCharacterScene?: boolean;
};

export type ICameras = Record<string, ICamera>;

export type Json = Record<string, any>;

export type IBase = {
  id: string;
  label?: string;
  position?: IVector;
  rotation?: IVector;
  scaling?: IVector;
  material?: IMaterial;
  values?: Json;
  isSticky?: boolean;
  enabled?: boolean;
  layerMask?: number;
};

export type ICamera = IBase & {
  type: CameraType;
  target?: IVector;
  values?: Json;
};

export type CameraType = 'free' | 'arc';

export type ILight = IBase & {
  type: LightType;
  target?: IVector;
  colors?: IColors;
  values?: Json;
};

export type LightType =
  | 'hemispheric' //
  | 'spotlight'
  | 'directional'
  | 'point';

export type ILights = Record<string, ILight>;

export type BitType = 'basic' | 'skybox' | 'layer';

export type IDecal = IBase & {
  id: string;
  values: {
    normal: IVector;
    destinationMeshId: string;
    cullBackFaces?: boolean;
    localMode?: boolean;
    angle?: number;
  };
};

export type IBit = {
  id: string;
  type: BitType;
  name: string;
  timestamp: number;
  elements: Record<string, boolean>;
  cameraId?: string;
  attachmentUrl?: string;
  attachmentFilename?: string;

  // transient
  index?: number;
  start?: number;
  end?: number;
  duration?: number;
  timestampPercent?: number;
  durationPercent?: number;
};

export type IBits = Record<string, IBit>;

export type IDot = {
  id: string;
  bitId: string;
  virtualDotId: 'start' | 'end';
  meshId?: string;
  cameraId?: string;
  values: Json;
  easing?: IEasing;
};

export type IDots = Record<string, IDot>;

export type IExternal = IBase & {
  url: string;
  meshNames?: string | string[];

  // transient
  rootUrl?: string;
  fileName?: string;
};

export type IExternals = Record<string, IExternal>;

export type ISceneCharacter = IExternal & {
  animations: string[];
  rootId: string;
  meshId: string;
  cornerFocus?: 'left' | 'right';
  mouthDecal?: IDecal;
  mouthShapeUrls?: Json;
};

export type ISceneCharacters = Record<string, ISceneCharacter>;

export type IAudio = {
  id: string;
  timestamp: number;
  duration: number;
  url: string;
  fileName: string;
  values?: Json;
  isMain?: boolean;
  balance?: number;
  volume?: number;
};

export type IAudios = Record<string, IAudio>;

export type ISceneEffect = {
  id: string;
  timestamp: number;
  duration: number;
  effectId: string;
  values?: Json;
};

export type ISceneEffects = Record<string, ISceneEffect>;

export type IMesh = IBase & {
  type: MeshType;
};

export type MeshType =
  | 'ground'
  | 'topography'
  | 'sphere'
  | 'box'
  | 'tiledBox'
  | 'disc'
  | 'icoSphere'
  | 'ribbon'
  | 'cylinder'
  | 'torus'
  | 'torusKnot'
  | 'lines'
  | 'dashedLines'
  | 'lathe'
  | 'tiledPlane'
  | 'plane'
  | 'polygon'
  | 'tube'
  | 'polyhedron'
  | 'geodesic'
  | 'goldberg'
  | 'capsule';

export type IMeshes = Record<string, IMesh>;

export type ISceneDynamic = IBase & {
  type: 'dynamic';
  flavour: string;
};

export type ISceneDynamics = Record<string, ISceneDynamic>;

//   =========================== helpers ===========================

export type IVector = [number, number, number];
export type IVector4 = [number, number, number, number];
export type IBezier = [number, number, number, number];
export type IEasing = [number, number, number, number];

// standard and color are the same
export type MaterialType = 'standard' | 'color' | 'texture' | 'grid' | 'video' | 'PBR';

export type IMaterial = {
  id?: string;
  type: MaterialType;
  colors?: IColors;
  values?: Json;
  alpha?: number;
  backFaceCulling?: boolean;
};

export type IColors = {
  ambient?: IVector;
  specular?: IVector;
  diffuse?: IVector;
  emissive?: IVector;
};

export type IAnimation = {
  id: string;
  from: IKeyframe;
  to: IKeyframe;
  easing?: IBezier;
  duration: number;
};

export type IKeyframe = {
  position?: IVector;
  rotation?: IVector;
  scaling?: IVector;
  alpha?: number;
  beta?: number;
  radius?: number;
  isVisible?: boolean;
};

export type IProperty = keyof IKeyframe;

export type IElement = {
  id: string;
  label: string;
  type: string;
  subtype: string;
  enabled: boolean;
  code: string;
  isVisible: boolean;
  item: IMesh | IExternal | ILight | ICamera;

  // transient
  currentKeyframe?: IKeyframe;
};

export type IBitWithPairs = IBit & {
  elementId: string;
  startDot?: IDot;
  endDot?: IDot;
};

export type AllEntities = {
  allElements: IElement[];
  allBits: IBit[];
  allDots: IDot[];
  currentBitId?: string;
};

export type CursorPos = 'bitStart' | 'bitMiddle' | 'bitEnd' | 'outOfBounds';

export type ICursor = {
  bitId?: string;
  pos: CursorPos;
};

export type ISetPiece = {
  cameraId: string;
  elements: IElement[];
};

export type IPack = {
  id: string;
  index?: number;
  url: string;
  capacity?: number;
  identifier: string;
};

export type IPacks = Record<string, IPack>;

export type VASPType = 'particle' | 'sprite' | 'video' | 'microAnimation';

export type ISprite = IBase & {
  identifier: string;
  packId: string;
  vaspType: 'sprite';
  values: {
    size: Size;
    source: Size;
    isOnGround?: boolean;
  };
  index?: number;
};

export type IVideo = IMesh & {
  identifier: string;
  url: string;
  vaspType: 'video';
  index?: number;
};

export type IMicroAnimation = IBase & {
  identifier: string;
  url: string;
  vaspType: 'microAnimation';
  values: {
    size: number;
    fromFrame: number;
    toFrame: number;
    cellSize: number;
    loop: boolean;
    capacity: number;
    delay: number;
  };
  index?: number;
};

export type IParticle = IBase & {
  identifier: string;
  url: string;
  vaspType: 'particle';
  values: {
    size: number;
    maxLifeTime: number;
    speed: number;
    emitRate: number;
  };
  index?: number;
};

export type ISceneStage = {
  bkUrl: string;
  stageUrl: string;
  stageMaskUrl: string;
};

export type IVASP = ISprite | IVideo | IMicroAnimation | IParticle;

export type IVASPs = Record<string, IVASP>;

export type Size = {
  height: number;
  width: number;
};

export type IArcConfig = {
  target: IVector;
  upperRadiusLimit: number;
  alpha: number;
  radius: number;
  lowerBetaLimit: number;
  beta: number;
  lowerRadiusLimit: number;
  upperBetaLimit: number;
};

export type IFreeConfig = {};

export type ISunConfig = {
  intensity: number;
  colors: IColors;
};

export type IEnvironmentColorCurve = {
  enabled: boolean; // false by default
  globalDensity: number; // 0 by default
  globalExposure: number; // 0 by default
  globalHue: number; // 30 by default
  globalSaturation: number; // 0 by default
  highlightsDensity: number; // 0 by default
  highlightsExposure: number; // 0 by default
  highlightsHue: number; // 30 by default
  highlightsSaturation: number; // 0 by default
  midtonesDensity: number; // 0 by default
  midtonesExposure: number; // 0 by default
  midtonesHue: number; // 30 by default
  midtonesSaturation: number; // 0 by default
  shadowsDensity: number; // 0 by default
  shadowsExposure: number; // 0 by default
  shadowsHue: number; // 30 by default
  shadowsSaturation: number; // 0 by default
};

export type IEnvironmentBloom = {
  enabled: boolean; // false by default
  kernel: number; // 64 by default
  scale: number; // 0.5 by default
  threshold: number; // 0.9 by default
  weight: number; // 0.15 by default
};

export type IEnvironmentDepthOfField = {
  enabled: boolean; // false by default
  blurLevel: number; // 0 by default
  fStop: number; // 1.4 by default
  focalLength: number; // 50 by default, mm
  focusDistance: number; // 2000 by default, mm
  lensSize: number; // 50 by default
};

export type IEnvironmentGrain = {
  enabled: boolean; // false by default
  intensity: number; // 30 by default
  animated: boolean; // false by default
};

export type IEnvironmentChromaticAberration = {
  enabled: boolean; // false by default
  aberrationAmount: number; // 30 by default
  adaptScaleToCurrentViewport: boolean; // false by default
  alphaMode: number; // 0 by default
  alwaysForcePOT: boolean; // false by default
  enablePixelPerfectMode: boolean; // false by default
  forceFullscreenViewport: boolean; // true by default
  radialIntensity: number;
  direction: IVector;
};

export type IEnvironmentImageProcessing = {
  enabled: boolean; // false by default
  contrast: number; // 1 by default
  exposure: number; // 1 by default
  colorGradingEnabled: boolean; // false by default
  colorGradingUrl: string;
};

export type IEnvironmentMotionBlur = {
  enabled: boolean; // false by default
  intensity: number;
};

export type IEnvironmentVignette = {
  enabled: boolean; // false by default
  color: IVector4;
  stretch: number;
  weight: number;
};

export type IEnvironmentSharpen = {
  enabled: boolean; // false by default
  edgeAmount: number; // 0.3 by default
  colorAmount: number; // 1 by default
  adaptScaleToCurrentViewport: boolean; // false by default
};

export type IEnvironmentGlow = {
  enabled: boolean; // false by default
  blurKernelSize: number; // 16 by default
  intensity: number; // 1 by default
};

export type IEnvironmentFxaa = {
  enabled: boolean; // false by default
  samples: number; // 1 by default
  adaptScaleToCurrentViewport: boolean; // false by default
};

export type IEnvironmentLensEffect = {
  enabled: boolean; // false by default
  chromaticAberration: number; // 0 - 1
  edgeBlur: number; // 0 - 1
  distortion: number; // 0 - 1
  grainAmount: number; // 0 - 1
  grainTexture: string;
  dofFocusDistance: number; // default: disable; 0 - 1
  dofAperture: number; // default: disabled; 0 - 1
  dofDarken: number; // 0 - 1
  dofPentagon: boolean; // default: disabled
  dofGain: number; // 0 - 1
  dofThreshold: number; // default 1; 0 - 1
  blurNoise: boolean; // default true
};
export type IEnvironment = {
  hdr: boolean;
  createDefault: boolean;
  createGround: boolean;
  createSkybox: boolean;
  skyboxIntensity: number;
  colorCurve: Partial<IEnvironmentColorCurve>;
  bloom: Partial<IEnvironmentBloom>;
  depthOfField: Partial<IEnvironmentDepthOfField>;
  grain: Partial<IEnvironmentGrain>;
  chromaticAberration: Partial<IEnvironmentChromaticAberration>;
  imageProcessing: Partial<IEnvironmentImageProcessing>;
  motionBlur: Partial<IEnvironmentMotionBlur>;
  vignette: Partial<IEnvironmentVignette>;
  sharpen: Partial<IEnvironmentSharpen>;
  glow: Partial<IEnvironmentGlow>;
  fxaa: Partial<IEnvironmentFxaa>;
  lensEffect: Partial<IEnvironmentLensEffect>;
  shaders?: IShader[];
};

export type IShader = {
  id: string;
  path: string;
  params: Json;
  samplers: string[];
  options: number;
  enabled: boolean;
};

export type IPostEffect = {
  id: string;
  name: string;
  defaultDuration: number;
  onSetup: () => void;
  runAndApply: (t: number) => void;
  onCleanup: () => void;

  // transient
  duration?: number;
  startTs?: number;
  isRunning?: boolean;
  endTs?: number;
};

export type IConnector = {
  id: string;
  sourceId: string;
  targetId: string;
};

export type IConnectors = Record<string, IConnector>;
