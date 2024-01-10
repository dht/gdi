const logActions: string[] = [];

export const logMiddleware = (store: any) => (next: any) => (action: any) => {
  if (logActions.includes(action.type)) {
    console.log('dispatching', action.type, action);
  }
  const result = next(action);

  if (logActions.includes(action.type)) {
    console.log('next state', store.getState());
  }

  return result;
};
