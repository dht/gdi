import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MusicPreview = lazy(() => import('./MusicPreview.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.music-preview',
  name: 'MusicPreview',
  description: 'MusicPreview',
  component: (instance: IElement) => <MusicPreview {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
