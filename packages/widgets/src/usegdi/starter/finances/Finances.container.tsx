import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Finances } from './Finances';
import { useSagas } from '../../../helpers/useSaga';

export type FinancesContainerProps = {
  data: any;
};

export function FinancesContainer(props: FinancesContainerProps) {
  const dispatch = useDispatch();
  const finances = useSelector(selectors.base.$financeLines);

  useSagas([
    'widgets.financeLines', //
    'widgets.financeLine',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'FINANCE_LINE',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'FINANCE_LINE',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Finances data={finances} callbacks={callbacks} />;
}

export default FinancesContainer;
