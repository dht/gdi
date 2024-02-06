import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Spotlight = lazy(() => import('./Spotlight.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.spotlight',
  name: 'Spotlight',
  description: 'Spotlight',
  component: (instance: IElement) => <Spotlight {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
