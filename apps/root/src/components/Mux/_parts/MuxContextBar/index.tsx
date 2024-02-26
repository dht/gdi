import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxContextBar = lazy(() => import('./MuxContextBar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-context-bar',
  name: 'MuxContextBar',
  description: 'MuxContextBar',
  component: (instance: IElement) => <MuxContextBar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
