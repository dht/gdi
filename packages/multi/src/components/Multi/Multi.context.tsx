import { IMultiCallbacks, IMultiState } from '../../types';
import { createContext, createProvider } from '../../utils/context';

const initialState: IMultiState = {
  config: {},
  views: [],
  activeView: 'masonry',
  data: [],
  darkMode: true,
  q: '',
};

const callbacks = {};

export const MultiContext = createContext<IMultiState, IMultiCallbacks>(initialState, callbacks);

export const MultiProvider = createProvider<IMultiState, IMultiCallbacks>(
  initialState,
  callbacks,
  MultiContext
);
