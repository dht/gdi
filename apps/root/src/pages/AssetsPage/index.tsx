import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetsPage = lazy(() => import('./AssetsPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.assets-page',
  name: 'AssetsPage',
  description: 'AssetsPage',
  component: (instance: IElement) => <AssetsPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
