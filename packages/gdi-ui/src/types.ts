export type IBarItem = {
  id: string;
  value: string;
  emoji?: string;
  modifier?: string;
  actionId?: string;
  eventId?: string;
  isHidden?: boolean;
  addClassName?: boolean;
};

export type ToastFlavour = 'error' | 'success' | 'warning' | 'info' | 'custom' | 'promise';

export type IContextBarItem = {
  id: string;
  label: string;
  widgetId: string;
  responsive?: boolean;
  icon?: string;
  appId?: string;
  showOnStart?: boolean;
};

export type ICommandPaletteItem = {
  id: string;
  label: string;
  event?: ICustomEvent;
  shortKeys?: IShortKey[];
  appId?: string;
  action?: Action;
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

export type IContextBarItems = IContextBarItem[];
export type ICommandPaletteItems = ICommandPaletteItem[];

export type IOption = {
  id: string;
  text: string;
  iconName?: string;
  secondaryText?: string;
  shortKey?: IShortKey;
  isExtra?: boolean;
  isGap?: boolean;
  hint?: string;
  groupId?: string;
  options?: IOptions;
  // for filters
  value?: string | number | boolean;
  min?: number;
  max?: number;
  disabled?: boolean;
};

export type IPoint = {
  x: number;
  y: number;
};

export type IUser = Json & {};
