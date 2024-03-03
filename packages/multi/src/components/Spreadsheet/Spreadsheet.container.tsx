import { useMemo } from 'react';
import { Json } from '../../types';
import Spreadsheet from './Spreadsheet';
import { SpreadsheetProvider } from './Spreadsheet.context';
import { cells } from './Spreadsheet.data';
import { ISpreadsheetCallbacks, ISpreadsheetConfig } from '../../types';

export type SpreadsheetContainerProps = {
  config?: ISpreadsheetConfig;
  callbacks: ISpreadsheetCallbacks;
  darkMode?: boolean;
};

export function SpreadsheetContainer(props: SpreadsheetContainerProps) {
  const { config, darkMode } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, _params?: Json) => {},
      onSort: () => {},
    }),
    []
  );

  return (
    <SpreadsheetProvider callbacks={callbacks} state={initialState}>
      <Spreadsheet cells={cells} onSelect={() => {}} onChange={() => {}} darkMode={darkMode} />
    </SpreadsheetProvider>
  );
}

export default SpreadsheetContainer;
