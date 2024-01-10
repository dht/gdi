export const fixtureMessages = [
  {
    id: '1',
    object: 'thread.message',
    created_at: 1701309051,
    thread_id: 't1',
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: {
          value: 'Rachel: ever what?\nplease continue...',
          annotations: [],
        },
      },
    ],
    file_ids: [],
    assistant_id: 'a1',
    run_id: 'r1',
    metadata: {},
  },
  {
    id: '3',
    object: 'thread.message',
    created_at: 1701309051,
    thread_id: 't1',
    role: 'user',
    content: [
      {
        type: 'text',
        text: {
          value: 'continue',
          annotations: [],
        },
      },
    ],
    file_ids: [],
    assistant_id: 'a1',
    run_id: 'r1',
    metadata: {},
  },
  {
    id: '2',
    object: 'thread.message',
    created_at: 1701309051,
    thread_id: 't1',
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: {
          value: 'Sam: Hey guys, have you ever',
          annotations: [],
        },
      },
    ],
    file_ids: [],
    assistant_id: 'a1',
    run_id: 'r1',
    metadata: {},
  },
  {
    id: '1',
    object: 'thread.message',
    created_at: 1701309050,
    thread_id: 't1',
    role: 'user',
    content: [
      {
        type: 'text',
        text: {
          value: 'generate a conversation about beer',
          annotations: [],
        },
      },
    ],
    file_ids: [],
    assistant_id: null,
    run_id: null,
    metadata: {},
  },
];
