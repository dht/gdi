import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Calendar = lazy(() => import('./Calendar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.calendar',
  name: 'Calendar',
  description: 'Calendar',
  component: (instance: IElement) => <Calendar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
