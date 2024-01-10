import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Chat = lazy(() => import('./Chat.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.chat',
  name: 'Chat',
  description: 'Chat',
  component: (instance: IElement) => <Chat {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
