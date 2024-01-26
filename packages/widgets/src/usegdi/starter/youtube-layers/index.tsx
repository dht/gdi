import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const YoutubeLayers = lazy(() => import('./YoutubeLayers.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.youtube-layers',
  name: 'YoutubeLayers',
  description: 'YoutubeLayers',
  component: (instance: IElement) => <YoutubeLayers {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
