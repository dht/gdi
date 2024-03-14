import { Json, ThreadCreateParams } from '../../types';
import { AIResponseBuilder } from '../../utils/response';
import { openai } from './_init';
import { calculateAssistantCosts } from './_utils';

export const create = async (params: ThreadCreateParams) => {
  const thread = await openai.beta.threads.create(params);
  return thread;
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

export const createStreamedRun = async (threadId: string, assistantId: string, callback: any) => {
  let run;

  try {
    let allContent = '';

    run = openai.beta.threads.runs
      .createAndStream(threadId, {
        assistant_id: assistantId,
      })
      .on('textCreated', (text) => {
        allContent = '';
      })
      .on('textDelta', (textDelta, snapshot) => {
        allContent += textDelta.value;
        callback(allContent);
      })
      .on('toolCallCreated', (toolCall) => {
        console.log('toolCall ->', toolCall);
      })
      .on('toolCallDelta', (toolCallDelta, snapshot) => {
        console.log('toolCallDelta ->', toolCallDelta);

        if (toolCallDelta.type === 'code_interpreter') {
          if (toolCallDelta.code_interpreter?.input) {
            console.log('toolCallDelta ->', toolCallDelta);
          }
          if (toolCallDelta.code_interpreter?.outputs) {
            process.stdout.write('\noutput >\n');
            toolCallDelta.code_interpreter.outputs.forEach((output) => {
              if (output.type === 'logs') {
                console.log('output.logs ->', output.logs);
              }
            });
          }
        }
      });

    const result = await run;
    console.log('result ->', result);
  } catch (err: any) {
    console.log('err.data ->', err.data);
  }

  return run;
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
