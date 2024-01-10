import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const TikTok = lazy(() => import('./TikTok'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.tikTok',
  name: 'TikTok',
  description: 'TikTok',
  component: (instance: IElement) => <TikTok {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
