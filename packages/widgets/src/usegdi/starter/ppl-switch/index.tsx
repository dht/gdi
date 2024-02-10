import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const PplSwitch = lazy(() => import('./PplSwitch.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.ppl-switch',
  name: 'PplSwitch',
  description: 'PplSwitch',
  component: (instance: IElement) => <PplSwitch {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
