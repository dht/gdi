import { IContext, IContextCallbacks, IContextProviderProps } from '../../types';

export type ITrelloConfig = {};

export type ITrelloState = {
  sortDirection: string;
  config: ITrelloConfig;
  isReady?: boolean;
};

export type ITrelloCallbacks = IContextCallbacks & {
  onSort: () => void;
};

export type ITrelloContext = IContext<ITrelloState, ITrelloCallbacks>;

export type ITrelloProps = IContextProviderProps<ITrelloState, ITrelloCallbacks>;

export type IDndState = {
  selectedItemId: string;
  movableItemId: string;
  editableItemId: string;
  destinationIndex: number;
  hoverListId: string;
  movableListId: string;
  selectedListId: string;
  destinationListId: string;
  movingBox: IDndBox;
  startPoint: IDndPoint;
  containerPosition: IDndPoint;
  editableNewId: string;
  growMirror: boolean;
};

export type IDndOptions = {};

export type IDndItem = {
  id: string;
  title: string;
  listId: string;
  parentId?: string;
  order: number;
  color?: string;
};

export type IDndList = {
  id: string;
  title: string;
  order: number;
  dataTags?: string[];
};

export type IDndData = {
  items: IDndItems;
  lists: IDndLists;
};

export type IDndItems = Record<string, IDndItem>;
export type IDndLists = Record<string, IDndList>;

export type IDndPoint = {
  x: number;
  y: number;
};

export type IDndBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

// ================== Buckets ==================
export type IBucketDefinition = {
  id: string;
  title: string;
  dataTags: string[];
};

export type IBucketsPermutation = {
  id: string;
  title: string;
  buckets: IBucketDefinition[];
};

export type IBucketsConfig = {
  id: string;
  header: string;
  titleFieldId: string;
  permutations: IBucketsPermutation[];
};

export type IOption = {
  id: string;
  text: string;
  iconName?: string;
  secondaryText?: string;
  shortKey?: any;
  options?: IOptions;
  // for filters
  value?: string | number | boolean;
  disabled?: boolean;
};

export type IOptions = IOption[];

export type ISelectionMode = 'none' | 'choose' | 'single' | 'multiple';

export type WithChildren<T> = T & {
  children?: JSX.Element | JSX.Element[];
};
