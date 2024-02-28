import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxFlows = lazy(() => import('./MuxFlows.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-flows',
  name: 'MuxFlows',
  description: 'MuxFlows',
  component: (instance: IElement) => <MuxFlows {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
