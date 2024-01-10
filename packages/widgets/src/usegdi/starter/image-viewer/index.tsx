import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ImageViewer = lazy(() => import('./ImageViewer.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.image-viewer',
  name: 'ImageViewer',
  description: 'ImageViewer',
  component: (instance: IElement) => <ImageViewer {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
