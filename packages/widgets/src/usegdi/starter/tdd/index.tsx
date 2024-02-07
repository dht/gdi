import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Tdd = lazy(() => import('./Tdd.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.tdd',
  name: 'Tdd',
  description: 'Tdd',
  component: (instance: IElement) => <Tdd {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
