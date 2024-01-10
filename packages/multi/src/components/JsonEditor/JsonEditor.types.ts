import { IContext, IContextCallbacks, IContextProviderProps } from '../../types';

export type IJsonEditorConfig = {};

export type IJsonEditorState = {
  sortDirection: string;
  config: {};
};

export type IJsonEditorCallbacks = IContextCallbacks & {
  onSort: () => void;
};

export type IJsonEditorContext = IContext<IJsonEditorState, IJsonEditorCallbacks>;

export type IJsonEditorProps = IContextProviderProps<IJsonEditorState, IJsonEditorCallbacks>;
