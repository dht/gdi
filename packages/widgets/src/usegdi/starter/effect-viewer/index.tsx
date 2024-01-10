import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const EffectPreview = lazy(() => import('./EffectViewer.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.EffectPreview',
  name: 'EffectPreview',
  description: 'EffectPreview',
  component: (instance: IElement) => <EffectPreview {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
