import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Logo = lazy(() => import('./Logo.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.logo',
  name: 'Logo',
  description: 'Logo',
  component: (instance: IElement) => <Logo {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
