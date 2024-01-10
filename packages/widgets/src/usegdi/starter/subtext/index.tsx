import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Subtext = lazy(() => import('./Subtext'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.subtext',
  name: 'Subtext',
  description: 'Subtext',
  component: (instance: IElement) => <Subtext {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
