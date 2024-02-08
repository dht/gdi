import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const DidYouKnow = lazy(() => import('./DidYouKnow.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.did-you-know',
  name: 'DidYouKnow',
  description: 'DidYouKnow',
  component: (instance: IElement) => <DidYouKnow {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
