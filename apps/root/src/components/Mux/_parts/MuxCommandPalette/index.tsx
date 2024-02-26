import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxCommandPalette = lazy(() => import('./MuxCommandPalette.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-command-palette',
  name: 'MuxCommandPalette',
  description: 'MuxCommandPalette',
  component: (instance: IElement) => <MuxCommandPalette {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
