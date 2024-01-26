import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const VideoEffects = lazy(() => import('./VideoEffects.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.video-effects',
  name: 'VideoEffects',
  description: 'VideoEffects',
  component: (instance: IElement) => <VideoEffects {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
