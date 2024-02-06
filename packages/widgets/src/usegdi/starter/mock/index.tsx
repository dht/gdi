import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Mock = lazy(() => import('./Mock.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mock',
  name: 'Mock',
  description: 'Mock',
  component: (instance: IElement) => <Mock {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
