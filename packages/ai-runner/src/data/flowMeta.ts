import { guid4 } from 'shared-base';
import type { FlowMeta, FlowType, Cost } from '@gdi/store-base';

export const seedFlowMeta = (flowType: FlowType): FlowMeta => {
  const output: Partial<FlowMeta> = {
    id: guid4(),
    flowType,
    flowState: {
      status: 'running',
      tsStart: Date.now(),
    },
    nodeState: {},
    variables: {},
    assistantIds: {},
  };

  return output as FlowMeta;
};
