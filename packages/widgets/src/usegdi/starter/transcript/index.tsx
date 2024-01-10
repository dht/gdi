import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Transcript = lazy(() => import('./Transcript.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.transcript',
  name: 'Transcript',
  description: 'Transcript',
  component: (instance: IElement) => <Transcript {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
