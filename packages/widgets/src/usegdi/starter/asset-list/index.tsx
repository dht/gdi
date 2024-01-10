import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetList = lazy(() => import('./AssetList.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.asset-list',
  name: 'AssetList',
  description: 'AssetList',
  component: (instance: IElement) => <AssetList {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
