import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Instagram = lazy(() => import('./Instagram'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.instagram',
  name: 'Instagram',
  description: 'Instagram',
  component: (instance: IElement) => <Instagram {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
