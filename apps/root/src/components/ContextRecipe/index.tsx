import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ContextRecipe = lazy(() => import('./ContextRecipe.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.context-recipe',
  name: 'ContextRecipe',
  description: 'ContextRecipe',
  component: (instance: IElement) => <ContextRecipe {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
