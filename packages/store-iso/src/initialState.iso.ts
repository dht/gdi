import { audios } from './initialState.audios';
import { effects } from './initialState.effects';
import { bits } from './initialState.bits';
import { dots } from './initialState.dots';
import { packs } from './initialState.packs';
import { vasps } from './initialState.vasp';
import { IIsoStore } from './types.iso';
import { getBoolean } from 'shared-base';

export const initialState: IIsoStore = {
  sceneState: {
    isSceneReady: false,
    isAudioReady: true,
    isLoading: true,
    isPlaying: false,
    hideGrid: getBoolean('HIDE_GRID', true),
    freeMove: true,
    currentTime: 0,
    totalTime: 0,
    lockMode: 'dot',
    cue: [0, 0],
    currentAudioTimestamp: 10,
    currentAttachmentUrl: '',
  },
  sceneAssetLoader: {
    urls: [],
    isLoading: false,
    fileSizes: {},
    completedBytes: {},
    isReady: false,
    bytesCompleted: 0,
    bytesTotal: 0,
    percent: 0,
  },
  sceneStage: {
    bkUrl: '',
    stageMaskUrl: '',
    stageUrl: '',
  },
  sceneCurrentIds: {
    projectTag: '',
    cameraId: 'arc',
    meshId: '',
    elementId: '',
    groupId: '',
    dotId: '',
    virtualDotId: 'start',
    copiedDotId: '',
    layerId: '',
    bitId: 'bit-01',
    focusedBitId: '',
    editId: '',
    trackId: 'camera',
    dynamicTrackId: 'audio',
    audioId: '',
    effectId: '',
    modalId: '',
    familyId: 'externals',
    elementTypeId: '',
  },
  sceneConfig: {
    totalDuration: 0,
    backgroundColor: [0, 0, 0, 1],
    cameras: {
      arc: {},
      free: {},
    },
    sun: {},
    activeCameras: ['free', 'cornerCam1', 'cornerCam2'],
  },
  sceneCameras: {
    free: {
      id: 'free',
      position: [-32, 29, 24],
      target: [0, 0, 0],
      type: 'free',
      isSticky: true,
    },
    arc: {
      id: 'arc',
      type: 'arc',
      position: [0, 0, 0],
      target: [0, 0, 0],
      values: {
        alpha: 130,
        beta: 60,
        radius: 50,
      },
      isSticky: true,
    },
  },
  sceneLights: {
    spotlight: {
      id: 'spotlight',
      type: 'spotlight',
      position: [0, 15, 0],
      target: [0.4, -1, 0],
      colors: {
        diffuse: [1, 1, 1],
        specular: [0, 1, 1],
      },
      values: {
        intensity: 1,
        exponent: 50,
        angle: 30,
      },
      isSticky: true,
      enabled: false,
    },
  },
  sceneMeshes: {
    sphere: {
      id: 'sphere',
      type: 'sphere',
      position: [0, 0, 0],
      values: {
        diameter: 1,
      },
      material: {
        type: 'color',
        colors: {
          diffuse: [0.65, 0.45, 0.13],
          specular: [0, 0, 0],
        },
      },
      enabled: false,
    },
  },
  sceneBits: {
    ...bits,
  },
  sceneDots: {
    ...dots,
  },
  sceneAudios: {
    ...audios,
  },
  sceneEffects: {
    ...effects,
  },
  scenePacks: {
    ...packs,
  },
  sceneVASPs: {
    ...vasps,
  },
  sceneExternals: {
    tree: {
      id: 'tree',
      rootUrl: 'http://localhost:3000/scenes/park/',
      fileName: 'tree2.glb',
    },
  },
  sceneCharacters: {},
};
