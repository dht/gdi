import { IIsoStore } from '@gdi/store-iso';

export const elements: Partial<IIsoStore> = {
  sceneConfig: {
    totalDuration: 60,
    backgroundColor: [0, 0, 0, 0],
    sun: {},
    cameras: {
      arc: {},
      free: {},
    },
    activeCameras: ['free', 'cornerCam1', 'cornerCam2'],
  },
  sceneStage: {
    bkUrl: '/boards/assets/bk.png',
    stageUrl: '/boards/assets/stage.png',
    stageMaskUrl: '/boards/assets/stage-mask.png',
  },
  sceneLights: {
    d1: {
      id: 'd1',
      type: 'directional',
      position: [0, 0, 0],
      target: [1, 0, -1],
      colors: {
        diffuse: [1, 0.7, 0.6],
        specular: [0, 0, 0],
      },
      values: {
        intensity: 0.5,
      },
      isSticky: true,
    },
    d2: {
      id: 'd2',
      type: 'directional',
      target: [-1, 0, 0],
      colors: {
        diffuse: [1, 0.7, 0.8],
        specular: [1, 0, 0],
      },
      values: {
        intensity: 0.8,
      },
      isSticky: true,
    },
    point: {
      id: 'point',
      type: 'point',
      position: [0, 1, 0],
      colors: {
        diffuse: [1, 1, 1],
        specular: [0, 0, 0],
      },
      values: {
        intensity: 2,
      },
      isSticky: true,
    },
  },
  sceneCameras: {
    cornerCam1: {
      id: 'cornerCam1',
      type: 'arc',
      values: {
        alpha: 177,
        beta: 88,
        radius: 1.43,
        fov: 0.03,
        layerMask: 2,
        viewport: [0, 0.01, 0.25, 0.25],
      },
    },
    cornerCam2: {
      id: 'cornerCam2',
      type: 'arc',
      values: {
        alpha: 225,
        beta: 88,
        radius: 1.43,
        fov: 0.03,
        layerMask: 2,
        viewport: [0.75, 0.01, 0.25, 0.25],
      },
    },
  },
  sceneExternals: {},
  sceneCharacters: {
    man: {
      id: 'man',
      meshNames: '',
      rootUrl: '/boards/assets/',
      fileName: 'main.glb',
      animations: [],
      meshId: 'Ch36',
      rootId: '__root__',
      position: [10, -1.3, -0.5],
      rotation: [0, -Math.PI / 4, 0],
      layerMask: 1,
      cornerFocus: 'left',
    },
    woman: {
      id: 'woman',
      meshNames: '',
      rootUrl: '/boards/assets/',
      fileName: 'main-2.glb',
      animations: [],
      meshId: 'Ch37',
      rootId: '__root__',
      position: [10, -1.8, 1.5],
      rotation: [0, Math.PI, 0],
      layerMask: 1,
      cornerFocus: 'right',
    },
  },
  sceneMeshes: {
    fountain: {
      id: 'fountain',
      type: 'plane',
      values: {
        width: 13,
        height: 20,
      },
      material: {
        type: 'video',
        colors: {
          specular: [0, 0, 0],
        },
        values: {
          url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/videos/rain.mp4',
        },
      },
      position: [100, 4.5, -15],
      rotation: [0, -55, 0],
      projectTag: 'project-tutorial',
    },
  },
  sceneVASPs: {
    tea1: {
      id: 'tea1',
      identifier: 'tea-1',
      vaspType: 'particle',
      values: {
        maxLifeTime: 7,
        emitRate: 6,
        speed: 0.05,
        size: 0.02,
        alpha: 0.2,
      },
      position: [5.1, -0.5, 0.05],
      url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/sprites/smoke.png',
      index: 0,
      projectTag: 'project-tutorial',
    },
    tea2: {
      id: 'tea2',
      identifier: 'tea-2',
      vaspType: 'particle',
      values: {
        maxLifeTime: 7,
        emitRate: 6,
        speed: 0.05,
        size: 0.02,
        alpha: 0.2,
      },
      position: [5.1, -0.6, 0.38],
      url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/sprites/smoke.png',
      index: 0,
      projectTag: 'project-tutorial',
    },
    pot: {
      id: 'pot',
      vaspType: 'particle',
      url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/sprites/smoke.png',
      values: {
        maxLifeTime: 8,
        emitRate: 6,
        speed: 0.08,
        size: 0.02,
        alpha: 0.35,
      },
      position: [5.1, -0.02, 1],
      identifier: 'pot-2',
      index: 1,
      projectTag: 'project-tutorial',
    },
  },
};
