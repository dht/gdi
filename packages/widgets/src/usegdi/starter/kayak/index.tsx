import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Kayak = lazy(() => import('./Kayak.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.kayak',
  name: 'Kayak',
  description: 'Kayak',
  component: (instance: IElement) => <Kayak {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
