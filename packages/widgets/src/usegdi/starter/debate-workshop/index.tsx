import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const DebateWorkshop = lazy(() => import('./DebateWorkshop.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.debate-workshop',
  name: 'DebateWorkshop',
  description: 'DebateWorkshop',
  component: (instance: IElement) => <DebateWorkshop {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
