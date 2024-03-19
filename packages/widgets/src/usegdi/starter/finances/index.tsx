import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Finances = lazy(() => import('./Finances.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.finances',
  name: 'Finances',
  description: 'Finances',
  component: (instance: IElement) => <Finances {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
