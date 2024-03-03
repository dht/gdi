import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Notifications = lazy(() => import('./Notifications.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.notifications',
  name: 'Notifications',
  description: 'Notifications',
  component: (instance: IElement) => <Notifications {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
