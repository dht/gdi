import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const PostWriter = lazy(() => import('./PostWriter.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.post-writer',
  name: 'PostWriter',
  description: 'PostWriter',
  component: (instance: IElement) => <PostWriter {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
