import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Periscope = lazy(() => import('./Periscope.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.periscope',
  name: 'Periscope',
  description: 'Periscope',
  component: (instance: IElement) => <Periscope {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
