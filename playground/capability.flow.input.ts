export const flow = {
  prompt: 'quantum physics',
  flowConfig: {
    flowId: 'fc-005',
    name: 'Park Conversation',
    variables: {
      topic: 'variables.prompt',
    },
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
    'as-005-phonetics': {
      id: 'as-005-phonetics',
      name: 'Phonetics Tutor',
      description: 'A phonetics expert that provides phonetic representation of sentences.',
      instructions:
        'You are an expert in phonetics. Given a conversation between 3 teenagers, provide the phonetic representation of each sentence. Return only the conversation with phonetics instead of english.',
      model: 'gpt-3.5-turbo-1106',
      tools: [],
    },
  },
  flowNodes: {
    'n-001': {
      id: 'n-001',
      name: 'Transcript',
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
      isStart: true,
    },
    'n-002': {
      id: 'n-002',
      name: 'Phonetics',
      assistantId: 'as-005-phonetics',
      input: {
        prompt: 'generate a phonetic representation of ${transcriptRaw}',
      },
      variables: {
        transcriptPhonetics: '[0].content[0].text.value',
        transcriptLines: '$conversationAddPhonetics',
      },
      parentId: 'n-001',
    },
    'n-003': {
      id: 'n-003',
      name: 'Speech',
      parentId: 'n-001',
      apiId: 'conversation',
      input: {
        transcript: '${transcriptLines}',
      },
      variables: {
        transcriptAudios: 'files',
      },
    },
    'n-004': {
      id: 'n-004',
      name: 'Play',
      parentId: ['n-002', 'n-003'],
      isEnd: true,
    },
  },
};
