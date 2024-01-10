import { createContext, createProvider } from '../../utils/context';
import { ITrelloCallbacks, ITrelloState } from './Trello.types';

const initialState: ITrelloState = {
  sortDirection: '',
  config: {},
  isReady: false,
};

const callbacks = {
  onSort: () => {},
};

export const TrelloContext = createContext<ITrelloState, ITrelloCallbacks>(initialState, callbacks);

export const TrelloProvider = createProvider<ITrelloState, ITrelloCallbacks>(
  initialState,
  callbacks,
  TrelloContext
);
