import React from 'react';
import { Wrapper } from './Village.style';

export type VillageProps = {
  children?: React.ReactNode;
};

export function Village(props: VillageProps) {
  return (
    <Wrapper className='Village-wrapper' data-testid='Village-wrapper'>
      Village
      {props.children}
    </Wrapper>
  );
}

export default Village;
