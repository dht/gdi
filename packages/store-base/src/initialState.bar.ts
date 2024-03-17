import { IBarItems } from './types';

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;
const isWindows = !isMac;

export const barItems: IBarItems = {
  flowStatus: {
    id: 'flowStatus',
    value: '$flowStatus',
    addClassName: true,
  },
  boardId: {
    id: 'boardId',
    value: '$boardIdShort',
  },
  // setups: {
  //   id: 'setups',
  //   value: '$setupsCount',
  //   emoji: '💡',
  // },
  adapter: {
    id: 'adapter',
    value: '$flowAdapterProvider',
    emoji: '🔌',
  },
  project: {
    id: 'project',
    value: '$project',
    shortKey: {
      key: 'p',
      withCtrl: isMac,
      withAlt: isWindows,
    },
  },
  assets: {
    id: 'assets',
    value: '$assetsCount',
    emoji: '🗂️',
    shortKey: {
      key: 'a',
      withCtrl: isMac,
      withAlt: isWindows,
    },
  },
  tags: {
    id: 'tags',
    value: '$tagsCount',
    emoji: '🏷️',
    shortKey: {
      key: 't',
      withCtrl: isMac,
      withAlt: isWindows,
    },
  },
  resolution: {
    id: 'resolution',
    value: '$resolution',
  },
  time: {
    id: 'time',
    value: '$time',
  },
  commandPalette: {
    id: 'commandPalette',
    value: 'k',
    modifier: isMac ? '⌘' : 'ctrl',
  },
};
