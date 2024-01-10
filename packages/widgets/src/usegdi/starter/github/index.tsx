import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Github = lazy(() => import('./Github.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.github',
  name: 'Github',
  description: 'Github',
  component: (instance: IElement) => <Github {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
