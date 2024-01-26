import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const VideoLibrary = lazy(() => import('./VideoLibrary.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.video-library',
  name: 'VideoLibrary',
  description: 'VideoLibrary',
  component: (instance: IElement) => <VideoLibrary {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
