import React from 'react';
import { Gap, Wrapper } from './TopBar.style';

export type TopBarProps = {
  children?: React.ReactNode;
};

export function TopBar(props: TopBarProps) {
  return (
    <Wrapper className='TopBar-wrapper' data-testid='TopBar-wrapper'>
      <Gap />
      {/* <Focus /> */}
      {props.children}
    </Wrapper>
  );
}

export default TopBar;
