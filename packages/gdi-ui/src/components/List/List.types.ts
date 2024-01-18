export type IListState = {
  focusedId: string;
  selectedIds: string[];
  sort: Sort;
  q: string;
};

export type SortDirection = 'asc' | 'desc';

export type Sort = {
  field: string;
  direction: SortDirection;
};

export type IListProviderProps = {
  data: Json[];
  children: React.ReactNode;
  isFocused: boolean;
  onDrillDown: (asset: Json) => void;
  onPreview: (asset: Json) => void;
  onDrillUp: () => void;
  onFunctionKey: (asset: Json, key: string, ev: any) => void;
  root: string;
  renderActions?: (callbacks: any) => React.ReactNode;
};

export type IListContext = {
  state: IListState;
  callbacks: {
    onClick: (id: string) => void;
    onSort: (fieldName: string) => void;
    onPreview: (asset: Json) => void;
    onDrillUp: () => void;
    onDrillDown: (asset: Json) => void;
    onFunctionKey: (asset: Json, key: string, ev: any) => void;
  };
  patchState: (change: Partial<IListState>) => void;
  data: Json[];
};

export const defaultListState: IListState = {
  focusedId: '',
  selectedIds: [],
  sort: {
    field: '',
    direction: 'asc',
  },
  q: '',
};

export type Column = {
  id: string;
  title: string;
  fieldId: string;
  flex?: number;
  width?: number;
  fieldType?: FieldType;
};

export type FieldType = 'text' | 'number' | 'currency' | 'boolean' | 'date' | 'currency' | 'icon';
