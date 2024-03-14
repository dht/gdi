// ------ JsonEditor ------
export type IJsonEditorConfig = {};

export type IJsonEditorState = {
  sortDirection: string;
  config: {};
};

export type IJsonEditorCallbacks = IContextCallbacks & {
  onSort: () => void;
};

export type IJsonEditorContext = IContext<IJsonEditorState, IJsonEditorCallbacks>;

export type IJsonEditorProps = IContextProviderProps<IJsonEditorState, IJsonEditorCallbacks>;

// ------ Masonry ------

export type ItemType = 'image' | 'article' | 'event';

export type IMasonryConfig = {
  columns?: number;
  gutter?: number;
  fixedRatio?: number;
  itemType?: ItemType;
};

export type IMasonryState = {
  sortDirection: string;
  config: IMasonryConfig;
};

export type IMasonryCallbacks = IContextCallbacks & {
  onSort: () => void;
  onClick?: (id: string, item: IItem) => void;
  onDoubleClick?: (id: string, item: IItem) => void;
  onBottomReach?: () => void;
  onMouseEvent?: (ev: any) => void;
};

export type IMasonryContext = IContext<IMasonryState, IMasonryCallbacks>;

export type IMasonryProps = IContextProviderProps<IMasonryState, IMasonryCallbacks>;

// ------ Spreadsheet ------

export type ISpreadsheetConfig = {
  fields: ITableField[];
};

export type ISpreadsheetState = {
  sortDirection: string;
  config: ISpreadsheetConfig;
};

export type ISpreadsheetCallbacks = IContextCallbacks & {
  onSort: () => void;
};

export type ISpreadsheetContext = IContext<ISpreadsheetState, ISpreadsheetCallbacks>;

export type ISpreadsheetProps = IContextProviderProps<ISpreadsheetState, ISpreadsheetCallbacks>;

export type ISheetCell = {
  id: string;
  value: string;
  cellType: 'header' | 'id' | 'value';

  // transient
  x?: number;
  y?: number;
  isLoading?: boolean;
};

export type ISheetCells = Record<string, ISheetCell>;

export type ICoord = {
  x: number;
  y: number;
  isEditing?: boolean;
};

// ------ Table ------

export type ITableConfig = {
  id: string;
  header?: string;
  fields: ITableField[];
  tableActions?: ITableAction[];
  rowActions?: ITableRowAction[];
};
export type ITableState = {
  sortDirection: string;
  config: ITableConfig;
  widths: number[];
  isReady?: boolean;
};

export type ITableCallbacks = IContextCallbacks & {
  onSort: () => void;
};

export type ITableContext = IContext<ITableState, ITableCallbacks>;

export type ITableProps = IContextProviderProps<ITableState, ITableCallbacks>;

export type CellType =
  | 'image'
  | 'person'
  | 'number'
  | 'text'
  | 'tags'
  | 'date'
  | 'timeAgo'
  | 'id'
  | 'social';

export type ITableField = {
  id: string;
  title?: string;
  cellType: CellType | string;
  mapFields?: Json;
  flex?: number;
  params?: Json;
};

export type ITableAction = {
  id: string;
  iconName: string;
  title: string;
};

export type ITableRowAction = {
  id: string;
  iconName: string;
  title: string;
};

// ------ Trello ------

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

// ------ Calendar ------
export type ICalendarConfig = {
  startingMonth: number;
  months: IMonthDefinition[];
};

export type IMonthDefinition = {
  id: number;
  startingDay: number;
  weeks: IWeekDefinition[];
};

export type IWeekDefinition = {
  id: number;
  weekIndex: number;
  weekOfTheYear: number;
  days: IDayDefinition[];
  isInMonth?: boolean;
};

export type IDayDefinition = {
  id: string;
  date: Date;
  isWeekend?: boolean;
  isToday?: boolean;
  isInMonth?: boolean;
};

// --------- base ---------

export type ITab = {
  id: string;
  title: string;
  iconName?: string;
};

export type PageId = string;

export type Json = Record<string, any>;

export type SpecificContext = {};

export type IContextProviderProps<S extends IContextState, C extends IContextCallbacks> = {
  callbacks: C;
  state?: Partial<S>;
  children: React.ReactNode;
  data: Json[];
};

export type IContextCallbacks = {
  onAction: (verb: string, params?: Json) => void;
  onItemAction: (id: string, verb: string, params?: Json) => void;
};

export type IContextState = {
  isReady?: boolean;
} & Json;

export type IContext<S extends IContextState, C extends IContextCallbacks> = {
  state: S;
  data: Json[];
  callbacks: Partial<C>;
  patchState: (change: Partial<S>) => void;
};

export type Verb = '';

// =============== Galleries ===============
export type IImage = {
  id: string;
  title: string;
  imageUrl: string;
  imageThumbUrl: string;
  imageDescription?: string;
  imageSource?: string;
  ratio: number;
  tags: string[];
  dataTags: string[];
};

export type IImages = Record<string, IImage>;

export type IArticleStatus = 'draft' | 'published' | 'archived';

export type IItem = IImage & {
  style?: Style;
  top: number;
  bottom: number;
  url: string;
};

export type IArticle = IItem & {
  id: string;
  intro: string;
  name: string;
  authorName: string;
  description: string;
  publishDate: string;
  lastPublishDate: string;
  lastSaveDate: string;
  comments: number;
  slogan: string;
  linkPath: string;
  status: IArticleStatus;
  isPublished: boolean;
  content: string;
  categoryBreadcrumbs: string;
  minutesSpentEditing: number;
  wordCount?: number;
  stats?: IArticleStats;
};

export type IArticleStats = {
  lastUpdated: string;
  totalVotes: number;
  totalAverage: number;
};

export type IEvent = IItem & {
  id: string;
  name: string;
  date?: string;
  location?: string;
  rating?: number;
  description?: string;
  link?: string;
  googleEventId?: string;
};

export type IPerson = IItem & {
  id: string;
  firstName: string;
  lastName: string;
  shortDescription: string;
  dateOfBirth?: string;
  socialTwitterUrl?: string;
  socialFacebookUrl?: string;
  socialInstagramUrl?: string;
  socialLinkedInUrl?: string;
  pinterestUrl?: string;
  wikipediaUrl?: string;
  website?: string;
  phoneNumber?: string;
  images?: string[];
  email?: string;
  notes?: string;
  company?: string;
  jobTitle?: string;
  tier?: number;
  gender?: string;
  category: string;
};

type Style = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type IMultiConfig = Partial<{
  sheet: ISpreadsheetConfig;
  lanes: ITrelloConfig;
  table: ITableConfig;
  masonry: IMasonryConfig;
  jsonEditor: IJsonEditorConfig;
  calendar: ICalendarConfig;
}>;

export type IMultiState = {
  config: IMultiConfig;
  views: IMultiView[];
  activeView: IMultiView;
  isReady?: boolean;
  data: Json[];
  darkMode?: boolean;
  q?: string;
};

export type IMultiCallbacks = IContextCallbacks & {};

export type IMultiContext = IContext<IMultiState, IMultiCallbacks>;

export type IMultiProps = IContextProviderProps<IMultiState, IMultiCallbacks>;

export type IMultiView =
  | 'sheet'
  | 'lanes'
  | 'table'
  | 'masonry'
  | 'jsonEditor'
  | 'calendar'
  | 'summary';
