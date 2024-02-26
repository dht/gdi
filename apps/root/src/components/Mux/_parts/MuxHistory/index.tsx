import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxHistory = lazy(() => import('./MuxHistory.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-history',
  name: 'MuxHistory',
  description: 'MuxHistory',
  component: (instance: IElement) => <MuxHistory {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
