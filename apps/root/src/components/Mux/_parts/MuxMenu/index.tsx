import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxMenu = lazy(() => import('./MuxMenu.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-menu',
  name: 'MuxMenu',
  description: 'MuxMenu',
  component: (instance: IElement) => <MuxMenu {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
