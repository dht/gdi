import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SideBar = lazy(() => import('./SideBar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.side-bar',
  name: 'SideBar',
  description: 'SideBar',
  component: (instance: IElement) => <SideBar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
