import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxPage = lazy(() => import('./MuxPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-page',
  name: 'MuxPage',
  description: 'MuxPage',
  component: (instance: IElement) => <MuxPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
