export const predicateLog = (key: string, value: string) => (action: any) => {
  return action.type === 'PUSH_LOG' && action.payload[key] === value;
};

export const predicateCurrentIds = (key: string | string[]) => (action: any) => {
  const { payload = {} } = action;
  const isKeyOk = Array.isArray(key) ? key.find((k) => k in payload) : key in payload;
  return action.type === 'PATCH_CURRENTIDS' && isKeyOk;
};

export const predicateAppState = (key: string | string[]) => (action: any) => {
  const { payload = {} } = action;
  const isKeyOk = Array.isArray(key) ? key.find((k) => k in payload) : key in payload;
  return action.type === 'PATCH_APPSTATE' && isKeyOk;
};
