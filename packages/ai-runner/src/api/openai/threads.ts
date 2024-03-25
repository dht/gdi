import { Json, ThreadCreateParams } from '../../types';
import { AIResponseBuilder } from '../../utils/response';
import { mergeToolCalls, parseToolCall, parseToolCalls } from '../../utils/stream';
import { openai } from './_init';
import { calculateAssistantCosts } from './_utils';

export const create = async (params: ThreadCreateParams) => {
  const thread = await openai.beta.threads.create(params);
  return thread;
};

export const remove = async (id: string) => {
  const response = await openai.beta.threads.del(id);
  return response;
};

export const getMessages = async (threadId: string, context: Json) => {
  const { modelId } = context;
  const responseBuilder = new AIResponseBuilder();
  let response: any;

  try {
    response = await openai.beta.threads.messages.list(threadId, context);
    responseBuilder //
      .withData(response.data)
      .withCost(calculateAssistantCosts(response.data, modelId));
  } catch (err: any) {
    const { message, type } = err?.error ?? {};
    responseBuilder.withError(message, type);
  }

  return responseBuilder.build();
};

export const addMessage = async (threadId: string, prompt: string) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    content: prompt,
    role: 'user',
  });

  return message;
};

export const createRun = async (threadId: string, assistantId: string) => {
  let run;

  try {
    run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
  } catch (err: any) {}

  return run;
};

export const createStreamedRun = (threadId: string, assistantId: string, callback?: any) => {
  let run;

  return new Promise((resolve) => {
    const tsStart = Date.now();

    try {
      let allContent = '',
        finishReason = '',
        toolCalls: any = [],
        runId: string = '';

      run = openai.beta.threads.runs
        .createAndStream(threadId, {
          assistant_id: assistantId,
        })
        .on('textCreated', () => {
          allContent = '';
        })
        .on('event', (params: any) => {
          const { event, data } = params;

          if (event === 'thread.run.created') {
            const { id } = data;
            runId = id;
          }
        })
        .on('textDelta', (textDelta, _snapshot) => {
          allContent += textDelta.value;
          if (!callback) return;
          callback(allContent);
        })
        .on('toolCallCreated', (toolCall) => {
          toolCalls.push(toolCall);
          finishReason = 'tool_calls';
        })
        .on('toolCallDelta', (toolCallDelta, _snapshot) => {
          const { type } = toolCallDelta;

          if (type !== 'function') return;

          mergeToolCalls(toolCalls, toolCallDelta);
        })
        .on('error', (err) => {
          resolve({
            success: false,
            error: err.message,
          });
        })
        .on('end', async () => {
          const tsEnd = Date.now();
          const duration = (tsEnd - tsStart) / 1000;

          resolve({
            success: true,
            content: allContent,
            finishReason,
            duration,
            tsStart,
            tsEnd,
            toolCalls: parseToolCalls(toolCalls),
            threadId,
            runId,
          });
        });
    } catch (err: any) {
      resolve({
        success: false,
        error: err.message,
      });
    }
  });
};

export const closeRun = async (threadId: string, runId: string) => {
  await openai.beta.threads.runs.cancel(threadId, runId);
};

export const getRun = async (threadId: string, runId: string) => {
  const run = await openai.beta.threads.runs.retrieve(threadId, runId);
  return run;
};

type ToolOutput = {
  tool_call_id: string;
  output: string;
};

export const submitToolOutputs = async (threadId: string, runId: string, outputs: ToolOutput[]) => {
  const run = await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
    tool_outputs: outputs,
  });

  return run;
};
