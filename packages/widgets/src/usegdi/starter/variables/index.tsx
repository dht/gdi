import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Variables = lazy(() => import('./Variables.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.variables',
  name: 'Variables',
  description: 'Variables',
  component: (instance: IElement) => <Variables {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
