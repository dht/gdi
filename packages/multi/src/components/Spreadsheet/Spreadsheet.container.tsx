import { useMemo } from 'react';
import { Json } from '../../types';
import Spreadsheet from './Spreadsheet';
import { SpreadsheetProvider } from './Spreadsheet.context';
import { cells } from './Spreadsheet.data';
import { ISpreadsheetCallbacks, ISpreadsheetConfig } from './Spreadsheet.types';

export type SpreadsheetContainerProps = {
  config?: ISpreadsheetConfig;
  callbacks: ISpreadsheetCallbacks;
};

export function SpreadsheetContainer(props: SpreadsheetContainerProps) {
  const { config } = props;

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
      <Spreadsheet cells={cells} onSelect={() => {}} onChange={() => {}} />
    </SpreadsheetProvider>
  );
}

export default SpreadsheetContainer;
