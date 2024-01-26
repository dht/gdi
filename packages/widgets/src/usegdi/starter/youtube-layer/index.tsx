import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const YoutubeLayer = lazy(() => import('./YoutubeLayer.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.youtube-layer',
  name: 'YoutubeLayer',
  description: 'YoutubeLayer',
  component: (instance: IElement) => <YoutubeLayer {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
