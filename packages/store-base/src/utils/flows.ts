import { IFlowEdge, IFlowNode, IFlowNodes } from '../types';

export const transformNodesToGraph = (nodes: IFlowNodes) => {
  const edges = transformNodesToEdges(nodes);

  return {
    nodes: transformNodesToNodes(nodes, edges),
    edges,
  };
};

export const transformNodesToEdges = (nodes: IFlowNodes) => {
  const output: IFlowEdge[] = [];

  let edgeId = 0;

  Object.values(nodes).forEach((node) => {
    const { connectors = [] } = node;

    connectors.forEach((connector) => {
      const id = `e${edgeId++}`;

      const edge = {
        id,
        source: node.id,
        target: connector,
      };

      output.push(edge);
    });
  });

  return output;
};

export const transformNodesToNodes = (nodes: IFlowNodes, edges: IFlowEdge[]) => {
  return Object.values(nodes).map((node) => {
    return {
      id: node.id,
      type: getNodeType(node, edges),
      label: node.name,
      position: node.position,
      config: node,
    };
  });
};

export const getNodeType = (node: IFlowNode, edges: IFlowEdge[]) => {
  const isSource = edges.some((edge) => edge.source === node.id);
  const isTarget = edges.some((edge) => edge.target === node.id);

  if (isSource && isTarget) {
    return 'customApi';
  }

  if (isSource) {
    return 'customInput';
  } else if (isTarget) {
    return 'customOutput';
  }

  return 'customApi';
};
