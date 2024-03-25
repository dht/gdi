import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Avatar = lazy(() => import('./Avatar.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.avatar',
  name: 'Avatar',
  description: 'Avatar',
  component: (instance: IElement) => <Avatar {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
