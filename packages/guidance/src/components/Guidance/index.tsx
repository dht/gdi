import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Guidance = lazy(() => import('./Guidance.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.guidance',
  name: 'Guidance',
  description: 'Guidance',
  component: (instance: IElement) => <Guidance {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
