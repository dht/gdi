import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Title = lazy(() => import('./Title.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.title',
  name: 'Title',
  description: 'Title',
  component: (instance: IElement) => <Title {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
