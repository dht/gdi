import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Posts = lazy(() => import('./Posts.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.posts',
  name: 'Posts',
  description: 'Posts',
  component: (instance: IElement) => <Posts {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
