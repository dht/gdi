import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetNew = lazy(() => import('./AssetNew.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.asset-new',
  name: 'AssetNew',
  description: 'AssetNew',
  component: (instance: IElement) => <AssetNew {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
