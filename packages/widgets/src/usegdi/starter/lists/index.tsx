import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Lists = lazy(() => import('./Lists.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.lists',
  name: 'Lists',
  description: 'Lists',
  component: (instance: IElement) => <Lists {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
