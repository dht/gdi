import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const HistoryPage = lazy(() => import('./HistoryPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.history-page',
  name: 'HistoryPage',
  description: 'HistoryPage',
  component: (instance: IElement) => <HistoryPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
