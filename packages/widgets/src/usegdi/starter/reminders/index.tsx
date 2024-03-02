import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Reminders = lazy(() => import('./Reminders.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.reminders',
  name: 'Reminders',
  description: 'Reminders',
  component: (instance: IElement) => <Reminders {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
