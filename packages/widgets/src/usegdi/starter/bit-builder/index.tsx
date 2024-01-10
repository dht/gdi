import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const BitBuilder = lazy(() => import('./BitBuilder.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.bit-builder',
  name: 'BitBuilder',
  description: 'BitBuilder',
  component: (instance: IElement) => <BitBuilder {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
