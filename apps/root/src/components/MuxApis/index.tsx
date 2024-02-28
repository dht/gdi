import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxApis = lazy(() => import('./MuxApis.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-apis',
  name: 'MuxApis',
  description: 'MuxApis',
  component: (instance: IElement) => <MuxApis {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
