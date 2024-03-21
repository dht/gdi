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
  listItems: {
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
  posts: {
    '1': {
      id: '1',
      title: 'First Post',
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
  multis: {
    contacts: {
      id: 'contacts',
      name: 'Contacts',
      iconName: 'people',
      boardId: 'B-008',
      order: 1,
    },
    calendar: {
      id: 'calendar',
      name: 'Calendar',
      iconName: 'calendar_month',
      boardId: 'B-009',
      order: 2,
    },
    reminders: {
      id: 'reminders',
      name: 'Reminders',
      iconName: 'alarm',
      boardId: 'B-052',
      order: 3,
    },
    todos: {
      id: 'todos',
      name: 'Todos',
      iconName: 'task',
      boardId: 'B-012',
      order: 4,
    },
    documents: {
      id: 'documents',
      name: 'Docs',
      iconName: 'description',
      boardId: 'B-013',
      order: 5,
    },
    lists: {
      id: 'lists',
      name: 'Lists',
      iconName: 'notes',
      boardId: 'B-015',
      order: 6,
    },
    events: {
      id: 'events',
      name: 'Events',
      iconName: 'event',
      boardId: 'B-016',
      order: 7,
    },
    reads: {
      id: 'reads',
      name: 'Reads',
      iconName: 'book',
      boardId: 'B-020',
      order: 8,
    },
    posts: {
      id: 'posts',
      name: 'Posts',
      iconName: 'post_add',
      boardId: 'B-022',
      order: 9,
    },
    finances: {
      id: 'finances',
      name: 'Finances',
      iconName: 'credit_card',
      boardId: 'B-011',
      order: 10,
    },
  },
};
