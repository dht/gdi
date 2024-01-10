import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Twitter = lazy(() => import('./Twitter'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.twitter',
  name: 'Twitter',
  description: 'Twitter',
  component: (instance: IElement) => <Twitter {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
