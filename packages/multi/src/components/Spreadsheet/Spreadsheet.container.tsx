import { useCallback, useMemo } from 'react';
import { ISpreadsheetCallbacks, ISpreadsheetConfig, Json } from '../../types';
import { Spreadsheet } from './Spreadsheet';
import { SpreadsheetProvider } from './Spreadsheet.context';
import { useCustomEvent } from './Spreadsheet.hooks';
import { invokeEvent } from 'shared-base';

export type SpreadsheetContainerProps = {
  id: string;
  config: ISpreadsheetConfig;
  callbacks: ISpreadsheetCallbacks;
  darkMode?: boolean;
  data: Json[];
  height: number;
  width: number;
};

const arr: any = [];

export function SpreadsheetContainer(props: SpreadsheetContainerProps) {
  const { id, config, darkMode, callbacks, data, width, height } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  // nasty hack to regain focus on new line
  useCustomEvent('sheet/item/new', (ev: any) => {
    const { id } = ev;

    setTimeout(() => {
      invokeEvent('sheet/newLine/focus', { id });
    }, 50);
  });

  return (
    <SpreadsheetProvider data={arr} callbacks={callbacks} state={initialState}>
      <Spreadsheet id={id} data={data} darkMode={darkMode} width={width} height={height} />
    </SpreadsheetProvider>
  );
}

export default SpreadsheetContainer;
