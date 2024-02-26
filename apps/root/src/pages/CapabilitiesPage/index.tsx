import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const CapabilitiesPage = lazy(() => import('./CapabilitiesPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.capabilities-page',
  name: 'CapabilitiesPage',
  description: 'CapabilitiesPage',
  component: (instance: IElement) => <CapabilitiesPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
