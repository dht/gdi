import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const $CMP = lazy(() => import('./$CMP.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.$CMPKebabcase',
  name: '$CMP',
  description: '$CMP',
  component: (instance: IElement) => <$CMP {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
