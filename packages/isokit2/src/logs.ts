export type LogMethod = (scope: string, text: string, data?: Json, iconName?: string) => void;

export let log: LogMethod;

export const setLogMethod = (value: LogMethod) => {
  log = value;
};
