import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Blank = lazy(() => import('./Blank.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.blank',
  name: 'Blank',
  description: 'Blank',
  component: (instance: IElement) => <Blank {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
