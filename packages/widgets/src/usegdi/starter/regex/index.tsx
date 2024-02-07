import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Regex = lazy(() => import('./Regex.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.regex',
  name: 'Regex',
  description: 'Regex',
  component: (instance: IElement) => <Regex {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
