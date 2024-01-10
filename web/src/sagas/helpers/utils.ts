import { IFlowNodes, IFlowNode } from '@gdi/store-base';

export const getPromptPlaceholder = (nodes: IFlowNodes) => {
  const firstNode = Object.values(nodes).reduce(
    (output, node) => {
      const { position } = node;
      const { y } = position;

      if (y < output.y) {
        return {
          id: node.id,
          y,
        };
      }

      return output;
    },
    {
      id: '',
      y: 1000000,
    }
  );

  if (!firstNode || !firstNode.id) {
    return '';
  }

  const node = nodes[firstNode.id];

  return getPromptPlaceholderFromNode(node);
};

export const getPromptPlaceholderFromNode = (node: IFlowNode) => {
  const { input } = node;

  if (input && input.prompt) {
    return input.prompt;
  }

  return '';
};
