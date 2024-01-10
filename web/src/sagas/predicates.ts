export const predicateLog = (key: string, value: string) => (action: any) => {
  return action.type === 'PUSH_LOG' && action.payload[key] === value;
};

export const predicateCurrentIds = (key: string) => (action: any) => {
  return action.type === 'PATCH_CURRENTIDS' && action.payload[key];
};
