import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Footer = lazy(() => import('./Footer'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.footer',
  name: 'Footer',
  description: 'Footer',
  component: (instance: IElement) => <Footer {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
