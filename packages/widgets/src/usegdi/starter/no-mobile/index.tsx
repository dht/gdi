import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const NoMobile = lazy(() => import('./NoMobile'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.no-mobile',
  name: 'NoMobile',
  description: 'NoMobile',
  component: (instance: IElement) => <NoMobile {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
