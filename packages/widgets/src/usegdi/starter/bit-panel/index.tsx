import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const BitPanel = lazy(() => import('./BitPanel.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.bit-panel',
  name: 'BitPanel',
  description: 'BitPanel',
  component: (instance: IElement) => <BitPanel {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
