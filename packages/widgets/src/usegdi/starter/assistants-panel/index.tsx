import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const AssistantsPanel = lazy(() => import('./AssistantsPanel.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.assistants-panel',
  name: 'AssistantsPanel',
  description: 'AssistantsPanel',
  component: (instance: IElement) => <AssistantsPanel {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
