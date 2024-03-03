import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Mindfulness = lazy(() => import('./Mindfulness.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mindfulness',
  name: 'Mindfulness',
  description: 'Mindfulness',
  component: (instance: IElement) => <Mindfulness {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
