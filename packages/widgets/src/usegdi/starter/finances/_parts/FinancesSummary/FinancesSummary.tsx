import React from 'react';
import { Wrapper } from './FinancesSummary.style';

export type FinancesSummaryProps = {};

export function FinancesSummary(_props: FinancesSummaryProps) {
  return <Wrapper className='FinancesSummary-wrapper' data-testid='FinancesSummary-wrapper'></Wrapper>;
}

export default FinancesSummary;
