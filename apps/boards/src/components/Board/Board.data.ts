import type { IWidgets, IElement, IElements } from 'igrid';

export const elements: IElements = {
  e1: {
    id: 'e1',
    widgetId: 'com.usegdi.starter.logo',
    title: 'Logo',
    position: {
      x: 2,
      y: 2,
    },
    dimension: {
      x: 20,
      y: 6,
    },
    boardId: 'starter',
    flags: {},
  },
  e2: {
    id: 'e2',
    widgetId: 'com.usegdi.starter.overview3d',
    title: 'overview3d',
    position: {
      x: 56,
      y: 2,
    },
    dimension: {
      x: 63,
      y: 24,
    },
    boardId: 'starter',
    flags: {},
  },
  e3: {
    id: 'e3',
    widgetId: 'com.usegdi.starter.transcript',
    title: 'Transcript',
    position: {
      x: 56,
      y: 27,
    },
    dimension: {
      x: 63,
      y: 19,
    },
    boardId: 'starter',
    flags: {},
    flavour: 'outcome',
  },
  e4: {
    id: 'e4',
    widgetId: 'com.usegdi.starter.flow',
    title: 'Flow',
    position: {
      x: 5,
      y: 7,
    },
    dimension: {
      x: 44,
      y: 40,
    },
    boardId: 'flow',
    flags: {},
  },
  e5: {
    id: 'e5',
    widgetId: 'com.usegdi.starter.github',
    title: 'Github',
    position: {
      x: 52,
      y: 44,
    },
    dimension: {
      x: 1,
      y: 1,
    },
    boardId: 'starter',
    flags: {},
  },
  e6: {
    id: 'e6',
    widgetId: 'com.usegdi.starter.playback',
    title: 'Playback',
    position: {
      x: 57,
      y: 3,
    },
    dimension: {
      x: 25,
      y: 5,
    },
    boardId: 'conversation',
    flags: {},
  },
  e7: {
    id: 'e7',
    widgetId: 'com.usegdi.starter.mode',
    title: 'Mode',
    position: {
      x: 110,
      y: 1,
    },
    dimension: {
      x: 16,
      y: 2,
    },
    boardId: 'conversation',
    flags: {},
  },
  e8: {
    id: 'e8',
    widgetId: 'com.usegdi.starter.logger',
    title: 'Logger',
    position: {
      x: 56,
      y: 27,
    },
    dimension: {
      x: 63,
      y: 19,
    },
    boardId: 'conversation',
    flags: {},
    flavour: 'prepare',
  },
  e9: {
    id: 'e9',
    widgetId: 'com.usegdi.starter.start-play',
    title: 'StartPlay',
    position: {
      x: 56,
      y: 27,
    },
    dimension: {
      x: 63,
      y: 19,
    },
    boardId: 'conversation',
    flags: {},
    flavour: 'default',
  },
};
