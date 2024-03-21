import React from 'react';
import { Stats, Wrapper } from './CtxWelcome.style';
import { WelcomeTime } from '../WelcomeTime/WelcomeTime';
import { IconGrid, JsonGrid } from '@gdi/ui';
import { data } from './CtxWelcome.data';

export type CtxWelcomeProps = {
  is24Hours: boolean;
  onIconClick: (icon: Json) => void;
  multis: Json;
};

export function CtxWelcome(props: CtxWelcomeProps) {
  const { multis, is24Hours } = props;

  return (
    <Wrapper className='CtxWelcome-wrapper' data-testid='CtxWelcome-wrapper'>
      <WelcomeTime is24Hours={is24Hours} />
      <Stats>
        <JsonGrid data={data} />
      </Stats>
      <IconGrid icons={Object.values(multis)} onClick={props.onIconClick} />
    </Wrapper>
  );
}

export default CtxWelcome;
