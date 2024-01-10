import { ITodos } from './types';

type ITodosStore = {
  todos: ITodos;
};

export const initialStateTodos: ITodosStore = {
  todos: {
    '1': {
      id: '1',
      title: 'Buy food',
      completed: false,
    },
  },
};
