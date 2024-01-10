import { invokeEvent } from 'shared-base';
import { IItem } from '../../types';
import { createContext, createProvider } from '../../utils/context';
import { IMasonryCallbacks, IMasonryState } from './Masonry.types';

const initialState: IMasonryState = {
  sortDirection: '',
  config: {},
};

const callbacks = {
  onClick: (id: string, item: IItem) => {
    invokeEvent('multi/item', { id, item, verb: 'click' });
  },
  onDoubleClick: (id: string, item: IItem) => {
    invokeEvent('multi/item', { id, item, verb: 'doubleClick' });
  },
  onBottomReach: () => {
    invokeEvent('multi', { eventType: 'bottomReached' });
  },
};

export const MasonryContext = createContext<IMasonryState, IMasonryCallbacks>(
  initialState,
  callbacks
);

export const MasonryProvider = createProvider<IMasonryState, IMasonryCallbacks>(
  initialState,
  callbacks,
  MasonryContext
);
