import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const FlowsPage = lazy(() => import('./FlowsPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.flows-page',
  name: 'FlowsPage',
  description: 'FlowsPage',
  component: (instance: IElement) => <FlowsPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
