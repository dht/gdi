import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Events = lazy(() => import('./Events.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.events',
  name: 'Events',
  description: 'Events',
  component: (instance: IElement) => <Events {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
