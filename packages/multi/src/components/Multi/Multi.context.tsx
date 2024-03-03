import { ActionParams, ItemActionParams } from '../../types';
import { createContext, createProvider } from '../../utils/context';
import { IMultiCallbacks, IMultiState } from '../../types';

const initialState: IMultiState = {
  config: {},
  views: [],
  activeView: 'masonry',
  data: [],
  darkMode: true,
};

const callbacks = {
  onAction: (_params: ActionParams) => {},
  onItemAction: (_params: ItemActionParams) => {},
};

export const MultiContext = createContext<IMultiState, IMultiCallbacks>(initialState, callbacks);

export const MultiProvider = createProvider<IMultiState, IMultiCallbacks>(
  initialState,
  callbacks,
  MultiContext
);
