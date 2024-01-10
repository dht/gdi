import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const SceneBuilder = lazy(() => import('./SceneBuilder.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.scene-builder',
  name: 'Scene Builder',
  description: 'Scene Builder',
  component: (instance: IElement) => <SceneBuilder {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
