import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SoundPlayer = lazy(() => import('./SoundPlayer.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.sound-player',
  name: 'SoundPlayer',
  description: 'SoundPlayer',
  component: (instance: IElement) => <SoundPlayer {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
