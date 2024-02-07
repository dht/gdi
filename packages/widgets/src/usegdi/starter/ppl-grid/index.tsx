import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const PplGrid = lazy(() => import('./PplGrid.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.ppl-grid',
  name: 'PplGrid',
  description: 'PplGrid',
  component: (instance: IElement) => <PplGrid {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
