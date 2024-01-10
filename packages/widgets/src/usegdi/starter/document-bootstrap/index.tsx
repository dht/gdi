import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const DocumentBootstrap = lazy(() => import('./DocumentBootstrap.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.document-bootstrap',
  name: 'DocumentBootstrap',
  description: 'DocumentBootstrap',
  component: (instance: IElement) => <DocumentBootstrap {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
