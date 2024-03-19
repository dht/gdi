import React from 'react';
import { Wrapper } from './Finances.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import FinancesSummary from './_parts/FinancesSummary/FinancesSummary.container';

export type FinancesProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Finances(props: FinancesProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Finances-wrapper' data-testid='Finances-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <FinancesSummary />
      </Multi>
    </Wrapper>
  );
}

export default Finances;
