import { createContext, createProvider } from '../../utils/context';
import { ITableCallbacks, ITableState } from './Table.types';

const initialState: ITableState = {
  sortDirection: '',
  config: {
    id: '',
    fields: [],
  },
  isReady: false,
  widths: [],
};

const callbacks = {
  onSort: () => {},
};

export const TableContext = createContext<ITableState, ITableCallbacks>(initialState, callbacks);

export const TableProvider = createProvider<ITableState, ITableCallbacks>(
  initialState,
  callbacks,
  TableContext
);
