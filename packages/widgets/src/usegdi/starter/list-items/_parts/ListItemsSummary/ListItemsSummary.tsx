import React from 'react';
import { Wrapper } from './ListItemsSummary.style';

export type ListItemsSummaryProps = {};

export function ListItemsSummary(_props: ListItemsSummaryProps) {
  return <Wrapper className='ListItemsSummary-wrapper' data-testid='ListItemsSummary-wrapper'></Wrapper>;
}

export default ListItemsSummary;
