import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const VideoThumbs = lazy(() => import('./VideoThumbs.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.video-thumbs',
  name: 'VideoThumbs',
  description: 'VideoThumbs',
  component: (instance: IElement) => <VideoThumbs {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
