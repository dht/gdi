export type Action = {
  type: string;
  id?: string;
  payload?: Json;
};

export type ICustomEvent = {
  type: string;
  payload?: Json;
};

export type IShortKey = {
  key: string;
  id?: string;
  withCommand?: boolean;
  withAlt?: boolean;
  withShift?: boolean;
  withCtrl?: boolean;
  description?: string;
};

export type ICommandPaletteItem = {
  id: string;
  label: string;
  event?: ICustomEvent;
  shortKeys?: IShortKey[];
  appId?: string;
  action?: Action;
  actionId?: string;
};

export type ICommandPaletteItems = ICommandPaletteItem[];
