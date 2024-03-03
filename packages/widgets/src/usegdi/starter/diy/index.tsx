import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const DIY = lazy(() => import('./DIY.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.diy',
  name: 'DIY',
  description: 'DIY',
  component: (instance: IElement) => <DIY {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
