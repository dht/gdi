import type { IFlowState } from '@gdi/store-base';
import { FlowMeta, INodeState, Json } from '@gdi/store-base';
import { get, mapValues } from 'lodash';
import { guid4 } from 'shared-base';
import { cleanUndefined } from '../utils/object';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const getFlow = async (req: any) => {
  const scopedPath = getScopedPath(req, '/flows/default', 'userData');
  return dbAdapter.getItem(scopedPath);
};

export const setFlow = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '/flows/default', 'userData');
  return dbAdapter.setItem(scopedPath, json);
};

export const getFlowRun = async (req: any) => {
  const scopedPath = getScopedPath(req, '/flowRuns/default', 'userData');
  return dbAdapter.getItem(scopedPath);
};

export const setFlowRun = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '/flowRuns/default', 'userData');
  return dbAdapter.setItem(scopedPath, cleanUndefined(json));
};

export const patchFlowRun = (req: any, change: Partial<FlowMeta>) => {
  const scopedPath = getScopedPath(req, '/flowRuns/default', 'userData');
  console.log('scopedPath ->', scopedPath);
  return dbAdapter.patchItem(scopedPath, cleanUndefined(change));
};

export const getVariables = async (req: any) => {
  const flowRun = await getFlowRun(req);
  console.log('flowRun ->', flowRun);
  return get(flowRun, 'variables', {});
};

export const patchVariables = async (req: any, change: Json) => {
  return patchFlowRun(req, { variables: cleanUndefined(change) });
};

export const patchFlowState = async (req: any, change: Partial<IFlowState>) => {
  return patchFlowRun(req, {
    flowState: cleanUndefined(change),
  });
};

export const patchNode = async (req: any, nodeId: string, change: Partial<INodeState>) => {
  return patchFlowRun(req, {
    nodeState: {
      [nodeId]: cleanUndefined(change),
    },
  });
};

export const getXPath = async (req: any, xpath: string) => {
  const flowRun = await getFlowRun(req);
  return get(flowRun, xpath);
};

export const clearFlow = async (req: any) => {
  let scopedPath;

  scopedPath = getScopedPath(req, '/flows/default', 'userData');
  await dbAdapter.deleteItem(scopedPath);

  scopedPath = getScopedPath(req, '/flowRuns/default', 'userData');
  await dbAdapter.deleteItem(scopedPath);
};

export const changePrompt = async (req: any, data: Json) => {
  const scopedPath = getScopedPath(req, '/prompts/default', 'userData');
  return dbAdapter.patchItem(scopedPath, {
    ...data,
    promptTs: Date.now(),
  });
};

export const patchDynamicFlow = async (req: any, assistant: Json) => {
  const data = await getFlow(req);
  const { flowNodes } = data;

  data.flowAssistants = {
    [assistant.id]: assistant,
  };

  data.flowNodes = mapValues(flowNodes, (node: any) => {
    if (node.assistantId) {
      node.assistantId = assistant.id;
    }

    return node;
  });

  return setFlow(req, data);
};

export const logNewAssistant = async (req: any, assistantId: string) => {
  const scopedPath = getScopedPath(req, `/myAssistants/${assistantId}`, 'userData');

  return dbAdapter.patchItem(scopedPath, {
    tsAdded: Date.now(),
  });
};

export const getUserNode = async (req: any, nodeName: string) => {
  const scopedPath = getScopedPath(req, `${nodeName}`, 'userData');
  return dbAdapter.getCollection(scopedPath);
};

export const all = {
  flow: {
    get: getFlow,
    set: setFlow,
    clear: clearFlow,
    patchNode,
    patchFlowState,
    patchDynamicFlow,
    getXPath,
    getUserNode,
  },
  runs: {
    get: getFlowRun,
    set: setFlowRun,
    patch: patchFlowRun,
    changePrompt,
  },
  variables: {
    get: getVariables,
    patch: patchVariables,
  },
  logs: {
    logNewAssistant,
  },
};
