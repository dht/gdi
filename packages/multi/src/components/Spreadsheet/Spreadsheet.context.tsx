import { createContext, createProvider } from '../../utils/context';
import { ISpreadsheetCallbacks, ISpreadsheetState } from './Spreadsheet.types';

const initialState: ISpreadsheetState = {
  sortDirection: '',
  config: {},
};

const callbacks = {
  onSort: () => {},
};

export const SpreadsheetContext = createContext<ISpreadsheetState, ISpreadsheetCallbacks>(
  initialState,
  callbacks
);

export const SpreadsheetProvider = createProvider<ISpreadsheetState, ISpreadsheetCallbacks>(
  initialState,
  callbacks,
  SpreadsheetContext
);
