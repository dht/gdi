import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Youtube = lazy(() => import('./Youtube'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.youtube',
  name: 'Youtube',
  description: 'Youtube',
  component: (instance: IElement) => <Youtube {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
