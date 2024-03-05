import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ApisPage = lazy(() => import('./ApisPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.apis-page',
  name: 'ApisPage',
  description: 'ApisPage',
  component: (instance: IElement) => <ApisPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
