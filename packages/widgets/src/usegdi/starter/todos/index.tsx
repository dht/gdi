import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Todos = lazy(() => import('./Todos.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.todos',
  name: 'Todos',
  description: 'Todos',
  component: (instance: IElement) => <Todos {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
