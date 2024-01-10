import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ProductTour = lazy(() => import('./ProductTour.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.product-tour',
  name: 'ProductTour',
  description: 'ProductTour',
  component: (instance: IElement) => <ProductTour {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
