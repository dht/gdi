import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ImageParams = lazy(() => import('./ImageParams.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.image-params',
  name: 'ImageParams',
  description: 'ImageParams',
  component: (instance: IElement) => <ImageParams {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
