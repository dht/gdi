import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const UnderConstruction = lazy(() => import('./UnderConstruction.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.under-construction',
  name: 'UnderConstruction',
  description: 'UnderConstruction',
  component: (instance: IElement) => <UnderConstruction {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
