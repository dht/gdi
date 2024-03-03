import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Fun = lazy(() => import('./Fun.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.fun',
  name: 'Fun',
  description: 'Fun',
  component: (instance: IElement) => <Fun {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
