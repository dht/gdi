export const predicateNewElement = (key: string) => (action: any) => {
  return action.type === `ADD_${key.toUpperCase()}`;
};

export const predicatePatchElement = (key: string, fieldId?: string) => (action: any) => {
  return action.type === `PATCH_${key.toUpperCase()}` && (!fieldId || fieldId in action.payload);
};

export const predicateCurrentIds = (key: string) => (action: any) => {
  return action.type === 'PATCH_CURRENTIDS' && action.payload[key];
};

export const predicateSceneCurrentIds = (key: string) => (action: any) => {
  return action.type === 'PATCH_SCENECURRENTIDS' && key in action.payload;
};

export const predicateSceneState = (key: string) => (action: any) => {
  return action.type === 'PATCH_SCENESTATE' && key in action.payload;
};
