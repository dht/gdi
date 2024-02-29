import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ContextBar = lazy(() => import('./ContextBar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.context-bar',
  name: 'ContextBar',
  description: 'ContextBar',
  component: (instance: IElement) => <ContextBar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
