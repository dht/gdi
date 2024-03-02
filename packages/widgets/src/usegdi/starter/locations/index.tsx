import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Locations = lazy(() => import('./Locations.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.locations',
  name: 'Locations',
  description: 'Locations',
  component: (instance: IElement) => <Locations {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
