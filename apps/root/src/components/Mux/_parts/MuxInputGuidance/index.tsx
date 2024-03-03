import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MuxInputGuidance = lazy(() => import('./MuxInputGuidance.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.mux-input-guidance',
  name: 'MuxInputGuidance',
  description: 'MuxInputGuidance',
  component: (instance: IElement) => <MuxInputGuidance {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
