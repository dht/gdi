import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxSideBar = lazy(() => import('./MuxSideBar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-side-bar',
  name: 'MuxSideBar',
  description: 'MuxSideBar',
  component: (instance: IElement) => <MuxSideBar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
