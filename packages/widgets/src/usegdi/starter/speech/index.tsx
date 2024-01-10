import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Speech = lazy(() => import('./Speech.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.speech',
  name: 'Speech',
  description: 'Speech',
  component: (instance: IElement) => <Speech {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
