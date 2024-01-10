import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Multi = lazy(() => import('./Multi.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.multi',
  name: 'Multi',
  description: 'Multi',
  component: (instance: IElement) => <Multi {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
