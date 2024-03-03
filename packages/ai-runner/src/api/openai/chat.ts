import { get } from 'lodash';
import { openai } from './_init';
import { mergeToolCalls, parseToolCalls } from '../../utils/stream';

type Flavour = 'turbo4' | 'turbo3';

const map: Record<Flavour, string> = {
  turbo4: 'gpt-3.5-turbo-1106 ',
  turbo3: 'gpt-3.5-turbo',
};

export const chat = async (prompt: string, flavour: Flavour = 'turbo3') => {
  const model = map[flavour];

  const res = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    n: 1,
    stop: '{}',
  });

  if (res.choices.length > 0) {
    const generatedText = get(res, 'choices[0].message.content', '').trim();
    return { text: generatedText };
  } else {
    throw new Error('No choices available');
  }
};

export const stream = (
  messages: any[],
  tools: any[],
  callback: any,
  flavour: Flavour = 'turbo3'
) => {
  return new Promise(async (resolve) => {
    const tsStart = Date.now();

    const model = map[flavour];
    try {
      const res: any = await openai.chat.completions.create({
        model,
        messages,
        temperature: 0,
        stream: true,
        stop: '{}',
        response_format: {
          type: 'text',
        },
        tools,
      });

      let allContent = '',
        finishReason = '',
        toolCalls: any = [];

      for await (const item of res.iterator()) {
        const content = get(item, 'choices[0].delta.content', '');
        const tool_calls = get(item, 'choices[0].delta.tool_calls', '');
        finishReason = get(item, 'choices[0].finish_reason');

        allContent += content;

        if (allContent) {
          callback(allContent);
        }

        mergeToolCalls(toolCalls, tool_calls);
      }

      const tsEnd = Date.now();
      const duration = (tsEnd - tsStart) / 1000;

      toolCalls = parseToolCalls(toolCalls);

      resolve({
        success: true,
        content: allContent,
        finishReason,
        duration,
        tsStart,
        tsEnd,
        toolCalls,
      });
    } catch (err: any) {
      console.error('An error occurred:', err);
      resolve({
        success: false,
        error: err.message,
      });
    }
  });
};

export const completion = async (prompt: string, flavour: Flavour = 'turbo3') => {
  const model = map[flavour];

  const res = await openai.completions.create({
    model,
    prompt,
    n: 1,
    stop: '{}',
  });

  return res;
};
