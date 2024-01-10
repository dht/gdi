import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ElementsManager = lazy(() => import('./ElementsManager.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.elements-manager',
  name: 'ElementsManager',
  description: 'ElementsManager',
  component: (instance: IElement) => <ElementsManager {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
