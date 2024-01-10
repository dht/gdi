import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const WriterPanel = lazy(() => import('./WriterPanel.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.writer-panel',
  name: 'WriterPanel',
  description: 'WriterPanel',
  component: (instance: IElement) => <WriterPanel {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
