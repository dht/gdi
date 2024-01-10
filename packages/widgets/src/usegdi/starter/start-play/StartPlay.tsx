import React from 'react';
import { Button, Wrapper } from './StartPlay.style';
import { Icon } from '@gdi/ui';

export type StartPlayProps = {
  onClick: () => void;
};

export function StartPlay(props: StartPlayProps) {
  return (
    <Wrapper className='StartPlay-wrapper' data-testid='StartPlay-wrapper'>
      <Button onClick={props.onClick}>
        <Icon name='play_arrow' />
      </Button>
    </Wrapper>
  );
}

export default StartPlay;
