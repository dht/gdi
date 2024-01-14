import { get } from 'lodash';
import { FlowMeta, Json, INodeState } from '@gdi/store-base';
import db from '../db';
import { seedFlowMeta } from '../data/flowMeta';

export const prepareState = (req: any, flow: any) => {
  const { prompt } = flow;

  const change: Partial<FlowMeta> = {
    flowState: {
      tsStart: Date.now(),
      status: 'running',
    },
    variables: { prompt },
    nodeState: {},
  };

  const { flowConfig, flowNodes } = flow;
  const { variables } = flowConfig;

  // variables
  Object.keys(variables ?? {}).forEach((key: string) => {
    const xpath = variables[key];
    const value = get(flow, xpath) || get(change, xpath);
    change.variables![key] = value;
  });

  // nodeRunIds + nodeState + nodeStats
  Object.values(flowNodes).forEach((node: any) => {
    change.nodeState![node.id] = {
      id: node.id,
      tsStart: 0,
      status: 'idle',
    };
  });

  return db.runs.patch(req, change);
};

export const bakeValue = (variables: Json, valueRaw: any) => {
  const regex = /\$\{(.*?)\}/g;

  const matches = valueRaw.match(regex);

  if (!matches) {
    return valueRaw;
  }

  let match: any;

  for (match of matches) {
    const key = match.replace('${', '').replace('}', '');
    const variable = get(variables, key, '');

    if (typeof variable === 'object') {
      valueRaw = variable;
    } else {
      valueRaw = valueRaw.replace(match, variable);
    }
  }

  return valueRaw;
};

export const bakeInput = (input: Json, variables: Json) => {
  return Object.keys(input).reduce((acc: Json, key: string) => {
    const valueRaw = input[key];
    const valueBaked = bakeValue(variables, valueRaw);
    acc[key] = valueBaked;
    return acc;
  }, {});
};

export const findNodesToRun = (
  parentId: string,
  flowNode: Json,
  nodeState: Record<string, INodeState>
) => {
  const childNodes = Object.values(flowNode).filter((node: any) => {
    const parentIds = Array.isArray(node.parentId) ? node.parentId : [node.parentId];
    return parentIds.includes(parentId);
  });

  const readyNodes = childNodes.filter((node: any) => {
    const parentIds = Array.isArray(node.parentId) ? node.parentId : [node.parentId];

    return parentIds.every((parentId: string) => {
      const parentNode = nodeState[parentId];

      return parentNode.status === 'done';
    });
  });

  return readyNodes.map((node) => node.id);
};

export const resetFlowRun = async (req: any, flow: any) => {
  const flowType = get(flow, 'flowConfig.flowType');

  const flowMeta: any = seedFlowMeta(flowType);

  if (flowType === 'continues') {
    delete flowMeta.variables;
    delete flowMeta.assistantIds;
    await db.runs.patch(req, flowMeta);
  } else {
    await db.runs.set(req, flowMeta);
  }
};
