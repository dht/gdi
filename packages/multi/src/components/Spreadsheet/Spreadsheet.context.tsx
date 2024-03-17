import { createContext, createProvider } from '../../utils/context';
import { ISpreadsheetCallbacks, ISpreadsheetState } from '../../types';

const initialState: ISpreadsheetState = {
  sortDirection: '',
  config: {
    fields: [],
  },
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
