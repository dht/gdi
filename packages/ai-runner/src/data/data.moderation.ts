export const endpointInputChecks = {
  '/chat': {
    body: ['prompt'],
  },
  '/chat/stream': {
    body: ['messages'],
  },
  '/image': {
    body: ['prompt'],
  },
  '/speech': {
    body: ['text'],
  },
  '/eleven': {
    body: ['prompt'],
  },
  '/flow/prepare': {
    body: ['prompt'],
  },
  '/flow/prompt': {
    body: ['prompt', 'params'],
  },
};
