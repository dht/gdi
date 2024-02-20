import React from 'react';
import { Text, Wrapper } from './MuxEmpty.style';

export type MuxEmptyProps = {};

export function MuxEmpty(_props: MuxEmptyProps) {
  return (
    <Wrapper className='MuxEmpty-wrapper' data-testid='MuxEmpty-wrapper'>
      <Text>No messages</Text>
    </Wrapper>
  );
}

export default MuxEmpty;
