export let actions: any = {};

export const setActions = (value: any) => {
  actions = value;
};

export const getActionForNode = (nodeName: string, verb: string, data: any) => {
  const actionsForNode = (actions as any)[nodeName];

  if (['set', 'patch'].includes(verb)) {
    return actionsForNode[verb](data.id, data);
  } else {
    return actionsForNode[verb](data);
  }
};
