import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxTopBar = lazy(() => import('./MuxTopBar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-top-bar',
  name: 'MuxTopBar',
  description: 'MuxTopBar',
  component: (instance: IElement) => <MuxTopBar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
