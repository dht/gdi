export const createMuxAssistant = (tools: any) => ({
  id: 'as-mux',
  name: 'Mux',
  description: 'A general-purpose assistant.',
  instructions:
    'This assistant is a general-purpose assistant that can help with a wide variety of tasks.',
  model: 'gpt-3.5-turbo-1106',
  tools,
});
