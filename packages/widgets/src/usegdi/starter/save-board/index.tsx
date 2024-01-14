import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SaveBoard = lazy(() => import('./SaveBoard.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.save-board',
  name: 'SaveBoard',
  description: 'SaveBoard',
  component: (instance: IElement) => <SaveBoard {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
