import { guid4 } from 'shared-base';
import run0 from './run-0.json';
import run1 from './run-1.json';

type Json = Record<string, any>;

export const openai = {
  beta: {
    assistants: {
      create: async (params: Json) => {
        return { id: guid4() };
      },
      list: async () => {},
      del: async (id: string) => {},
    },
    threads: {
      create: async (params: Json) => {
        return { id: guid4() };
      },
      messages: {
        list: async (threadId: string, context: Json) => {
          const { nodeId } = context;
          const data = nodeId === 'n-001' ? run0 : run1;

          return {
            data,
          };
        },
      },
      runs: {
        create: async (threadId: string, params: Json) => {
          return { id: guid4() };
        },
        retrieve: async (threadId: string, runId: string) => {
          return {
            status: 'done',
          };
        },
      },
    },
  },
  chat: {
    completions: {
      create: async (params: Json) => {},
    },
  },
};
