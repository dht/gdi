import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Welcome = lazy(() => import('./Welcome'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.welcome',
  name: 'Welcome',
  description: 'Welcome',
  component: (instance: IElement) => <Welcome {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
