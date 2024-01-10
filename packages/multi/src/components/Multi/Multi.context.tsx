import { ActionParams, ItemActionParams } from '../../types';
import { createContext, createProvider } from '../../utils/context';
import { IMultiCallbacks, IMultiState } from './Multi.types';

const initialState: IMultiState = {
  config: {},
  views: [],
  activeView: 'masonry',
  data: [],
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
