import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Warhol = lazy(() => import('./Warhol.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.warhol',
  name: 'Warhol',
  description: 'Warhol',
  component: (instance: IElement) => <Warhol {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
