import type { IWidget, IElement } from 'igrid';
import { lazy } from 'react';

const Spotify = lazy(() => import('./Spotify'));

export const widget: IWidget = {
  id: 'com.usegdi.starter.spotify',
  name: 'Spotify',
  description: 'Spotify',
  component: (instance: IElement) => <Spotify {...(instance.props as any)} />,
  size: {
    defaultSize: {
      x: 10,
      y: 10,
    },
  },
  tags: ['starter'],
};

export default widget;
