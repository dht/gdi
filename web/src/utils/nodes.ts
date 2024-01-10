import type { IFlowNodes, IFlowNode } from '@gdi/store-base';

export const findInitialNode = (nodes: IFlowNodes) => {
  const lastNode = findLastNode(nodes);
  const links = findLink(lastNode, nodes) ?? [];
  const startNodes = links.filter((id) => isStart(id, nodes));
  return startNodes[0];
};

export const isStart = (nodeId: string, nodes: IFlowNodes) => {
  const node = nodes[nodeId];
  const connectTo = Object.values(nodes).filter((node) => node.connectors.includes(nodeId));
  return node.connectors.length > 0 && connectTo.length === 0;
};

export const findLink = (node: IFlowNode | undefined, nodes: IFlowNodes, memo: string[] = []) => {
  if (!node) {
    return;
  }

  const { id: parentId } = node;

  memo.push(parentId);

  Object.values(nodes)
    .filter((node) => node.connectors.includes(parentId))
    .forEach((node) => {
      findLink(node, nodes, memo);
    });

  return memo;
};

export const findLastNode = (nodes: IFlowNodes) => {
  return Object.values(nodes).find((node) => node.nodeType === 'outcome');
};
