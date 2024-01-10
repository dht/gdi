import { IContext, IContextCallbacks, IContextProviderProps, IItem, Json } from '../../types';
import { IJsonEditorConfig } from '../JsonEditor/JsonEditor.types';
import { IMasonryConfig } from '../Masonry/Masonry.types';
import { ISpreadsheetConfig } from '../Spreadsheet/Spreadsheet.types';
import { ITableConfig } from '../Table/Table.types';
import { ITrelloConfig } from '../Trello/Trello.types';

export type IMultiConfig = Partial<{
  spreadsheet: ISpreadsheetConfig;
  board: ITrelloConfig;
  table: ITableConfig;
  masonry: IMasonryConfig;
  jsonEditor: IJsonEditorConfig;
}>;

export type IMultiState = {
  config: IMultiConfig;
  views: IMultiView[];
  activeView: IMultiView;
  isReady?: boolean;
  data: Json[];
};

export type IMultiCallbacks = IContextCallbacks & {};

export type IMultiContext = IContext<IMultiState, IMultiCallbacks>;

export type IMultiProps = IContextProviderProps<IMultiState, IMultiCallbacks>;

export type IMultiView = 'spreadsheet' | 'board' | 'table' | 'masonry' | 'jsonEditor';
