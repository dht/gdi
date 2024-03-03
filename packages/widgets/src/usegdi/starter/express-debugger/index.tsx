import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ExpressDebugger = lazy(() => import('./ExpressDebugger.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.express-debugger',
  name: 'ExpressDebugger',
  description: 'ExpressDebugger',
  component: (instance: IElement) => <ExpressDebugger {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
