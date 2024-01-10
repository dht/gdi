import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SavePanel = lazy(() => import('./SavePanel.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.save-panel',
  name: 'Save Panel',
  description: 'Save Panel',
  component: (instance: IElement) => <SavePanel {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
