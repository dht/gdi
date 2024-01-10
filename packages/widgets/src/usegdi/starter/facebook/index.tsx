import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Facebook = lazy(() => import('./Facebook'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.facebook',
  name: 'Facebook',
  description: 'Facebook',
  component: (instance: IElement) => <Facebook {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
