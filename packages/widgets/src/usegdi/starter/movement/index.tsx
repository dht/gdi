import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Movement = lazy(() => import('./Movement.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.movement',
  name: 'Movement',
  description: 'Movement',
  component: (instance: IElement) => <Movement {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
