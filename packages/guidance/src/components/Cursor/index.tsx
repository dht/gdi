import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Cursor = lazy(() => import('./Cursor.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.cursor',
  name: 'Cursor',
  description: 'Cursor',
  component: (instance: IElement) => <Cursor {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
