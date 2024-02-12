import React from 'react';
import { ToHome, Wrapper } from './BoardHeader.style';
import Icon from '../Icon/Icon';
import { invokeEvent } from 'shared-base';

export type BoardHeaderProps = {
  name: string;
};

export function BoardHeader(props: BoardHeaderProps) {
  const { name } = props;

  function navToHome() {
    invokeEvent('nav', { path: '/' });
  }

  return (
    <Wrapper className='BoardHeader-wrapper' data-testid='BoardHeader-wrapper'>
      <ToHome onClick={navToHome}>
        <Icon name='home' size={20} />
      </ToHome>
      {name}
    </Wrapper>
  );
}

export default BoardHeader;
