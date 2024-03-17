import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Reads = lazy(() => import('./Reads.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.reads',
  name: 'Reads',
  description: 'Reads',
  component: (instance: IElement) => <Reads {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
