import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Babylon = lazy(() => import('./Babylon.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.babylon',
  name: 'Babylon',
  description: 'Babylon',
  component: (instance: IElement) => <Babylon {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
