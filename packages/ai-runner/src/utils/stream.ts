export const mergeToolCalls = (output: any, tool_calls: any) => {
  if (!tool_calls) return;

  for (let index in tool_calls) {
    const toolCall = tool_calls[index];
    const func = toolCall.function;
    output[index] = output[index] || {};

    Object.keys(func).forEach((key) => {
      const value = func[key];
      output[index][key] = output[index][key] || '';
      output[index][key] += value;
    });
  }
};

export const parseToolCall = (toolCall: any) => {
  const output = { ...toolCall };

  try {
    const args = output.arguments;
    output.arguments = JSON.parse(args);
  } catch (_err: any) {}

  return output;
};

export const parseToolCalls = (toolCalls: any) => {
  return toolCalls.map((toolCall: any) => parseToolCall(toolCall));
};
