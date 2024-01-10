import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Logger = lazy(() => import('./Logger.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.logger',
  name: 'Logger',
  description: 'Logger',
  component: (instance: IElement) => <Logger {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
