import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxBoards = lazy(() => import('./MuxBoards.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-boards',
  name: 'MuxBoards',
  description: 'MuxBoards',
  component: (instance: IElement) => <MuxBoards {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
