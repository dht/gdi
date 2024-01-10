import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Document = lazy(() => import('./Document.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.document',
  name: 'Document',
  description: 'Document',
  component: (instance: IElement) => <Document {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
