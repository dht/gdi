import { get } from 'lodash';
import { Json } from '../types';
import db from '../db';
import { bakeInput, findNodesToRun, prepareState } from './flow.utils';
import { runWorkflow } from './workflows';
import { bootstrapAssistants } from './workflows/workflow.llm';
import { guid4 } from 'shared-base';

export const runFlow = async (req: any, flow: any) => {
  await prepareState(req, flow);
  await bootstrapAssistants(req, flow);

  const firstNode = Object.values(flow.flowNodes).find((node: any) => node.isStart);
  await runNode(req, firstNode, flow);

  return db.runs.get(req);
};

export const runNodeWorkflow = async (req: any, node: any, flow: any) => {
  const { flowApis, flowAssistants, flowConfig, promptParams } = flow;

  const { flowType, cumulativeThread } = flowConfig;

  console.time(`run node ${node.id} ${node.name}`);

  const tsStart = Date.now();

  await db.flow.patchNode(req, node.id, {
    status: 'running',
    tsStart,
  });

  const stateVariables = await db.variables.get(req);
  let stateChange: Json = { status: 'done' };

  // llm
  if (node.assistantId) {
    const modelId = get(flowAssistants, `${node.assistantId}.model`);
    const params = { node, stateVariables, modelId, flowType, cumulativeThread, promptParams }; // prettier-ignore
    const result = await runWorkflow(req, { endpoint: 'llm.oneShot' }, params);
    await db.variables.patch(req, result[0]);
    stateChange = result[1];
  } else if (node.apiId) {
    // api
    const flowApi = flowApis[node.apiId];
    const params = bakeInput(node.input, stateVariables);
    const result = await runWorkflow(req, flowApi, { ...params, promptParams });
    await db.variables.patch(req, result[0]);
    stateChange = result[1];
  }

  const tsEnd = Date.now();
  const duration = tsEnd - tsStart;

  await db.flow.patchNode(req, node.id, {
    tsEnd,
    duration,
    ...stateChange,
  });

  console.timeEnd(`run node ${node.id} ${node.name}`);
};

export const runNode = async (req: any, node: any, flow: any) => {
  const { flowNodes, flowConfig } = flow;

  console.time(`run node ${node.id}`);

  await runNodeWorkflow(req, node, flow);

  // find ready nodes to run
  console.time(`run child nodes ${node.id}`);
  const nodeState = await db.getXPath(req, 'nodeState');
  const readyNodesId = findNodesToRun(node.id, flowNodes, nodeState);

  const promises = readyNodesId.map((nodeId: any) => {
    const node = flowNodes[nodeId];
    return runNode(req, node, flow);
  });

  await Promise.all(promises);

  console.timeEnd(`run child nodes ${node.id}`);

  if (node.isEnd) {
    await onFlowCompleted(req, flow);
  }
};

export const onFlowCompleted = async (req: any, flow: any) => {
  const { flowConfig } = flow;

  console.log('flow done');

  let playbackId = '';

  if (flowConfig.flowType === 'linear') {
    playbackId = guid4();
    await savePlayback(req, playbackId);
  }

  const tsEnd = Date.now();

  await db.flow.patchFlowState(req, {
    tsEnd: Date.now(),
    status: 'done',
    duration: tsEnd - req.tsStart,
    playbackId,
  });
};

export const savePlayback = async (req: any, playbackId: string) => {
  const { uid } = req.user;

  const flowRun = await db.runs.get(req);

  const variables = { ...(flowRun.variables ?? {}) };

  variables.id = playbackId;
  variables.uid = uid;

  let response;

  response = await db.playbacks.create(req, variables);

  return response;
};
