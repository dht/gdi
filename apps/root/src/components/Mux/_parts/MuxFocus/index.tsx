import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxFocus = lazy(() => import('./MuxFocus.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-focus',
  name: 'MuxFocus',
  description: 'MuxFocus',
  component: (instance: IElement) => <MuxFocus {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
