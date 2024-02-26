import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxOverlay = lazy(() => import('./MuxOverlay.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-overlay',
  name: 'MuxOverlay',
  description: 'MuxOverlay',
  component: (instance: IElement) => <MuxOverlay {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
