import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const VisionSimulator = lazy(() => import('./VisionSimulator.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.vision-simulator',
  name: 'VisionSimulator',
  description: 'VisionSimulator',
  component: (instance: IElement) => <VisionSimulator {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
