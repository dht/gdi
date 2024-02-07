import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Claire = lazy(() => import('./Claire.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.claire',
  name: 'Claire',
  description: 'Claire',
  component: (instance: IElement) => <Claire {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
