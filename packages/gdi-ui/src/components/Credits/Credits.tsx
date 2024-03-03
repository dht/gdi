import React from 'react';
import { Wrapper } from './Credits.style';
import classnames from 'classnames';

export type CreditsProps = {
  credits: number;
};

export function Credits(props: CreditsProps) {
  const { credits } = props;

  const className = classnames('Credits-wrapper', {
    none: credits === 0,
    low: credits < 10,
    medium: credits >= 10 && credits < 30,
    high: credits >= 40,
  });

  return (
    <Wrapper className={className} data-testid='Credits-wrapper'>
      {credits}
    </Wrapper>
  );
}

export default Credits;
