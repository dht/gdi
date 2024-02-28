import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxCapabilities = lazy(() => import('./MuxCapabilities.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-capabilities',
  name: 'MuxCapabilities',
  description: 'MuxCapabilities',
  component: (instance: IElement) => <MuxCapabilities {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
