import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Tube = lazy(() => import('./Tube.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.tube',
  name: 'Tube',
  description: 'Tube',
  component: (instance: IElement) => <Tube {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
