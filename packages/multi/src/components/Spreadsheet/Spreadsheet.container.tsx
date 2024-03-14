import { useMemo } from 'react';
import { ISpreadsheetCallbacks, ISpreadsheetConfig, Json } from '../../types';
import Spreadsheet from './Spreadsheet';
import { SpreadsheetProvider } from './Spreadsheet.context';
import { useCells } from './Spreadsheet.hooks';

export type SpreadsheetContainerProps = {
  config: ISpreadsheetConfig;
  callbacks: ISpreadsheetCallbacks;
  darkMode?: boolean;
  data: Json[];
};

export function SpreadsheetContainer(props: SpreadsheetContainerProps) {
  const { config, darkMode, callbacks, data } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  return (
    <SpreadsheetProvider callbacks={callbacks} state={initialState}>
      <Spreadsheet data={data} darkMode={darkMode} />
    </SpreadsheetProvider>
  );
}

export default SpreadsheetContainer;
