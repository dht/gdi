import { IMesh, ICreateTopography } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateTopography>;
};

export const template: Template = {
  id: 'topography-{uid4}',
  type: 'ground',
  position: [0, 0, 0],
  material: {
    type: 'grid',
    values: {
      lineColor: [0.8, 1, 0.8],
      mainColor: [0, 0.3, 0],
      majorUnitFrequency: 2,
      gridRatio: 0.5,
    },
  },
  values: {
    width: 100,
    height: 100,
    heightMap: '{asset-image}',
    minHeight: 0,
    maxHeight: 50,
  },
};
