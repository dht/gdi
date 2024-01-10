import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const VoiceGallery = lazy(() => import('./VoiceGallery.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.voice-gallery',
  name: 'VoiceGallery',
  description: 'VoiceGallery',
  component: (instance: IElement) => <VoiceGallery {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
