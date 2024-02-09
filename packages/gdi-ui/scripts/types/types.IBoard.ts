import { IFlow } from '@gdi/store-base';
// ====================== IBoard ======================//
// source: igrid

export interface IBoard {
  id: string; // internal id => B-001
  identifier: string; // external id => com.usegdi.chit-chat
  boardInfo: IBoardInfo;
  flowUrl?: string;
  flow?: IFlow;
  examplesUrl?: string;
  examples?: IExamples;
  defaults: {
    exampleId?: string;
    previewPath?: string;
    dbPath?: string;
    dbTag?: string;
  };
  dependencies: Json;
  elements: {
    default: {
      [key: string]: IElement;
    };
    mobile?: {
      [key: string]: IElement;
    };
    tablet?: {
      [key: string]: IElement;
    };
    '720p'?: {
      [key: string]: IElement;
    };
    HD?: {
      [key: string]: IElement;
    };
    'HD+'?: {
      [key: string]: IElement;
    };
    '1080p'?: {
      [key: string]: IElement;
    };
    '2k'?: {
      [key: string]: IElement;
    };
    '4k'?: {
      [key: string]: IElement;
    };
    '8k'?: {
      [key: string]: IElement;
    };
  };
}

export interface IBoardInfo {
  name: string;
  imageUrl: string;
  description: string;
  header: string;
  fields: InfoField[];
  isPlayback: boolean;
  showIntro: boolean;
  sourceUrl?: string;
}

export interface InfoField {
  label: string;
  content: string;
}

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
