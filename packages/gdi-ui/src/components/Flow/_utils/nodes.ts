type INode = any;
type INodes = Record<string, INode>;

export const getPromptPlaceholder = (nodes: INodes) => {
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

export const getPromptPlaceholderFromNode = (node: INode) => {
  const { promptTemplate, agent, api } = node;

  if (promptTemplate && promptTemplate.content) {
    return promptTemplate.content;
  }

  if (agent && agent.system) {
    return agent.system;
  }

  if (api && api.purpose) {
    return api.purpose;
  }

  return '';
};
