import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const IssueSubmitted = lazy(() => import('./IssueSubmitted.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.issue-submitted',
  name: 'IssueSubmitted',
  description: 'IssueSubmitted',
  component: (instance: IElement) => <IssueSubmitted {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
