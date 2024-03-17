import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Documents = lazy(() => import('./Documents.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.documents',
  name: 'Documents',
  description: 'Documents',
  component: (instance: IElement) => <Documents {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
