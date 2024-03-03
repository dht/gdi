import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ReportIssuePage = lazy(() => import('./ReportIssuePage.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.report-issue-page',
  name: 'ReportIssuePage',
  description: 'ReportIssuePage',
  component: (instance: IElement) => <ReportIssuePage {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
