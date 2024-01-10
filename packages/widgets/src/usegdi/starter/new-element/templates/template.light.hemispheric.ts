import { ILight } from '@gdi/store-iso';

export const template: ILight = {
  id: 'hemispheric-{uid4}',
  type: 'hemispheric',
  position: [0, 1, 0],
  values: {
    intensity: 1.5,
  },
};
