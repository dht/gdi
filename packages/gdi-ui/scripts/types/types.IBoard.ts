// ====================== IBoard ======================//
// source: igrid

export interface IElement {
  id: string;
  widgetId: string;
  title?: string;
  position?: ICoordinates;
  dimension?: IDimension;
  boardId?: string;
  flavour?: string;
  flags?: IElementFlags;
  props?: Json;
  state?: Json;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IDimension {
  x: number;
  y: number;
}

export interface IElementFlags {
  hideHeader?: boolean;
  isTransparent?: boolean;
  allowOverflow?: boolean;
  isFullPage?: boolean;
  isFloating?: boolean;
  isHidden?: boolean;
}

export type IExample = {
  id: string;
  dbPath: string;

  title: string;
  description: string;
  screenshotPath: string;
  dateAdded: string;
};

export type IExamples = Record<string, IExample>;

export interface Json {
  [key: string]: any;
}

export type Resolution =
  | 'default'
  | 'mobile'
  | 'tablet'
  | '720p'
  | 'HD'
  | 'HD+'
  | '1080p'
  | '2k'
  | '4k'
  | '8k';

export type IPlayback = {
  id: string;
  name: string;
  requestId: string;
};

export type DataProvider = 'AI-RUNNER' | 'REST' | 'FIRESTORE' | 'STATIC';
