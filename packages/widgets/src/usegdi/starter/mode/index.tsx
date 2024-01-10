import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Mode = lazy(() => import('./Mode'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mode',
  name: 'Mode',
  description: 'Mode',
  component: (instance: IElement) => <Mode {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
