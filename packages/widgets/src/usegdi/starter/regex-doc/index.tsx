import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const RegexDoc = lazy(() => import('./RegexDoc.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.regex-doc',
  name: 'RegexDoc',
  description: 'RegexDoc',
  component: (instance: IElement) => <RegexDoc {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
