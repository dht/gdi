import React from 'react';
import { Wrapper } from './Movement.style';

export type MovementProps = {};

export function Movement(_props: MovementProps) {
  return <Wrapper className='Movement-wrapper' data-testid='Movement-wrapper'></Wrapper>;
}

export default Movement;
