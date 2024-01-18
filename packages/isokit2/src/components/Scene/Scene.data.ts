import { IIsoStore } from '@gdi/store-iso';

export const elements: Partial<IIsoStore> = {
  sceneCameras: {
    free: {
      id: 'free',
      position: [-32, 29, 24],
      target: [0, 0, 0],
      type: 'free',
      isSticky: true,
      projectTag: '',
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
      projectTag: '',
    },
  },
  sceneLights: {
    sun: {
      id: 'sun',
      type: 'hemispheric',
      position: [0, 30, 0],
      values: {
        intensity: 1.5,
      },
      isSticky: true,
      projectTag: '',
    },
  },
  sceneMeshes: {
    center: {
      id: 'center',
      type: 'sphere',
      position: [0, -0.5, 0],
      values: {
        diameter: 0.8,
      },
      material: {
        type: 'color',
        colors: {
          diffuse: [0.65, 0.45, 0.13],
          specular: [0, 0, 0],
        },
      },
      isSticky: true,
      projectTag: '',
    },
    env: {
      id: 'env',
      type: 'sphere',
      position: [0, 0, 0],
      values: {
        diameter: 500,
      },
      material: {
        type: 'color',
        backFaceCulling: false,
        colors: {
          diffuse: [0, 0, 0],
          specular: [0, 0, 0],
        },
      },
      isSticky: true,
      projectTag: '',
    },
    'main-grid': {
      id: 'main-grid',
      type: 'ground',
      position: [0, -0.5, 0],
      values: {
        width: 60,
        height: 60,
      },
      material: {
        type: 'grid',
        values: {
          majorUnitFrequency: 5,
          gridRatio: 1,
          lineColor: [0.1, 0.3, 0.3],
          backFaceCulling: false,
        },
      },
      isSticky: true,
      enabled: false,
      projectTag: '',
    },
  },
};
