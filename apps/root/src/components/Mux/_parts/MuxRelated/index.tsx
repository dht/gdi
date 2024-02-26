import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxRelated = lazy(() => import('./MuxRelated.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-related',
  name: 'MuxRelated',
  description: 'MuxRelated',
  component: (instance: IElement) => <MuxRelated {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
