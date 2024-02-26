import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MapPage = lazy(() => import('./MapPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.map-page',
  name: 'MapPage',
  description: 'MapPage',
  component: (instance: IElement) => <MapPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
