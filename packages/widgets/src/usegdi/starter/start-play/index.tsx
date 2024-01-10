import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const StartPlay = lazy(() => import('./StartPlay.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.start-play',
  name: 'StartPlay',
  description: 'StartPlay',
  component: (instance: IElement) => <StartPlay {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
