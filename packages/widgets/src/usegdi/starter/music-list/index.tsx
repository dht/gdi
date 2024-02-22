import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const MusicList = lazy(() => import('./MusicList.container'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.music-list',
  name: 'MusicList',
  description: 'MusicList',
  component: (instance: IElement) => <MusicList {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
