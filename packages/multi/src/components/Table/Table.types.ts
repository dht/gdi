import { IContext, IContextCallbacks, IContextProviderProps, Json } from '../../types';

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
