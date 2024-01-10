import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Soundboard = lazy(() => import('./Soundboard.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.soundboard',
  name: 'Soundboard',
  description: 'Soundboard',
  component: (instance: IElement) => <Soundboard {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
