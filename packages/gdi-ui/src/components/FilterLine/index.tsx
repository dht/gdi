import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const FilterLine = lazy(() => import('./FilterLine.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.filter-line',
  name: 'FilterLine',
  description: 'FilterLine',
  component: (instance: IElement) => <FilterLine {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
