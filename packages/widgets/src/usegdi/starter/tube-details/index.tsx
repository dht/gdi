import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const TubeDetails = lazy(() => import('./TubeDetails.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.tube-details',
  name: 'TubeDetails',
  description: 'TubeDetails',
  component: (instance: IElement) => <TubeDetails {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
