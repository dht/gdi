export const capabilities = [
  {
    type: 'function',
    function: {
      name: 'animation-3d',
      description: 'Create a 3D Animation: Create a 3D animation using various AI-powered sources',
    },
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'The topic of the animation',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'prepare-meeting',
      description: 'Prepare for a Meeting: Prepare for a meeting using AI-powered tools',
    },
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'The topic of the meeting',
        },
        attendees: {
          type: 'string',
          description: 'The attendees of the meeting',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'build-a-website',
      description: 'Build a website: Build a website using AI-powered tools',
    },
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'The topic of the website',
        },
        style: {
          type: 'string',
          description: 'The style of the website',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'write-a-post',
      description: 'Write a post: Write a post using AI-powered tools',
    },
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'The topic of the post',
        },
        style: {
          type: 'string',
          description: 'The style of the post',
        },
        platform: {
          type: 'string',
          description: 'The platform of the post',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'manage-finances',
      description: 'Manage Finances: Manage your finances using AI-powered tools',
    },
    parameters: {
      type: 'object',
      properties: {
        personal: {
          type: 'boolean',
          description: 'Personal or business',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'rhetoric',
      description: 'Rhetoric: Build an argument using AI-powered tools',
    },
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'The topic of the argument',
        },
      },
      required: [],
    },
  },
  {
    type: 'function',
    function: {
      name: 'debug-express',
      description: 'Debug an Express App: Debug an Express app using AI-powered tools',
    },
  },
];
