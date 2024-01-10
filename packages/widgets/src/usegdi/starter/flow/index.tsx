import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Flow = lazy(() => import('./Flow.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.flow',
  name: 'Flow',
  description: 'Flow',
  component: (instance: IElement) => <Flow {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
