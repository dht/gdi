import { IBarItems } from './types';

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;

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
  setups: {
    id: 'setups',
    value: '$setupsCount',
    emoji: '💡',
  },
  adapter: {
    id: 'adapter',
    value: '$flowAdapterProvider',
    emoji: '🔌',
  },
  tags: {
    id: 'tags',
    value: '$tagsCount',
    emoji: '🏷️',
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
