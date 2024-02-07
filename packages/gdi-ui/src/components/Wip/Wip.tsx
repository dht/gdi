import React from 'react';
import { Text, Wrapper } from './Wip.style';
import Icon from '../Icon/Icon';

export type WipProps = {};

export function Wip(_props: WipProps) {
  return (
    <Wrapper className='Wip-wrapper' data-testid='Wip-wrapper'>
      <Icon name='square_foot' size={60} />
      <Text>Work in progress</Text>
    </Wrapper>
  );
}

export default Wip;
