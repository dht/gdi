import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ListItems = lazy(() => import('./ListItems.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.listItems',
  name: 'ListItems',
  description: 'ListItems',
  component: (instance: IElement) => <ListItems {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
