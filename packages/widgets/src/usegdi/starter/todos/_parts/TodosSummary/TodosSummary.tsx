import React from 'react';
import { Wrapper } from './TodosSummary.style';

export type TodosSummaryProps = {};

export function TodosSummary(_props: TodosSummaryProps) {
  return <Wrapper className='TodosSummary-wrapper' data-testid='TodosSummary-wrapper'></Wrapper>;
}

export default TodosSummary;
