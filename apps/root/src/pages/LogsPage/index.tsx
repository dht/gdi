import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const LogsPage = lazy(() => import('./LogsPage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.logs-page',
  name: 'LogsPage',
  description: 'LogsPage',
  component: (instance: IElement) => <LogsPage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
