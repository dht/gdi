import { createContext, createProvider } from '../../utils/context';
import { IJsonEditorCallbacks, IJsonEditorState } from './JsonEditor.types';

const initialState: IJsonEditorState = {
  sortDirection: '',
  config: {},
};

const callbacks = {
  onSort: () => {},
};

export const JsonEditorContext = createContext<IJsonEditorState, IJsonEditorCallbacks>(
  initialState,
  callbacks
);

export const JsonEditorProvider = createProvider<IJsonEditorState, IJsonEditorCallbacks>(
  initialState,
  callbacks,
  JsonEditorContext
);
