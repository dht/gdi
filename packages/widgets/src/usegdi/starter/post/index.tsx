import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Post = lazy(() => import('./Post.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.post',
  name: 'Post',
  description: 'Post',
  component: (instance: IElement) => <Post {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
