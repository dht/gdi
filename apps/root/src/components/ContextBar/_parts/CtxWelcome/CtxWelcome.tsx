import React from 'react';
import { Stats, Wrapper } from './CtxWelcome.style';
import { WelcomeTime } from '../WelcomeTime/WelcomeTime';
import { IconGrid, JsonGrid } from '@gdi/ui';
import { data, icons } from './CtxWelcome.data';

export type CtxWelcomeProps = {
  is24Hours: boolean;
  onIconClick: (icon: Json) => void;
};

export function CtxWelcome(props: CtxWelcomeProps) {
  const { is24Hours } = props;
  return (
    <Wrapper className='CtxWelcome-wrapper' data-testid='CtxWelcome-wrapper'>
      <WelcomeTime is24Hours={is24Hours} />
      <Stats>
        <JsonGrid data={data} />
      </Stats>
      <IconGrid icons={icons} onClick={props.onIconClick} />
    </Wrapper>
  );
}

export default CtxWelcome;
