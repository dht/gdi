import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Contacts = lazy(() => import('./Contacts.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.contacts',
  name: 'Contacts',
  description: 'Contacts',
  component: (instance: IElement) => <Contacts {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
