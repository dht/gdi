export const tools = [
  {
    type: 'function',
    function: {
      name: 'getAppIdForTask',
      description: 'Get the app ID for a given task',
      parameters: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description:
              'The task description e.g. "manage todos" or "create 3D animation"',
          },
          taskType: {
            type: 'string',
            enum: [
              'todos',
              'assets',
              'contacts',
              'iot',
              'news',
              'books',
              'finances',
              '3d',
              'voice over',
              'regex',
              'calendar',
              'social_post',
              'documents',
            ],
          },
        },
        required: ['prompt', 'taskType'],
      },
    },
  },
];
