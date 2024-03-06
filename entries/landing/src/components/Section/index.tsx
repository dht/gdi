import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Section = lazy(() => import('./Section.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.section',
  name: 'Section',
  description: 'Section',
  component: (instance: IElement) => <Section {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
