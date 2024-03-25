import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Subtitles = lazy(() => import('./Subtitles.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.subtitles',
  name: 'Subtitles',
  description: 'Subtitles',
  component: (instance: IElement) => <Subtitles {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
