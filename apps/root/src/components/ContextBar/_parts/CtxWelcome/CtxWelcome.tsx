import React from 'react';
import { Stats, Wrapper } from './CtxWelcome.style';
import { WelcomeTime } from '../WelcomeTime/WelcomeTime';
import { JsonGrid } from '@gdi/ui';
import { data } from './CtxWelcome.data';

export type CtxWelcomeProps = {
  is24Hours: boolean;
};

export function CtxWelcome(props: CtxWelcomeProps) {
  const { is24Hours } = props;
  return (
    <Wrapper className='CtxWelcome-wrapper' data-testid='CtxWelcome-wrapper'>
      <WelcomeTime is24Hours={is24Hours} />
      <Stats>
        <JsonGrid data={data} />
      </Stats>
    </Wrapper>
  );
}

export default CtxWelcome;
