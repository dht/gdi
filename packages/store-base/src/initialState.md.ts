import { IMyData } from './types.md';

export const initialStateMd: IMyData = {
  docs: {
    '1': {
      id: '1',
      title: 'First Document',
      content: 'This is the first document',
    },
  },
  contacts: {
    '1': {
      id: '1',
      name: 'First Contact',
      email: '',
    },
  },
  todos: {
    '1': {
      id: '1',
      title: 'First Todo',
      completed: false,
    },
  },
  financeLines: {
    '1': {
      id: '1',
      title: 'First Finance Line',
      amount: 100,
    },
  },
  lists: {
    '1': {
      id: '1',
      title: 'First List',
      items: ['1'],
    },
  },
  listItem: {
    '1': {
      id: '1',
      title: 'First List Item',
    },
  },
  events: {
    '1': {
      id: '1',
      title: 'First Event',
      date: new Date(),
    },
  },
  externalEvents: {
    '1': {
      id: '1',
      title: 'First External Event',
      date: new Date(),
    },
  },
  locations: {
    '1': {
      id: '1',
      title: 'First Location',
      lat: 0,
      lng: 0,
    },
  },
  books: {
    '1': {
      id: '1',
      title: 'First Book',
    },
  },
  reads: {
    '1': {
      id: '1',
      title: 'First Read',
    },
  },
  sales: {
    '1': {
      id: '1',
      title: 'First Sale',
      amount: 100,
    },
  },
  reminders: {
    '1': {
      id: '1',
      title: 'First Reminder',
      date: new Date(),
    },
  },
  things: {
    '1': {
      id: '1',
      title: 'First Thing',
    },
  },
};
