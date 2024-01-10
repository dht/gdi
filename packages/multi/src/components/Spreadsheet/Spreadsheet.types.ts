import { IContext, IContextCallbacks, IContextProviderProps } from '../../types';

export type ISpreadsheetConfig = {};

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
  cellType: 'model' | 'topP' | 'temperature' | 'maxTokens' | 'prompt' | 'value' | 'label';

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
