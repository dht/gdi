import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const RootPage = lazy(() => import('./RootPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.root-page',
  name: 'RootPage',
  description: 'RootPage',
  component: (instance: IElement) => <RootPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
