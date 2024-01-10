import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssetPreview = lazy(() => import('./AssetPreview.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.asset-preview',
  name: 'AssetPreview',
  description: 'AssetPreview',
  component: (instance: IElement) => <AssetPreview {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
