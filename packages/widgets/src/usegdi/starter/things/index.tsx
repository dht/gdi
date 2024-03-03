import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Things = lazy(() => import('./Things.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.things',
  name: 'Things',
  description: 'Things',
  component: (instance: IElement) => <Things {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
