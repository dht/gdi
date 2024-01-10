import React from 'react';
import { Wrapper } from './History.style';

export type HistoryProps = {};

export function History(_props: HistoryProps) {
  return (
    <Wrapper
      className='History-wrapper'
      data-testid='History-wrapper'
    ></Wrapper>
  );
}

export default History;
