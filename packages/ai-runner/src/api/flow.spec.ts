import { runFlow } from './flow';
import { fixtureFlow, fixtureOutput, generateNodeState } from './flow.fixtures';
import { findNodesToRun } from './flow.utils';

jest.mock('../utils/firebase');
jest.mock('../api/openai/_init');

describe('flow', () => {
  it.skip('flow', async () => {
    const req = { user: { uid: 'uid' } };
    const response = await runFlow(req, fixtureFlow);

    expect(response).toMatchObject(fixtureOutput);
  });
});

describe('flow utils', () => {
  it('findNodesToRun', async () => {
    let nodeState;

    nodeState = generateNodeState(['idle', 'idle', 'idle']);
    expect(findNodesToRun('n-001', fixtureFlow.flowNodes, nodeState)).toEqual([]);

    nodeState = generateNodeState(['done', 'idle', 'idle']);
    expect(findNodesToRun('n-001', fixtureFlow.flowNodes, nodeState)).toEqual(['n-002', 'n-003']);

    nodeState = generateNodeState(['done', 'done', 'idle']);
    expect(findNodesToRun('n-002', fixtureFlow.flowNodes, nodeState)).toEqual([]);

    nodeState = generateNodeState(['done', 'done', 'done']);
    expect(findNodesToRun('n-002', fixtureFlow.flowNodes, nodeState)).toEqual(['n-004']);
  });
});
