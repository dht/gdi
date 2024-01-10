import { IMesh, ICreateTopography } from '@gdi/store-iso';

type Template = IMesh & {
  values: Partial<ICreateTopography>;
};

export const template: Template = {
  id: 'topography-{uid4}',
  type: 'topography',
  position: [0, 0, 0],
  material: {
    type: 'grid',
    colors: {},
    alpha: 0.5,
    values: {
      lineColor: [0.8, 1, 0.8],
      mainColor: [0, 0.3, 0],
      majorUnitFrequency: 2,
      gridRatio: 0.5,
    },
  },
  values: {
    height: 100,
    width: 100,
    subdivisions: 100,
    minHeight: 0,
    maxHeight: 50,
    heightMap: '{asset-image}',
  },
};
