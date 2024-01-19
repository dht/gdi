import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const ImageSuggestion = lazy(() => import('./ImageSuggestion.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.image-suggestion',
  name: 'ImageSuggestion',
  description: 'ImageSuggestion',
  component: (instance: IElement) => <ImageSuggestion {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
