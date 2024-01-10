import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Playback = lazy(() => import('./Playback.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.playback',
  name: 'Playback',
  description: 'Playback',
  component: (instance: IElement) => <Playback {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
