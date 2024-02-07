import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Earth = lazy(() => import('./Earth.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.earth',
  name: 'Earth',
  description: 'Earth',
  component: (instance: IElement) => <Earth {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
