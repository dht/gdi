import { IMesh, ICreateDisc, ISceneDynamic } from '@gdi/store-iso';

type Template = ISceneDynamic & {};

export const template: Template = {
  id: 'dynamic-sphere-{uid4}',
  type: 'dynamic',
  flavour: 'crumbling',
  position: [0, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.65, 0.45, 0.13],
      specular: [0, 0, 0],
    },
  },
  values: {
    radius: 1,
    tessellation: 6,
  },
};
