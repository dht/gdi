import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Midi = lazy(() => import('./Midi'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.midi',
  name: 'Midi',
  description: 'Midi',
  component: (instance: IElement) => <Midi {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
