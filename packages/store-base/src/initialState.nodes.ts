import { IFlow } from './types';

export const flow: IFlow = {
  flowConfig: {
    flowId: 'fc-005',
    name: 'Park Conversation',
    variables: {
      topic: 'variables.prompt',
    },
    flowType: 'linear',
  },
  flowApis: {
    conversation: {
      id: 'conversation',
      endpoint: 'speech.conversation',
      vendor: 'elevenLabs',
    },
  },
  flowAssistants: {
    'as-005-transcript': {
      id: 'as-005-transcript',
      name: 'Park chat',
      description:
        'A conversational assistant that generates a conversation between three teenagers.',
      instructions:
        'You are a conversational assistant that generates a conversation between three teenagers. Given a topic, try to simulate a realistic conversation between Sam, Rachel, and Arnold.',
      model: 'gpt-3.5-turbo-1106',
      tools: [],
    },
  },
  flowState: {
    status: 'idle',
    tsStart: 0,
  },
  flowNodes: {
    'n-001': {
      id: 'n-001',
      name: 'Transcript',
      nodeType: 'llm',
      assistantId: 'as-005-transcript',
      input: {
        prompt: 'generate a conversation about ${topic}',
      },
      variables: {
        transcriptRaw: '[0].content[0].text.value',
        transcriptLines: '$conversationSplitTranscript',
      },
      parentId: '',
      completionParams: {
        maxTokens: 200,
      },
      position: { x: 250, y: 0 },
      connectors: ['n-002', 'n-003'],
      isStart: true,
      tsStart: 0,
      tsEnd: 0,
      tsDuration: 0,
      runId: '',
      threadId: '',
      status: 'idle',
      isRunning: false,
    },
  },
};
