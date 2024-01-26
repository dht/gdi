import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const GuidanceEditor = lazy(() => import('./GuidanceEditor.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.guidance-editor',
  name: 'GuidanceEditor',
  description: 'GuidanceEditor',
  component: (instance: IElement) => <GuidanceEditor {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
