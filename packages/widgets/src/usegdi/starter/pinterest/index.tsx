import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Pinterest = lazy(() => import('./Pinterest'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.pinterest',
  name: 'Pinterest',
  description: 'Pinterest',
  component: (instance: IElement) => <Pinterest {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
