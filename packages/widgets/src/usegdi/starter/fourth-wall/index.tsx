import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const FourthWall = lazy(() => import('./FourthWall.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.fourth-wall',
  name: 'FourthWall',
  description: 'FourthWall',
  component: (instance: IElement) => <FourthWall {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
