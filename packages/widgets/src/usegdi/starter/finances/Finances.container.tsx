import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { Finances } from './Finances';

export type FinancesContainerProps = {
  data: any;
};

export function FinancesContainer(props: FinancesContainerProps) {
  const dispatch = useDispatch();
  const finances = useSelector(selectors.md.$financeLines);

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
