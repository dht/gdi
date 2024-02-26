import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxLogs = lazy(() => import('./MuxLogs.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-logs',
  name: 'MuxLogs',
  description: 'MuxLogs',
  component: (instance: IElement) => <MuxLogs {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
