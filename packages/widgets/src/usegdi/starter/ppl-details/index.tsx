import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const PplDetails = lazy(() => import('./PplDetails.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.ppl-details',
  name: 'PplDetails',
  description: 'PplDetails',
  component: (instance: IElement) => <PplDetails {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
