import { useMemo } from 'react';
import { ISpreadsheetCallbacks, ISpreadsheetConfig, Json } from '../../types';
import { Spreadsheet } from './Spreadsheet';
import { SpreadsheetProvider } from './Spreadsheet.context';

export type SpreadsheetContainerProps = {
  id: string;
  config: ISpreadsheetConfig;
  callbacks: ISpreadsheetCallbacks;
  darkMode?: boolean;
  data: Json[];
};

const arr: any = [];

export function SpreadsheetContainer(props: SpreadsheetContainerProps) {
  const { id, config, darkMode, callbacks, data } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  return (
    <SpreadsheetProvider data={arr} callbacks={callbacks} state={initialState}>
      <Spreadsheet id={id} data={data} darkMode={darkMode} />
    </SpreadsheetProvider>
  );
}

export default SpreadsheetContainer;
