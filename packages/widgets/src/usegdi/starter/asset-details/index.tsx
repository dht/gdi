import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetDetails = lazy(() => import('./AssetDetails.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.asset-details',
  name: 'AssetDetails',
  description: 'AssetDetails',
  component: (instance: IElement) => <AssetDetails {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
