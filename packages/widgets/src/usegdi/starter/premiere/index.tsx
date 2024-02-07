import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Premiere = lazy(() => import('./Premiere.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.premiere',
  name: 'Premiere',
  description: 'Premiere',
  component: (instance: IElement) => <Premiere {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
